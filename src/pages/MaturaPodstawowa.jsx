import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const MaturaPodstawowa = () => {
  const navigate = useNavigate();

  const examRequirements = [
    {
      icon: '🎧',
      title: 'Rozumienie ze słuchu',
      description: '30% egzaminu - nagrania, wywiady, monologi',
      items: ['Wybór wielokrotny', 'Prawda/Fałsz', 'Uzupełnianie luk', 'Dobieranie']
    },
    {
      icon: '📖',
      title: 'Rozumienie tekstu',
      description: '30% egzaminu - różne typy tekstów użytkowych',
      items: ['Artykuły prasowe', 'Ogłoszenia, reklamy', 'E-maile, listy', 'Fragmenty książek']
    },
    {
      icon: '✍️',
      title: 'Znajomość środków językowych',
      description: '20% egzaminu - gramatyka i słownictwo',
      items: ['Wszystkie czasy gramatyczne', 'Conditionals (0-3)', 'Passive Voice', 'Reported Speech']
    },
    {
      icon: '💬',
      title: 'Wypowiedź pisemna',
      description: '20% egzaminu - 2 formy do wyboru',
      items: ['E-mail formalny/nieformalny', 'Rozprawka (for and against)', 'Artykuł', 'Opowiadanie']
    }
  ];

  const courseContent = [
    {
      week: 'Miesiąc 1',
      title: 'Fundamenty i diagnostyka',
      topics: [
        'Test diagnostyczny - sprawdzenie obecnego poziomu',
        'Powtórka czasów: Present, Past, Future',
        'Słownictwo tematyczne podstawowe',
        'Pierwsze ćwiczenia typu maturalnego'
      ]
    },
    {
      week: 'Miesiąc 2',
      title: 'Czasy złożone i konstrukcje',
      topics: [
        'Present Perfect Simple & Continuous',
        'Past Perfect',
        'Future Perfect',
        'Listening - strategie skutecznego słuchania'
      ]
    },
    {
      week: 'Miesiąc 3',
      title: 'Gramatyka zaawansowana',
      topics: [
        'Wszystkie Conditionals (0, 1, 2, 3, Mixed)',
        'Strona bierna w różnych czasach',
        'Mowa zależna (Reported Speech)',
        'Reading - techniki szybkiego czytania'
      ]
    },
    {
      week: 'Miesiąc 4',
      title: 'Słownictwo rozszerzone',
      topics: [
        'Phrasal verbs (100 najważniejszych)',
        'Idiomy i kolokacje',
        'Word formation (przedrostki, przyrostki)',
        'Słownictwo tematyczne zaawansowane'
      ]
    },
    {
      week: 'Miesiąc 5',
      title: 'Wypowiedź pisemna - praktyka',
      topics: [
        'E-mail formalny (podanie, reklamacja)',
        'Rozprawka "za i przeciw"',
        'Artykuł (do gazety, bloga)',
        'Opowiadanie z elementami opisowymi'
      ]
    },
    {
      week: 'Miesiąc 6',
      title: 'Testy próbne i finalizacja',
      topics: [
        '8 pełnych arkuszy maturalnych',
        'Analiza błędów i słabych punktów',
        'Strategie egzaminacyjne',
        'Repetytorium przed maturą'
      ]
    }
  ];

  const examTopics = [
    { category: 'Człowiek', items: 'Wygląd, cechy charakteru, uczucia, relacje' },
    { category: 'Dom i mieszkanie', items: 'Typy domów, pomieszczenia, meble, okolica' },
    { category: 'Szkoła i praca', items: 'System edukacji, przedmioty, zawody, rozmowa kwalifikacyjna' },
    { category: 'Życie rodzinne i towarzyskie', items: 'Członkowie rodziny, święta, uroczystości, konflikty' },
    { category: 'Żywienie', items: 'Jedzenie, diety, restauracje, przepisy kulinarne' },
    { category: 'Zakupy i usługi', items: 'Sklepy, reklamacje, banki, poczta' },
    { category: 'Podróżowanie i turystyka', items: 'Transport, hotel, zwiedzanie, problemy w podróży' },
    { category: 'Kultura', items: 'Film, muzyka, literatura, sztuka, wydarzenia kulturalne' },
    { category: 'Sport', items: 'Dyscypliny sportowe, imprezy sportowe, zdrowy tryb życia' },
    { category: 'Zdrowie', items: 'Choroby, leczenie, zdrowe nawyki, uzależnienia' },
    { category: 'Świat przyrody', items: 'Zwierzęta, rośliny, pogoda, ochrona środowiska' },
    { category: 'Nauka i technika', items: 'Wynalazki, technologie, internet, social media' }
  ];

  return (
    <div className="exam-course-page">
      {/* Hero Section */}
      <div className="exam-hero matura-hero">
        <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
        <div className="exam-hero-content">
          <span className="exam-badge">Matura</span>
          <h1>Matura Podstawowa z Angielskiego</h1>
          <p className="exam-subtitle">Kompleksowe przygotowanie - 6 miesięcy intensywnej nauki!</p>
          <div className="exam-stats">
            <div className="stat-box">
              <span className="stat-number">6</span>
              <span className="stat-label">Miesięcy</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">200+</span>
              <span className="stat-label">Ćwiczeń</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">8</span>
              <span className="stat-label">Arkuszy próbnych</span>
            </div>
          </div>
        </div>
      </div>

      <div className="exam-content">
        {/* Wymagania egzaminu */}
        <section className="exam-section">
          <h2 className="section-title">📋 Struktura matury podstawowej</h2>
          <p className="section-intro">
            Matura z języka angielskiego na poziomie podstawowym składa się z 4 części. 
            Czas trwania: 120 minut. Wynik: minimum 30% do zdania.
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
          <h2 className="section-title">📅 Program kursu (6 miesięcy)</h2>
          <p className="section-intro">
            Systematyczne przygotowanie od podstaw do zaawansowanej praktyki. 
            Każdy miesiąc koncentruje się na konkretnych umiejętnościach.
          </p>
          <div className="timeline">
            {courseContent.map((month, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-week">{month.week}</span>
                    <h3>{month.title}</h3>
                  </div>
                  <ul className="timeline-topics">
                    {month.topics.map((topic, idx) => (
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
          <h2 className="section-title">🗂️ Zakres tematyczny (12 obszarów egzaminacyjnych)</h2>
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
                  <p>Wszystkie 12 obszarów tematycznych + pełna gramatyka</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎧</span>
                <div>
                  <h4>Nagrania audio</h4>
                  <p>100+ nagrań native speakerów w stylu maturalnym</p>
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-item">
                <span className="feature-icon">📝</span>
                <div>
                  <h4>8 arkuszy próbnych</h4>
                  <p>Pełne arkusze maturalne z lat poprzednich + nowe zestawy</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👩‍🏫</span>
                <div>
                  <h4>Korekta prac pisemnych</h4>
                  <p>Sprawdzanie i feedback dla wszystkich Twoich wypowiedzi</p>
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div>
                  <h4>Symulacje egzaminu</h4>
                  <p>Testy w warunkach maturalnych z pomiarem czasu</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📄</span>
                <div>
                  <h4>Repetytorium PDF</h4>
                  <p>Ściągi gramatyczne, listy słówek, zwroty użytkowe</p>
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
              <h3>Test wejściowy</h3>
              <p>Sprawdzamy Twój poziom i tworzymy indywidualny plan nauki</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Nauka miesięczna</h3>
              <p>Każdy miesiąc nowe zagadnienia + cotygodniowe mini-testy</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Praktyka intensywna</h3>
              <p>Setki zadań maturalnych, nagrania, pisanie wypowiedzi</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Arkusze próbne</h3>
              <p>8 pełnych symulacji matury z dokładną analizą wyników</p>
            </div>
          </div>
        </section>

        {/* Cennik i CTA */}
        <section className="exam-section cta-section">
          <div className="cta-box">
            <h2>Zdaj maturę z wysokim wynikiem!</h2>
            <p className="cta-description">
              Kompleksowy 6-miesięczny kurs przygotowujący do matury podstawowej z języka angielskiego. 
              Wszystko czego potrzebujesz, aby zdać z wynikiem 70%+!
            </p>
            <div className="pricing-box">
              <div className="price-tag">
                <span className="price-amount">499</span>
                <span className="price-currency">zł</span>
              </div>
              <ul className="price-includes">
                <li>✓ 6 miesięcy intensywnej nauki</li>
                <li>✓ Dostęp do wszystkich materiałów</li>
                <li>✓ 8 arkuszy maturalnych</li>
                <li>✓ Korekta prac pisemnych</li>
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
              <h4>Czy kurs przygotowuje do nowej formuły matury?</h4>
              <p>Tak! Program jest w pełni zgodny z aktualnymi wymaganiami CKE i obejmuje wszystkie zmiany w formule egzaminu.</p>
            </div>
            <div className="faq-item">
              <h4>Jaki poziom jest wymagany na start?</h4>
              <p>Minimum A2/B1. Jeśli nie jesteś pewien swojego poziomu, zrób nasz test diagnostyczny na początku kursu.</p>
            </div>
            <div className="faq-item">
              <h4>Ile czasu dziennie trzeba poświęcić?</h4>
              <p>Zalecamy minimum 1 godzinę dziennie, 5 dni w tygodniu. Im więcej czasu, tym lepszy rezultat!</p>
            </div>
            <div className="faq-item">
              <h4>Czy prace pisemne są sprawdzane?</h4>
              <p>Tak! Wszystkie Twoje wypowiedzi pisemne otrzymują szczegółowy feedback z oceną i wskazówkami do poprawy.</p>
            </div>
            <div className="faq-item">
              <h4>Jaki wynik mogę osiągnąć po kursie?</h4>
              <p>Przy systematycznej nauce nasi uczniowie osiągają średnio 70-85% na maturze podstawowej. Najlepsi przekraczają 90%!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MaturaPodstawowa;
