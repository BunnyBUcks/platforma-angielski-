import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Naucz się angielskiego z profesjonalnym korepetytorem</h1>
          <p>Spersonalizowane lekcje, interaktywne ćwiczenia i materiały przygotowane specjalnie dla Ciebie</p>
          <div className="hero-buttons">
            <button 
              onClick={() => {
                const coursesSection = document.querySelector('.courses-section');
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-primary"
            >
              Zobacz kursy
            </button>
            <Link to="/login" className="btn-secondary">Rozpocznij za darmo</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Dlaczego warto?</h2>
        <div className="features-grid">
          {/* KAFELKI INFORMACYJNE */}
          <div className="feature-card clickable" onClick={() => navigate('/about')}>
            <span className="feature-icon">👨‍🏫</span>
            <h3>Profesjonalny korepetytor</h3>
            <p>Doświadczony nauczyciel z dyplomami</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable" onClick={() => navigate('/autorskie-materialy')}>
            <span className="feature-icon">📚</span>
            <h3>Autorskie materiały</h3>
            <p>Lata doświadczenia zamknięte w każdej lekcji. Starannie opracowane testy, ćwiczenia i kursy, tworzone z pasją przez osobę, która sama przeszła tę drogę od podstaw do perfekcji</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable" onClick={() => navigate('/indywidualne-podejscie')}>
            <span className="feature-icon">🎯</span>
            <h3>Indywidualne podejście</h3>
            <p>Dostosowane do Twojego poziomu</p>
            <span className="card-arrow">→</span>
          </div>
          <div className="feature-card clickable" onClick={() => navigate('/platforma-online')}>
            <span className="feature-icon">💻</span>
            <h3>Platforma online</h3>
            <p>Ucz się kiedy i gdzie chcesz</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable" onClick={() => navigate('/co-daje-nauka')}>
            <span className="feature-icon">🌍</span>
            <h3>Co daje nauka języków?</h3>
            <p>Odkryj korzyści znajomości angielskiego</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable" onClick={() => navigate('/edukacyjne-gry')}>
            <span className="feature-icon">🎮</span>
            <h3>Edukacyjne gry</h3>
            <p>Nauka przez zabawę - quizy, fiszki i wyzwania</p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <h2>Testy poziomujące</h2>
        <p className="section-subtitle">Sprawdź swój poziom przed rozpoczęciem nauki</p>
        <div className="features-grid">
          <div className="feature-card clickable" onClick={() => navigate('/test-mlodych')}>
            <span className="feature-icon">🧒</span>
            <h3>Test dla młodych</h3>
            <p>Sprawdź poziom angielskiego dziecka (7-14 lat)</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable" onClick={() => navigate('/test-doroslych')}>
            <span className="feature-icon">👔</span>
            <h3>Test dla dorosłych</h3>
            <p>Poznaj swój poziom języka (15+ lat)</p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <h2>Kursy według poziomów</h2>
        <p className="section-subtitle">Wybierz kurs dopasowany do Twojego poziomu</p>
        <div className="features-grid">
          <div className="feature-card clickable course-level-a1" onClick={() => navigate('/kurs-a1')}>
            <span className="feature-icon">🌱</span>
            <h3>Kurs A1 - Początkujący</h3>
            <p>Pierwszy kontakt z językiem angielskim</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable course-level-a2" onClick={() => navigate('/kurs-a2')}>
            <span className="feature-icon">🌿</span>
            <h3>Kurs A2 - Podstawowy</h3>
            <p>Rozwijaj podstawowe umiejętności</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable course-level-b1" onClick={() => navigate('/kurs-b1')}>
            <span className="feature-icon">🌳</span>
            <h3>Kurs B1 - Średniozaawansowany</h3>
            <p>Pewność w codziennych sytuacjach</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable course-level-b2" onClick={() => navigate('/kurs-b2')}>
            <span className="feature-icon">🌲</span>
            <h3>Kurs B2 - Zaawansowany</h3>
            <p>Płynna komunikacja w każdej sytuacji</p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <h2>Angielski biznesowy</h2>
        <p className="section-subtitle">Profesjonalna komunikacja w środowisku biznesowym</p>
        <div className="features-grid">
          <div className="feature-card clickable business-intermediate" onClick={() => navigate('/business-english')}>
            <span className="feature-icon">💼</span>
            <h3>Business English B2</h3>
            <p>Średniozaawansowana komunikacja biznesowa</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable business-advanced" onClick={() => navigate('/business-english-c1')}>
            <span className="feature-icon">📊</span>
            <h3>Business English C1</h3>
            <p>Zaawansowana komunikacja w biznesie</p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <h2>Przygotowanie do egzaminów</h2>
        <p className="section-subtitle">Kompleksowe kursy przygotowujące do egzaminów</p>
        <div className="features-grid">
          <div className="feature-card clickable exam-klasa8" onClick={() => navigate('/egzamin-osmoklasisty')}>
            <span className="feature-icon">🎒</span>
            <h3>Egzamin ósmoklasisty</h3>
            <p>Kompleksowe przygotowanie - 12 tygodni do sukcesu!</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable matura-basic" onClick={() => navigate('/matura-podstawowa')}>
            <span className="feature-icon">📝</span>
            <h3>Matura podstawowa</h3>
            <p>Kompleksowe przygotowanie do matury</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable matura-advanced" onClick={() => navigate('/matura-rozszerzona')}>
            <span className="feature-icon">📝</span>
            <h3>Matura rozszerzona</h3>
            <p>Kompleksowe przygotowanie do matury rozszerzonej</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable exam-fce" onClick={() => navigate('/egzamin-fce')}>
            <span className="feature-icon">🎓</span>
            <h3>FCE (B2 First)</h3>
            <p>Cambridge English: First Certificate</p>
            <div className="card-arrow">→</div>
          </div>
          <div className="feature-card clickable exam-cae" onClick={() => navigate('/egzamin-cae')}>
            <span className="feature-icon">🏆</span>
            <h3>CAE (C1 Advanced)</h3>
            <p>Cambridge English: Advanced Certificate</p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Opinie uczniów</h2>
        <p className="section-subtitle">Zobacz co mówią o nas nasi uczniowie</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Dzięki kursowi podniosłam wynik z matury z 60% do 95%! Ania jest niesamowita, materiały są super przygotowane."
            </p>
            <div className="testimonial-author">
              <span className="author-name">Karolina, 18 lat</span>
              <span className="author-course">Matura rozszerzona</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Mój syn w końcu polubił angielski! Interaktywne ćwiczenia i gry sprawiają, że nauka to czysta przyjemność."
            </p>
            <div className="testimonial-author">
              <span className="author-name">Pani Monika</span>
              <span className="author-course">Mama ucznia klasy 5</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Profesjonalizm i indywidualne podejście. W 6 miesięcy przeszedłem z poziomu A2 na B2. Polecam!"
            </p>
            <div className="testimonial-author">
              <span className="author-name">Tomasz, 32 lata</span>
              <span className="author-course">Kurs B1-B2</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Gotowy na start?</h2>
        <p>Dołącz do uczniów, którzy już osiągnęli sukces</p>
        <Link to="/shop" className="btn-primary">Wybierz swój kurs</Link>
      </section>

      <footer className="footer">
        <p>© 2025 Angielski z Anią. Wszelkie prawa zastrzeżone.</p>
        <p className="footer-links">
          <a href="/regulamin">Regulamin</a> • <a href="/polityka-prywatnosci">Polityka prywatności</a>
        </p>
      </footer>
    </div>
  )
}
