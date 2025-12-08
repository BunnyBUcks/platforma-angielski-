import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const IndividualApproach = () => {
  const navigate = useNavigate();

  return (
    <div className="individual-page">
      <div className="individual-hero">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Wróć
        </button>
        <div className="individual-hero-content">
          <span className="hero-icon">🎯</span>
          <h1>Indywidualne Podejście</h1>
          <p className="hero-subtitle">
            Każdy uczeń jest inny - dlatego każda lekcja jest inna
          </p>
        </div>
      </div>

      <div className="individual-content">
        {/* Wprowadzenie */}
        <div className="individual-intro">
          <p className="intro-text">
            Wierzę, że nie ma dwóch takich samych uczniów. Każdy ma swój unikalny styl uczenia się, 
            tempo przyswajania wiedzy, cele i wyzwania. Dlatego moje podejście do nauczania jest 
            w 100% dostosowane do Twoich indywidualnych potrzeb.
          </p>
        </div>

        {/* Diagnoza */}
        <div className="approach-section diagnosis-section">
          <span className="section-icon">🔍</span>
          <h2>Dokładna Diagnoza</h2>
          
          <div className="approach-card">
            <h3>Test Poziomujący</h3>
            <p>
              Każda współpraca zaczyna się od szczegółowego testu, który nie tylko określa Twój 
              obecny poziom języka, ale również identyfikuje:
            </p>
            <ul>
              <li><strong>Mocne strony</strong> - co już dobrze opanowałeś i na czym możemy budować</li>
              <li><strong>Obszary do rozwoju</strong> - gdzie jest największy potencjał postępu</li>
              <li><strong>Styl uczenia się</strong> - czy lepiej przyswajasz wiedzę wizualnie, słuchowo czy praktycznie</li>
              <li><strong>Tempo nauki</strong> - jak szybko możesz efektywnie przyswajać nową wiedzę</li>
            </ul>
          </div>

          <div className="approach-card">
            <h3>Rozmowa o Celach</h3>
            <p>
              Podczas pierwszego spotkania dokładnie omawiamy:
            </p>
            <ul>
              <li>Twoje cele językowe (egzamin, podróż, praca, studia?)</li>
              <li>Deadline i oczekiwane tempo postępów</li>
              <li>Preferencje dotyczące metod nauki</li>
              <li>Dostępność czasową i elastyczność harmonogramu</li>
            </ul>
          </div>
        </div>

        {/* Personalizacja */}
        <div className="approach-section personalization-section">
          <span className="section-icon">✨</span>
          <h2>Spersonalizowany Program</h2>
          
          <div className="approach-card">
            <h3>Materiały Dopasowane do Twoich Zainteresowań</h3>
            <p>
              Zamiast standardowych podręcznikowych tekstów o "rodzinie Kowalskich", używamy materiałów 
              związanych z Twoimi pasjami i zainteresowaniami:
            </p>
            <ul>
              <li><strong>Pasjonuje Cię sport?</strong> Uczymy się na artykułach o piłce nożnej czy tenisie</li>
              <li><strong>Interesujesz się technologią?</strong> Czytamy o najnowszych innowacjach</li>
              <li><strong>Kochasz muzykę?</strong> Analizujemy teksty piosenek i wywiady z artystami</li>
              <li><strong>Planujesz podróże?</strong> Skupiamy się na praktycznych sytuacjach turystycznych</li>
            </ul>
            <p className="highlight-box">
              Gdy materiał jest interesujący, nauka przestaje być obowiązkiem, a staje się przyjemnością!
            </p>
          </div>

          <div className="approach-card">
            <h3>Elastyczne Tempo</h3>
            <p>
              <strong>Nie ma sztywnych ram czasowych.</strong> Jeśli potrzebujesz więcej czasu na gramatykę - 
              poświęcimy tyle, ile trzeba. Jeśli szybko łapiesz nowe słownictwo - przyspieszamy. 
            </p>
            <p>
              Program dostosowuje się do Ciebie, a nie Ty do programu.
            </p>
          </div>
        </div>

        {/* Metody */}
        <div className="approach-section methods-section">
          <span className="section-icon">🎓</span>
          <h2>Różnorodne Metody Nauczania</h2>
          
          <div className="approach-card">
            <h3>Dla Uczniów Wizualnych</h3>
            <ul>
              <li>Kolorowe mapy myśli i infografiki</li>
              <li>Filmy edukacyjne i prezentacje</li>
              <li>Flashcardy z obrazkami</li>
              <li>Materiały graficzne i diagramy</li>
            </ul>
          </div>

          <div className="approach-card">
            <h3>Dla Uczniów Słuchowych</h3>
            <ul>
              <li>Podcasty i audiobooki</li>
              <li>Ćwiczenia wymowy i powtarzania</li>
              <li>Muzyka i piosenki</li>
              <li>Dyskusje i konwersacje</li>
            </ul>
          </div>

          <div className="approach-card">
            <h3>Dla Uczniów Kinestetycznych</h3>
            <ul>
              <li>Gry językowe i quizy interaktywne</li>
              <li>Praktyczne ćwiczenia i scenki</li>
              <li>Zadania projektowe</li>
              <li>Nauka przez działanie</li>
            </ul>
          </div>
        </div>

        {/* Monitoring */}
        <div className="approach-section monitoring-section">
          <span className="section-icon">📊</span>
          <h2>Ciągły Monitoring Postępów</h2>
          
          <div className="approach-card">
            <h3>Regularna Ewaluacja</h3>
            <p>
              Co 4-6 tygodni przeprowadzamy szczegółową ocenę postępów:
            </p>
            <ul>
              <li>Sprawdzamy, co udało się osiągnąć</li>
              <li>Identyfikujemy obszary wymagające dodatkowej pracy</li>
              <li>Dostosowujemy plan nauki do nowych potrzeb</li>
              <li>Modyfikujemy metody, jeśli coś nie działa</li>
            </ul>
          </div>

          <div className="approach-card">
            <h3>Elastyczność w Dostosowaniu</h3>
            <p>
              <strong>Jeśli coś nie działa - zmieniamy to!</strong> Nie trzymamy się sztywno jednej metody. 
              Jeśli widzisz, że coś Ci nie pasuje, mówimy o tym i szukamy lepszych rozwiązań.
            </p>
            <p className="highlight-box">
              Twoja opinia i komfort nauki są priorytetem. To Ty decydujesz o ostatecznym kształcie 
              naszych zajęć.
            </p>
          </div>
        </div>

        {/* Wsparcie */}
        <div className="approach-section support-section">
          <span className="section-icon">💬</span>
          <h2>Wsparcie Poza Lekcjami</h2>
          
          <div className="approach-card">
            <h3>Zawsze Dostępna Pomoc</h3>
            <p>
              Indywidualne podejście to nie tylko lekcje, ale także:
            </p>
            <ul>
              <li><strong>Kontakt mailowy/messenger</strong> - odpowiadam na pytania między zajęciami</li>
              <li><strong>Dodatkowe materiały</strong> - wysyłam linki, artykuły i ćwiczenia dopasowane do Twoich potrzeb</li>
              <li><strong>Wsparcie przed egzaminami</strong> - dodatkowe konsultacje i motywacja</li>
              <li><strong>Elastyczne terminy</strong> - możliwość przesunięcia lekcji w nagłych sytuacjach</li>
            </ul>
          </div>
        </div>

        {/* Przykłady */}
        <div className="approach-section examples-section">
          <span className="section-icon">⭐</span>
          <h2>Przykłady z Praktyki</h2>
          
          <div className="example-card">
            <h3>Karolina, 18 lat - Przygotowanie do Matury</h3>
            <p>
              <strong>Wyzwanie:</strong> Słaba motywacja, trudności z gramatyką, stres przed egzaminem.
            </p>
            <p>
              <strong>Rozwiązanie:</strong> Materiały oparte o seriale (Friends, The Office), krótkie 
              sesje 45 min zamiast 90 min, gry edukacyjne do nauki gramatyki, techniki relaksacyjne 
              przed próbnymi egzaminami.
            </p>
            <p>
              <strong>Rezultat:</strong> Wzrost ocen z 40% do 95%, zdana matura na poziomie rozszerzonym z wynikiem 87%.
            </p>
          </div>

          <div className="example-card">
            <h3>Pan Tomasz, 45 lat - Angielski Biznesowy</h3>
            <p>
              <strong>Wyzwanie:</strong> Długa przerwa w nauce (20 lat), brak pewności siebie, konkretny cel - prezentacja po angielsku za 3 miesiące.
            </p>
            <p>
              <strong>Rozwiązanie:</strong> Intensywny kurs 3x w tygodniu, materiały z jego branży (IT), 
              symulacje prezentacji od 2 tygodnia, nagrywanie i analiza wystąpień.
            </p>
            <p>
              <strong>Rezultat:</strong> Udana prezentacja w firmie, awans na stanowisko z kontaktem międzynarodowym.
            </p>
          </div>

          <div className="example-card">
            <h3>Ania, 12 lat - Nauka dla Młodszych</h3>
            <p>
              <strong>Wyzwanie:</strong> Nuda na tradycyjnych lekcjach, trudności z koncentracją, ADHD.
            </p>
            <p>
              <strong>Rozwiązanie:</strong> Krótkie 30-minutowe sesje z przerwami, gry językowe online, 
              nauka przez piosenki i bajki, system nagród za osiągnięcia, kolorowe materiały wizualne.
            </p>
            <p>
              <strong>Rezultat:</strong> Z oceny 2 na 5 w ciągu semestru, samodzielne czytanie prostych książek po angielsku.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="individual-cta">
          <h2>Gotowy na Spersonalizowaną Naukę?</h2>
          <p>
            Zacznij od bezpłatnego testu poziomującego, który pomoże mi lepiej Cię poznać 
            i przygotować idealny plan nauki specjalnie dla Ciebie.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/test-doroslych')}>
              Test Poziomujący
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/shop')}>
              Zobacz Kursy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualApproach;
