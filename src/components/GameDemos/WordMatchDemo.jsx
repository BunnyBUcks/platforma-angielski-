import React, { useState, useEffect } from 'react';

export default function WordMatchDemo() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const questions = [
    {
      word: 'Apple',
      translation: 'Jabłko',
      options: ['🍎', '🍌', '🍊', '🍇'],
      correct: '🍎'
    },
    {
      word: 'Cat',
      translation: 'Kot',
      options: ['🐶', '🐱', '🐭', '🐰'],
      correct: '🐱'
    },
    {
      word: 'Sun',
      translation: 'Słońce',
      options: ['🌙', '⭐', '☀️', '🌧️'],
      correct: '☀️'
    },
    {
      word: 'Car',
      translation: 'Samochód',
      options: ['🚗', '🚲', '✈️', '🚢'],
      correct: '🚗'
    },
    {
      word: 'Book',
      translation: 'Książka',
      options: ['📱', '💻', '📖', '📺'],
      correct: '📖'
    }
  ];

  const handleAnswer = (option) => {
    if (showResult) return;
    
    setSelectedAnswer(option);
    setShowResult(true);

    if (option === questions[currentQuestion].correct) {
      setScore(score + 1);
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
      <div className="game-complete">
        <h3>🎉 Gratulacje!</h3>
        <div className="final-score">
          <p className="score-big">{score}/{questions.length}</p>
          <p className="score-percent">{percentage}%</p>
        </div>
        <p className="score-message">
          {percentage === 100 ? 'Perfekcyjny wynik! 🌟' :
           percentage >= 80 ? 'Świetna robota! 👏' :
           percentage >= 60 ? 'Dobry wynik! 👍' :
           'Spróbuj jeszcze raz! 💪'}
        </p>
        <button className="btn-primary" onClick={restartGame}>
          Zagraj ponownie
        </button>
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className="word-match-demo">
      <div className="game-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">Pytanie {currentQuestion + 1}/{questions.length}</p>
        <p className="score-display">Wynik: {score}</p>
      </div>

      <div className="question-card">
        <h3 className="question-title">Dopasuj słowo do obrazka:</h3>
        <div className="word-display">
          <p className="english-word">{current.word}</p>
          <p className="polish-word">({current.translation})</p>
        </div>

        <div className="options-grid-emoji">
          {current.options.map((option, index) => (
            <button
              key={index}
              className={`emoji-option ${
                selectedAnswer === option
                  ? option === current.correct
                    ? 'correct'
                    : 'incorrect'
                  : showResult && option === current.correct
                  ? 'correct-show'
                  : ''
              }`}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`result-message ${selectedAnswer === current.correct ? 'correct' : 'incorrect'}`}>
            {selectedAnswer === current.correct ? (
              <>✓ Brawo! Poprawna odpowiedź!</>
            ) : (
              <>✗ Prawidłowa odpowiedź: {current.correct}</>
            )}
          </div>
        )}

        {showResult && (
          <button className="btn-primary btn-next" onClick={nextQuestion}>
            {currentQuestion < questions.length - 1 ? 'Następne pytanie →' : 'Zobacz wynik'}
          </button>
        )}
      </div>
    </div>
  );
}
