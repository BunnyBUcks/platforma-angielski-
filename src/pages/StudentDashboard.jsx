import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useProgress } from '../contexts/ProgressContext'

export default function StudentDashboard({ user }) {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { userProgress, loading: progressLoading } = useProgress()

  const courseDetails = {
    'kurs-a1': {
      name: '📘 Kurs A1',
      description: 'Poziom podstawowy',
      url: '/course/kurs-a1'
    },
    'kurs-a2': {
      name: '📘 Kurs A2',
      description: 'Poziom podstawowy wyższy',
      url: '/course/kurs-a2'
    },
    'kurs-b1': {
      name: '📗 Kurs B1',
      description: 'Poziom średniozaawansowany',
      url: '/course/kurs-b1'
    },
    'kurs-b2': {
      name: '📗 Kurs B2',
      description: 'Poziom średniozaawansowany wyższy',
      url: '/course/kurs-b2'
    },
    'klasa-8': {
      name: '🎓 Egzamin 8-klasisty',
      description: 'Klasy 1-8',
      url: '/egzamin-osmoklasisty'
    },
    'matura-podstawowa': {
      name: '🎓 Matura podstawowa',
      description: 'Przygotowanie do matury',
      url: '/matura-podstawowa'
    },
    'matura-rozszerzona': {
      name: '🎓 Matura rozszerzona',
      description: 'Poziom rozszerzony',
      url: '/matura-rozszerzona'
    },
    'business-b2': {
      name: '💼 Business English B2',
      description: 'Angielski biznesowy',
      url: '/business-english'
    },
    'business-c1': {
      name: '💼 Business English C1',
      description: 'Executive level',
      url: '/business-english-c1'
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setUserData(docSnap.data())
      }
      setLoading(false)
    }
    fetchUserData()
  }, [user])

  if (loading || progressLoading) return <div className="loading">Ładowanie...</div>

  // Oblicz statystyki z postępów
  const totalCompletedLessons = Object.values(userProgress.courses || {}).reduce(
    (sum, course) => sum + (course.completedLessons?.length || 0), 
    0
  );

  const totalTimeSpent = userProgress.totalTimeSpent || 0;
  const hoursSpent = Math.floor(totalTimeSpent / 60);
  const minutesSpent = totalTimeSpent % 60;

  // Oblicz średni postęp ze wszystkich kursów
  const coursesWithProgress = Object.keys(userProgress.courses || {});
  const averageProgress = coursesWithProgress.length > 0
    ? Math.round(
        coursesWithProgress.reduce((sum, courseId) => {
          const course = userProgress.courses[courseId];
          const completed = course.completedLessons?.length || 0;
          // Zakładamy 20 lekcji na kurs jako średnią
          return sum + Math.min((completed / 20) * 100, 100);
        }, 0) / coursesWithProgress.length
      )
    : 0;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Witaj, {userData?.name || 'Uczniu'}! 👋</h1>
        <p>Kontynuuj swoją naukę</p>
      </div>

      {/* Moje kursy - pełna szerokość */}
      <div className="card dashboard-full-width">
        <h3>📚 Moje kursy</h3>
        {userData?.courses?.length > 0 ? (
          <div className="courses-list">
            {userData.courses.map((courseId, index) => {
              const course = courseDetails[courseId];
              const courseProgress = userProgress.courses?.[courseId];
              const completedLessons = courseProgress?.completedLessons?.length || 0;
              
              return course ? (
                <div key={index} className="course-item">
                  <div className="course-info">
                    <strong>{course.name}</strong>
                    <p>{course.description}</p>
                    {completedLessons > 0 && (
                      <div className="mini-progress">
                        <div className="progress-bar-mini">
                          <div 
                            className="progress-fill-mini" 
                            style={{ width: `${Math.min((completedLessons / 20) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">{completedLessons} lekcji ukończonych</span>
                      </div>
                    )}
                  </div>
                  <button 
                    className="btn-primary"
                    onClick={() => navigate(course.url)}
                  >
                    {completedLessons > 0 ? 'Kontynuuj →' : 'Rozpocznij →'}
                  </button>
                </div>
              ) : (
                <div key={index} className="course-item">
                  <div className="course-info">
                    <strong>{courseId}</strong>
                    <p>Kurs niedostępny</p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="empty-state">
            <p>🎓 Nie masz jeszcze żadnych kursów.</p>
            <button className="btn-primary" onClick={() => navigate('/shop')}>
              Przeglądaj kursy
            </button>
          </div>
        )}
      </div>

      {/* Reszta kart obok siebie */}
      <div className="dashboard-grid">
        <div className="card">
          <h3>📊 Twoje postępy</h3>
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-value">{totalCompletedLessons}</span>
              <span className="stat-label">Ukończone lekcje</span>
            </div>
            <div className="stat">
              <span className="stat-value">{averageProgress}%</span>
              <span className="stat-label">Średni postęp</span>
            </div>
            <div className="stat">
              <span className="stat-value">
                {hoursSpent > 0 ? `${hoursSpent}h ${minutesSpent}m` : `${minutesSpent}m`}
              </span>
              <span className="stat-label">Czas nauki</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>🎯 Aktywność</h3>
          {userProgress.lastActivity ? (
            <div className="activity-info">
              <p>Ostatnia aktywność:</p>
              <p className="activity-date">
                {new Date(userProgress.lastActivity?.seconds * 1000).toLocaleDateString('pl-PL')}
              </p>
            </div>
          ) : (
            <p>Rozpocznij naukę aby zobaczyć statystyki!</p>
          )}
          <button className="btn-secondary" onClick={() => navigate('/shop')}>
            Odkryj więcej kursów
          </button>
        </div>

        <div className="card">
          <h3>📝 Szybkie akcje</h3>
          <div className="quick-actions">
            <button className="action-btn" onClick={() => navigate('/test-mlodych')}>
              <span>📋</span>
              <span>Test poziomujący</span>
            </button>
            <button className="action-btn" onClick={() => navigate('/lessons')}>
              <span>📚</span>
              <span>Wszystkie lekcje</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
