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
        
        // 1. Pobierz dokument użytkownika z bazy, aby sprawdzić PRAWDZIWĄ rolę
        const userDocRef = doc(db, 'users', uid)
        const userDoc = await getDoc(userDocRef)
        
        if (userDoc.exists()) {
          const userData = userDoc.data()
          // 2. Przekieruj na podstawie roli z bazy danych (bezpieczne)
          if (userData.role === 'admin') {
            navigate('/admin')
          } else {
            navigate('/dashboard')
          }
        } else {
          // Fallback: jeśli dokument nie istnieje (np. stary user), wyślij do dashboardu
          navigate('/dashboard')
        }

      } else {
        // --- REJESTRACJA ---
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        // 3. Zapisz użytkownika w bazie. 
        // WYMUSZAMY rolę 'student'. Admina ustawisz ręcznie w konsoli Firebase.
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: name,
          email: email,
          role: 'student', // Hardcoded dla bezpieczeństwa MVP
          createdAt: new Date(),
          courses: [],
          progress: {}
        })
        
        navigate('/dashboard')
      }
    } catch (err) {
      console.error(err)
      // Tłumaczenie błędów Firebase na polski (UX)
      let msg = "Wystąpił błąd logowania."
      if (err.code === 'auth/invalid-credential') msg = "Błędny e-mail lub hasło."
      if (err.code === 'auth/email-already-in-use') msg = "Ten e-mail jest już zajęty."
      if (err.code === 'auth/weak-password') msg = "Hasło jest za słabe (min. 6 znaków)."
      setError(msg)
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
