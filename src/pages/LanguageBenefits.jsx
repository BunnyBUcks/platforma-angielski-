import { useNavigate } from 'react-router-dom';

export default function LanguageBenefits() {
  const navigate = useNavigate();

  return (
    <div className="benefits-page">
      <div className="benefits-hero">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Powrót
        </button>
        <div className="benefits-hero-content">
          <h1>Co daje nauka języków obcych?</h1>
          <p className="hero-subtitle">Odkryj naukowo potwierdzone korzyści nauki języków</p>
        </div>
      </div>

      <div className="benefits-content">
        <section className="benefit-intro">
          <p className="intro-text">
            Nauka języków obcych to nie tylko sposób na komunikację z ludźmi z innych krajów. 
            To inwestycja w rozwój mózgu, karierę i jakość życia. Badania naukowe jednoznacznie 
            potwierdzają, że dwujęzyczność i wielojęzyczność przynoszą wymierne korzyści dla 
            zdrowia kognitywnego, rozwoju osobistego i możliwości zawodowych.
          </p>
        </section>

        <section className="benefit-section brain-section">
          <div className="section-icon">🧠</div>
          <h2>Wpływ na mózg i funkcje kognitywne</h2>
          
          <div className="benefit-card">
            <h3>Zwiększenie plastyczności mózgu</h3>
            <p>
              Badania neurobiologiczne wykazują, że nauka języków obcych zwiększa <strong>gęstość istoty szarej</strong> 
              w obszarach mózgu odpowiedzialnych za przetwarzanie języka i pamięć. Osoby dwujęzyczne mają lepiej 
              rozwiniętą korę mózgową, co przekłada się na lepsze funkcjonowanie kognitywne przez całe życie.
            </p>
            <p className="source">Źródło: Badania University College London, 2014</p>
          </div>

          <div className="benefit-card">
            <h3>Opóźnienie demencji i choroby Alzheimera</h3>
            <p>
              Osoby posługujące się dwoma lub więcej językami <strong>rozwijają objawy demencji średnio 4-5 lat później</strong> 
              niż osoby jednojęzyczne. Dwujęzyczność działa jak "rezerwa kognitywna", która chroni mózg przed 
              starzeniem się i chorobami neurodegeneracyjnymi.
            </p>
            <p className="source">Źródło: York University, Toronto, 2013; Journal of Neurology, 2013</p>
          </div>

          <div className="benefit-card">
            <h3>Lepsza koncentracja i pamięć</h3>
            <p>
              Nauka języków wzmacnia <strong>pamięć roboczą</strong> i <strong>funkcje wykonawcze mózgu</strong>. 
              Dzieci dwujęzyczne wykazują lepsze umiejętności skupiania uwagi, ignorowania rozpraszaczy 
              i przełączania się między zadaniami. Te umiejętności przekładają się na lepsze wyniki w nauce 
              i większą efektywność w dorosłym życiu.
            </p>
            <p className="source">Źródło: Northwestern University, 2012; Penn State University, 2015</p>
          </div>
        </section>

        <section className="benefit-section career-section">
          <div className="section-icon">💼</div>
          <h2>Korzyści zawodowe i ekonomiczne</h2>
          
          <div className="benefit-card">
            <h3>Wyższe zarobki</h3>
            <p>
              Znajomość języków obcych zwiększa zarobki średnio o <strong>10-15%</strong>. W przypadku języka 
              angielskiego różnica może wynosić nawet <strong>20-30%</strong> w porównaniu do osób, które znają 
              tylko język ojczysty. Osoby wielojęzyczne mają dostęp do lepiej płatnych stanowisk i międzynarodowych 
              możliwości kariery.
            </p>
            <p className="source">Źródło: MIT, 2014; The Economist, 2014</p>
          </div>

          <div className="benefit-card">
            <h3>Szersze możliwości zawodowe</h3>
            <p>
              <strong>67% firm</strong> w Polsce wskazuje znajomość języków obcych jako kluczowy element przy 
              rekrutacji. W erze globalizacji i pracy zdalnej, wielojęzyczność otwiera drzwi do międzynarodowych 
              korporacji, projektów zagranicznych i możliwości emigracji zarobkowej.
            </p>
            <p className="source">Źródło: Raport Sedlak & Sedlak, 2023</p>
          </div>
        </section>

        <section className="benefit-section youth-section">
          <div className="section-icon">👶</div>
          <h2>Szczególny wpływ na młody mózg</h2>
          
          <div className="benefit-card">
            <h3>Krytyczny okres rozwoju (0-12 lat)</h3>
            <p>
              Dzieci uczące się języków obcych <strong>przed 12. rokiem życia</strong> osiągają płynność językową 
              zbliżoną do native speakerów. Młody mózg wykazuje znacznie większą plastyczność i zdolność do 
              przyswajania nowych struktur językowych. Dzieci dwujęzyczne rozwijają lepsze umiejętności 
              <strong>metajęzykowe</strong> - zdolność do analizy i manipulacji językiem.
            </p>
            <p className="source">Źródło: MIT Department of Brain and Cognitive Sciences, 2018</p>
          </div>

          <div className="benefit-card">
            <h3>Rozwój umiejętności społecznych</h3>
            <p>
              Młode osoby uczące się języków obcych wykazują <strong>większą empatię i lepsze rozumienie 
              innych perspektyw kulturowych</strong>. Nauka języka to także poznawanie innych sposobów myślenia, 
              co kształtuje otwartość, tolerancję i umiejętność współpracy w wielokulturowym środowisku.
            </p>
            <p className="source">Źródło: University of Chicago, 2015</p>
          </div>

          <div className="benefit-card">
            <h3>Lepsze wyniki w nauce</h3>
            <p>
              Dzieci dwujęzyczne <strong>osiągają lepsze wyniki w matematyce, czytaniu i testach logicznego 
              myślenia</strong>. Nauka języków rozwija umiejętności analityczne, które przekładają się na 
              sukces w innych dziedzinach edukacji. Młode osoby znające języki obce mają też większe szanse 
              na dostanie się na престижowe uczelnie.
            </p>
            <p className="source">Źródło: Concordia University, 2011; Harvard University, 2016</p>
          </div>
        </section>

        <section className="benefit-section modern-section">
          <div className="section-icon">🌐</div>
          <h2>Języki w dzisiejszych czasach</h2>
          
          <div className="benefit-card">
            <h3>Era cyfrowa i globalizacja</h3>
            <p>
              W dobie internetu, pracy zdalnej i globalnej współpracy, <strong>znajomość języków obcych jest 
              kluczem do sukcesu</strong>. 80% treści w internecie to język angielski. Osoby wielojęzyczne mają 
              dostęp do 10x więcej informacji, kursów online, publikacji naukowych i możliwości edukacyjnych.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Sztuczna inteligencja a nauka języków</h3>
            <p>
              Mimo rozwoju AI i translatorów, <strong>ludzka znajomość języków pozostaje niezastąpiona</strong>. 
              Maszyny nie rozumieją kontekstu kulturowego, humoru, ironii czy niuansów emocjonalnych. Osoby 
              znające języki mogą efektywniej wykorzystywać narzędzia AI, weryfikować tłumaczenia i komunikować 
              się na głębszym poziomie.
            </p>
          </div>
        </section>

        <section className="benefit-cta">
          <h2>Rozpocznij swoją przygodę z językami!</h2>
          <p>
            Niezależnie od wieku, nigdy nie jest za późno na naukę języka obcego. Każdy dzień nauki to 
            inwestycja w zdrowszy mózg, lepszą karierę i bogatsze życie.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate('/test-doroslych')}>
              🎯 Sprawdź swój poziom
            </button>
            <button className="btn-secondary" onClick={() => navigate('/shop')}>
              📚 Zobacz kursy
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
