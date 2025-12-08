import { useNavigate } from 'react-router-dom';

export default function AutorskieMateriały() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <header className="page-header">
          <h1>📚 Autorskie Materiały</h1>
          <p className="subtitle">Lata pracy, pasji i doświadczenia w każdej lekcji</p>
        </header>

        <section className="intro-section">
          <div className="intro-card">
            <h2>💎 Dlaczego autorskie materiały są wyjątkowe?</h2>
            <p>
              Każdy kurs, test i ćwiczenie na tej platformie zostały stworzone osobiście przeze mnie. 
              To nie są gotowe szablony czy materiały kupione z internetu - to efekt lat nauki, 
              doświadczenia i niezliczonych godzin pracy.
            </p>
          </div>
        </section>

        <section className="journey-section">
          <h2>🎯 Moja droga do doskonałości</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">🌱</div>
              <div className="timeline-content">
                <h3>Początki</h3>
                <p>
                  Zaczęłam od podstaw, sama ucząc się języka angielskiego od zera. 
                  Wiem dokładnie, z jakimi trudnościami boryka się każdy początkujący, 
                  bo sama przez to przeszłam.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">📖</div>
              <div className="timeline-content">
                <h3>Samodzielna nauka</h3>
                <p>
                  W wieku nastoletnim samodzielnie zdobyłam dyplomy FCE i CPE - 
                  najwyższe certyfikaty Cambridge. To nauczyło mnie skutecznych 
                  metod nauki i pokazało, co naprawdę działa.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">💼</div>
              <div className="timeline-content">
                <h3>Doświadczenie zawodowe</h3>
                <p>
                  Lata pracy w międzynarodowym środowisku pokazały mi, 
                  jak wygląda język angielski w praktyce - w biznesie, 
                  w codziennych sytuacjach, w prawdziwych rozmowach.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">✍️</div>
              <div className="timeline-content">
                <h3>Tworzenie materiałów</h3>
                <p>
                  Przez ostatnie kilka lat starannie pisałam każdy test, 
                  każde ćwiczenie, każdą lekcję. Nie kopiuję - tworzę. 
                  Każde zadanie jest przemyślane i ma swój cel edukacyjny.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🎓</div>
              <div className="timeline-content">
                <h3>Wiedza pedagogiczna</h3>
                <p>
                  Materiały łączą moją osobistą wiedzę z najlepszymi praktykami 
                  nauczania. Każda lekcja jest zaprojektowana tak, żeby była 
                  skuteczna, ale też przyjemna w nauce.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>✨ Co wyróżnia moje materiały?</h2>
          
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-large">🎯</div>
              <h3>Precyzyjnie dobrane treści</h3>
              <p>
                Każde słówko, każde zdanie ma swoje znaczenie. Nie ma tutaj 
                wypełniaczy - tylko to, co naprawdę przyda się w nauce.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-large">💡</div>
              <h3>Zrozumiałe wyjaśnienia</h3>
              <p>
                Gramatyka po polsku, w prosty sposób. Wiem, które zagadnienia 
                sprawiają trudność Polakom, bo sama przez to przechodziłam.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-large">🔄</div>
              <h3>Systematyczne powtórki</h3>
              <p>
                Materiały są tak zaprojektowane, żeby naturalnie powtarzać 
                wcześniej poznane treści. Nauka przez regularność, nie stres.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-large">🌟</div>
              <h3>Praktyczne przykłady</h3>
              <p>
                Wszystkie przykłady pochodzą z prawdziwych sytuacji. 
                To angielski, którego naprawdę używają native speakerzy.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-large">📊</div>
              <h3>Progresywny poziom</h3>
              <p>
                Materiały są ułożone tak, żeby płynnie przechodzić od podstaw 
                do zaawansowanych zagadnień, bez skoków trudności.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-large">❤️</div>
              <h3>Tworzone z pasją</h3>
              <p>
                To nie jest praca na zlecenie - to moja pasja. Każda lekcja 
                powstaje, bo naprawdę chcę pomóc Ci nauczyć się angielskiego.
              </p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <h2>📈 Liczby, które mówią same za siebie</h2>
          
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Godzin tworzenia materiałów</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Autorskich testów i ćwiczeń</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-label">Kompletnych lekcji</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Lat doświadczenia z językiem</div>
            </div>
          </div>
        </section>

        <section className="quality-section">
          <div className="quality-card">
            <h2>🏆 Gwarancja jakości</h2>
            <p>
              Każdy materiał przechodzi przez moje ręce wielokrotnie. Piszę, sprawdzam, 
              testuję, poprawiam. Dbam o to, żeby wszystko było zgodne z najnowszymi 
              standardami językowymi i pedagogicznymi.
            </p>
            <p>
              <strong>To nie jest praca masowa - to rzemiosło.</strong> Każdy kurs jest 
              jak dobrze napisana książka: ma swoją strukturę, cel i przesłanie. 
              Nie znajdziesz tutaj błędów, niedokładności czy przestarzałych zwrotów.
            </p>
          </div>
        </section>

        <section className="testimonial-section">
          <h2>💬 Co to oznacza dla Ciebie?</h2>
          
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p><strong>Oszczędzasz czas</strong> - nie musisz szukać materiałów w różnych miejscach</p>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p><strong>Uczysz się skutecznie</strong> - materiały są sprawdzone i działają</p>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p><strong>Masz pewność jakości</strong> - wszystko tworzy jedna osoba, w jednym stylu</p>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p><strong>Uczysz się od kogoś, kto przeszedł Twoją drogę</strong> - wiem, co działa</p>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p><strong>Dostajesz aktualizacje</strong> - materiały są regularnie ulepszane</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <h2>🚀 Gotowy/a zacząć naukę?</h2>
            <p>
              Dołącz do platformy i przekonaj się sam/a, jak wyglądają materiały 
              tworzone z pasją i doświadczeniem. Pierwszy kurs czeka na Ciebie!
            </p>
            <div className="cta-buttons">
              <button 
                onClick={() => navigate('/login')} 
                className="btn-primary btn-large"
              >
                Zacznij naukę →
              </button>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const coursesSection = document.querySelector('.courses-section');
                    if (coursesSection) {
                      coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }} 
                className="btn-secondary btn-large"
              >
                Zobacz kursy
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
