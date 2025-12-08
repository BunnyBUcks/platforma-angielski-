import { useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

export default function TutorDashboard({ user }) {
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showCourseModal, setShowCourseModal] = useState(false)
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeCourses: 0,
    totalRevenue: 0
  })

  const availableCourses = [
    { id: 'kurs-a1', name: 'Kurs A1 - Podstawowy' },
    { id: 'kurs-a2', name: 'Kurs A2 - Podstawowy wyższy' },
    { id: 'kurs-b1', name: 'Kurs B1 - Średniozaawansowany' },
    { id: 'kurs-b2', name: 'Kurs B2 - Średniozaawansowany wyższy' },
    { id: 'klasa-8', name: 'Egzamin 8-klasisty' },
    { id: 'matura-podstawowa', name: 'Matura podstawowa' },
    { id: 'matura-rozszerzona', name: 'Matura rozszerzona' },
    { id: 'business-b2', name: 'Business English B2' },
    { id: 'business-c1', name: 'Business English C1' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const usersRef = collection(db, 'users')
      const snapshot = await getDocs(usersRef)
      const studentsList = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(u => u.role === 'student')
      
      setStudents(studentsList)
      setStats({
        totalStudents: studentsList.length,
        activeCourses: studentsList.reduce((sum, s) => sum + (s.courses?.length || 0), 0),
        totalRevenue: 0 // TODO: oblicz z zamówień
      })
    }
    fetchData()
  }, [])

  const handleGrantAccess = async (studentId, courseId) => {
    try {
      const userRef = doc(db, 'users', studentId)
      await updateDoc(userRef, {
        courses: arrayUnion(courseId)
      })
      
      // Odśwież listę studentów
      const usersRef = collection(db, 'users')
      const snapshot = await getDocs(usersRef)
      const studentsList = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(u => u.role === 'student')
      setStudents(studentsList)
      
      alert('Dostęp do kursu został przyznany!')
    } catch (error) {
      console.error('Błąd przyznawania dostępu:', error)
      alert('Wystąpił błąd. Spróbuj ponownie.')
    }
  }

  const handleRevokeAccess = async (studentId, courseId) => {
    if (!confirm('Czy na pewno chcesz odebrać dostęp do tego kursu?')) return
    
    try {
      const userRef = doc(db, 'users', studentId)
      await updateDoc(userRef, {
        courses: arrayRemove(courseId)
      })
      
      // Odśwież listę studentów
      const usersRef = collection(db, 'users')
      const snapshot = await getDocs(usersRef)
      const studentsList = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(u => u.role === 'student')
      setStudents(studentsList)
      
      alert('Dostęp do kursu został odebrany')
    } catch (error) {
      console.error('Błąd odbierania dostępu:', error)
      alert('Wystąpił błąd. Spróbuj ponownie.')
    }
  }

  return (
    <div className="dashboard tutor-dashboard">
      <div className="dashboard-header">
        <h1>Panel Korepetytora</h1>
        <p>Zarządzaj uczniami i materiałami</p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-icon">👥</span>
          <div>
            <h3>{stats.totalStudents}</h3>
            <p>Uczniów</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <div>
            <h3>{stats.activeCourses}</h3>
            <p>Aktywnych kursów</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">💰</span>
          <div>
            <h3>{stats.totalRevenue} PLN</h3>
            <p>Przychód</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card full-width">
          <h3>👥 Zarządzanie dostępem do kursów</h3>
          {students.length > 0 ? (
            <div className="students-courses-management">
              {students.map(student => (
                <div key={student.id} className="student-course-card">
                  <div className="student-header">
                    <div>
                      <strong>{student.name}</strong>
                      <p className="student-email">{student.email}</p>
                    </div>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => {
                        setSelectedStudent(student)
                        setShowCourseModal(true)
                      }}
                    >
                      + Przyznaj kurs
                    </button>
                  </div>
                  
                  <div className="student-courses">
                    <strong>Aktywne kursy ({student.courses?.length || 0}):</strong>
                    {student.courses && student.courses.length > 0 ? (
                      <ul className="courses-tags">
                        {student.courses.map(courseId => {
                          const course = availableCourses.find(c => c.id === courseId)
                          return (
                            <li key={courseId} className="course-tag">
                              <span>{course?.name || courseId}</span>
                              <button 
                                className="remove-course"
                                onClick={() => handleRevokeAccess(student.id, courseId)}
                                title="Odbierz dostęp"
                              >
                                ✕
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    ) : (
                      <p className="no-courses">Brak przypisanych kursów</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Brak uczniów</p>
          )}
        </div>

        <div className="card">
          <h3>👥 Lista uczniów</h3>
          {students.length > 0 ? (
            <table className="students-table">
              <thead>
                <tr>
                  <th>Imię</th>
                  <th>Email</th>
                  <th>Kursy</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.courses?.length || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Brak uczniów</p>
          )}
        </div>

        <div className="card">
          <h3>📁 Zarządzanie materiałami</h3>
          <button className="btn-primary">Dodaj lekcję</button>
          <button className="btn-secondary">Dodaj ćwiczenie</button>
        </div>

        <div className="card">
          <h3>📅 Harmonogram</h3>
          <p>Zaplanowane lekcje</p>
          <button className="btn-secondary">Dodaj termin</button>
        </div>
      </div>

      {/* Modal przyznawania kursu */}
      {showCourseModal && selectedStudent && (
        <div className="modal-overlay" onClick={() => setShowCourseModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Przyznaj dostęp do kursu</h3>
            <p>Uczeń: <strong>{selectedStudent.name}</strong></p>
            
            <div className="courses-grid">
              {availableCourses.map(course => {
                const hasAccess = selectedStudent.courses?.includes(course.id)
                return (
                  <button
                    key={course.id}
                    className={`course-option ${hasAccess ? 'has-access' : ''}`}
                    onClick={() => {
                      if (!hasAccess) {
                        handleGrantAccess(selectedStudent.id, course.id)
                        setShowCourseModal(false)
                      }
                    }}
                    disabled={hasAccess}
                  >
                    {course.name}
                    {hasAccess && <span className="checkmark">✓</span>}
                  </button>
                )
              })}
            </div>
            
            <button 
              className="btn btn-secondary" 
              onClick={() => setShowCourseModal(false)}
              style={{ marginTop: '1rem' }}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
