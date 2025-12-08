import React, { useState, useEffect } from 'react';
import './FlashcardFrenzy.css';

export default function FlashcardFrenzy() {
  const [score, setScore] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const flashcards = [
    { english: 'Beautiful', polish: 'Piękny', category: 'Przymiotniki' },
    { english: 'Happy', polish: 'Szczęśliwy', category: 'Emocje' },
    { english: 'Difficult', polish: 'Trudny', category: 'Przymiotniki' },
    { english: 'Quick', polish: 'Szybki', category: 'Przymiotniki' },
    { english: 'Important', polish: 'Ważny', category: 'Przymiotniki' },
    { english: 'Dangerous', polish: 'Niebezpieczny', category: 'Przymiotniki' },
    { english: 'Comfortable', polish: 'Wygodny', category: 'Przymiotniki' },
    { english: 'Interesting', polish: 'Ciekawy', category: 'Przymiotniki' },
    { english: 'Expensive', polish: 'Drogi', category: 'Przymiotniki' },
    { english: 'Popular', polish: 'Popularny', category: 'Przymiotniki' },
    { english: 'Surprised', polish: 'Zaskoczony', category: 'Emocje' },
    { english: 'Excited', polish: 'Podekscytowany', category: 'Emocje' },
    { english: 'Tired', polish: 'Zmęczony', category: 'Emocje' },
    { english: 'Confused', polish: 'Zdezorientowany', category: 'Emocje' },
    { english: 'Proud', polish: 'Dumny', category: 'Emocje' }
  ];

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setCurrentCard(0);
    setTimeLeft(60);
    setFlipped(false);
    setStreak(0);
    setBestStreak(0);
  };

  const handleKnow = () => {
    setScore(score + 1);
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > bestStreak) {
      setBestStreak(newStreak);
    }
    nextCard();
  };

  const handleDontKnow = () => {
    setStreak(0);
    nextCard();
  };

  const nextCard = () => {
    setFlipped(false);
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
  };

  if (!gameStarted) {
    return (
      <div className="flashcard-frenzy-container">
        <div className="start-screen">
          <div className="lightning-icon">⚡</div>
          <h2>Flashcard Frenzy</h2>
          <p className="tagline">Jak szybko potrafisz się uczyć?</p>
          
          <div className="game-info">
            <div className="info-item">
              <span className="info-icon">⏱️</span>
              <div>
                <h3>60 sekund</h3>
                <p>Czas na zapamiętanie słów</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🔥</span>
              <div>
                <h3>Seria</h3>
                <p>Buduj streak poprawnych odpowiedzi</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎯</span>
              <div>
                <h3>Punkty</h3>
                <p>Za każde znane słowo</p>
              </div>
            </div>
          </div>

          <div className="rules-box">
            <h3>Jak grać?</h3>
            <ul>
              <li>Kliknij fiszkę aby zobaczyć tłumaczenie</li>
              <li>Naciśnij "Znam" jeśli pamiętasz słowo</li>
              <li>Naciśnij "Nie znam" aby przejść dalej</li>
              <li>Buduj serie aby zdobyć bonus!</li>
            </ul>
          </div>

          <button className="start-btn" onClick={startGame}>
            <span className="btn-icon">🚀</span>
            Rozpocznij wyzwanie!
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const percentage = (score / 60) * 100;
    return (
      <div className="flashcard-frenzy-container">
        <div className="game-over-screen">
          <div className="trophy-animation">
            {score >= 30 ? '🏆' : score >= 20 ? '🥈' : score >= 10 ? '🥉' : '⭐'}
          </div>
          <h2>Czas minął!</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <h3>{score}</h3>
              <p>Zapamiętanych słów</p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🔥</span>
              <h3>{bestStreak}</h3>
              <p>Najdłuższa seria</p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⚡</span>
              <h3>{(score / 60 * 60).toFixed(1)}/min</h3>
              <p>Tempo nauki</p>
            </div>
          </div>

          <div className="achievement-box">
            {score >= 30 && (
              <div className="achievement">
                🏆 <strong>Mistrz Pamięci!</strong> - Ponad 30 słów!
              </div>
            )}
            {score >= 20 && score < 30 && (
              <div className="achievement">
                🥈 <strong>Świetny wynik!</strong> - Ponad 20 słów!
              </div>
            )}
            {bestStreak >= 10 && (
              <div className="achievement">
                🔥 <strong>Gorąca seria!</strong> - 10x z rzędu!
              </div>
            )}
          </div>

          <button className="restart-btn-frenzy" onClick={startGame}>
            🔄 Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  const current = flashcards[currentCard];
  const timerPercentage = (timeLeft / 60) * 100;
  const isLowTime = timeLeft <= 10;

  return (
    <div className="flashcard-frenzy-container">
      <div className="game-header-frenzy">
        <div className="timer-display">
          <div className={`timer-circle ${isLowTime ? 'low-time' : ''}`}>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className="timer-bg" />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                className="timer-fill"
                style={{
                  strokeDasharray: `${timerPercentage * 2.827} 282.7`,
                }}
              />
            </svg>
            <div className="timer-text">
              {timeLeft}s
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item-bar">
            <span className="stat-icon-bar">📚</span>
            <span className="stat-value-bar">{score}</span>
          </div>
          {streak > 0 && (
            <div className="streak-display">
              <span className="fire-emoji">🔥</span>
              <span className="streak-value">{streak}</span>
            </div>
          )}
        </div>
      </div>

      <div className="card-area">
        <div className="category-tag">{current.category}</div>
        
        <div 
          className={`flashcard-3d ${flipped ? 'is-flipped' : ''}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="card-face card-front">
            <div className="card-corner">🇬🇧</div>
            <div className="card-content">
              <h2 className="card-word-main">{current.english}</h2>
              <p className="card-instruction">👆 Kliknij aby odwrócić</p>
            </div>
            <div className="card-decoration">⚡</div>
          </div>

          <div className="card-face card-back">
            <div className="card-corner">🇵🇱</div>
            <div className="card-content">
              <h2 className="card-word-main">{current.polish}</h2>
              <p className="card-instruction">👆 Kliknij ponownie</p>
            </div>
            <div className="card-decoration">💡</div>
          </div>
        </div>

        <div className="progress-info">
          Fiszka {currentCard + 1} / {flashcards.length}
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn-dont-know-frenzy" onClick={handleDontKnow}>
          <span className="btn-emoji">❌</span>
          Nie znam
        </button>
        <button className="btn-know-frenzy" onClick={handleKnow}>
          <span className="btn-emoji">✅</span>
          Znam!
        </button>
      </div>
    </div>
  );
}
