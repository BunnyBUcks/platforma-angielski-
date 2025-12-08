import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc, increment, serverTimestamp } from 'firebase/firestore';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Słuchaj zmian użytkownika
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        loadUserProgress(currentUser.uid);
      } else {
        setUserProgress({});
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Załaduj postępy użytkownika
  const loadUserProgress = async (userId) => {
    try {
      setLoading(true);
      const progressRef = doc(db, 'users', userId, 'data', 'progress');
      const progressSnap = await getDoc(progressRef);
      
      if (progressSnap.exists()) {
        setUserProgress(progressSnap.data());
      } else {
        // Inicjalizuj pusty dokument postępów
        const initialProgress = {
          courses: {},
          totalTimeSpent: 0,
          lastActivity: serverTimestamp(),
          createdAt: serverTimestamp()
        };
        await setDoc(progressRef, initialProgress);
        setUserProgress(initialProgress);
      }
    } catch (error) {
      console.error('Błąd ładowania postępów:', error);
    } finally {
      setLoading(false);
    }
  };

  // Oznacz lekcję jako ukończoną
  const markLessonComplete = async (courseId, lessonId) => {
    if (!user) return;

    try {
      const progressRef = doc(db, 'users', user.uid, 'data', 'progress');
      const courseKey = `courses.${courseId}`;
      const lessonsKey = `${courseKey}.completedLessons`;
      
      // Pobierz aktualne dane
      const progressSnap = await getDoc(progressRef);
      const currentData = progressSnap.data() || {};
      const currentCourse = currentData.courses?.[courseId] || {};
      const completedLessons = currentCourse.completedLessons || [];

      // Dodaj lekcję jeśli jeszcze nie ukończona
      if (!completedLessons.includes(lessonId)) {
        const updatedLessons = [...completedLessons, lessonId];
        
        await updateDoc(progressRef, {
          [lessonsKey]: updatedLessons,
          [`${courseKey}.lastAccessed`]: serverTimestamp(),
          lastActivity: serverTimestamp()
        });

        // Aktualizuj lokalny stan
        setUserProgress(prev => ({
          ...prev,
          courses: {
            ...prev.courses,
            [courseId]: {
              ...prev.courses?.[courseId],
              completedLessons: updatedLessons,
              lastAccessed: new Date()
            }
          }
        }));

        return true;
      }
      return false;
    } catch (error) {
      console.error('Błąd zapisywania lekcji:', error);
      return false;
    }
  };

  // Zapisz wynik quizu
  const saveQuizScore = async (courseId, quizId, score, maxScore) => {
    if (!user) return;

    try {
      const progressRef = doc(db, 'users', user.uid, 'data', 'progress');
      const courseKey = `courses.${courseId}`;
      const quizKey = `${courseKey}.quizScores.${quizId}`;
      const percentage = Math.round((score / maxScore) * 100);

      // Pobierz poprzedni wynik
      const progressSnap = await getDoc(progressRef);
      const currentData = progressSnap.data() || {};
      const previousScore = currentData.courses?.[courseId]?.quizScores?.[quizId]?.percentage || 0;

      // Zapisz tylko jeśli wynik lepszy
      const isNewBest = percentage > previousScore;

      await updateDoc(progressRef, {
        [quizKey]: {
          score,
          maxScore,
          percentage,
          attempts: increment(1),
          lastAttempt: serverTimestamp(),
          isBest: isNewBest
        },
        [`${courseKey}.lastAccessed`]: serverTimestamp(),
        lastActivity: serverTimestamp()
      });

      // Aktualizuj lokalny stan
      setUserProgress(prev => ({
        ...prev,
        courses: {
          ...prev.courses,
          [courseId]: {
            ...prev.courses?.[courseId],
            quizScores: {
              ...prev.courses?.[courseId]?.quizScores,
              [quizId]: {
                score,
                maxScore,
                percentage,
                attempts: (prev.courses?.[courseId]?.quizScores?.[quizId]?.attempts || 0) + 1,
                lastAttempt: new Date(),
                isBest: isNewBest
              }
            },
            lastAccessed: new Date()
          }
        }
      }));

      return { isNewBest, percentage };
    } catch (error) {
      console.error('Błąd zapisywania wyniku quizu:', error);
      return null;
    }
  };

  // Dodaj czas nauki
  const addStudyTime = async (courseId, minutes) => {
    if (!user) return;

    try {
      const progressRef = doc(db, 'users', user.uid, 'data', 'progress');
      const courseKey = `courses.${courseId}`;

      await updateDoc(progressRef, {
        [`${courseKey}.timeSpent`]: increment(minutes),
        totalTimeSpent: increment(minutes),
        [`${courseKey}.lastAccessed`]: serverTimestamp(),
        lastActivity: serverTimestamp()
      });

      // Aktualizuj lokalny stan
      setUserProgress(prev => ({
        ...prev,
        totalTimeSpent: (prev.totalTimeSpent || 0) + minutes,
        courses: {
          ...prev.courses,
          [courseId]: {
            ...prev.courses?.[courseId],
            timeSpent: (prev.courses?.[courseId]?.timeSpent || 0) + minutes,
            lastAccessed: new Date()
          }
        }
      }));
    } catch (error) {
      console.error('Błąd zapisywania czasu nauki:', error);
    }
  };

  // Pobierz postęp dla konkretnego kursu
  const getCourseProgress = (courseId) => {
    return userProgress.courses?.[courseId] || {
      completedLessons: [],
      quizScores: {},
      timeSpent: 0,
      percentComplete: 0
    };
  };

  // Sprawdź czy lekcja ukończona
  const isLessonCompleted = (courseId, lessonId) => {
    const courseProgress = getCourseProgress(courseId);
    return courseProgress.completedLessons?.includes(lessonId) || false;
  };

  // Pobierz wynik quizu
  const getQuizScore = (courseId, quizId) => {
    const courseProgress = getCourseProgress(courseId);
    return courseProgress.quizScores?.[quizId] || null;
  };

  // Oblicz procent ukończenia kursu
  const calculateCourseCompletion = (courseId, totalLessons) => {
    const courseProgress = getCourseProgress(courseId);
    const completed = courseProgress.completedLessons?.length || 0;
    return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  };

  const value = {
    userProgress,
    loading,
    markLessonComplete,
    saveQuizScore,
    addStudyTime,
    getCourseProgress,
    isLessonCompleted,
    getQuizScore,
    calculateCourseCompletion,
    refreshProgress: () => user && loadUserProgress(user.uid)
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
