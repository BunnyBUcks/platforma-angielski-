import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CourseDescription.css';

function EgzaminFCE() {
  const navigate = useNavigate();

  return (
    <div className="course-description-container">
      {/* Hero Section */}
      <div className="course-hero exam-hero-fce">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="course-badge">Cambridge English</span>
            <h1 className="course-title">FCE - First Certificate in English</h1>
            <p className="course-subtitle">Certyfikat B2 uznawany przez tysiące uczelni i pracodawców na całym świecie</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Tygodni</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">B2</span>
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
            <h2>🎯 O egzaminie FCE</h2>
            <div className="section-underline"></div>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">📘</div>
              <h3>Czym jest FCE?</h3>
              <p>Cambridge English: First (FCE) to międzynarodowy egzamin potwierdzający znajomość języka angielskiego na poziomie B2. Certyfikat jest ważny bezterminowo i uznawany przez tysiące instytucji edukacyjnych i firm na całym świecie.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">💼</div>
              <h3>Dlaczego warto?</h3>
              <p>FCE otwiera drzwi do studiów za granicą, zwiększa szanse na rynku pracy międzynarodowym i potwierdza umiejętność swobodnej komunikacji w środowisku anglojęzycznym - zarówno w pracy, jak i w życiu codziennym.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">🎓</div>
              <h3>Dla kogo?</h3>
              <p>Kurs przeznaczony jest dla osób, które ukończyły poziom B1 i chcą zdobyć prestiżowy certyfikat Cambridge. Idealny dla studentów, profesjonalistów i wszystkich pragnących oficjalnie potwierdzić swoje kompetencje językowe.</p>
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
            <div className="exam-part">
              <div className="part-header">
                <span className="part-number">1</span>
                <h3>Reading & Use of English</h3>
                <span className="part-duration">1h 15min</span>
              </div>
              <p className="part-description">
                7 części testujących rozumienie tekstów oraz znajomość gramatyki i słownictwa. 
                Zadania obejmują luki, transformacje zdań i dopasowywanie informacji.
              </p>
              <div className="part-skills">
                <span className="skill-tag">Czytanie ze zrozumieniem</span>
                <span className="skill-tag">Gramatyka</span>
                <span className="skill-tag">Słownictwo</span>
              </div>
            </div>

            <div className="exam-part">
              <div className="part-header">
                <span className="part-number">2</span>
                <h3>Writing</h3>
                <span className="part-duration">1h 20min</span>
              </div>
              <p className="part-description">
                Dwie wypracowania: obowiązkowy esej (140-190 słów) oraz tekst do wyboru: artykuł, 
                email/list, recenzja lub raport. Oceniana jest struktura, spójność i bogactwo języka.
              </p>
              <div className="part-skills">
                <span className="skill-tag">Pisanie esejów</span>
                <span className="skill-tag">Artykuły</span>
                <span className="skill-tag">Listy formalne</span>
              </div>
            </div>

            <div className="exam-part">
              <div className="part-header">
                <span className="part-number">3</span>
                <h3>Listening</h3>
                <span className="part-duration">40min</span>
              </div>
              <p className="part-description">
                4 części ze zróżnicowanymi nagraniami: rozmowy, monologi, wywiady. 
                Zadania sprawdzają rozumienie głównych myśli, szczegółów i opinii mówiących.
              </p>
              <div className="part-skills">
                <span className="skill-tag">Słuchanie ze zrozumieniem</span>
                <span className="skill-tag">Wychwytywanie szczegółów</span>
                <span className="skill-tag">Różne akcenty</span>
              </div>
            </div>

            <div className="exam-part">
              <div className="part-header">
                <span className="part-number">4</span>
                <h3>Speaking</h3>
                <span className="part-duration">14min</span>
              </div>
              <p className="part-description">
                Egzamin ustny w parach, składający się z 4 części: rozmowa wprowadzająca, 
                monolog z opisem zdjęć, zadanie interakcyjne oraz dyskusja. Oceniana jest płynność i poprawność.
              </p>
              <div className="part-skills">
                <span className="skill-tag">Mówienie</span>
                <span className="skill-tag">Interakcja</span>
                <span className="skill-tag">Prezentacja</span>
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
            <div className="program-module">
              <div className="module-icon">📖</div>
              <h3>Reading & Use of English</h3>
              <ul>
                <li>Strategie czytania ze zrozumieniem</li>
                <li>Zaawansowana gramatyka B2</li>
                <li>Rozszerzanie słownictwa tematycznego</li>
                <li>Techniki rozwiązywania transformacji</li>
                <li>Analiza różnych typów tekstów</li>
              </ul>
            </div>

            <div className="program-module">
              <div className="module-icon">✍️</div>
              <h3>Writing</h3>
              <ul>
                <li>Struktura i planowanie esejów</li>
                <li>Pisanie artykułów i recenzji</li>
                <li>Formalne i nieformalne listy/emaile</li>
                <li>Łączniki i spójność tekstu</li>
                <li>Ocena i feedback do prac pisemnych</li>
              </ul>
            </div>

            <div className="program-module">
              <div className="module-icon">🎧</div>
              <h3>Listening</h3>
              <ul>
                <li>Rozpoznawanie różnych akcentów</li>
                <li>Słuchanie selektywne i szczegółowe</li>
                <li>Notowanie kluczowych informacji</li>
                <li>Autentyczne nagrania egzaminacyjne</li>
                <li>Strategie radzenia sobie z trudnościami</li>
              </ul>
            </div>

            <div className="program-module">
              <div className="module-icon">🗣️</div>
              <h3>Speaking</h3>
              <ul>
                <li>Praca w parach i symulacje egzaminu</li>
                <li>Opisywanie i porównywanie zdjęć</li>
                <li>Wyrażanie i uzasadnianie opinii</li>
                <li>Płynność i poprawność wymowy</li>
                <li>Techniki radzenia sobie ze stresem</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="content-section benefits-section">
          <div className="section-header">
            <h2>✨ Co zyskujesz?</h2>
            <div className="section-underline"></div>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">🎯</span>
              <h3>Kompleksowe przygotowanie</h3>
              <p>12 tygodni intensywnego treningu wszystkich części egzaminu z doświadczonym lektorem</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">📝</span>
              <h3>Materiały egzaminacyjne</h3>
              <p>Dostęp do oficjalnych testów Cambridge, przykładowych zadań i szczegółowych kluczy odpowiedzi</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">💬</span>
              <h3>Praktyka konwersacyjna</h3>
              <p>Regularne sesje Speaking w parach z symulacją rzeczywistego egzaminu ustnego</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">📊</span>
              <h3>Testy próbne</h3>
              <p>Mock examy w warunkach egzaminacyjnych z dokładną oceną i indywidualnym feedbackiem</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">📚</span>
              <h3>Bogaty bank zadań</h3>
              <p>Setki ćwiczeń gramatycznych, leksykalnych i sprawdzających wszystkie umiejętności</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🎓</span>
              <h3>Wsparcie mentorskie</h3>
              <p>Indywidualne konsultacje, analiza mocnych i słabych stron, strategia nauki</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="content-section cta-section">
          <div className="cta-box">
            <h2>🚀 Zacznij swoją przygodę z FCE już dziś!</h2>
            <p>Dołącz do grona tysięcy osób, które zdobyły prestiżowy certyfikat Cambridge</p>
            <div className="cta-buttons">
              <button className="btn-primary-large" onClick={() => navigate('/shop')}>
                Zapisz się na kurs 🎓
              </button>
              <button className="btn-secondary-large" onClick={() => navigate('/dashboard')}>
                Sprawdź swój poziom 📊
              </button>
            </div>
            <div className="cta-info">
              <p className="price-info">💰 Cena kursu: <strong>399 zł</strong></p>
              <p className="guarantee-info">✅ Gwarancja najwyższej jakości nauczania</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default EgzaminFCE;
