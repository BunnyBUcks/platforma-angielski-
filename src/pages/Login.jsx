import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        // --- LOGOWANIE ---
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const uid = userCredential.user.uid
        
        // Pobierz dokument użytkownika z bazy
        const userDocRef = doc(db, 'users', uid)
        const userDoc = await getDoc(userDocRef)
        
        if (userDoc.exists()) {
          const userData = userDoc.data()
          console.log("Rola z bazy:", userData.role)
          
          // Sprawdź rolę z bazy danych
          if (userData.role === 'admin') {
            navigate('/admin')
          } else {
            navigate('/dashboard')
          }
        } else {
          navigate('/dashboard')
        }

      } else {
        // --- REJESTRACJA ---
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        // Przy rejestracji zawsze 'student'
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: name,
          email: email,
          role: 'student',
          createdAt: new Date(),
          courses: [],
          progress: {}
        })
        
        navigate('/dashboard')
      }
    } catch (err) {
      console.error(err)
      setError("Błąd: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isLogin ? 'Zaloguj się' : 'Zarejestruj się'}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Imię i nazwisko</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
                placeholder="Jan Kowalski"
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="twoj@email.pl"
            />
          </div>
          
          <div className="form-group">
            <label>Hasło</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              minLength="6"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Przetwarzanie...' : (isLogin ? 'Zaloguj' : 'Zarejestruj')}
          </button>
        </form>
        
        <p className="switch-mode">
          {isLogin ? 'Nie masz konta?' : 'Masz już konto?'}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Zarejestruj się' : 'Zaloguj się'}
          </button>
        </p>
      </div>
    </div>
  )
}
