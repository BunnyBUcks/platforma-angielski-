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
      id: 'egzamin-fce',
      name: 'FCE (B2 First) - Przygotowanie do egzaminu',
      price: 399,
      duration: '12 tygodni',
      lessons: 24,
      description: 'Kompleksowe przygotowanie do Cambridge English: First Certificate. Wszystkie 4 części egzaminu.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_FCE',
      level: 'advanced'
    },
    {
      id: 'egzamin-cae',
      name: 'CAE (C1 Advanced) - Przygotowanie do egzaminu',
      price: 499,
      duration: '16 tygodni',
      lessons: 32,
      description: 'Premium przygotowanie do Cambridge English: Advanced. Zaawansowany trening na poziomie C1.',
      stripePriceId: 'price_TUTAJ_WKLEJ_ID_Z_DASHBOARDU_STRIPE_DLA_CAE',
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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {courses.map(course => (
          <div 
            key={course.id} 
            style={{
              background: course.level === 'advanced' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                         course.level === 'individual' ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' : 
                         'white',
              border: course.level === 'beginner' || course.level === 'intermediate' ? '2px solid #e0e0e0' : 'none',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              aspectRatio: '1 / 1',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              color: course.level === 'advanced' || course.level === 'individual' ? 'white' : '#333'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                lineHeight: '1.3'
              }}>
                {course.name}
              </h3>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: course.level === 'advanced' || course.level === 'individual' ? '#fff' : '#667eea',
                marginBottom: '1rem'
              }}>
                {course.price} PLN
              </div>
              <div style={{
                fontSize: '0.9rem',
                opacity: 0.9,
                marginBottom: '0.5rem'
              }}>
                ⏱️ {course.duration} • 📚 {course.lessons}
              </div>
              <p style={{
                fontSize: '0.85rem',
                opacity: 0.85,
                lineHeight: '1.4',
                marginBottom: '1rem'
              }}>
                {course.description}
              </p>
            </div>
            
            <button 
              onClick={() => onBuyClick(course)}
              disabled={loadingId === course.id}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: loadingId === course.id ? 'not-allowed' : 'pointer',
                background: course.level === 'advanced' || course.level === 'individual' ? 'rgba(255,255,255,0.2)' : '#667eea',
                color: course.level === 'advanced' || course.level === 'individual' ? 'white' : 'white',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                opacity: loadingId === course.id ? 0.6 : 1
              }}
              onMouseEnter={(e) => {
                if (loadingId !== course.id) {
                  e.currentTarget.style.background = course.level === 'advanced' || course.level === 'individual' ? 'rgba(255,255,255,0.3)' : '#5568d3'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = course.level === 'advanced' || course.level === 'individual' ? 'rgba(255,255,255,0.2)' : '#667eea'
              }}
            >
              {loadingId === course.id ? 'Przetwarzanie...' : 'Kup teraz 🛒'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
