import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-hero">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Powrót
        </button>
        <div className="about-hero-content">
          <div className="about-avatar">
            <div className="avatar-circle">
              <span className="avatar-emoji">👩‍🏫</span>
            </div>
            <div className="avatar-badge">✨ Certyfikowana nauczycielka</div>
          </div>
          <h1>O mnie: Dlaczego Warto Uczyć Się Ze Mną?</h1>
          <p className="hero-subtitle">Pasja • Doświadczenie • Wyniki</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section passion-section">
          <div className="section-icon">💙</div>
          <h2>Moja Pasja</h2>
          <p>
            Język angielski to moja pasja, która towarzyszy mi od najmłodszych lat. 
            To klucz do globalnej komunikacji, a ja pragnę, abyś i Ty poczuł się pewnie 
            w międzynarodowym środowisku. Samodzielnie zdobyte dyplomy <strong>FCE i CPE 
            w wieku nastoletnim</strong> były dopiero początkiem mojej drogi, a praca w międzynarodowym 
            otoczeniu utwierdziła mnie w przekonaniu, jak kluczowa jest płynna znajomość języków obcych.
          </p>
        </section>

        <section className="about-section experience-section">
          <div className="section-icon">🎓</div>
          <h2>Wieloletnie Doświadczenie</h2>
          <p>
            Przez lata zdobywałam doświadczenie jako <strong>lektor w szkole językowej</strong> oraz 
            jako <strong>korepetytor</strong>, pracując z uczniami w niemal każdym wieku – od <strong>3-letnich 
            maluchów po osoby dorosłe po pięćdziesiątce</strong>. To wszechstronne doświadczenie nauczyło 
            mnie, jak dostosowywać metody nauczania do indywidualnych potrzeb i tempa każdego kursanta.
          </p>
        </section>

        <section className="about-section results-section">
          <div className="section-icon">🏆</div>
          <h2>Mierzalne Rezultaty</h2>
          <p>
            Moim największym motorem napędowym i źródłem satysfakcji jest <strong>przygotowywanie 
            do egzaminów</strong>. Uwielbiam to, ponieważ jasny cel i mierzalne efekty sprawiają, że nauka 
            staje się źródłem satysfakcji. Mam na koncie udowodnione sukcesy – uczniowie korzystający 
            z moich autorskich kursów i lekcji prywatnych potrafili <strong className="results-highlight">podnieść 
            swoje wyniki z 40% do 90-100% w zaledwie 6 miesięcy!</strong>
          </p>
        </section>

        <section className="about-section cta-section">
          <div className="section-icon">🚀</div>
          <h2>Dołącz Do Mnie</h2>
          <p>
            Pragnę dzielić się moją wiedzą, sprawdzonymi technikami i autorskimi programami, 
            które ułatwią Ci przyswajanie języka angielskiego i pozwolą osiągnąć Twoje cele edukacyjne. 
            <strong> Razem osiągniemy sukces.</strong>
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate('/shop')}>
              🛒 Zobacz kursy
            </button>
            <button className="btn-secondary" onClick={() => navigate('/login')}>
              📚 Zacznij naukę
            </button>
          </div>
        </section>

        <section className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">📜</div>
            <h3>Dyplomy</h3>
            <p>FCE & CPE</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">👥</div>
            <h3>Doświadczenie</h3>
            <p>Od 3 do 50+ lat</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">📈</div>
            <h3>Wyniki</h3>
            <p>40% → 90-100%</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">⏱️</div>
            <h3>Efektywność</h3>
            <p>6 miesięcy</p>
          </div>
        </section>
      </div>
    </div>
  );
}
