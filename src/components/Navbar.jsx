import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { isAdmin } from '../config/adminConfig'

export default function Navbar({ user }) {
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Błąd wylogowania:', error)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          📚 English Learning
        </Link>
        
        <div className="nav-links">
          <Link to="/">Strona główna</Link>
          <Link to="/shop">Cennik / Sklep</Link>
          
          {user ? (
            <>
              <Link to="/dashboard">Mój Panel</Link>
              {isAdmin(user.email) && (
                <Link to="/admin" className="admin-link">
                  🔧 Panel Admina
                </Link>
              )}
              <button onClick={handleLogout} className="btn-logout">
                Wyloguj
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-login">
              Zaloguj się
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
