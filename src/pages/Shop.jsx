import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleCheckout } from '../config/stripe'

export default function Shop({ user }) {
  const navigate = useNavigate()
  const [loadingId, setLoadingId] = useState(null)

  const courses = [
    {
      id: 'klasa-8',
      name: 'Repetytorium dla klasy 8 🎓',
      price: 149,
      duration: 'Dostęp na zawsze',
      lessons: 'Materiały PDF',
      description: 'Kompletne przygotowanie do egzaminu ósmoklasisty. Teoria + ćwiczenia praktyczne.',
      featured: true,
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_KLASY_8'
    },
    {
      id: 'kurs-a1',
      name: 'Kurs podstawowy (A1-A2)',
      price: 299,
      duration: '8 tygodni',
      lessons: 16,
      description: 'Idealne dla początkujących. Podstawy gramatyki i konwersacji.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_A1'
    },
    {
      id: 'kurs-b1',
      name: 'Kurs średniozaawansowany (B1-B2)',
      price: 399,
      duration: '10 tygodni',
      lessons: 20,
      description: 'Rozwijaj swoje umiejętności. Business English i konwersacje.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_B1'
    },
    {
      id: 'kurs-c1',
      name: 'Kurs zaawansowany (C1-C2)',
      price: 499,
      duration: '12 tygodni',
      lessons: 24,
      description: 'Opanuj angielski na poziomie native speaker.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_C1'
    },
    {
      id: 'pakiet-5',
      name: 'Pakiet 5 lekcji indywidualnych',
      price: 250,
      duration: 'Elastyczny',
      lessons: 5,
      description: 'Pojedyncze lekcje dopasowane do Twoich potrzeb.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_PAKIETU_5'
    },
    {
      id: 'pakiet-10',
      name: 'Pakiet 10 lekcji indywidualnych',
      price: 450,
      duration: 'Elastyczny',
      lessons: 10,
      description: 'Oszczędzaj 50 PLN! Lekcje one-on-one z korepetytorem.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_PAKIETU_10'
    },
    {
      id: 'pakiet-20',
      name: 'Pakiet 20 lekcji indywidualnych',
      price: 800,
      duration: 'Elastyczny',
      lessons: 20,
      description: 'Najlepsza oferta! Oszczędzasz 200 PLN.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_PAKIETU_20'
    }
  ]

  const onBuyClick = async (course) => {
    if (!user) {
      alert('Musisz być zalogowany, aby kupić kurs!')
      navigate('/login')
      return
    }

    // Zabezpieczenie przed kliknięciem w produkt bez skonfigurowanego ID
    if (!course.stripePriceId || course.stripePriceId.includes('TUTAJ_WKLEJ')) {
      alert('Przepraszamy, ten produkt nie jest jeszcze w pełni skonfigurowany. Skontaktuj się z administratorem.')
      console.error(`Brak poprawnego Price ID dla: ${course.name}`)
      return
    }

    setLoadingId(course.id)
    try {
      await handleCheckout(course.stripePriceId)
    } catch (error) {
      console.error(error)
      alert("Wystąpił błąd płatności.")
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>🛒 Sklep z kursami</h1>
        <p>Wybierz kurs dopasowany do Twojego poziomu</p>
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
              onClick={() => onBuyClick(course)}
              disabled={loadingId === course.id}
              style={{width: '100%', marginTop: '15px'}}
            >
              {loadingId === course.id ? 'Przetwarzanie...' : 'Kup teraz'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
