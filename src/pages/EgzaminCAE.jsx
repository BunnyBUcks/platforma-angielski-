import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CourseDescription.css';

function EgzaminCAE() {
  const navigate = useNavigate();

  return (
    <div className="course-description-container">
      {/* Hero Section */}
      <div className="course-hero exam-hero-cae">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="course-badge premium-badge">Cambridge English Advanced</span>
            <h1 className="course-title">CAE - Certificate in Advanced English</h1>
            <p className="course-subtitle">Certyfikat C1 - wyższy poziom zaawansowania dla profesjonalistów i akademików</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">16</span>
                <span className="stat-label">Tygodni</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">C1</span>
                <span className="stat-label">Poziom CEFR</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Części egzaminu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="course-content">
        
        {/* Overview Section */}
        <section className="content-section overview-section">
          <div className="section-header">
            <h2>🏆 O egzaminie CAE</h2>
            <div className="section-underline"></div>
          </div>
          <div className="overview-grid">
            <div className="overview-card premium-card">
              <div className="overview-icon">🎖️</div>
              <h3>Czym jest CAE?</h3>
              <p>Cambridge English: Advanced (CAE) to egzamin na poziomie C1, potwierdzający zaawansowaną znajomość języka angielskiego. Certyfikat jest uznawany przez ponad 25 000 organizacji na świecie jako dowód wysokich kompetencji językowych.</p>
            </div>
            <div className="overview-card premium-card">
              <div className="overview-icon">🌍</div>
              <h3>Dlaczego warto?</h3>
              <p>CAE to przepustka do najlepszych uczelni anglojęzycznych, kluczowy atut w międzynarodowej karierze i oficjalne potwierdzenie, że władasz językiem na poziomie bliskim native speakerowi. To certyfikat dla najbardziej ambitnych.</p>
            </div>
            <div className="overview-card premium-card">
              <div className="overview-icon">💎</div>
              <h3>Dla kogo?</h3>
              <p>Kurs skierowany do osób z solidnym poziomem B2+, które pragną osiągnąć zaawansowaną biegłość językową. Idealny dla studentów studiów magisterskich, menedżerów, naukowców i wszystkich, którzy pracują w międzynarodowym środowisku.</p>
            </div>
          </div>
        </section>

        {/* Exam Structure */}
        <section className="content-section structure-section">
          <div className="section-header">
            <h2>📋 Struktura egzaminu</h2>
            <div className="section-underline"></div>
          </div>
          <div className="exam-parts-list">
            <div className="exam-part advanced-part">
              <div className="part-header">
                <span className="part-number premium">1</span>
                <h3>Reading & Use of English</h3>
                <span className="part-duration">1h 30min</span>
              </div>
              <p className="part-description">
                8 części wymagających zaawansowanej znajomości gramatyki i słownictwa. 
                Kompleksowe zadania obejmujące transformacje, luki, dopasowywanie i analizę długich, złożonych tekstów.
              </p>
              <div className="part-skills">
                <span className="skill-tag premium">Zaawansowane czytanie</span>
                <span className="skill-tag premium">C1 Gramatyka</span>
                <span className="skill-tag premium">Idiomy i kolokacje</span>
              </div>
            </div>

            <div className="exam-part advanced-part">
              <div className="part-header">
                <span className="part-number premium">2</span>
                <h3>Writing</h3>
                <span className="part-duration">1h 30min</span>
              </div>
              <p className="part-description">
                Dwa zadania pisemne na poziomie akademickim: obowiązkowy esej (220-260 słów) oraz tekst do wyboru. 
                Wymagana jest perfekcyjna struktura, bogactwo języka i umiejętność wyrażania skomplikowanych myśli.
              </p>
              <div className="part-skills">
                <span className="skill-tag premium">Eseje akademickie</span>
                <span className="skill-tag premium">Raporty biznesowe</span>
                <span className="skill-tag premium">Propozycje i reviews</span>
              </div>
            </div>

            <div className="exam-part advanced-part">
              <div className="part-header">
                <span className="part-number premium">3</span>
                <h3>Listening</h3>
                <span className="part-duration">40min</span>
              </div>
              <p className="part-description">
                4 części z wymagającymi nagraniami: wykłady, wywiady, dyskusje. 
                Konieczne jest rozumienie subtelności, implikacji i różnych perspektyw w złożonych kontekstach.
              </p>
              <div className="part-skills">
                <span className="skill-tag premium">Zaawansowane słuchanie</span>
                <span className="skill-tag premium">Konteksty akademickie</span>
                <span className="skill-tag premium">Złożone dyskusje</span>
              </div>
            </div>

            <div className="exam-part advanced-part">
              <div className="part-header">
                <span className="part-number premium">4</span>
                <h3>Speaking</h3>
                <span className="part-duration">15min</span>
              </div>
              <p className="part-description">
                Egzamin ustny w parach z 4 częściami wymagającymi spontaniczności i płynności na poziomie zaawansowanym. 
                Obejmuje monolog, zadanie interakcyjne i dyskusję na abstrakcyjne tematy.
              </p>
              <div className="part-skills">
                <span className="skill-tag premium">Płynna wymowa</span>
                <span className="skill-tag premium">Argumentacja</span>
                <span className="skill-tag premium">Spontaniczność</span>
              </div>
            </div>
          </div>
        </section>

        {/* Course Program */}
        <section className="content-section program-section">
          <div className="section-header">
            <h2>📚 Program kursu przygotowawczego</h2>
            <div className="section-underline"></div>
          </div>
          <div className="program-grid">
            <div className="program-module premium-module">
              <div className="module-icon">📖</div>
              <h3>Reading & Use of English</h3>
              <ul>
                <li>Analiza złożonych tekstów akademickich i literackich</li>
                <li>Zaawansowane struktury gramatyczne C1</li>
                <li>Idiomy, frazeologizmy i kolokacje</li>
                <li>Techniki transformacji na najwyższym poziomie</li>
                <li>Rozumienie kontekstu i implikacji</li>
                <li>Praca z metaforami i subtelnym językiem</li>
              </ul>
            </div>

            <div className="program-module premium-module">
              <div className="module-icon">✍️</div>
              <h3>Writing</h3>
              <ul>
                <li>Pisanie esejów dyskursywnych i argumentacyjnych</li>
                <li>Tworzenie raportów i propozycji biznesowych</li>
                <li>Zaawansowane review i listy formalne</li>
                <li>Spójność, koherencja i styl akademicki</li>
                <li>Rozbudowane słownictwo i zaawansowane struktury</li>
                <li>Indywidualna analiza i korekta tekstów</li>
              </ul>
            </div>

            <div className="program-module premium-module">
              <div className="module-icon">🎧</div>
              <h3>Listening</h3>
              <ul>
                <li>Słuchanie wykładów uniwersyteckich i prezentacji</li>
                <li>Rozumienie złożonych dyskusji i debat</li>
                <li>Wychwytywanie niuansów i opinii</li>
                <li>Różne akcenty i tempa mówienia</li>
                <li>Notowanie i przetwarzanie informacji</li>
                <li>Autentyczne materiały na poziomie C1</li>
              </ul>
            </div>

            <div className="program-module premium-module">
              <div className="module-icon">🗣️</div>
              <h3>Speaking</h3>
              <ul>
                <li>Spontaniczne wypowiedzi na abstrakcyjne tematy</li>
                <li>Argumentacja i wyrażanie złożonych opinii</li>
                <li>Negocjacje i rozwiązywanie problemów</li>
                <li>Płynność i naturalność wypowiedzi</li>
                <li>Zaawansowane słownictwo i idiomy</li>
                <li>Mock examy z profesjonalnym feedbackiem</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="content-section benefits-section premium-benefits">
          <div className="section-header">
            <h2>✨ Co zyskujesz?</h2>
            <div className="section-underline"></div>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">🎯</span>
              <h3>Intensywne przygotowanie</h3>
              <p>16 tygodni zaawansowanego treningu z doświadczonym egzaminatorem Cambridge</p>
            </div>
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">📚</span>
              <h3>Premium materiały</h3>
              <p>Oficjalne testy Cambridge CAE, zaawansowane ćwiczenia i materiały dodatkowe</p>
            </div>
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">💼</span>
              <h3>Konteksty biznesowe</h3>
              <p>Praktyka z materiałami biznesowymi i akademickimi na najwyższym poziomie</p>
            </div>
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">🎤</span>
              <h3>Zaawansowany Speaking</h3>
              <p>Regularne sesje konwersacyjne z symulacją egzaminu i nagraniami do analizy</p>
            </div>
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">📊</span>
              <h3>Full Mock Exams</h3>
              <p>Kompletne testy próbne w warunkach egzaminacyjnych ze szczegółową oceną</p>
            </div>
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">🏆</span>
              <h3>Mentoring indywidualny</h3>
              <p>Osobiste konsultacje, strategia sukcesu i wsparcie do momentu egzaminu</p>
            </div>
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">📖</span>
              <h3>Biblioteka zasobów</h3>
              <p>Dostęp do setek artykułów, esejów wzorcowych i nagrań na poziomie C1</p>
            </div>
            <div className="benefit-card premium-benefit">
              <span className="benefit-icon">✍️</span>
              <h3>Writing feedback</h3>
              <p>Szczegółowa korekta wszystkich prac pisemnych z sugestiami poprawy</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="content-section cta-section premium-cta">
          <div className="cta-box premium-cta-box">
            <h2>🚀 Osiągnij poziom C1 z certyfikatem Cambridge!</h2>
            <p>Dołącz do elity i zdobądź certyfikat uznawany przez najlepsze uczelnie i korporacje świata</p>
            <div className="cta-buttons">
              <button className="btn-primary-large premium-btn" onClick={() => navigate('/shop')}>
                Zapisz się na kurs CAE 🏆
              </button>
              <button className="btn-secondary-large" onClick={() => navigate('/dashboard')}>
                Sprawdź swój poziom 📊
              </button>
            </div>
            <div className="cta-info">
              <p className="price-info premium-price">💎 Cena kursu: <strong>399 zł</strong></p>
              <p className="guarantee-info">✅ Najwyższy standard przygotowania do egzaminu Cambridge</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default EgzaminCAE;
