import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth } from '../config/firebase'
import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore'

export default function Shop({ user }) {
  const [cart, setCart] = useState([])
  const [purchasing, setPurchasing] = useState(false)
  const navigate = useNavigate()

  const courses = [
    {
      id: 'klasa-8',
      name: 'Repetytorium dla klasy 8 🎓',
      price: 149,
      duration: 'Dostęp na zawsze',
      lessons: 'Materiały PDF',
      description: 'Kompletne przygotowanie do egzaminu ósmoklasisty. Teoria + ćwiczenia praktyczne.',
      featured: true,
      courseUrl: '/course/klasa-8'
    },
    {
      id: 1,
      name: 'Kurs podstawowy (A1-A2)',
      price: 299,
      duration: '8 tygodni',
      lessons: 16,
      description: 'Idealne dla początkujących. Podstawy gramatyki i konwersacji.'
    },
    {
      id: 2,
      name: 'Kurs średniozaawansowany (B1-B2)',
      price: 399,
      duration: '10 tygodni',
      lessons: 20,
      description: 'Rozwijaj swoje umiejętności. Business English i konwersacje.'
    },
    {
      id: 3,
      name: 'Kurs zaawansowany (C1-C2)',
      price: 499,
      duration: '12 tygodni',
      lessons: 24,
      description: 'Opanuj angielski na poziomie native speaker.'
    },
    {
      id: 4,
      name: 'Pakiet 5 lekcji indywidualnych',
      price: 250,
      duration: 'Elastyczny',
      lessons: 5,
      description: 'Pojedyncze lekcje dopasowane do Twoich potrzeb.'
    },
    {
      id: 5,
      name: 'Pakiet 10 lekcji indywidualnych',
      price: 450,
      duration: 'Elastyczny',
      lessons: 10,
      description: 'Oszczędzaj 50 PLN! Lekcje one-on-one z korepetytorem.'
    },
    {
      id: 6,
      name: 'Pakiet 20 lekcji indywidualnych',
      price: 800,
      duration: 'Elastyczny',
      lessons: 20,
      description: 'Najlepsza oferta! Oszczędzasz 200 PLN.'
    }
  ]

  const addToCart = (course) => {
    setCart([...cart, course])
    alert(`Dodano do koszyka: ${course.name}`)
  }

  const handlePurchase = async () => {
    if (!user) {
      alert('Zaloguj się, aby dokonać zakupu!')
      navigate('/login')
      return
    }

    if (cart.length === 0) {
      alert('Koszyk jest pusty!')
      return
    }

    setPurchasing(true)
    try {
      const userRef = doc(db, 'users', user.uid)
      
      // Dodaj kursy do użytkownika
      const courseIds = cart
        .filter(item => item.courseUrl) // Tylko kursy z materiałami
        .map(item => item.id)
      
      if (courseIds.length > 0) {
        await updateDoc(userRef, {
          courses: arrayUnion(...courseIds)
        })
      }

      alert('🎉 Zakup zakończony pomyślnie! Twoje kursy są teraz dostępne w panelu.')
      setCart([])
      
      // Przekieruj do dashboardu
      setTimeout(() => {
        navigate('/dashboard')
      }, 1500)
    } catch (error) {
      console.error('Błąd zakupu:', error)
      alert('Wystąpił błąd podczas zakupu. Spróbuj ponownie.')
    } finally {
      setPurchasing(false)
    }
  }

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>🛒 Sklep z kursami</h1>
        <p>Wybierz kurs dopasowany do Twojego poziomu</p>
        {cart.length > 0 && (
          <div className="cart-badge">
            Koszyk ({cart.length})
          </div>
        )}
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className={`course-card ${course.featured ? 'featured' : ''}`}>
            <div className="course-header">
              <h3>{course.name}</h3>
              <span className="course-price">{course.price} PLN</span>
            </div>
            <div className="course-details">
              <p>⏱️ {course.duration}</p>
              <p>📚 {course.lessons}</p>
              <p className="course-description">{course.description}</p>
            </div>
            <button 
              className="btn-primary"
              onClick={() => addToCart(course)}
            >
              Dodaj do koszyka
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Twój koszyk</h3>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.name}</span>
                <span>{item.price} PLN</span>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <strong>Suma: {cart.reduce((sum, item) => sum + item.price, 0)} PLN</strong>
          </div>
          <button 
            className="btn-primary btn-large"
            onClick={handlePurchase}
            disabled={purchasing}
          >
            {purchasing ? 'Przetwarzanie...' : 'Kup teraz (DEMO)'}
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            💡 To wersja demonstracyjna - kursy zostaną dodane do Twojego konta
          </p>
        </div>
      )}
    </div>
  )
}
