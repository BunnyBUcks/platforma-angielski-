import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/courseViewer.css';

export default function CourseViewer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentModuleIdx, setCurrentModuleIdx] = useState(0);
  const [currentLessonIdx, setCurrentLessonIdx] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [showSidebar, setShowSidebar] = useState(true);
  const [hasAccess, setHasAccess] = useState(null); // null = sprawdzanie, true = ma dostęp, false = brak dostępu
  const [loading, setLoading] = useState(true);

  // Sprawdź czy użytkownik ma dostęp do kursu
  useEffect(() => {
    const checkAccess = async () => {
      const user = auth.currentUser;
      
      if (!user) {
        alert('Musisz być zalogowany aby uzyskać dostęp do kursu!');
        navigate('/login');
        return;
      }

      try {
        // Pobierz dane użytkownika z Firebase
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const userData = userSnap.data();
          const userCourses = userData.courses || [];
          
          // Sprawdź czy użytkownik ma ten kurs
          if (userCourses.includes(courseId)) {
            setHasAccess(true);
            
            // Załaduj dane kursu
            const courseData = coursesData[courseId];
            if (!courseData) {
              alert('Kurs nie znaleziony!');
              navigate('/dashboard');
              return;
            }
            setCourse(courseData);
          } else {
            setHasAccess(false);
          }
        } else {
          alert('Nie znaleziono danych użytkownika!');
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Błąd sprawdzania dostępu:', error);
        alert('Wystąpił błąd. Spróbuj ponownie.');
        navigate('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [courseId, navigate]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Sprawdzanie dostępu do kursu...</p>
      </div>
    );
  }

  // Jeśli użytkownik NIE MA dostępu - pokaż komunikat
  if (hasAccess === false) {
    return (
      <div className="access-denied-screen">
        <div className="access-denied-card">
          <div className="denied-icon">🔒</div>
          <h2>Brak dostępu do kursu</h2>
          <p>Nie masz aktywnego dostępu do tego kursu.</p>
          <p>Aby uzyskać dostęp, skontaktuj się z administratorem lub kup kurs.</p>
          <div className="denied-actions">
            <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
              ← Wróć do Dashboard
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/shop')}>
              🛒 Sklep z kursami
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Ładowanie kursu...</p>
      </div>
    );
  }

  const currentModule = course.modules[currentModuleIdx];
  const currentLesson = currentModule.lessons[currentLessonIdx];
  const lessonKey = `${currentModuleIdx}-${currentLessonIdx}`;

  const markComplete = () => {
    setCompletedLessons(new Set([...completedLessons, lessonKey]));
  };

  const goNext = () => {
    if (currentLessonIdx < currentModule.lessons.length - 1) {
      setCurrentLessonIdx(currentLessonIdx + 1);
    } else if (currentModuleIdx < course.modules.length - 1) {
      setCurrentModuleIdx(currentModuleIdx + 1);
      setCurrentLessonIdx(0);
    }
  };

  const goPrev = () => {
    if (currentLessonIdx > 0) {
      setCurrentLessonIdx(currentLessonIdx - 1);
    } else if (currentModuleIdx > 0) {
      setCurrentModuleIdx(currentModuleIdx - 1);
      const prevModule = course.modules[currentModuleIdx - 1];
      setCurrentLessonIdx(prevModule.lessons.length - 1);
    }
  };

  const progressPct = Math.round((completedLessons.size / course.totalLessons) * 100);

  return (
    <div className="course-viewer">
      {/* Sidebar */}
      <aside className={`course-sidebar ${showSidebar ? '' : 'hidden'}`}>
        <div className="sidebar-header">
          <h2>{course.title}</h2>
          <button onClick={() => setShowSidebar(!showSidebar)} className="toggle-sidebar">
            {showSidebar ? '‹' : '›'}
          </button>
        </div>

        <div className="progress-section">
          <div className="progress-label">
            <span>Postęp:</span>
            <span>{progressPct}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        <nav className="lessons-nav">
          {course.modules.map((module, mIdx) => (
            <div key={module.id} className="module-section">
              <h3 
                className={currentModuleIdx === mIdx ? 'active' : ''}
                onClick={() => { setCurrentModuleIdx(mIdx); setCurrentLessonIdx(0); }}
              >
                📚 {module.title}
              </h3>
              
              {currentModuleIdx === mIdx && (
                <ul>
                  {module.lessons.map((lesson, lIdx) => {
                    const key = `${mIdx}-${lIdx}`;
                    const isCompleted = completedLessons.has(key);
                    const isActive = currentLessonIdx === lIdx;
                    
                    return (
                      <li 
                        key={lesson.id}
                        className={`${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                        onClick={() => setCurrentLessonIdx(lIdx)}
                      >
                        <span className="status">{isCompleted ? '✓' : '○'}</span>
                        <span className="lesson-title">{lesson.title}</span>
                        <span className="lesson-duration">{lesson.duration}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="course-main">
        <header className="lesson-header">
          <button onClick={() => navigate('/dashboard')} className="btn-back">← Dashboard</button>
          <div>
            <h1>{currentLesson.title}</h1>
            <span className="meta">⏱️ {currentLesson.duration} • {currentLesson.type}</span>
          </div>
          {completedLessons.has(lessonKey) && <span className="badge-done">✓ Ukończono</span>}
        </header>

        <div className="lesson-body">
          {currentLesson.type === 'content' && <ContentLesson lesson={currentLesson} />}
          {currentLesson.type === 'quiz' && <QuizLesson lesson={currentLesson} onComplete={markComplete} />}
        </div>

        <footer className="lesson-footer">
          <button onClick={goPrev} disabled={currentModuleIdx === 0 && currentLessonIdx === 0} className="btn btn-secondary">
            ← Poprzednia
          </button>
          
          {!completedLessons.has(lessonKey) && (
            <button onClick={markComplete} className="btn btn-primary">
              ✓ Oznacz jako ukończone
            </button>
          )}
          
          <button 
            onClick={goNext} 
            disabled={currentModuleIdx === course.modules.length - 1 && currentLessonIdx === currentModule.lessons.length - 1}
            className="btn btn-primary"
          >
            Następna →
          </button>
        </footer>
      </main>
    </div>
  );
}

function ContentLesson({ lesson }) {
  if (!lesson.content || !lesson.content.sections) {
    return <p>Brak treści</p>;
  }

  return (
    <div className="content-lesson">
      {lesson.content.sections.map((section, idx) => (
        <div key={idx} className="section">
          {section.type === 'text' && (
            <div className="text-section" dangerouslySetInnerHTML={{ __html: section.content }} />
          )}
          
          {section.type === 'image' && (
            <figure>
              <img src={section.url} alt={section.caption || ''} />
              {section.caption && <figcaption>{section.caption}</figcaption>}
            </figure>
          )}
          
          {section.type === 'video' && (
            <div className="video-section">
              <h3>{section.title}</h3>
              <div className="video-embed">
                <iframe src={section.url} title={section.title} frameBorder="0" allowFullScreen />
              </div>
            </div>
          )}
          
          {section.type === 'audio' && (
            <div className="audio-section">
              <h3>{section.title}</h3>
              <audio controls src={section.url}>Audio not supported</audio>
              {section.transcript && (
                <details>
                  <summary>📝 Transkrypcja</summary>
                  <p>{section.transcript}</p>
                </details>
              )}
            </div>
          )}
          
          {section.type === 'tip' && (
            <div className="tip-box" dangerouslySetInnerHTML={{ __html: section.content }} />
          )}
        </div>
      ))}
    </div>
  );
}

function QuizLesson({ lesson, onComplete }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const question = lesson.questions[currentQ];
  const totalQ = lesson.questions.length;

  const handleAnswer = (selectedIdx) => {
    const correct = selectedIdx === question.correctAnswer;
    setAnswers([...answers, { correct, selected: selectedIdx }]);
    setShowFeedback(true);

    setTimeout(() => {
      if (currentQ < totalQ - 1) {
        setCurrentQ(currentQ + 1);
        setShowFeedback(false);
      } else {
        setIsComplete(true);
        onComplete();
      }
    }, 2000);
  };

  if (isComplete) {
    const correctCount = answers.filter(a => a.correct).length;
    const pct = Math.round((correctCount / totalQ) * 100);
    
    return (
      <div className="quiz-complete">
        <h2>🎉 Quiz ukończony!</h2>
        <div className="score-circle">{pct}%</div>
        <p>{correctCount} / {totalQ} poprawnych odpowiedzi</p>
        <div className="grade">
          {pct >= 80 ? '🌟 Świetnie!' : pct >= 60 ? '👍 Dobrze!' : '💪 Trenuj dalej!'}
        </div>
        <button onClick={() => { setCurrentQ(0); setAnswers([]); setShowFeedback(false); setIsComplete(false); }} className="btn btn-primary">
          🔄 Spróbuj ponownie
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-lesson">
      <div className="quiz-progress">
        <span>Pytanie {currentQ + 1} / {totalQ}</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentQ + 1) / totalQ) * 100}%` }} />
        </div>
      </div>

      <h2 className="question">{question.question}</h2>
      
      <div className="options">
        {question.options.map((opt, idx) => {
          let cls = 'option';
          if (showFeedback) {
            if (idx === question.correctAnswer) cls += ' correct';
            else if (idx === answers[answers.length - 1]?.selected) cls += ' incorrect';
          }
          
          return (
            <button 
              key={idx} 
              className={cls} 
              onClick={() => handleAnswer(idx)} 
              disabled={showFeedback}
            >
              <span className="letter">{String.fromCharCode(65 + idx)}</span>
              {opt}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className={`feedback ${answers[answers.length - 1].correct ? 'correct' : 'incorrect'}`}>
          {answers[answers.length - 1].correct ? '✅ Poprawnie!' : '❌ Niepoprawnie'}
          {question.explanation && <p>{question.explanation}</p>}
        </div>
      )}
    </div>
  );
}
