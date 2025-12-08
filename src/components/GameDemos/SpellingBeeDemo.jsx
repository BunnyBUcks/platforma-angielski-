import React, { useState } from 'react';

export default function SpellingBeeDemo() {
  const [currentWord, setCurrentWord] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const words = [
    {
      word: 'receive',
      pronunciation: '[ri-seev]',
      meaning: 'otrzymywać',
      difficulty: 'trudne'
    },
    {
      word: 'necessary',
      pronunciation: '[nes-uh-ser-ee]',
      meaning: 'konieczny',
      difficulty: 'trudne'
    },
    {
      word: 'beautiful',
      pronunciation: '[byoo-tuh-fuhl]',
      meaning: 'piękny',
      difficulty: 'średnie'
    },
    {
      word: 'Wednesday',
      pronunciation: '[wenz-day]',
      meaning: 'środa',
      difficulty: 'średnie'
    },
    {
      word: 'restaurant',
      pronunciation: '[res-tuh-ront]',
      meaning: 'restauracja',
      difficulty: 'średnie'
    }
  ];

  const playAudio = () => {
    // Symulacja odtwarzania audio
    const utterance = new SpeechSynthesisUtterance(words[currentWord].word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim() || showResult) return;

    const isCorrect = userAnswer.toLowerCase().trim() === words[currentWord].word.toLowerCase();
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextWord = () => {
    if (currentWord < words.length - 1) {
      setCurrentWord(currentWord + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const restartGame = () => {
    setCurrentWord(0);
    setUserAnswer('');
    setShowResult(false);
    setScore(0);
    setGameComplete(false);
  };

  if (gameComplete) {
    const percentage = (score / words.length) * 100;
    return (
      <div className="game-complete">
        <h3>🐝 Koniec gry!</h3>
        <div className="final-score">
          <p className="score-big">{score}/{words.length}</p>
          <p className="score-percent">{percentage}%</p>
        </div>
        <p className="score-message">
          {percentage === 100 ? 'Perfekcyjna ortografia! 🌟' :
           percentage >= 80 ? 'Świetnie! 👏' :
           percentage >= 60 ? 'Nieźle! 👍' :
           'Ćwicz dalej! 💪'}
        </p>
        <button className="btn-primary" onClick={restartGame}>
          Zagraj ponownie
        </button>
      </div>
    );
  }

  const current = words[currentWord];

  return (
    <div className="spelling-bee-demo">
      <div className="game-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentWord + 1) / words.length) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">Słowo {currentWord + 1}/{words.length}</p>
        <p className="score-display">Wynik: {score}</p>
      </div>

      <div className="spelling-card">
        <button className="audio-btn" onClick={playAudio}>
          🔊 Posłuchaj słowa
        </button>

        <div className="word-info">
          <p className="pronunciation">{current.pronunciation}</p>
          <p className="meaning">Znaczenie: <strong>{current.meaning}</strong></p>
          <span className={`difficulty-badge difficulty-${current.difficulty === 'trudne' ? 'hard' : 'medium'}`}>
            {current.difficulty}
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="spelling-input-group">
            <input
              type="text"
              className="spelling-input"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Wpisz słowo..."
              disabled={showResult}
              autoFocus
            />
            {!showResult && (
              <button type="submit" className="btn-primary">
                Sprawdź
              </button>
            )}
          </div>
        </form>

        {showResult && (
          <div className={`result-message ${userAnswer.toLowerCase().trim() === current.word.toLowerCase() ? 'correct' : 'incorrect'}`}>
            {userAnswer.toLowerCase().trim() === current.word.toLowerCase() ? (
              <>✓ Brawo! Poprawna pisownia!</>
            ) : (
              <>✗ Prawidłowa pisownia: <strong>{current.word}</strong></>
            )}
          </div>
        )}

        {showResult && (
          <button className="btn-primary btn-next" onClick={nextWord}>
            {currentWord < words.length - 1 ? 'Następne słowo →' : 'Zobacz wynik'}
          </button>
        )}
      </div>
    </div>
  );
}
