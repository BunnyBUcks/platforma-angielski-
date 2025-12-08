import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleCheckout } from '../config/stripe'

export default function Shop({ user }) {
  const navigate = useNavigate()
  const [loadingId, setLoadingId] = useState(null)

  const courses = [
    {
      id: 'kurs-a1',
      name: 'Kurs A1 - Początkujący',
      price: 299,
      duration: '8 tygodni',
      lessons: 16,
      description: 'Pierwszy kontakt z językiem angielskim. Podstawy gramatyki i konwersacji.',
      stripePriceId: 'price_1Sc9YGFFIIJBkvjRLgM5fNad',
      level: 'beginner'
    },
    {
      id: 'kurs-a2',
      name: 'Kurs A2 - Podstawowy',
      price: 299,
      duration: '8 tygodni',
      lessons: 18,
      description: 'Rozwijaj podstawowe umiejętności językowe. Pewność w codziennych sytuacjach.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_A2',
      level: 'beginner'
    },
    {
      id: 'kurs-b1',
      name: 'Kurs B1 - Średniozaawansowany',
      price: 299,
      duration: '10 tygodni',
      lessons: 20,
      description: 'Rozwijaj swoje umiejętności. Pewność w komunikacji biznesowej i codziennej.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_B1',
      level: 'intermediate'
    },
    {
      id: 'kurs-b2',
      name: 'Kurs B2 - Zaawansowany',
      price: 299,
      duration: '10 tygodni',
      lessons: 22,
      description: 'Płynna komunikacja w każdej sytuacji. Business English i konwersacje zaawansowane.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_B2',
      level: 'intermediate'
    },
    {
      id: 'kurs-c1',
      name: 'Kurs C1 - Biegły',
      price: 399,
      duration: '12 tygodni',
      lessons: 24,
      description: 'Opanuj angielski na poziomie zaawansowanym. Profesjonalna komunikacja.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_C1',
      level: 'advanced'
    },
    {
      id: 'kurs-c2',
      name: 'Kurs C2 - Mistrz',
      price: 399,
      duration: '12 tygodni',
      lessons: 26,
      description: 'Najwyższy poziom znajomości języka. Komunikacja jak native speaker.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_C2',
      level: 'advanced'
    },
    {
      id: 'pakiet-5',
      name: 'Pakiet 5 lekcji indywidualnych',
      price: 500,
      duration: 'Elastyczny',
      lessons: '5 lekcji',
      description: 'Pojedyncze lekcje dopasowane do Twoich potrzeb. Elastyczne terminy.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_PAKIETU_5',
      level: 'individual'
    },
    {
      id: 'pakiet-10',
      name: 'Pakiet 10 lekcji indywidualnych',
      price: 800,
      duration: 'Elastyczny',
      lessons: '10 lekcji',
      description: 'Oszczędzasz 200 PLN! Lekcje one-on-one z korepetytorem.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_PAKIETU_10',
      level: 'individual'
    },
    {
      id: 'pakiet-20',
      name: 'Pakiet 20 lekcji indywidualnych',
      price: 1500,
      duration: 'Elastyczny',
      lessons: '20 lekcji',
      description: 'Najlepsza oferta! Oszczędzasz 500 PLN. Pełen pakiet wsparcia.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_PAKIETU_20',
      level: 'individual'
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
        <h1>🛒 Cennik i Sklep</h1>
        <p>Wybierz kurs dopasowany do Twojego poziomu lub pakiet lekcji indywidualnych</p>
      </div>

      {/* KURSY POCZĄTKUJĄCE A1-A2 */}
      <section className="courses-section">
        <h2>📗 Kursy dla początkujących (A1-A2)</h2>
        <p className="section-subtitle">Idealne dla osób zaczynających przygodę z językiem angielskim</p>
        <div className="courses-grid">
          {courses.filter(c => c.level === 'beginner').map(course => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h3>{course.name}</h3>
                <span className="course-price">{course.price} PLN</span>
              </div>
              <div className="course-details">
                <p>⏱️ {course.duration}</p>
                <p>📚 {course.lessons} lekcji</p>
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
      </section>

      {/* KURSY ŚREDNIOZAAWANSOWANE B1-B2 */}
      <section className="courses-section">
        <h2>📘 Kursy średniozaawansowane (B1-B2)</h2>
        <p className="section-subtitle">Rozwijaj swoje umiejętności i pewność w komunikacji</p>
        <div className="courses-grid">
          {courses.filter(c => c.level === 'intermediate').map(course => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h3>{course.name}</h3>
                <span className="course-price">{course.price} PLN</span>
              </div>
              <div className="course-details">
                <p>⏱️ {course.duration}</p>
                <p>📚 {course.lessons} lekcji</p>
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
      </section>

      {/* KURSY ZAAWANSOWANE C1-C2 */}
      <section className="courses-section">
        <h2>📕 Kursy zaawansowane (C1-C2)</h2>
        <p className="section-subtitle">Opanuj język na najwyższym poziomie</p>
        <div className="courses-grid">
          {courses.filter(c => c.level === 'advanced').map(course => (
            <div key={course.id} className="course-card featured">
              <div className="course-header">
                <h3>{course.name}</h3>
                <span className="course-price">{course.price} PLN</span>
              </div>
              <div className="course-details">
                <p>⏱️ {course.duration}</p>
                <p>📚 {course.lessons} lekcji</p>
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
      </section>

      {/* PAKIETY LEKCJI INDYWIDUALNYCH */}
      <section className="courses-section">
        <h2>👨‍🏫 Lekcje indywidualne</h2>
        <p className="section-subtitle">Elastyczne terminy i program dopasowany do Twoich potrzeb</p>
        <div className="courses-grid">
          {courses.filter(c => c.level === 'individual').map(course => (
            <div key={course.id} className="course-card individual">
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
      </section>
    </div>
  )
}
