import React, { useState, useEffect } from 'react';
import './WordMatch.css';

export default function WordMatch() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const questions = [
    { word: 'Apple', translation: 'Jabłko', options: ['🍎', '🍌', '🍊', '🍇'], correct: '🍎', color: '#ef4444' },
    { word: 'Cat', translation: 'Kot', options: ['🐶', '🐱', '🐭', '🐰'], correct: '🐱', color: '#f59e0b' },
    { word: 'Sun', translation: 'Słońce', options: ['🌙', '⭐', '☀️', '🌧️'], correct: '☀️', color: '#eab308' },
    { word: 'Car', translation: 'Samochód', options: ['🚗', '🚲', '✈️', '🚢'], correct: '🚗', color: '#3b82f6' },
    { word: 'Book', translation: 'Książka', options: ['📱', '💻', '📖', '📺'], correct: '📖', color: '#8b5cf6' },
    { word: 'House', translation: 'Dom', options: ['🏠', '🏢', '🏰', '⛺'], correct: '🏠', color: '#06b6d4' },
    { word: 'Tree', translation: 'Drzewo', options: ['🌲', '🌺', '🌵', '🍄'], correct: '🌲', color: '#10b981' },
    { word: 'Heart', translation: 'Serce', options: ['❤️', '💙', '💚', '💛'], correct: '❤️', color: '#ec4899' }
  ];

  const handleAnswer = (option) => {
    if (showResult) return;
    
    setSelectedAnswer(option);
    setShowResult(true);

    if (option === questions[currentQuestion].correct) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameComplete(false);
  };

  if (gameComplete) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="word-match-container">
        <div className="game-complete-screen">
          <div className="completion-icon">🎉</div>
          <h2>Gratulacje!</h2>
          <div className="final-score-display">
            <div className="score-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className="score-bg" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  className="score-progress"
                  style={{
                    strokeDasharray: `${percentage * 2.827} 282.7`,
                  }}
                />
              </svg>
              <div className="score-text">
                <span className="score-number">{score}</span>
                <span className="score-total">/{questions.length}</span>
              </div>
            </div>
          </div>
          <p className="score-message">
            {percentage === 100 ? 'Perfekcyjny wynik! 🌟' :
             percentage >= 80 ? 'Świetna robota! 👏' :
             percentage >= 60 ? 'Dobry wynik! 👍' :
             'Spróbuj jeszcze raz! 💪'}
          </p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">{percentage.toFixed(0)}%</span>
              <span className="stat-label">Poprawność</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{questions.length}</span>
              <span className="stat-label">Pytań</span>
            </div>
          </div>
          <button className="restart-btn" onClick={restartGame}>
            🔄 Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className="word-match-container">
      {showConfetti && <div className="confetti-burst">✨🎉✨</div>}
      
      <div className="game-header-wm">
        <div className="progress-track">
          {questions.map((_, idx) => (
            <div 
              key={idx} 
              className={`progress-dot ${idx <= currentQuestion ? 'active' : ''} ${idx < currentQuestion ? 'completed' : ''}`}
            />
          ))}
        </div>
        <div className="score-badge">
          <span className="trophy-icon">🏆</span>
          <span className="score-value">{score}</span>
        </div>
      </div>

      <div className="question-area" style={{ borderColor: current.color }}>
        <div className="word-card">
          <div className="word-flag">🇬🇧</div>
          <h2 className="english-word" style={{ color: current.color }}>
            {current.word}
          </h2>
          <p className="polish-translation">({current.translation})</p>
        </div>

        <div className="instruction-text">
          <span className="instruction-icon">👇</span>
          Wybierz odpowiedni obrazek
        </div>

        <div className="emoji-grid">
          {current.options.map((option, index) => (
            <button
              key={index}
              className={`emoji-card ${
                selectedAnswer === option
                  ? option === current.correct
                    ? 'correct-answer'
                    : 'wrong-answer'
                  : showResult && option === current.correct
                  ? 'show-correct'
                  : ''
              }`}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="emoji-content">{option}</span>
              {selectedAnswer === option && option === current.correct && (
                <span className="check-mark">✓</span>
              )}
              {selectedAnswer === option && option !== current.correct && (
                <span className="cross-mark">✗</span>
              )}
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`result-banner ${selectedAnswer === current.correct ? 'correct' : 'incorrect'}`}>
            {selectedAnswer === current.correct ? (
              <>
                <span className="result-icon">🎯</span>
                <span className="result-text">Brawo! Poprawna odpowiedź!</span>
              </>
            ) : (
              <>
                <span className="result-icon">💡</span>
                <span className="result-text">Prawidłowa odpowiedź: {current.correct}</span>
              </>
            )}
          </div>
        )}
      </div>

      {showResult && (
        <button className="next-btn" onClick={nextQuestion}>
          {currentQuestion < questions.length - 1 ? (
            <>Następne pytanie <span className="arrow">→</span></>
          ) : (
            <>Zobacz wynik <span className="arrow">🏁</span></>
          )}
        </button>
      )}
    </div>
  );
}
