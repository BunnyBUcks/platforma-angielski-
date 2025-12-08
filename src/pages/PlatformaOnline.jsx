import { useNavigate } from 'react-router-dom';

export default function PlatformaOnline() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <header className="page-header">
          <h1>💻 Platforma Online</h1>
          <p className="subtitle">Nauka dostępna dla każdego, wszędzie i o każdej porze</p>
        </header>

        <section className="intro-section">
          <div className="intro-card">
            <h2>🌟 Jak narodził się pomysł?</h2>
            <p>
              Przez lata prowadziłam korepetycje stacjonarne i widziałam, jak wiele osób chce 
              nauczyć się języka angielskiego, ale napotyka na różne przeszkody. Brak czasu, 
              odległość, nieregularny grafik pracy - to tylko niektóre z powodów, które 
              uniemożliwiały ludziom systematyczną naukę.
            </p>
            <p>
              Wtedy wpadłam na pomysł: <strong>dlaczego nie przenieść mojego doświadczenia 
              i autorskich materiałów do internetu?</strong> Tak powstała ta platforma - 
              miejsce, gdzie każdy może uczyć się w swoim tempie, w dogodnym czasie i miejscu.
            </p>
          </div>
        </section>

        <section className="journey-section">
          <h2>🎯 Nasza misja</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">🚀</div>
              <div className="timeline-content">
                <h3>Dotrzeć do większej liczby osób</h3>
                <p>
                  Korepetycje stacjonarne pozwalały mi pomagać kilku osobom tygodniowo. 
                  Platforma online znosi te ograniczenia - teraz moje materiały mogą 
                  wspierać setki uczniów jednocześnie, niezależnie od miejsca zamieszkania.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">⏰</div>
              <div className="timeline-content">
                <h3>Elastyczność i wygoda</h3>
                <p>
                  Każdy ma swój własny rytm życia. Platforma online pozwala uczyć się 
                  o 6 rano przed pracą, w przerwie obiadowej, czy późnym wieczorem - 
                  wtedy, kiedy Tobie najlepiej pasuje.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">💰</div>
              <div className="timeline-content">
                <h3>Dostępność cenowa</h3>
                <p>
                  Tradycyjne korepetycje kosztują 80-150 zł za godzinę. Platforma online 
                  pozwala zaoferować wysokiej jakości materiały w przystępnej cenie, 
                  dostępnej dla znacznie większej grupy osób.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">📱</div>
              <div className="timeline-content">
                <h3>Nauka na każdym urządzeniu</h3>
                <p>
                  Komputer, tablet, smartfon - platforma działa wszędzie. Możesz 
                  rozpocząć lekcję na laptopie w domu, a kontynuować w telefonie 
                  podczas podróży.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">📊</div>
              <div className="timeline-content">
                <h3>Twój postęp zawsze widoczny</h3>
                <p>
                  System automatycznie śledzi Twoje wyniki, zapamiętuje ukończone lekcje 
                  i pokazuje, nad czym warto jeszcze popracować. To jak osobisty trener, 
                  który nigdy nie zapomina o Twoich celach.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>✨ Zalety platformy online</h2>
          <div className="features-grid">
            <div className="feature-box">
              <span className="feature-icon-large">🌍</span>
              <h3>Dostęp z każdego miejsca</h3>
              <p>
                Nie ma znaczenia, czy jesteś w domu, w kawiarni, czy w podróży. 
                Wystarczy połączenie z internetem, a platforma jest zawsze pod ręką.
              </p>
            </div>

            <div className="feature-box">
              <span className="feature-icon-large">⏰</span>
              <h3>24/7 dostępność</h3>
              <p>
                Materiały czekają na Ciebie o każdej porze. Nie musisz dopasowywać się 
                do grafiku korepetytora - Ty decydujesz, kiedy się uczysz.
              </p>
            </div>

            <div className="feature-box">
              <span className="feature-icon-large">🎯</span>
              <h3>Własne tempo nauki</h3>
              <p>
                Potrzebujesz więcej czasu na gramatykę? Możesz powtarzać lekcje tyle 
                razy, ile potrzebujesz, bez pośpiechu i presji.
              </p>
            </div>

            <div className="feature-box">
              <span className="feature-icon-large">💎</span>
              <h3>Stały dostęp do materiałów</h3>
              <p>
                Wszystkie ukończone lekcje pozostają dostępne. Chcesz wrócić do 
                tematu sprzed miesiąca? Materiały czekają na Ciebie.
              </p>
            </div>

            <div className="feature-box">
              <span className="feature-icon-large">📈</span>
              <h3>Śledzenie postępów</h3>
              <p>
                Widzisz swoje wyniki, statystyki i postępy w czasie rzeczywistym. 
                To motywuje i pokazuje, jak wiele już osiągnąłeś.
              </p>
            </div>

            <div className="feature-box">
              <span className="feature-icon-large">🎓</span>
              <h3>Interaktywne ćwiczenia</h3>
              <p>
                Nie tylko czytasz - rozwiązujesz testy, sprawdzasz wiedzę i otrzymujesz 
                natychmiastowy feedback. To znacznie skuteczniejsze niż pasywna nauka.
              </p>
            </div>
          </div>
        </section>

        <section className="comparison-section">
          <h2>📊 Porównanie: Stacjonarne vs Online</h2>
          
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="comparison-header-feature">Cecha</th>
                  <th className="comparison-header-traditional">🏫 Tradycyjne</th>
                  <th className="comparison-header-online">💻 Platforma Online</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Liczba uczniów</td>
                  <td className="traditional-value">
                    <span className="negative-badge">❌ Ograniczona</span>
                  </td>
                  <td className="online-value">
                    <span className="positive-badge">✅ Nieograniczona</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Grafik zajęć</td>
                  <td className="traditional-value">
                    <span className="negative-badge">❌ Sztywny</span>
                  </td>
                  <td className="online-value">
                    <span className="positive-badge">✅ 24/7 Elastyczny</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Koszt</td>
                  <td className="traditional-value">
                    <span className="negative-badge">❌ 80-150 zł/h</span>
                  </td>
                  <td className="online-value">
                    <span className="positive-badge">✅ Przystępny</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Dojazd</td>
                  <td className="traditional-value">
                    <span className="negative-badge">❌ Konieczny</span>
                  </td>
                  <td className="online-value">
                    <span className="positive-badge">✅ Nie potrzebny</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Lokalizacja</td>
                  <td className="traditional-value">
                    <span className="negative-badge">❌ Jedno miejsce</span>
                  </td>
                  <td className="online-value">
                    <span className="positive-badge">✅ Dowolne miejsce</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Dostępność materiałów</td>
                  <td className="traditional-value">
                    <span className="negative-badge">❌ Tylko na zajęciach</span>
                  </td>
                  <td className="online-value">
                    <span className="positive-badge">✅ Zawsze dostępne</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="quality-card">
            <h2>💡 Filozofia platformy</h2>
            <p>
              <strong>Nauka języka nie powinna być luksusem dostępnym tylko dla nielicznych.</strong>
            </p>
            <p>
              Technologia daje nam niesamowitą możliwość - możemy dzielić się wiedzą 
              z tysiącami osób jednocześnie, bez utraty jakości. Każdy uczeń ma dostęp 
              do tych samych, starannie przygotowanych materiałów, niezależnie od tego, 
              czy mieszka w dużym mieście, czy w małej wiosce.
            </p>
            <p>
              Platforma online to nie tylko wygoda - to demokratyzacja edukacji. 
              To szansa dla każdego, kto chce się rozwijać, bez względu na lokalizację, 
              czas czy budżet.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <h2>🚀 Dołącz do platformy już dziś!</h2>
            <p>
              Przekonaj się sam, jak wygodna i skuteczna może być nauka online. 
              Rozpocznij swoją przygodę z językiem angielskim już teraz!
            </p>
            <div className="cta-buttons">
              <button 
                onClick={() => navigate('/login')} 
                className="btn-primary btn-large"
              >
                Zarejestruj się za darmo →
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
