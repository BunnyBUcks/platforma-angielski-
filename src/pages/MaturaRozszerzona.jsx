import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MaturaRozszerzona() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="matura-rozszerzona-page">
      {/* Hero Section */}
      <section className="matura-rozszerzona-hero">
        <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
        <div className="hero-content">
          <h1>Matura Rozszerzona z Angielskiego</h1>
          <p className="hero-subtitle">
            Zaawansowany program przygotowawczy na poziom B2+/C1
          </p>
          <p className="hero-description">
            Kompleksowe przygotowanie do egzaminu na poziomie rozszerzonym. 
            9-miesięczny program zapewniający najwyższe wyniki.
          </p>
          <button className="cta-button-hero" onClick={() => navigate('/shop')}>
            Rozpocznij Przygotowania - 799 zł
          </button>
        </div>
      </section>

      {/* Exam Structure */}
      <section className="exam-structure-section">
        <div className="container">
          <h2>Struktura Egzaminu Matura Rozszerzona</h2>
          <p className="section-intro">
            Egzamin trwa 150 minut i składa się z czterech części
          </p>
          <div className="structure-grid">
            <div className="structure-card">
              <div className="structure-icon">🎧</div>
              <h3>Rozumienie ze Słuchu</h3>
              <div className="structure-percentage">30%</div>
              <p>Zaawansowane nagrania: wywiady, wykłady, debaty, audycje radiowe</p>
              <ul>
                <li>Zadania wielokrotnego wyboru</li>
                <li>Zadania prawda/fałsz/brak informacji</li>
                <li>Uzupełnianie luk informacyjnych</li>
                <li>Materiały autentyczne B2+/C1</li>
              </ul>
            </div>

            <div className="structure-card">
              <div className="structure-icon">📖</div>
              <h3>Rozumienie Tekstów Pisanych</h3>
              <div className="structure-percentage">30%</div>
              <p>Teksty literackie, artykuły akademickie, eseje publicystyczne</p>
              <ul>
                <li>Analiza tekstów złożonych</li>
                <li>Rozpoznawanie intencji autora</li>
                <li>Dobieranie nagłówków</li>
                <li>Zadania na rozumienie szczegółowe</li>
              </ul>
            </div>

            <div className="structure-card">
              <div className="structure-icon">✍️</div>
              <h3>Znajomość Środków Językowych</h3>
              <div className="structure-percentage">20%</div>
              <p>Zaawansowana gramatyka i słownictwo na poziomie C1</p>
              <ul>
                <li>Transformacje zdaniowe</li>
                <li>Tworzenie wyrazów (word formation)</li>
                <li>Idiomy i phrasal verbs</li>
                <li>Zaawansowane struktury gramatyczne</li>
              </ul>
            </div>

            <div className="structure-card">
              <div className="structure-icon">✏️</div>
              <h3>Wypowiedź Pisemna</h3>
              <div className="structure-percentage">20%</div>
              <p>Dwa teksty użytkowe lub kreatywne (200-250 słów każdy)</p>
              <ul>
                <li>Esej argumentacyjny (for and against)</li>
                <li>Recenzja (film, książka, wydarzenie)</li>
                <li>List formalny/oficjalny</li>
                <li>Artykuł publicystyczny</li>
              </ul>
            </div>
          </div>

          <div className="exam-info-box">
            <h4>Informacje o Egzaminie</h4>
            <div className="info-grid">
              <div className="info-item">
                <strong>Czas trwania:</strong> 150 minut
              </div>
              <div className="info-item">
                <strong>Próg zaliczenia:</strong> 30%
              </div>
              <div className="info-item">
                <strong>Poziom CEFR:</strong> B2+ / C1
              </div>
              <div className="info-item">
                <strong>Wynik na studia:</strong> 80%+ (top uczelnie)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="program-timeline-section">
        <div className="container">
          <h2>9-Miesięczny Program Przygotowawczy</h2>
          <p className="section-intro">
            Systematyczne przygotowanie od podstaw B2 do biegłości C1
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1-3</div>
              <div className="timeline-content">
                <h3>Miesiące 1-3: Fundament B2</h3>
                <p>Ugruntowanie poziomu B2 i wprowadzenie struktur C1</p>
                <ul>
                  <li>Rozbudowa słownictwa akademickiego (1500+ słów)</li>
                  <li>Zaawansowane czasy gramatyczne i struktury</li>
                  <li>Techniki rozumienia tekstów złożonych</li>
                  <li>Pierwsza praca pisemna - feedback indywidualny</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">4-6</div>
              <div className="timeline-content">
                <h3>Miesiące 4-6: Poziom C1</h3>
                <p>Rozwój kompetencji na poziomie zaawansowanym</p>
                <ul>
                  <li>Idiomy, phrasal verbs i kolokacje (300+)</li>
                  <li>Transformacje zdaniowe wszystkich typów</li>
                  <li>Pisanie eseju argumentacyjnego (for/against)</li>
                  <li>4 egzaminy próbne z pełną oceną</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">7-9</div>
              <div className="timeline-content">
                <h3>Miesiące 7-9: Perfekcja i Strategia</h3>
                <p>Doskonalenie umiejętności i strategie egzaminacyjne</p>
                <ul>
                  <li>8 pełnych egzaminów próbnych</li>
                  <li>Analiza błędów i eliminacja słabych punktów</li>
                  <li>Trening czasowy - zarządzanie 150 minutami</li>
                  <li>Symulacja warunków egzaminacyjnych</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Areas */}
      <section className="thematic-areas-section">
        <div className="container">
          <h2>15 Obszarów Tematycznych</h2>
          <p className="section-intro">
            Kompletne przygotowanie zgodne z wymaganiami CKE
          </p>
          <div className="thematic-grid">
            <div className="thematic-card">
              <span className="thematic-number">01</span>
              <h4>Człowiek</h4>
              <p>Wygląd, charakter, uczucia, stany emocjonalne</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">02</span>
              <h4>Dom i Miejsce Zamieszkania</h4>
              <p>Typy mieszkań, urządzanie, problemy mieszkaniowe</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">03</span>
              <h4>Szkoła i Edukacja</h4>
              <p>System edukacji, przedmioty, egzaminy, studia</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">04</span>
              <h4>Praca i Kariera</h4>
              <p>Zawody, aplikacje, rozmowy kwalifikacyjne</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">05</span>
              <h4>Życie Rodzinne i Towarzyskie</h4>
              <p>Relacje, konflikty, uroczystości, tradycje</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">06</span>
              <h4>Żywienie i Zdrowie</h4>
              <p>Diety, choroby, zdrowy tryb życia, medycyna</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">07</span>
              <h4>Zakupy i Usługi</h4>
              <p>Sklepy, reklamacje, usługi, konsumeryzm</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">08</span>
              <h4>Podróżowanie i Turystyka</h4>
              <p>Transport, zakwaterowanie, zwiedzanie</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">09</span>
              <h4>Kultura</h4>
              <p>Literatura, film, teatr, muzyka, sztuka</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">10</span>
              <h4>Sport i Hobby</h4>
              <p>Dyscypliny sportowe, zawody, rekreacja</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">11</span>
              <h4>Nauka i Technika</h4>
              <p>Wynalazki, technologia, postęp naukowy</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">12</span>
              <h4>Przyroda i Ekologia</h4>
              <p>Środowisko, zagrożenia, ochrona przyrody</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">13</span>
              <h4>Państwo i Społeczeństwo</h4>
              <p>Polityka, prawo, problemy społeczne</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">14</span>
              <h4>Świat Współczesny</h4>
              <p>Globalizacja, migracje, konflikty, pokój</p>
            </div>
            <div className="thematic-card">
              <span className="thematic-number">15</span>
              <h4>Historia i Kultura Krajów Anglojęzycznych</h4>
              <p>USA, UK, Australia, Kanada - historia i tradycje</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="package-features-section">
        <div className="container">
          <h2>Co Otrzymujesz w Pakiecie?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Materiały Premium</h3>
              <ul>
                <li>200+ stron podręcznika PDF</li>
                <li>2000+ ćwiczeń interaktywnych</li>
                <li>100+ nagrań audio (C1 level)</li>
                <li>50+ tekstów do analizy</li>
                <li>Bank 500 zaawansowanych słów i fraz</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>12 Egzaminów Próbnych</h3>
              <ul>
                <li>Pełne egzaminy zgodne z CKE</li>
                <li>Szczegółowa ocena każdej części</li>
                <li>Analiza mocnych i słabych stron</li>
                <li>Tracking postępów miesiąc po miesiącu</li>
                <li>Symulacja rzeczywistych warunków</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3>Korekta Prac Pisemnych</h3>
              <ul>
                <li>20 prac z pełną korektą</li>
                <li>Szczegółowy feedback językowy</li>
                <li>Wskazówki dotyczące struktury</li>
                <li>Ocena zgodna z kryteriami CKE</li>
                <li>Przykładowe prace wzorcowe</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Strategie Egzaminacyjne</h3>
              <ul>
                <li>Zarządzanie czasem (150 min)</li>
                <li>Techniki eliminacji odpowiedzi</li>
                <li>Jak zdobyć maksimum punktów</li>
                <li>Unikanie typowych pułapek</li>
                <li>Strategie dla każdej części egzaminu</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Wsparcie Eksperta</h3>
              <ul>
                <li>Konsultacje mailowe 7 dni w tygodniu</li>
                <li>Odpowiedzi w ciągu 24h</li>
                <li>Indywidualne wyjaśnienia wątpliwości</li>
                <li>Pomoc w trudnych zagadnieniach</li>
                <li>Motywacja i wsparcie psychologiczne</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Bonus: Dyplom</h3>
              <ul>
                <li>Dyplom ukończenia kursu</li>
                <li>Potwierdzenie 180h nauki</li>
                <li>Dokument do portfolio</li>
                <li>Gwarancja jakości przygotowania</li>
                <li>Dodatkowy atut w CV</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-section">
        <div className="container">
          <h2>Jak Wygląda Proces?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Zapisz się na kurs</h3>
              <p>Wybierz pakiet i dokonaj płatności</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Test diagnostyczny</h3>
              <p>Określimy Twój aktualny poziom</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Nauka systematyczna</h3>
              <p>9 miesięcy intensywnego przygotowania</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Egzaminy próbne</h3>
              <p>12 testów sprawdzających postępy</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Sukces na maturze!</h3>
              <p>Zdobądź wynik 80%+ i dostań się na wymarzone studia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <h2>Inwestycja w Twoją Przyszłość</h2>
          <div className="pricing-card-large">
            <div className="pricing-badge">NAJPOPULARNIEJSZY</div>
            <h3>Pełny Pakiet Matura Rozszerzona</h3>
            <div className="price-display">
              <span className="price-amount">799 zł</span>
              <span className="price-period">/ 9 miesięcy</span>
            </div>
            <ul className="pricing-features">
              <li>✓ 9 miesięcy dostępu do platformy</li>
              <li>✓ 200+ stron materiałów PDF</li>
              <li>✓ 2000+ ćwiczeń interaktywnych</li>
              <li>✓ 12 pełnych egzaminów próbnych CKE</li>
              <li>✓ 20 korektur prac pisemnych</li>
              <li>✓ 100+ nagrań audio poziom C1</li>
              <li>✓ Wsparcie mailowe 7 dni w tygodniu</li>
              <li>✓ Bank 2000+ słów i fraz</li>
              <li>✓ Strategie egzaminacyjne</li>
              <li>✓ Dyplom ukończenia kursu</li>
            </ul>
            <button className="cta-button-pricing" onClick={() => navigate('/shop')}>
              Zapisz się teraz
            </button>
            <p className="pricing-note">
              Jednorazowa płatność. Dostęp przez 12 miesięcy (9 miesięcy kursu + 3 miesiące bonusowe).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2>Najczęściej Zadawane Pytania</h2>
          <div className="faq-list">
            <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <h3>Czy muszę mieć poziom B2, żeby rozpocząć kurs?</h3>
                <span className="faq-icon">{openFaq === 0 ? '−' : '+'}</span>
              </div>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>
                    Tak, kurs jest przeznaczony dla osób, które mają solidny poziom B2. 
                    Pierwsze 3 miesiące kursu służą ugruntowaniu B2 i stopniowemu wprowadzeniu 
                    struktur C1. Jeśli nie jesteś pewien swojego poziomu, skorzystaj z naszego 
                    bezpłatnego testu diagnostycznego przed zapisaniem się na kurs.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>Ile czasu dziennie muszę poświęcić na naukę?</h3>
                <span className="faq-icon">{openFaq === 1 ? '−' : '+'}</span>
              </div>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>
                    Zalecamy minimum 1-1,5 godziny nauki dziennie przez 5-6 dni w tygodniu. 
                    To daje około 40-50 godzin miesięcznie i 360-450 godzin przez cały kurs. 
                    Taki nakład czasu pozwala na systematyczny rozwój od poziomu B2 do C1 
                    i pewne zdanie matury rozszerzonej z wysokim wynikiem.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>Czy kurs przygotowuje do konkretnego egzaminu CKE?</h3>
                <span className="faq-icon">{openFaq === 2 ? '−' : '+'}</span>
              </div>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>
                    Tak! Kurs jest w 100% zgodny z aktualnymi wymaganiami CKE dla matury 
                    rozszerzonej. Wszystkie egzaminy próbne są oparte na strukturze i poziomie 
                    trudności rzeczywistych arkuszy maturalnych. Kryteria oceny prac pisemnych 
                    są identyczne jak na egzaminie. Uczysz się dokładnie tego, co będzie na maturze.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 3 ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>Jaki wynik mogę osiągnąć po ukończeniu kursu?</h3>
                <span className="faq-icon">{openFaq === 3 ? '−' : '+'}</span>
              </div>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>
                    Nasi kursanci osiągają średnio 75-90% na maturze rozszerzonej. 
                    Przy systematycznej nauce i wykonaniu wszystkich zadań realistyczne 
                    jest uzyskanie wyniku 80-85%, co wystarcza na najbardziej wymagające 
                    kierunki studiów. Osoby szczególnie zaangażowane regularnie przekraczają 90%.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(4)}>
                <h3>Czy mogę zacząć kurs w trakcie roku szkolnego?</h3>
                <span className="faq-icon">{openFaq === 4 ? '−' : '+'}</span>
              </div>
              {openFaq === 4 && (
                <div className="faq-answer">
                  <p>
                    Tak, możesz rozpocząć kurs w dowolnym momencie. Zalecamy jednak start 
                    najpóźniej we wrześniu, aby mieć pełne 9 miesięcy na przygotowania przed 
                    majową maturą. Jeśli zaczynasz później, możesz przejść kurs w przyspieszonym 
                    tempie, poświęcając więcej czasu dziennie na naukę.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item ${openFaq === 5 ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(5)}>
                <h3>Co jeśli nie zdam matury po kursie?</h3>
                <span className="faq-icon">{openFaq === 5 ? '−' : '+'}</span>
              </div>
              {openFaq === 5 && (
                <div className="faq-answer">
                  <p>
                    Przy systematycznej pracy z naszymi materiałami zdanie matury rozszerzonej 
                    jest praktycznie pewne. Jeśli jednak coś pójdzie nie tak, otrzymujesz 
                    bezpłatne przedłużenie dostępu do platformy na kolejne 6 miesięcy, 
                    aby przygotować się do egzaminu poprawkowego. Twój sukces jest naszym 
                    priorytetem!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Rozpocznij Przygotowania do Matury Rozszerzonej</h2>
          <p>
            Dołącz do setek zadowolonych kursantów, którzy osiągnęli swoje cele 
            i dostali się na wymarzone studia dzięki wysokiemu wynikowi z angielskiego.
          </p>
          <button className="cta-button-large" onClick={() => navigate('/shop')}>
            Zapisz się teraz - 799 zł
          </button>
          <p className="cta-subtext">
            9 miesięcy przygotowań • 12 egzaminów próbnych • Gwarancja sukcesu
          </p>
        </div>
      </section>
    </div>
  );
}

export default MaturaRozszerzona;
