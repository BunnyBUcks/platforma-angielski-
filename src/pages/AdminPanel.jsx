import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../config/firebase';
import { collection, getDocs, doc, updateDoc, arrayUnion, getDoc, deleteDoc } from 'firebase/firestore';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verifyingAdmin, setVerifyingAdmin] = useState(true); // Nowy stan do weryfikacji
  const [activeTab, setActiveTab] = useState('users');
  const navigate = useNavigate();
  const currentUser = auth.currentUser;

  // 1. BEZPIECZNA WERYFIKACJA ADMINA (Z BAZY DANYCH)
  useEffect(() => {
    const verifyAdminStatus = async () => {
      if (!currentUser) {
        navigate('/login');
        return;
      }

      try {
        // Pobierz dokument aktualnie zalogowanego użytkownika
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userDocRef);

        if (userSnap.exists() && userSnap.data().role === 'admin') {
          // Jest adminem w bazie - pozwól wejść i załaduj dane
          setVerifyingAdmin(false);
          loadUsers();
        } else {
          // Nie jest adminem - wyrzuć
          console.warn("Próba nieautoryzowanego dostępu do admin panelu.");
          navigate('/dashboard');
        }
      } catch (error) {
        console.error("Błąd weryfikacji uprawnień:", error);
        navigate('/dashboard');
      }
    };

    verifyAdminStatus();
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
      
      loadUsers(); // Odśwież listę
      alert(`✅ Kurs ${courseId} przyznany!`);
    } catch (error) {
      console.error('Błąd przyznawania kursu:', error);
      alert('Błąd przyznawania kursu');
    }
  };

  // Przyznaj wszystkie kursy
  const grantAllCourses = async (userId) => {
    const allCourses = [
      'kurs-a1', 'kurs-a2', 'kurs-b1', 'kurs-b2',
      'matura-podstawowa', 'matura-rozszerzona',
      'business-b2', 'business-c1'
    ];

    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        courses: allCourses
      });
      
      loadUsers();
      alert('✅ Wszystkie kursy przyznane!');
    } catch (error) {
      console.error('Błąd:', error);
      alert('Błąd przyznawania kursów');
    }
  };

  // Usuń użytkownika
  const deleteUser = async (userId, userEmail, userRole) => {
    // Nie pozwól usunąć samego siebie
    if (currentUser.email === userEmail) {
      alert('❌ Nie możesz usunąć sam/a siebie!');
      return;
    }

    // Nie pozwól usunąć innych adminów (sprawdzamy rolę z obiektu użytkownika)
    if (userRole === 'admin') {
      alert('❌ Nie możesz usunąć innego administratora!');
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
      
      // Usuń z lokalnej listy (bez przeładowania)
      setUsers(users.filter(u => u.id !== userId));
      
      alert('✅ Użytkownik został usunięty z bazy danych!');
    } catch (error) {
      console.error('Błąd usuwania użytkownika:', error);
      alert('❌ Błąd podczas usuwania użytkownika: ' + error.message);
    }
  };

  // Ekran ładowania podczas weryfikacji uprawnień
  if (verifyingAdmin || loading) {
    return (
      <div className="loading-screen" style={{padding: '50px', textAlign: 'center'}}>
        <div className="spinner"></div>
        <p>{verifyingAdmin ? 'Weryfikacja uprawnień administratora...' : 'Ładowanie danych...'}</p>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>🔧 Panel Administratora</h1>
        <p>Zalogowany jako: <strong>{currentUser?.email}</strong></p>
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
                            title="Przyznaj wszystkie kursy"
                          >
                            🎁 Wszystkie
                          </button>
                          <button 
                            className="btn-small btn-secondary"
                            onClick={() => {
                              const courseId = prompt('Podaj ID kursu (np. kurs-a1):');
                              if (courseId) grantCourse(user.id, courseId);
                            }}
                            title="Dodaj pojedynczy kurs"
                          >
                            ➕ Dodaj
                          </button>
                          <button 
                            className="btn-small btn-danger"
                            onClick={() => deleteUser(user.id, user.email, user.role)}
                            disabled={user.role === 'admin'}
                            title="Usuń użytkownika"
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
