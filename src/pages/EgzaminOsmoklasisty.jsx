import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const EgzaminOsmoklasisty = () => {
  const navigate = useNavigate();

  const examRequirements = [
    {
      icon: '📖',
      title: 'Rozumienie ze słuchu',
      description: 'Nagrania native speakerów, dialogi, ogłoszenia',
      items: ['20+ nagrań ćwiczeniowych', 'Strategie słuchania', 'Mock listening tests']
    },
    {
      icon: '📝',
      title: 'Rozumienie tekstu',
      description: 'Czytanie ze zrozumieniem, dopasowanie, wybór wielokrotny',
      items: ['30+ tekstów ćwiczeniowych', 'Różne typy zadań', 'Techniki szybkiego czytania']
    },
    {
      icon: '✍️',
      title: 'Reagowanie językowe',
      description: 'Gramatyka, słownictwo, formy czasowników',
      items: ['Wszystkie czasy gramatyczne', '500+ słów obowiązkowych', 'Phrasal verbs']
    },
    {
      icon: '💬',
      title: 'Wypowiedź pisemna',
      description: 'E-mail, wiadomość, opowiadanie',
      items: ['Szablony wypowiedzi', 'Zwroty użytkowe', 'Korekta i feedback']
    }
  ];

  const courseContent = [
    {
      week: 'Tydzień 1-2',
      title: 'Podstawy i powtórka',
      topics: [
        'Present Simple, Present Continuous',
        'Past Simple, Past Continuous',
        'Słownictwo tematyczne (dom, szkoła, rodzina)',
        'Pierwsze testy diagnostyczne'
      ]
    },
    {
      week: 'Tydzień 3-4',
      title: 'Czasy przyszłe i Perfect',
      topics: [
        'Future Simple, be going to',
        'Present Perfect',
        'Stopniowanie przymiotników',
        'Listening - ogłoszenia i dialogi'
      ]
    },
    {
      week: 'Tydzień 5-6',
      title: 'Konstrukcje gramatyczne',
      topics: [
        'Conditionals (0, 1, 2)',
        'Strona bierna (Passive Voice)',
        'Czasowniki modalne',
        'Reading - różne typy tekstów'
      ]
    },
    {
      week: 'Tydzień 7-8',
      title: 'Słownictwo i reagowanie',
      topics: [
        'Phrasal verbs (50 najważniejszych)',
        'Kolokacje i idiomy',
        'Word formation',
        'Ćwiczenia typu egzaminacyjnego'
      ]
    },
    {
      week: 'Tydzień 9-10',
      title: 'Wypowiedź pisemna',
      topics: [
        'E-mail formalny i nieformalny',
        'Opowiadanie (storytelling)',
        'Opis osoby/miejsca',
        'Wyrażanie opinii'
      ]
    },
    {
      week: 'Tydzień 11-12',
      title: 'Testy próbne i powtórka',
      topics: [
        '5 pełnych testów próbnych',
        'Analiza błędów',
        'Strategie egzaminacyjne',
        'Last minute tips'
      ]
    }
  ];

  const examTopics = [
    { category: 'Dom i życie rodzinne', items: 'Członkowie rodziny, czynności domowe, relacje' },
    { category: 'Szkoła i nauka', items: 'Przedmioty szkolne, oceny, plany na przyszłość' },
    { category: 'Czas wolny i hobby', items: 'Sport, muzyka, film, zainteresowania' },
    { category: 'Życie codzienne', items: 'Zakupy, jedzenie, transport, zdrowie' },
    { category: 'Podróże i turystyka', items: 'Wakacje, zwiedzanie, kultura' },
    { category: 'Technologia', items: 'Internet, social media, urządzenia elektroniczne' }
  ];

  return (
    <div className="exam-course-page">
      {/* Hero Section */}
      <div className="exam-hero">
        <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
        <div className="exam-hero-content">
          <span className="exam-badge">Egzamin</span>
          <h1>Egzamin Ósmoklasisty z Angielskiego</h1>
          <p className="exam-subtitle">Kompleksowe przygotowanie - 12 tygodni do sukcesu!</p>
          <div className="exam-stats">
            <div className="stat-box">
              <span className="stat-number">12</span>
              <span className="stat-label">Tygodni</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100+</span>
              <span className="stat-label">Ćwiczeń</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">5</span>
              <span className="stat-label">Testów próbnych</span>
            </div>
          </div>
        </div>
      </div>

      <div className="exam-content">
        {/* Wymagania egzaminu */}
        <section className="exam-section">
          <h2 className="section-title">📋 Co sprawdza egzamin?</h2>
          <p className="section-intro">
            Egzamin ósmoklasisty z języka angielskiego składa się z 4 części. Nasz kurs przygotowuje do każdej z nich!
          </p>
          <div className="requirements-grid">
            {examRequirements.map((req, index) => (
              <div key={index} className="requirement-card">
                <div className="req-icon">{req.icon}</div>
                <h3>{req.title}</h3>
                <p className="req-description">{req.description}</p>
                <ul className="req-list">
                  {req.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-mark">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Program kursu */}
        <section className="exam-section gray-bg">
          <h2 className="section-title">📅 Program kursu (12 tygodni)</h2>
          <p className="section-intro">
            Systematyczne przygotowanie krok po kroku. Każdy tydzień ma jasno określone cele i materiały.
          </p>
          <div className="timeline">
            {courseContent.map((week, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-week">{week.week}</span>
                    <h3>{week.title}</h3>
                  </div>
                  <ul className="timeline-topics">
                    {week.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zakres tematyczny */}
        <section className="exam-section">
          <h2 className="section-title">🗂️ Zakres tematyczny (zgodny z wymaganiami MEN)</h2>
          <div className="topics-grid">
            {examTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <h4>{topic.category}</h4>
                <p>{topic.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Co otrzymujesz */}
        <section className="exam-section gray-bg">
          <h2 className="section-title">🎁 Co otrzymujesz w pakiecie?</h2>
          <div className="package-features">
            <div className="feature-row">
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <div>
                  <h4>Kompletne materiały</h4>
                  <p>Wszystkie tematy gramatyczne i słownictwo z podstawy programowej</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎧</span>
                <div>
                  <h4>Nagrania audio</h4>
                  <p>50+ nagrań native speakerów do ćwiczenia słuchania</p>
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-item">
                <span className="feature-icon">📝</span>
                <div>
                  <h4>5 testów próbnych</h4>
                  <p>Pełne testy egzaminacyjne z kluczem odpowiedzi i wyjaśnieniami</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👩‍🏫</span>
                <div>
                  <h4>Wsparcie nauczyciela</h4>
                  <p>Możliwość zadawania pytań i konsultacji online</p>
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div>
                  <h4>Tracking postępów</h4>
                  <p>System monitorowania Twojego rozwoju i słabszych punktów</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📄</span>
                <div>
                  <h4>Materiały PDF</h4>
                  <p>Wszystkie materiały do pobrania - ściągi, tabele, listy słówek</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jak przebiega kurs */}
        <section className="exam-section">
          <h2 className="section-title">🎯 Jak przebiega kurs?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Test diagnostyczny</h3>
              <p>Sprawdzamy Twój obecny poziom i identyfikujemy mocne i słabe strony</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Nauka systematyczna</h3>
              <p>Co tydzień nowe tematy, ćwiczenia i mini-testy sprawdzające</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Praktyka i powtórki</h3>
              <p>Regularne powtórki materiału i rozwiązywanie zadań egzaminacyjnych</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testy próbne</h3>
              <p>5 pełnych testów w warunkach egzaminacyjnych z dokładną analizą</p>
            </div>
          </div>
        </section>

        {/* Cennik i CTA */}
        <section className="exam-section cta-section">
          <div className="cta-box">
            <h2>Zacznij przygotowania już dziś!</h2>
            <p className="cta-description">
              Kompleksowy kurs przygotowujący do egzaminu ósmoklasisty z języka angielskiego. 
              Wszystko czego potrzebujesz w jednym miejscu!
            </p>
            <div className="pricing-box">
              <div className="price-tag">
                <span className="price-amount">299</span>
                <span className="price-currency">zł</span>
              </div>
              <ul className="price-includes">
                <li>✓ 12 tygodni intensywnej nauki</li>
                <li>✓ Dostęp do wszystkich materiałów</li>
                <li>✓ 5 testów próbnych</li>
                <li>✓ Wsparcie nauczyciela online</li>
                <li>✓ Dyplom ukończenia</li>
              </ul>
              <button className="btn-cta" onClick={() => navigate('/shop')}>
                Kup kurs teraz 🎓
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="exam-section gray-bg">
          <h2 className="section-title">❓ Najczęściej zadawane pytania</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Czy kurs jest zgodny z wymaganiami MEN?</h4>
              <p>Tak! Program kursu w 100% pokrywa wszystkie wymagania podstawy programowej dla egzaminu ósmoklasisty.</p>
            </div>
            <div className="faq-item">
              <h4>Na jaki wynik mogę liczyć po kursie?</h4>
              <p>Przy systematycznej nauce nasi uczniowie osiągają średnio 80-95% na egzaminie. Wszystko zależy od Twojego zaangażowania!</p>
            </div>
            <div className="faq-item">
              <h4>Ile czasu dziennie muszę poświęcić?</h4>
              <p>Zalecamy minimum 30-45 minut dziennie, 5 dni w tygodniu. To wystarczy, żeby przejść cały materiał.</p>
            </div>
            <div className="faq-item">
              <h4>Czy mogę zadawać pytania nauczycielowi?</h4>
              <p>Oczywiście! Masz dostęp do wsparcia nauczyciela przez cały czas trwania kursu - możesz zadawać pytania i prosić o wyjaśnienia.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EgzaminOsmoklasisty;
