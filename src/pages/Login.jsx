import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { isAdmin } from '../config/adminConfig'

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
        await signInWithEmailAndPassword(auth, email, password)
        // Przekieruj admina do panelu admina, ucznia do dashboardu
        const userIsAdmin = isAdmin(email)
        navigate(userIsAdmin ? '/admin' : '/dashboard')
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        // Automatycznie ustaw rolę na podstawie emaila
        const userRole = isAdmin(email) ? 'admin' : 'student'
        
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: name,
          email: email,
          role: userRole,
          createdAt: new Date(),
          courses: [],
          progress: {}
        })
        
        // Przekieruj w zależności od roli
        navigate(userRole === 'admin' ? '/admin' : '/dashboard')
      }
    } catch (err) {
      setError(err.message)
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
            {loading ? 'Proszę czekać...' : (isLogin ? 'Zaloguj' : 'Zarejestruj')}
          </button>
        </form>
        
        <p className="switch-mode">
          {isLogin ? 'Nie masz konta?' : 'Masz już konto?'}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Zarejestruj się' : 'Zaloguj się'}
          </button>
        </p>
      </div>
    </div>
  )
}
