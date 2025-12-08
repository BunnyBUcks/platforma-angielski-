import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../config/firebase';
import { collection, getDocs, doc, updateDoc, arrayUnion, getDoc, deleteDoc, setDoc } from 'firebase/firestore';
import { isAdmin } from '../config/adminConfig';
import { coursesData } from '../data/coursesData';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('users');
  const navigate = useNavigate();
  const currentUser = auth.currentUser;

  // Sprawdź czy użytkownik jest adminem
  useEffect(() => {
    if (!currentUser || !isAdmin(currentUser.email)) {
      navigate('/dashboard');
      return;
    }
    loadUsers();
  }, [currentUser, navigate]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const usersData = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersData);
    } catch (error) {
      console.error('Błąd ładowania użytkowników:', error);
    } finally {
      setLoading(false);
    }
  };

  // Dodaj kurs do użytkownika
  const grantCourse = async (userId, courseId) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        courses: arrayUnion(courseId)
      });
      
      // Odśwież listę
      loadUsers();
      alert(`Kurs ${courseId} przyznany!`);
    } catch (error) {
      console.error('Błąd przyznawania kursu:', error);
      alert('Błąd przyznawania kursu');
    }
  };

  // Przyznaj wszystkie kursy
  const grantAllCourses = async (userId) => {
    const allCourses = [
      'kurs-a1', 'kurs-a2', 'kurs-b1', 'kurs-b2',
      'klasa-8', 'matura-podstawowa', 'matura-rozszerzona',
      'business-b2', 'business-c1'
    ];

    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        courses: allCourses
      });
      
      loadUsers();
      alert('Wszystkie kursy przyznane!');
    } catch (error) {
      console.error('Błąd:', error);
      alert('Błąd przyznawania kursów');
    }
  };

  // Usuń użytkownika
  const deleteUser = async (userId, userEmail) => {
    // Nie pozwól usunąć samego siebie
    if (currentUser.email === userEmail) {
      alert('❌ Nie możesz usunąć sam/a siebie!');
      return;
    }

    // Nie pozwól usunąć innych adminów
    if (isAdmin(userEmail)) {
      alert('❌ Nie możesz usunąć konta administratora!');
      return;
    }

    const confirmDelete = window.confirm(
      `⚠️ Czy na pewno chcesz usunąć użytkownika ${userEmail}?\n\n` +
      `To działanie jest nieodwracalne!\n` +
      `Zostaną usunięte:\n` +
      `- Konto użytkownika\n` +
      `- Wszystkie postępy\n` +
      `- Historia zakupów`
    );

    if (!confirmDelete) return;

    try {
      // Usuń z Firestore
      await deleteDoc(doc(db, 'users', userId));
      
      // Usuń z lokalnej listy
      setUsers(users.filter(u => u.id !== userId));
      
      alert('✅ Użytkownik został usunięty!\n\nUWAGA: Konto w Authentication Firebase nadal istnieje. Aby całkowicie usunąć użytkownika, przejdź do Firebase Console → Authentication i usuń tam konto.');
    } catch (error) {
      console.error('Błąd usuwania użytkownika:', error);
      alert('❌ Błąd podczas usuwania użytkownika: ' + error.message);
    }
  };

  // 🔥 NOWA FUNKCJA: Upload kursów do Firebase
  const uploadCoursesToFirebase = async () => {
    try {
      console.log('🚀 Rozpoczynam upload kursów do Firebase...');
      console.log('📦 Dane kursów:', coursesData);

      let uploadedCount = 0;
      const courseKeys = Object.keys(coursesData);

      for (const courseId of courseKeys) {
        const courseData = coursesData[courseId];
        console.log(`📚 Uploading: ${courseId}`, courseData);

        // Utwórz dokument w kolekcji 'courses' z ID kursu
        await setDoc(doc(db, 'courses', courseId), courseData);
        uploadedCount++;
        console.log(`✅ Uploaded ${uploadedCount}/${courseKeys.length}: ${courseId}`);
      }

      console.log(`🎉 Sukces! Załadowano ${uploadedCount} kursów do Firebase!`);
      alert(`✅ Sukces!\n\nZaładowano ${uploadedCount} kursów do bazy danych Firestore.\n\nMożesz sprawdzić w Firebase Console → Firestore Database → courses`);
    } catch (error) {
      console.error('❌ Błąd podczas upload\'u kursów:', error);
      alert(`❌ Błąd!\n\n${error.message}\n\nSprawdź consolę (F12) po więcej szczegółów.`);
    }
  };

  if (loading) {
    return <div className="loading">Ładowanie panelu admina...</div>;
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>🔧 Panel Administratora</h1>
        <p>Zarządzaj platformą Angielski z Anią</p>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Użytkownicy ({users.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          📚 Kursy
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          📊 Statystyki
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'users' && (
          <div className="users-section">
            <h2>Zarządzanie użytkownikami</h2>
            
            <div className="users-table">
              <table>
                <thead>
                  <tr>
                    <th>Imię</th>
                    <th>Email</th>
                    <th>Rola</th>
                    <th>Kursy</th>
                    <th>Data rejestracji</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className={`role-badge ${user.role}`}>
                          {user.role === 'admin' ? '👑 Admin' : '👤 Uczeń'}
                        </span>
                      </td>
                      <td>{user.courses?.length || 0}</td>
                      <td>
                        {user.createdAt?.toDate?.()?.toLocaleDateString('pl-PL') || 'N/A'}
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="btn-small btn-primary"
                            onClick={() => grantAllCourses(user.id)}
                          >
                            🎁 Wszystkie kursy
                          </button>
                          <button 
                            className="btn-small btn-secondary"
                            onClick={() => {
                              const courseId = prompt('Podaj ID kursu (np. kurs-a1):');
                              if (courseId) grantCourse(user.id, courseId);
                            }}
                          >
                            ➕ Dodaj kurs
                          </button>
                          <button 
                            className="btn-small btn-danger"
                            onClick={() => deleteUser(user.id, user.email)}
                            disabled={isAdmin(user.email)}
                          >
                            🗑️ Usuń
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="courses-section">
            <h2>Zarządzanie kursami</h2>
            
            {/* 🔥 NOWY PRZYCISK DO UPLOAD KURSÓW */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '2rem',
              borderRadius: '12px',
              marginBottom: '2rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                🔥 Załaduj kursy do Firebase
              </h3>
              <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                Przenieś dane kursów z pliku lokalnego do bazy Firestore.<br/>
                Ta operacja jest bezpieczna - możesz ją wykonać wielokrotnie.
              </p>
              <button 
                onClick={uploadCoursesToFirebase}
                style={{
                  background: 'white',
                  color: '#667eea',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                📤 Załaduj kursy do bazy danych
              </button>
            </div>

            <div className="courses-grid-admin">
              <div className="course-card-admin">
                <h3>📘 Kursy językowe</h3>
                <ul>
                  <li>kurs-a1 - Poziom A1 (299 PLN)</li>
                  <li>kurs-a2 - Poziom A2 (299 PLN)</li>
                  <li>kurs-b1 - Poziom B1 (299 PLN)</li>
                  <li>kurs-b2 - Poziom B2 (299 PLN)</li>
                </ul>
              </div>

              <div className="course-card-admin">
                <h3>🎓 Egzaminy</h3>
                <ul>
                  <li>klasa-8 - Klasy 1-8 (199 PLN)</li>
                  <li>matura-podstawowa - Matura podstawowa (299 PLN)</li>
                  <li>matura-rozszerzona - Matura rozszerzona (299 PLN)</li>
                </ul>
              </div>

              <div className="course-card-admin">
                <h3>💼 Business English</h3>
                <ul>
                  <li>business-b2 - Business B2 (500 PLN)</li>
                  <li>business-c1 - Business C1 (500 PLN)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="stats-section">
            <h2>Statystyki platformy</h2>
            <div className="stats-grid-admin">
              <div className="stat-card-admin">
                <div className="stat-number">{users.length}</div>
                <div className="stat-label">Łączna liczba użytkowników</div>
              </div>
              <div className="stat-card-admin">
                <div className="stat-number">
                  {users.filter(u => u.role === 'admin').length}
                </div>
                <div className="stat-label">Administratorzy</div>
              </div>
              <div className="stat-card-admin">
                <div className="stat-number">
                  {users.filter(u => u.role === 'student').length}
                </div>
                <div className="stat-label">Uczniowie</div>
              </div>
              <div className="stat-card-admin">
                <div className="stat-number">
                  {users.reduce((sum, u) => sum + (u.courses?.length || 0), 0)}
                </div>
                <div className="stat-label">Zakupione kursy</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
