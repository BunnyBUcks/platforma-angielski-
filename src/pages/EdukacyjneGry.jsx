import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameDemoModal from '../components/GameDemos/GameDemoModal';

export default function EdukacyjneGry() {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openDemo = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const closeDemo = () => {
    setShowModal(false);
    setTimeout(() => setSelectedGame(null), 300);
  };

  const games = [
    // Gry Słownikowe
    {
      id: 1,
      category: 'Słownictwo',
      icon: '📚',
      name: 'Word Match',
      description: 'Dopasuj angielskie słowa do odpowiednich obrazków. Idealna gra na rozbudowę słownictwa wizualnego.',
      difficulty: 'Łatwa',
      time: '5-10 min',
      skills: ['Słownictwo', 'Skojarzenia'],
      levels: ['A1', 'A2'],
      demoQuestion: {
        question: 'Dopasuj słowo do obrazka:',
        word: 'Apple',
        options: ['🍎', '🍌', '🍊', '🍇'],
        correctAnswer: '🍎'
      }
    },
    {
      id: 2,
      category: 'Słownictwo',
      icon: '⚡',
      name: 'Flashcard Frenzy',
      description: 'Szybkie fiszki z limitem czasu! Ile słów zapamiętasz w minutę? Trening pamięci i szybkości.',
      difficulty: 'Średnia',
      time: '3-5 min',
      skills: ['Szybkie myślenie', 'Pamięć'],
      levels: ['A2', 'B1', 'B2'],
      demoQuestion: {
        question: 'Przetłumacz słowo:',
        word: 'Beautiful',
        options: ['Brzydki', 'Piękny', 'Duży', 'Mały'],
        correctAnswer: 'Piękny'
      }
    },
    {
      id: 3,
      category: 'Słownictwo',
      icon: '🐝',
      name: 'Spelling Bee',
      description: 'Konkurs ortograficzny jak w amerykańskich szkołach! Sprawdź swoją pisownię trudnych słów.',
      difficulty: 'Trudna',
      time: '10-15 min',
      skills: ['Ortografia', 'Wymowa'],
      levels: ['B1', 'B2', 'C1'],
      demoQuestion: {
        question: 'Wpisz poprawną pisownię słowa:',
        word: '[re-siv] - otrzymywać',
        options: ['recieve', 'receive', 'receeve', 'recive'],
        correctAnswer: 'receive'
      }
    },
    {
      id: 4,
      category: 'Słownictwo',
      icon: '🔍',
      name: 'Word Search',
      description: 'Znajdź ukryte słowa w siatce liter. Różne poziomy trudności i kategorie tematyczne.',
      difficulty: 'Łatwa',
      time: '5-10 min',
      skills: ['Koncentracja', 'Rozpoznawanie słów'],
      levels: ['A1', 'A2', 'B1'],
      demoQuestion: {
        question: 'Znajdź słowo "CAT" w siatce:',
        word: 'C A T D O G\nB I R D F E\nC A R P E T',
        hint: 'Szukaj poziomo lub pionowo'
      }
    },
    {
      id: 5,
      category: 'Słownictwo',
      icon: '🎯',
      name: 'Crossword Challenge',
      description: 'Krzyżówki tematyczne po angielsku. Od prostych do zaawansowanych, z podpowiedziami.',
      difficulty: 'Średnia',
      time: '10-20 min',
      skills: ['Słownictwo', 'Definicje'],
      levels: ['B1', 'B2'],
      demoQuestion: {
        question: '1. Poziomo: Zwierzę które szczeka (3 litery)',
        word: 'D_G',
        correctAnswer: 'DOG'
      }
    },

    // Gry Gramatyczne
    {
      id: 6,
      category: 'Gramatyka',
      icon: '🗡️',
      name: 'Grammar Quest',
      description: 'Wyrusz w przygodę pełną wyzwań gramatycznych! Każdy poziom to nowa zasada do opanowania.',
      difficulty: 'Średnia',
      time: '15-20 min',
      skills: ['Gramatyka', 'Logiczne myślenie'],
      levels: ['A2', 'B1', 'B2'],
      demoQuestion: {
        question: 'Wybierz poprawną formę:',
        word: 'She ___ to school every day.',
        options: ['go', 'goes', 'going', 'went'],
        correctAnswer: 'goes'
      }
    },
    {
      id: 7,
      category: 'Gramatyka',
      icon: '⏰',
      name: 'Tense Master',
      description: 'Opanuj wszystkie czasy angielskie! Wybieraj poprawne formy czasowników w różnych kontekstach.',
      difficulty: 'Trudna',
      time: '10-15 min',
      skills: ['Czasy gramatyczne', 'Czasowniki'],
      levels: ['B1', 'B2', 'C1'],
      demoQuestion: {
        question: 'Uzupełnij w Past Simple:',
        word: 'I ___ (eat) pizza yesterday.',
        options: ['eat', 'eats', 'ate', 'eaten'],
        correctAnswer: 'ate'
      }
    },
    {
      id: 8,
      category: 'Gramatyka',
      icon: '🏗️',
      name: 'Sentence Builder',
      description: 'Buduj poprawne zdania z rozsypanych słów. Naucz się prawidłowej kolejności wyrazów.',
      difficulty: 'Średnia',
      time: '5-10 min',
      skills: ['Składnia', 'Szyk wyrazów'],
      levels: ['A2', 'B1'],
      demoQuestion: {
        question: 'Ułóż słowa w poprawnej kolejności:',
        word: 'like / I / very / much / pizza',
        correctAnswer: 'I like pizza very much'
      }
    },
    {
      id: 9,
      category: 'Gramatyka',
      icon: '📰',
      name: 'Article Adventure',
      description: 'Kiedy użyć "a", "an" czy "the"? Przygoda z rodzajnikami w praktycznych przykładach.',
      difficulty: 'Średnia',
      time: '8-12 min',
      skills: ['Rodzajniki', 'Kontekst'],
      levels: ['A2', 'B1', 'B2'],
      demoQuestion: {
        question: 'Wybierz poprawny rodzajnik:',
        word: '___ apple a day keeps the doctor away.',
        options: ['a', 'an', 'the', '-'],
        correctAnswer: 'an'
      }
    },

    // Gry Słuchowe
    {
      id: 10,
      category: 'Słuchanie',
      icon: '🎧',
      name: 'Sound Match',
      description: 'Słuchaj wymowy i dopasuj do poprawnego słowa. Trenuj ucho do angielskiego!',
      difficulty: 'Średnia',
      time: '5-10 min',
      skills: ['Słuchanie', 'Wymowa'],
      levels: ['A2', 'B1', 'B2'],
      demoQuestion: {
        question: '🔊 Posłuchaj i wybierz słowo:',
        word: '[Audio: "three"]',
        options: ['tree', 'three', 'free', 'thee'],
        correctAnswer: 'three'
      }
    },
    {
      id: 11,
      category: 'Słuchanie',
      icon: '👂',
      name: 'Listen & Click',
      description: 'Posłuchaj nagrania i kliknij odpowiedni obrazek lub słowo. Test rozumienia ze słuchu.',
      difficulty: 'Łatwa',
      time: '5-8 min',
      skills: ['Rozumienie ze słuchu', 'Reakcja'],
      levels: ['A1', 'A2', 'B1'],
      demoQuestion: {
        question: '🔊 Co słyszysz?',
        word: '[Audio: "The cat is sleeping"]',
        options: ['🐱💤', '🐶🏃', '🐦🎵', '🐠🌊'],
        correctAnswer: '🐱💤'
      }
    },
    {
      id: 12,
      category: 'Słuchanie',
      icon: '✍️',
      name: 'Dictation Race',
      description: 'Wyścig dyktand! Zapisz to, co słyszysz jak najszybciej i jak najdokładniej.',
      difficulty: 'Trudna',
      time: '10-15 min',
      skills: ['Dyktando', 'Ortografia', 'Słuchanie'],
      levels: ['B1', 'B2', 'C1'],
      demoQuestion: {
        question: '🔊 Zapisz zdanie które słyszysz:',
        word: '[Audio: "I love learning English"]',
        correctAnswer: 'I love learning English'
      }
    },

    // Gry Konwersacyjne
    {
      id: 13,
      category: 'Konwersacje',
      icon: '💬',
      name: 'Dialogue Simulator',
      description: 'Symuluj prawdziwe rozmowy! Wybieraj odpowiedzi i prowadź dialog w różnych sytuacjach.',
      difficulty: 'Średnia',
      time: '10-15 min',
      skills: ['Konwersacja', 'Wybór słów'],
      levels: ['A2', 'B1', 'B2'],
      demoQuestion: {
        question: 'Rozmowa w sklepie. Co powiesz?',
        word: 'Sprzedawca: "Can I help you?"',
        options: ['Yes, please. I\'m looking for a book.', 'No.', 'Goodbye.', 'What?'],
        correctAnswer: 'Yes, please. I\'m looking for a book.'
      }
    },
    {
      id: 14,
      category: 'Konwersacje',
      icon: '⚡',
      name: 'Quick Response',
      description: 'Szybkie odpowiedzi w dialogach! Ile masz czasu na reakcję? Trenuj spontaniczność.',
      difficulty: 'Trudna',
      time: '5-10 min',
      skills: ['Szybkość reakcji', 'Mówienie'],
      levels: ['B1', 'B2', 'C1'],
      demoQuestion: {
        question: 'Szybko! Jak się przedstawisz? (3 sekundy)',
        word: '"Hi, nice to meet you!"',
        correctAnswer: 'Hi, I\'m [name]. Nice to meet you too!'
      }
    },
    {
      id: 15,
      category: 'Konwersacje',
      icon: '🎭',
      name: 'Role Play Theatre',
      description: 'Wciel się w różne role! Od zamawiania w restauracji po rozmowę kwalifikacyjną.',
      difficulty: 'Średnia',
      time: '15-20 min',
      skills: ['Odgrywanie ról', 'Praktyczny język'],
      levels: ['A2', 'B1', 'B2'],
      demoQuestion: {
        question: 'W restauracji - zamów jedzenie:',
        word: 'Kelner: "What would you like to order?"',
        correctAnswer: 'I\'d like a pizza and a glass of water, please.'
      }
    },

    // Gry Mieszane
    {
      id: 16,
      category: 'Mieszane',
      icon: '🃏',
      name: 'Memory Cards',
      description: 'Klasyczna gra memory ze słówkami! Znajdź pary: słowo po angielsku i jego tłumaczenie.',
      difficulty: 'Łatwa',
      time: '5-10 min',
      skills: ['Pamięć', 'Słownictwo'],
      levels: ['A1', 'A2'],
      demoQuestion: {
        question: 'Znajdź pary:',
        word: 'Cat - ?',
        options: ['Pies', 'Kot', 'Ryba', 'Ptak'],
        correctAnswer: 'Kot'
      }
    },
    {
      id: 17,
      category: 'Mieszane',
      icon: '🎮',
      name: 'Hangman English',
      description: 'Wisielec po angielsku! Odgadnij słowo literka po literce zanim będzie za późno.',
      difficulty: 'Łatwa',
      time: '3-5 min',
      skills: ['Ortografia', 'Logika'],
      levels: ['A1', 'A2', 'B1'],
      demoQuestion: {
        question: 'Odgadnij słowo: (5 liter)',
        word: '_ _ P P _',
        hint: 'Owoc',
        correctAnswer: 'APPLE'
      }
    },
    {
      id: 18,
      category: 'Mieszane',
      icon: '🏃',
      name: 'Translation Sprint',
      description: 'Wyścig tłumaczeń! Tłumacz zdania z polskiego na angielski jak najszybciej.',
      difficulty: 'Trudna',
      time: '5-10 min',
      skills: ['Tłumaczenie', 'Szybkość'],
      levels: ['B1', 'B2', 'C1'],
      demoQuestion: {
        question: 'Przetłumacz na angielski:',
        word: 'Lubię uczyć się języków.',
        correctAnswer: 'I like learning languages.'
      }
    },
    {
      id: 19,
      category: 'Mieszane',
      icon: '⚔️',
      name: 'Quiz Battle',
      description: 'Quizy z rankingiem! Rywalizuj z innymi uczniami i zdobywaj punkty.',
      difficulty: 'Średnia',
      time: '10-15 min',
      skills: ['Wiedza ogólna', 'Konkurencja'],
      levels: ['A2', 'B1', 'B2', 'C1'],
      demoQuestion: {
        question: 'Co to znaczy "rainbow"?',
        word: 'Quiz pytanie',
        options: ['Deszcz', 'Tęcza', 'Słońce', 'Chmura'],
        correctAnswer: 'Tęcza'
      }
    },
    {
      id: 20,
      category: 'Mieszane',
      icon: '🔀',
      name: 'Word Scramble',
      description: 'Rozplącz anagramy! Ułóż słowa z pomieszanych liter.',
      difficulty: 'Średnia',
      time: '5-10 min',
      skills: ['Anagramy', 'Ortografia'],
      levels: ['A2', 'B1', 'B2'],
      demoQuestion: {
        question: 'Ułóż słowo z liter:',
        word: 'LOCSHO',
        correctAnswer: 'SCHOOL'
      }
    },
    {
      id: 21,
      category: 'Mieszane',
      icon: '🎲',
      name: 'Bingo Vocabulary',
      description: 'Bingo ze słówkami! Słuchaj definicji i zaznaczaj słowa na swojej planszy.',
      difficulty: 'Łatwa',
      time: '10-15 min',
      skills: ['Słownictwo', 'Słuchanie'],
      levels: ['A1', 'A2', 'B1'],
      demoQuestion: {
        question: '🔊 Słuchaj definicji i zaznacz słowo:',
        word: '"A yellow fruit that monkeys like"',
        options: ['Apple', 'Banana', 'Orange', 'Grape'],
        correctAnswer: 'Banana'
      }
    }
  ];

  const categories = [
    { name: 'Wszystkie', icon: '🎮', count: 21 },
    { name: 'Słownictwo', icon: '📚', count: 5 },
    { name: 'Gramatyka', icon: '📝', count: 4 },
    { name: 'Słuchanie', icon: '🎧', count: 3 },
    { name: 'Konwersacje', icon: '💬', count: 3 },
    { name: 'Mieszane', icon: '🎯', count: 6 }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('Wszystkie');

  const filteredGames = selectedCategory === 'Wszystkie' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Łatwa': return 'difficulty-easy';
      case 'Średnia': return 'difficulty-medium';
      case 'Trudna': return 'difficulty-hard';
      default: return '';
    }
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <section className="intro-section">
          <div className="intro-card">
            <h2>🌟 Ucz się bawiąc!</h2>
            <p>
              Gry edukacyjne to najlepsza metoda na utrwalenie wiedzy! Połączenie zabawy 
              z nauką sprawia, że materiał zapada w pamięć znacznie skuteczniej niż sama teoria.
            </p>
            <p>
              Każda gra została zaprojektowana tak, aby ćwiczyć konkretne umiejętności językowe - 
              od słownictwa i gramatyki, przez słuchanie, aż po praktyczne konwersacje.
            </p>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">20+</div>
              <div className="stat-label">RÓŻNYCH GIER</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">6</div>
              <div className="stat-label">KATEGORII</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">A1-C1</div>
              <div className="stat-label">POZIOMY TRUDNOŚCI</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">∞</div>
              <div className="stat-label">GODZIN ZABAWY</div>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <h2>📂 Kategorie gier</h2>
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.name}
                className={`category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
                <span className="category-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="games-section">
          <h2>🎯 Dostępne gry</h2>
          <div className="games-grid">
            {filteredGames.map(game => (
              <div key={game.id} className="game-card">
                <div className="game-header">
                  <span className="game-icon">{game.icon}</span>
                  <span className={`game-difficulty ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                </div>
                <h3 className="game-title">{game.name}</h3>
                <p className="game-description">{game.description}</p>
                
                <div className="game-meta">
                  <div className="game-meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span className="meta-text">{game.time}</span>
                  </div>
                  <div className="game-meta-item">
                    <span className="meta-icon">📊</span>
                    <span className="meta-text">{game.levels.join(', ')}</span>
                  </div>
                </div>

                <div className="game-skills">
                  {game.skills.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>

                <button 
                  className="btn-demo btn-demo-full" 
                  onClick={() => openDemo(game)}
                >
                  <span>🎮 Wypróbuj za darmo</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div className="quality-card">
            <h2>💡 Dlaczego gry są skuteczne w nauce?</h2>
            <div className="benefits-grid">
              <div className="benefit-box">
                <span className="benefit-icon">🧠</span>
                <h3>Lepsze zapamiętywanie</h3>
                <p>Gry angażują wiele zmysłów jednocześnie, co sprawia, że materiał lepiej zapada w pamięć długotrwałą.</p>
              </div>
              <div className="benefit-box">
                <span className="benefit-icon">🎯</span>
                <h3>Motywacja i zaangażowanie</h3>
                <p>Elementy rywalizacji, punkty i poziomy sprawiają, że chce się wracać i ćwiczyć więcej.</p>
              </div>
              <div className="benefit-box">
                <span className="benefit-icon">⚡</span>
                <h3>Natychmiastowy feedback</h3>
                <p>Dowiadujesz się od razu, czy odpowiedź jest poprawna - to kluczowe dla efektywnej nauki.</p>
              </div>
              <div className="benefit-box">
                <span className="benefit-icon">🔄</span>
                <h3>Powtarzanie bez nudy</h3>
                <p>Ten sam materiał można ćwiczyć wielokrotnie w różnych formach - każda gra to nowe doświadczenie.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <h2>🚀 Rozpocznij naukę przez zabawę!</h2>
            <p>
              Wszystkie gry będą dostępne wkrótce. Zarejestruj się już teraz, 
              aby być pierwszym, który je przetestuje!
            </p>
            <div className="cta-buttons">
              <button 
                onClick={() => navigate('/login')} 
                className="btn-primary btn-large"
              >
                Zarejestruj się →
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

      {showModal && <GameDemoModal game={selectedGame} onClose={closeDemo} />}
    </div>
  );
}
