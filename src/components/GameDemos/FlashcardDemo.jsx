import React, { useState, useEffect } from 'react';

export default function FlashcardDemo() {
  const [score, setScore] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const flashcards = [
    { english: 'Beautiful', polish: 'Piękny' },
    { english: 'Happy', polish: 'Szczęśliwy' },
    { english: 'Difficult', polish: 'Trudny' },
    { english: 'Quick', polish: 'Szybki' },
    { english: 'Important', polish: 'Ważny' },
    { english: 'Dangerous', polish: 'Niebezpieczny' },
    { english: 'Comfortable', polish: 'Wygodny' },
    { english: 'Interesting', polish: 'Ciekawy' },
    { english: 'Expensive', polish: 'Drogi' },
    { english: 'Popular', polish: 'Popularny' }
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
  };

  const handleKnow = () => {
    setScore(score + 1);
    nextCard();
  };

  const handleDontKnow = () => {
    nextCard();
  };

  const nextCard = () => {
    setFlipped(false);
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0); // Loop back
    }
  };

  if (!gameStarted) {
    return (
      <div className="game-start-screen">
        <h3>⚡ Flashcard Frenzy</h3>
        <p className="game-instructions">
          Masz <strong>60 sekund</strong> na zapamiętanie jak największej liczby słów!
        </p>
        <div className="game-rules">
          <p>📖 Odwróć fiszkę, aby zobaczyć tłumaczenie</p>
          <p>✅ Kliknij "Znam", jeśli pamiętasz słowo</p>
          <p>❌ Kliknij "Nie znam", aby przejść dalej</p>
        </div>
        <button className="btn-primary btn-large" onClick={startGame}>
          Rozpocznij grę
        </button>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="game-complete">
        <h3>⏱️ Czas minął!</h3>
        <div className="final-score">
          <p className="score-big">{score}</p>
          <p className="score-label">Zapamiętanych słów</p>
        </div>
        <p className="score-message">
          {score >= 15 ? 'Niesamowite! 🌟' :
           score >= 10 ? 'Świetny wynik! 👏' :
           score >= 5 ? 'Dobra robota! 👍' :
           'Spróbuj ponownie! 💪'}
        </p>
        <button className="btn-primary" onClick={startGame}>
          Zagraj ponownie
        </button>
      </div>
    );
  }

  const current = flashcards[currentCard];

  return (
    <div className="flashcard-demo">
      <div className="game-header">
        <div className="timer">
          <span className="timer-icon">⏱️</span>
          <span className="timer-value">{timeLeft}s</span>
        </div>
        <div className="score-display">
          Wynik: <strong>{score}</strong>
        </div>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p className="card-label">English</p>
            <h2 className="card-word">{current.english}</h2>
            <p className="card-hint">👆 Kliknij, aby odwrócić</p>
          </div>
          <div className="flashcard-back">
            <p className="card-label">Polski</p>
            <h2 className="card-word">{current.polish}</h2>
            <p className="card-hint">👆 Kliknij ponownie</p>
          </div>
        </div>
      </div>

      <div className="flashcard-actions">
        <button className="btn-dont-know" onClick={handleDontKnow}>
          ❌ Nie znam
        </button>
        <button className="btn-know" onClick={handleKnow}>
          ✅ Znam
        </button>
      </div>

      <p className="card-counter">Fiszka {currentCard + 1}/{flashcards.length}</p>
    </div>
  );
}
