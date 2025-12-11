import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import '../styles/index.css'

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAdminRole = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists() && docSnap.data().role === 'admin') {
            setIsAdmin(true)
          } else {
            setIsAdmin(false)
          }
        } catch (err) {
          console.error("Błąd sprawdzania roli:", err)
          setIsAdmin(false)
        }
      } else {
        setIsAdmin(false)
      }
    }
    checkAdminRole()
  }, [user])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Błąd wylogowania:', error)
    }
  }

  return (
    <nav className="navbar">
      {/* Przycisk Hamburger dla mobilnych */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Start</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>O mnie</Link>
        <Link to="/shop" onClick={() => setIsOpen(false)}>CENNIK / SKLEP</Link>
        {user ? (
          <>
            {/* Przycisk widoczny TYLKO dla Admina */}
            {isAdmin && (
              <Link 
                to="/admin" 
                className="admin-link"
                onClick={() => setIsOpen(false)}
                style={{ 
                  color: '#ff4444', 
                  fontWeight: 'bold', 
                  border: '1px solid #ff4444', 
                  padding: '5px 10px', 
                  borderRadius: '5px',
                  marginRight: '10px'
                }}
              >
                👑 PANEL ADMINA
              </Link>
            )}
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>Moje Kursy</Link>
            <button onClick={handleLogout} className="btn-logout">
              Wyloguj
            </button>
          </>
        ) : (
          <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>
            Zaloguj się
          </Link>
        )}
      </div>
    </nav>
  )
}
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
  import { useState, useEffect } from 'react'
  import { Link, useNavigate } from 'react-router-dom'
  import { auth, db } from '../config/firebase'
  import { signOut } from 'firebase/auth'
  import { doc, getDoc } from 'firebase/firestore'
  import '../styles/index.css'

  export default function Navbar({ user }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
      const checkAdminRole = async () => {
        if (user) {
          try {
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists() && docSnap.data().role === 'admin') {
              setIsAdmin(true)
            } else {
              setIsAdmin(false)
            }
          } catch (err) {
            console.error("Błąd sprawdzania roli:", err)
            setIsAdmin(false)
          }
        } else {
          setIsAdmin(false)
        }
      }
      checkAdminRole()
    }, [user])

    const handleLogout = async () => {
      try {
        await signOut(auth)
        navigate('/login')
      } catch (error) {
        console.error('Błąd wylogowania:', error)
      }
    }

    return (
      <nav className="navbar">
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Start</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>O mnie</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>CENNIK / SKLEP</Link>
          {user ? (
            <>
              {isAdmin && (
                <Link 
                  to="/admin" 
                  onClick={() => setIsOpen(false)}
                  style={{ color: '#ff4444', fontWeight: 'bold', border: '1px solid #ff4444', borderRadius: '4px', padding: '5px 10px' }}
                >
                  👑 PANEL ADMINA
                </Link>
              )}
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>Moje Kursy</Link>
              <button onClick={handleLogout} className="btn-logout">Wyloguj</button>
            </>
          ) : (
            <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>Zaloguj</Link>
          )}
        </div>
      </nav>
    )
  }
