import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BusinessEnglish() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="business-english-page">
      {/* Hero Section */}
      <section className="business-hero">
        <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
        <div className="business-hero-content">
          <span className="business-badge">Professional Development</span>
          <h1>Business English B2</h1>
          <p className="business-subtitle">
            Profesjonalny angielski dla kariery międzynarodowej
          </p>
          <p className="business-description">
            Zaawansowany program biznesowy dla menedżerów, specjalistów i przedsiębiorców. 
            Opanuj język biznesu i komunikuj się pewnie w środowisku korporacyjnym.
          </p>
          <button className="cta-button-business" onClick={() => navigate('/shop')}>
            Inwestuj w Swoją Karierę - 899 zł
          </button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="benefits-section">
        <div className="container">
          <h2>Dlaczego Business English B2?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Awans i Wyższe Zarobki</h3>
              <p>
                Pracownicy ze znajomością Business English zarabiają średnio 30-40% 
                więcej niż ich odpowiednicy bez tej umiejętności.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Międzynarodowa Kariera</h3>
              <p>
                Otwórz sobie drzwi do pracy w międzynarodowych korporacjach, 
                startupach i organizacjach na całym świecie.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Pewność w Biznesie</h3>
              <p>
                Prowadź prezentacje, negocjacje i spotkania po angielsku 
                z pewnością siebie i profesjonalizmem.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Networking Międzynarodowy</h3>
              <p>
                Buduj wartościowe relacje biznesowe z partnerami, klientami 
                i współpracownikami z całego świata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="modules-section">
        <div className="container">
          <h2>Program Kursu - 10 Modułów Biznesowych</h2>
          <p className="section-intro">
            Kompleksowy program obejmujący wszystkie aspekty komunikacji biznesowej
          </p>
          <div className="modules-grid">
            <div className="module-card">
              <div className="module-number">01</div>
              <h3>Business Communication Essentials</h3>
              <p className="module-desc">Podstawy komunikacji biznesowej</p>
              <ul>
                <li>Business email writing (pisanie profesjonalnych maili)</li>
                <li>Phone etiquette (etykieta telefoniczna)</li>
                <li>Small talk and networking</li>
                <li>Professional vocabulary (500+ terminów)</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">02</div>
              <h3>Meetings & Presentations</h3>
              <p className="module-desc">Spotkania i prezentacje biznesowe</p>
              <ul>
                <li>Organizing and leading meetings</li>
                <li>Giving impactful presentations</li>
                <li>Visual aids and body language</li>
                <li>Handling questions and discussions</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">03</div>
              <h3>Negotiations & Sales</h3>
              <p className="module-desc">Negocjacje i sprzedaż</p>
              <ul>
                <li>Negotiation techniques and strategies</li>
                <li>Sales pitch and persuasion</li>
                <li>Dealing with objections</li>
                <li>Closing deals successfully</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">04</div>
              <h3>Project Management</h3>
              <p className="module-desc">Zarządzanie projektami</p>
              <ul>
                <li>Project planning and reporting</li>
                <li>Team coordination vocabulary</li>
                <li>Agile and Scrum terminology</li>
                <li>Risk management communication</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">05</div>
              <h3>Finance & Accounting</h3>
              <p className="module-desc">Finanse i księgowość</p>
              <ul>
                <li>Financial reports and statements</li>
                <li>Budget discussions and planning</li>
                <li>Investment and banking vocabulary</li>
                <li>Economic trends analysis</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">06</div>
              <h3>Marketing & Advertising</h3>
              <p className="module-desc">Marketing i reklama</p>
              <ul>
                <li>Marketing strategies and campaigns</li>
                <li>Digital marketing terminology</li>
                <li>Brand positioning and messaging</li>
                <li>Market research vocabulary</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">07</div>
              <h3>HR & Recruitment</h3>
              <p className="module-desc">HR i rekrutacja</p>
              <ul>
                <li>Job interviews - as interviewer and candidate</li>
                <li>Writing CVs and cover letters</li>
                <li>Performance reviews and feedback</li>
                <li>Workplace policies and procedures</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">08</div>
              <h3>Legal & Contracts</h3>
              <p className="module-desc">Aspekty prawne i umowy</p>
              <ul>
                <li>Understanding business contracts</li>
                <li>Terms and conditions vocabulary</li>
                <li>Legal correspondence</li>
                <li>Intellectual property basics</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">09</div>
              <h3>Cross-Cultural Communication</h3>
              <p className="module-desc">Komunikacja międzykulturowa</p>
              <ul>
                <li>Working with international teams</li>
                <li>Cultural differences in business</li>
                <li>Business etiquette around the world</li>
                <li>Avoiding miscommunication</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-number">10</div>
              <h3>Leadership & Management</h3>
              <p className="module-desc">Przywództwo i zarządzanie</p>
              <ul>
                <li>Leadership communication styles</li>
                <li>Motivating and inspiring teams</li>
                <li>Conflict resolution strategies</li>
                <li>Decision-making vocabulary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section className="skills-section">
        <div className="container">
          <h2>Rozwijane Kompetencje</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">✉️</div>
              <h4>Business Writing</h4>
              <p>Profesjonalne pisanie maili, raportów, propozycji i dokumentów biznesowych</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🎤</div>
              <h4>Public Speaking</h4>
              <p>Prezentacje, wystąpienia publiczne i komunikacja przed grupą</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">💬</div>
              <h4>Business Conversations</h4>
              <p>Rozmowy telefoniczne, video calls, spotkania face-to-face</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">📊</div>
              <h4>Data Presentation</h4>
              <p>Prezentacja danych, wykresów, analiz i raportów</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🤝</div>
              <h4>Negotiation Skills</h4>
              <p>Negocjacje kontraktów, warunków współpracy i strategii</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">👥</div>
              <h4>Team Management</h4>
              <p>Zarządzanie zespołem międzynarodowym po angielsku</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="features-section-business">
        <div className="container">
          <h2>Co Otrzymujesz w Pakiecie Premium?</h2>
          <div className="features-list">
            <div className="feature-row">
              <div className="feature-icon-large">📚</div>
              <div className="feature-content">
                <h3>Materiały Premium</h3>
                <ul>
                  <li>150 stron podręcznika Business English PDF</li>
                  <li>1500+ ćwiczeń interaktywnych z autentycznych sytuacji biznesowych</li>
                  <li>200+ szablonów: maile, prezentacje, dokumenty</li>
                  <li>Glossary 2000+ terminów biznesowych z przykładami</li>
                  <li>50+ case studies z prawdziwych firm</li>
                </ul>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon-large">🎧</div>
              <div className="feature-content">
                <h3>Audio & Video Content</h3>
                <ul>
                  <li>80+ nagrań audio: rozmowy telefoniczne, spotkania, prezentacje</li>
                  <li>30+ video lekcji z native speakerami</li>
                  <li>Webinary z ekspertami z międzynarodowych korporacji</li>
                  <li>Podcast Business English (dostęp na 12 miesięcy)</li>
                  <li>Real-life business scenarios</li>
                </ul>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon-large">✍️</div>
              <div className="feature-content">
                <h3>Indywidualna Korekta</h3>
                <ul>
                  <li>15 prac pisemnych z pełną korektą (maile, raporty, propozycje)</li>
                  <li>Feedback językowy od doświadczonego nauczyciela</li>
                  <li>Analiza stylu i tonu komunikacji</li>
                  <li>Wskazówki dotyczące profesjonalizmu</li>
                  <li>Możliwość ponownego wysłania po poprawkach</li>
                </ul>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon-large">🎯</div>
              <div className="feature-content">
                <h3>Symulacje i Praktyka</h3>
                <ul>
                  <li>Role-play scenarios: negocjacje, prezentacje, spotkania</li>
                  <li>Mock business calls z feedbackiem</li>
                  <li>Symulacje job interviews (pracodawca i kandydat)</li>
                  <li>Group discussion topics</li>
                  <li>Networking exercises</li>
                </ul>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon-large">🌟</div>
              <div className="feature-content">
                <h3>Bonus: Career Support</h3>
                <ul>
                  <li>Pomoc w przygotowaniu CV po angielsku</li>
                  <li>LinkedIn profile optimization</li>
                  <li>Cover letter templates dla różnych branż</li>
                  <li>Lista top portali z ofertami pracy międzynarodowej</li>
                  <li>Networking tips dla profesjonalistów</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section-business">
        <div className="container">
          <h2>Twoja Ścieżka do Sukcesu - 6 Miesięcy</h2>
          <div className="business-timeline">
            <div className="timeline-phase">
              <div className="phase-number">Miesiąc 1-2</div>
              <h3>Foundation & Assessment</h3>
              <p className="phase-subtitle">Fundament i diagnoza potrzeb</p>
              <ul>
                <li>Test diagnostyczny - określenie aktualnego poziomu</li>
                <li>Business vocabulary essentials (500+ słów)</li>
                <li>Email writing basics</li>
                <li>Pierwsze symulacje business calls</li>
              </ul>
            </div>

            <div className="timeline-phase">
              <div className="phase-number">Miesiąc 3-4</div>
              <h3>Core Business Skills</h3>
              <p className="phase-subtitle">Kluczowe umiejętności biznesowe</p>
              <ul>
                <li>Meetings, presentations, negotiations (5 modułów)</li>
                <li>Advanced vocabulary (dodatkowe 800+ terminów)</li>
                <li>Industry-specific language (wybór branży)</li>
                <li>Case studies i analiza prawdziwych sytuacji</li>
              </ul>
            </div>

            <div className="timeline-phase">
              <div className="phase-number">Miesiąc 5-6</div>
              <h3>Mastery & Excellence</h3>
              <p className="phase-subtitle">Mistrzostwo i doskonalenie</p>
              <ul>
                <li>Zaawansowane moduły (leadership, cross-cultural)</li>
                <li>Finalizacja wszystkich projektów pisemnych</li>
                <li>Symulacje końcowe i egzamin podsumowujący</li>
                <li>Potwierdzenie osiągnięcia poziomu B2 w Business English</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="audience-section">
        <div className="container">
          <h2>Dla Kogo Jest Ten Kurs?</h2>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">👨‍💼</div>
              <h3>Menedżerowie</h3>
              <p>Zarządzający zespołami, którzy potrzebują efektywnie komunikować się w międzynarodowym środowisku</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">💼</div>
              <h3>Specjaliści</h3>
              <p>Profesjonaliści z różnych branż, którzy pracują lub chcą pracować w środowisku międzynarodowym</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🚀</div>
              <h3>Przedsiębiorcy</h3>
              <p>Właściciele firm prowadzący lub planujący międzynarodową ekspansję biznesową</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">📊</div>
              <h3>Analitycy & Consultants</h3>
              <p>Osoby przygotowujące raporty, analizy i prezentacje dla międzynarodowych klientów</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🎓</div>
              <h3>MBA Candidates</h3>
              <p>Osoby planujące studia MBA lub inne programy biznesowe w języku angielskim</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🌍</div>
              <h3>Career Changers</h3>
              <p>Profesjonaliści planujący zmianę pracy na stanowiska w międzynarodowych korporacjach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section-business">
        <div className="container">
          <h2>Inwestycja w Rozwój Kariery</h2>
          <div className="pricing-comparison">
            <div className="pricing-card-business">
              <div className="pricing-header">
                <h3>Business English B2</h3>
                <p className="pricing-tagline">Premium Package</p>
              </div>
              <div className="price-box">
                <span className="price-large">899 zł</span>
                <span className="price-period">/ 6 miesięcy</span>
              </div>
              <div className="price-breakdown">
                <p>To tylko <strong>150 zł/miesiąc</strong></p>
                <p className="price-note">Mniej niż koszt 2 lekcji z native speakerem</p>
              </div>
              <ul className="pricing-includes">
                <li>✓ 6 miesięcy dostępu do platformy (+ 3 miesiące bonus)</li>
                <li>✓ 10 modułów biznesowych</li>
                <li>✓ 150 stron materiałów PDF</li>
                <li>✓ 1500+ ćwiczeń interaktywnych</li>
                <li>✓ 80+ nagrań audio + 30 video</li>
                <li>✓ 15 korektur prac pisemnych</li>
                <li>✓ 200+ szablonów biznesowych</li>
                <li>✓ Case studies i symulacje</li>
                <li>✓ Wsparcie mailowe</li>
                <li>✓ Career support (CV, LinkedIn)</li>
              </ul>
              <button className="cta-button-business-large" onClick={() => navigate('/shop')}>
                Rozpocznij Teraz
              </button>
              <p className="roi-note">
                💡 <strong>ROI:</strong> Pracownicy z Business English zarabiają średnio 30-40% więcej. 
                Inwestycja zwróci się wielokrotnie!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section-business">
        <div className="container">
          <h2>Najczęściej Zadawane Pytania</h2>
          <div className="faq-list-business">
            <div className={`faq-item-business ${openFaq === 0 ? 'open' : ''}`}>
              <div className="faq-question-business" onClick={() => toggleFaq(0)}>
                <h3>Czy potrzebuję poziomu B2, żeby rozpocząć kurs?</h3>
                <span className="faq-icon-business">{openFaq === 0 ? '−' : '+'}</span>
              </div>
              {openFaq === 0 && (
                <div className="faq-answer-business">
                  <p>
                    Zalecamy poziom minimum B1+ do komfortowej nauki. Kurs jest zaprojektowany 
                    tak, aby doprowadzić Cię od poziomu B1+ do solidnego B2 w kontekście biznesowym. 
                    Na początku przeprowadzamy test diagnostyczny, który pomoże nam dostosować 
                    materiały do Twojego poziomu wyjściowego.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item-business ${openFaq === 1 ? 'open' : ''}`}>
              <div className="faq-question-business" onClick={() => toggleFaq(1)}>
                <h3>Ile czasu muszę poświęcić na naukę?</h3>
                <span className="faq-icon-business">{openFaq === 1 ? '−' : '+'}</span>
              </div>
              {openFaq === 1 && (
                <div className="faq-answer-business">
                  <p>
                    Zalecamy 3-4 godziny tygodniowo, co daje około 12-16 godzin miesięcznie. 
                    To elastyczny program, który możesz dostosować do swojego grafiku. Wielu 
                    naszych kursantów uczy się wieczorami po pracy lub w weekendy. Platforma 
                    jest dostępna 24/7, więc uczysz się wtedy, kiedy Ci pasuje.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item-business ${openFaq === 2 ? 'open' : ''}`}>
              <div className="faq-question-business" onClick={() => toggleFaq(2)}>
                <h3>Czy materiały są dostosowane do mojej branży?</h3>
                <span className="faq-icon-business">{openFaq === 2 ? '−' : '+'}</span>
              </div>
              {openFaq === 2 && (
                <div className="faq-answer-business">
                  <p>
                    Kurs obejmuje słownictwo i scenariusze z różnych branż: IT, finanse, 
                    marketing, HR, sprzedaż, zarządzanie projektami, prawo. W module 3-4 
                    możesz wybrać specjalizację branżową i skupić się na terminologii 
                    specyficznej dla Twojej dziedziny. Oferujemy również dodatkowe materiały 
                    dla konkretnych sektorów.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item-business ${openFaq === 3 ? 'open' : ''}`}>
              <div className="faq-question-business" onClick={() => toggleFaq(3)}>
                <h3>Czy mogę liczyć na pomoc przy CV i rozmowach kwalifikacyjnych?</h3>
                <span className="faq-icon-business">{openFaq === 3 ? '−' : '+'}</span>
              </div>
              {openFaq === 3 && (
                <div className="faq-answer-business">
                  <p>
                    Tak! W ramach kursu otrzymujesz moduł HR & Recruitment, który obejmuje 
                    przygotowanie do job interviews, pisanie CV i cover letters. Dodatkowo 
                    w pakiecie Career Support pomożemy Ci zoptymalizować profil LinkedIn, 
                    przygotować CV po angielsku i udzielimy wskazówek dotyczących rozmów 
                    kwalifikacyjnych w międzynarodowych firmach.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-item-business ${openFaq === 4 ? 'open' : ''}`}>
              <div className="faq-question-business" onClick={() => toggleFaq(4)}>
                <h3>Czy firma może sfinansować kurs?</h3>
                <span className="faq-icon-business">{openFaq === 4 ? '−' : '+'}</span>
              </div>
              {openFaq === 4 && (
                <div className="faq-answer-business">
                  <p>
                    Oczywiście! Wiele firm inwestuje w rozwój swoich pracowników. Oferujemy 
                    faktury VAT i szczegółowe raporty z postępów, które możesz przedstawić 
                    w dziale HR. Dla zamówień firmowych (5+ osób) oferujemy rabaty i 
                    możliwość dostosowania programu do specyfiki firmy. Skontaktuj się z nami 
                    w sprawie oferty B2B.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-business">
        <div className="container">
          <h2>Zainwestuj w Swoją Karierę Dziś</h2>
          <p className="cta-description">
            Dołącz do setek profesjonalistów, którzy rozwinęli swoją karierę dzięki 
            Business English B2. Rozpocznij teraz i otwórz sobie drzwi do międzynarodowych 
            możliwości.
          </p>
          <button className="cta-button-final" onClick={() => navigate('/shop')}>
            Rozpocznij Kurs - 899 zł
          </button>
          <p className="cta-subtext">
            ✓ 6 miesięcy kursu + 3 miesiące bonus • ✓ Profesjonalne materiały • ✓ Gwarancja jakości
          </p>
        </div>
      </section>
    </div>
  );
}

export default BusinessEnglish;
