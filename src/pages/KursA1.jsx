import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const KursA1 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('intro'); // intro, quiz, game, locked
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameAttempts, setGameAttempts] = useState(0);

  // Darmowe pytania quizowe (5 pytań)
  const freeQuestions = [
    {
      id: 1,
      question: 'Jak się mówi "Kot" po angielsku?',
      image: '🐱',
      options: ['Dog', 'Cat', 'Bird', 'Fish'],
      correct: 1,
      explanation: 'Cat = Kot 🐱'
    },
    {
      id: 2,
      question: 'Co to znaczy "Apple"?',
      image: '🍎',
      options: ['Banan', 'Jabłko', 'Pomarańcza', 'Gruszka'],
      correct: 1,
      explanation: 'Apple = Jabłko 🍎'
    },
    {
      id: 3,
      question: 'Jak się przywitać po angielsku?',
      image: '👋',
      options: ['Goodbye', 'Hello', 'Thank you', 'Sorry'],
      correct: 1,
      explanation: 'Hello = Cześć/Witaj 👋'
    },
    {
      id: 4,
      question: 'Ile to jest "THREE"?',
      image: '🔢',
      options: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'Three = 3️⃣'
    },
    {
      id: 5,
      question: 'Co to jest "Red"?',
      image: '🎨',
      options: ['Niebieski', 'Zielony', 'Czerwony', 'Żółty'],
      correct: 2,
      explanation: 'Red = Czerwony ❤️'
    }
  ];

  // Karty do gry Memory (słownictwo A1)
  const memoryCards = [
    { id: 1, word: 'DOG', image: '🐕', matched: false },
    { id: 2, word: 'CAT', image: '🐱', matched: false },
    { id: 3, word: 'SUN', image: '☀️', matched: false },
    { id: 4, word: 'MOON', image: '🌙', matched: false },
    { id: 5, word: 'TREE', image: '🌳', matched: false },
    { id: 6, word: 'HOUSE', image: '🏠', matched: false },
    { id: 7, word: 'BOOK', image: '📚', matched: false },
    { id: 8, word: 'BALL', image: '⚽', matched: false },
  ];

  // Losowanie kart
  const [gameCards, setGameCards] = useState(() => {
    const cards = [...memoryCards];
    return [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
  });

  const handleQuizAnswer = (selectedIndex) => {
    const currentQuestion = freeQuestions[currentQuizQuestion];
    const isCorrect = selectedIndex === currentQuestion.correct;
    
    setQuizAnswers([...quizAnswers, {
      questionId: currentQuestion.id,
      correct: isCorrect,
      selectedIndex
    }]);

    if (currentQuizQuestion < freeQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuizQuestion(currentQuizQuestion + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setCurrentSection('game');
      }, 2000);
    }
  };

  const handleCardClick = (clickedCard) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.find(card => card.uniqueId === clickedCard.uniqueId)) return;
    if (matchedCards.includes(clickedCard.id)) return;

    const newFlipped = [...flippedCards, clickedCard];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setGameAttempts(gameAttempts + 1);
      
      if (newFlipped[0].id === newFlipped[1].id) {
        // Dopasowanie!
        setMatchedCards([...matchedCards, newFlipped[0].id]);
        setGameScore(gameScore + 10);
        setTimeout(() => setFlippedCards([]), 500);
      } else {
        // Nie dopasowano
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const resetGame = () => {
    const cards = [...memoryCards];
    setGameCards([...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index })));
    setFlippedCards([]);
    setMatchedCards([]);
    setGameScore(0);
    setGameAttempts(0);
  };

  // INTRO SECTION
  if (currentSection === 'intro') {
    return (
      <div className="course-page">
        <div className="course-hero level-a1-hero">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Wróć
          </button>
          <div className="course-hero-content">
            <span className="hero-icon">🌟</span>
            <h1>Kurs A1 - Początkujący dla Dzieci</h1>
            <p className="hero-subtitle">Nauka angielskiego przez zabawę!</p>
            <div className="level-badge-hero">Poziom: A1 (Podstawowy)</div>
          </div>
        </div>

        <div className="course-intro-content">
          <div className="intro-section">
            <h2>Witaj w kursie A1! 👋</h2>
            <p className="intro-text">
              Ten kurs jest stworzony specjalnie dla dzieci rozpoczynających naukę języka angielskiego. 
              Czeka Cię mnóstwo zabawy i nauki!
            </p>

            <div className="course-features">
              <div className="feature-box">
                <span className="feature-icon-big">🎮</span>
                <h3>Nauka przez zabawę</h3>
                <p>Gry, quizy i interaktywne ćwiczenia</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">📚</span>
                <h3>Podstawowe słownictwo</h3>
                <p>Zwierzęta, kolory, liczby, przedmioty</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">🎯</span>
                <h3>Proste zasady</h3>
                <p>Gramatyka dostosowana do wieku 7-10 lat</p>
              </div>
            </div>

            <div className="free-preview-section">
              <div className="preview-badge">🎁 DARMOWY PODGLĄD</div>
              <h3>Sprawdź za darmo!</h3>
              <p>Rozwiąż 5 pytań i zagraj w grę Memory - całkowicie bezpłatnie!</p>
              
              <div className="preview-includes">
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>5 pytań quizowych</span>
                </div>
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>Gra Memory ze słownictwem</span>
                </div>
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>Natychmiastowe sprawdzenie odpowiedzi</span>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-large pulse-animation"
                onClick={() => setCurrentSection('quiz')}
              >
                Rozpocznij darmowy podgląd! 🚀
              </button>
            </div>

            <div className="full-course-info">
              <h3>Co znajdziesz w pełnym kursie?</h3>
              <div className="course-modules">
                <div className="module-card">
                  <h4>📖 Moduł 1: Alfabet i liczby</h4>
                  <ul>
                    <li>Litery A-Z z wymową</li>
                    <li>Liczby 1-20</li>
                    <li>Kolory podstawowe</li>
                  </ul>
                </div>
                <div className="module-card">
                  <h4>🐾 Moduł 2: Zwierzęta i natura</h4>
                  <ul>
                    <li>Zwierzęta domowe i dzikie</li>
                    <li>Pogoda i pory roku</li>
                    <li>Rośliny i natura</li>
                  </ul>
                </div>
                <div className="module-card">
                  <h4>🏠 Moduł 3: Dom i rodzina</h4>
                  <ul>
                    <li>Członkowie rodziny</li>
                    <li>Pokoje i meble</li>
                    <li>Przedmioty codziennego użytku</li>
                  </ul>
                </div>
                <div className="module-card">
                  <h4>🎨 Moduł 4: Czasowniki i akcje</h4>
                  <ul>
                    <li>Podstawowe czasowniki (eat, sleep, play)</li>
                    <li>Proste zdania (I am, You are)</li>
                    <li>Pytania i odpowiedzi</li>
                  </ul>
                </div>
              </div>

              <div className="course-price-box">
                <div className="price-header">
                  <h3>Pełny dostęp do kursu A1</h3>
                  <div className="price">
                    <span className="price-amount">149</span>
                    <span className="price-currency">zł</span>
                  </div>
                </div>
                <ul className="price-features">
                  <li>✓ 4 moduły tematyczne</li>
                  <li>✓ Ponad 100 ćwiczeń interaktywnych</li>
                  <li>✓ 20+ gier edukacyjnych</li>
                  <li>✓ Materiały do druku (PDF)</li>
                  <li>✓ Fiszki do nauki słówek</li>
                  <li>✓ Dyplom po ukończeniu</li>
                  <li>✓ Dostęp 12 miesięcy</li>
                </ul>
                <button 
                  className="btn btn-secondary btn-large"
                  onClick={() => navigate('/shop')}
                >
                  Kup pełny kurs 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // QUIZ SECTION
  if (currentSection === 'quiz') {
    const question = freeQuestions[currentQuizQuestion];
    const currentAnswer = quizAnswers[quizAnswers.length - 1];
    const showResult = currentAnswer && currentAnswer.questionId === question.id;

    return (
      <div className="course-page">
        <div className="quiz-header-simple">
          <button className="back-btn-small" onClick={() => setCurrentSection('intro')}>
            ← Wróć
          </button>
          <div className="quiz-progress-simple">
            Pytanie {currentQuizQuestion + 1} z {freeQuestions.length}
          </div>
        </div>

        <div className="quiz-container-kids">
          <div className="question-card-kids">
            <div className="question-number">Pytanie {currentQuizQuestion + 1}</div>
            <div className="question-image-big">{question.image}</div>
            <h2 className="question-text-kids">{question.question}</h2>
            
            {!showResult && (
              <div className="options-grid-kids">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn-kids"
                    onClick={() => handleQuizAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {showResult && (
              <div className={`answer-feedback ${currentAnswer.correct ? 'correct' : 'wrong'}`}>
                <div className="feedback-icon">
                  {currentAnswer.correct ? '🎉' : '😊'}
                </div>
                <div className="feedback-text">
                  {currentAnswer.correct ? 'Brawo! Dobrze!' : 'Prawie! Spróbuj jeszcze raz!'}
                </div>
                <div className="feedback-explanation">
                  {question.explanation}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // GAME SECTION
  if (currentSection === 'game') {
    const gameCompleted = matchedCards.length === memoryCards.length;

    return (
      <div className="course-page">
        <div className="game-header">
          <button className="back-btn-small" onClick={() => setCurrentSection('intro')}>
            ← Wróć do kursu
          </button>
          <div className="game-stats">
            <div className="stat-item">
              <span className="stat-label">Punkty:</span>
              <span className="stat-value">{gameScore}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Próby:</span>
              <span className="stat-value">{gameAttempts}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Znalezione:</span>
              <span className="stat-value">{matchedCards.length}/{memoryCards.length}</span>
            </div>
          </div>
        </div>

        <div className="game-container">
          <div className="game-intro">
            <h2>🎮 Gra Memory - Ucz się słówek!</h2>
            <p>Znajdź pary: słowo angielskie + obrazek. Kliknij na karty, żeby je odkryć!</p>
          </div>

          {!gameCompleted && (
            <div className="memory-grid">
              {gameCards.map((card, index) => {
                const isFlipped = flippedCards.find(c => c.uniqueId === card.uniqueId);
                const isMatched = matchedCards.includes(card.id);
                
                return (
                  <div
                    key={card.uniqueId}
                    className={`memory-card ${isFlipped || isMatched ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
                    onClick={() => handleCardClick(card)}
                  >
                    <div className="card-inner">
                      <div className="card-front">
                        <span className="card-back-icon">❓</span>
                      </div>
                      <div className="card-back">
                        {index % 2 === 0 ? (
                          <div className="card-word">{card.word}</div>
                        ) : (
                          <div className="card-image">{card.image}</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {gameCompleted && (
            <div className="game-completed">
              <div className="completion-icon">🏆</div>
              <h2>Gratulacje!</h2>
              <p>Znalazłeś wszystkie pary!</p>
              <div className="final-score">
                <div className="score-item">
                  <span className="score-label">Twoje punkty:</span>
                  <span className="score-number">{gameScore}</span>
                </div>
                <div className="score-item">
                  <span className="score-label">Liczba prób:</span>
                  <span className="score-number">{gameAttempts}</span>
                </div>
              </div>
              
              <div className="game-actions">
                <button className="btn btn-primary" onClick={resetGame}>
                  Zagraj ponownie 🔄
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/shop')}>
                  Kup pełny kurs - więcej gier! 🛒
                </button>
              </div>

              <div className="unlock-message">
                <h3>🎁 W pełnym kursie znajdziesz:</h3>
                <ul>
                  <li>✓ 20+ różnych gier Memory</li>
                  <li>✓ Quizy interaktywne</li>
                  <li>✓ Gry wisielec ze słówkami</li>
                  <li>✓ Układanki słowne</li>
                  <li>✓ I wiele więcej!</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default KursA1;
