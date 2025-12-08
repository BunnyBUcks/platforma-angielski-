import React, { useState } from 'react';

export default function GrammarQuestDemo({ game }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const questions = [
    {
      question: 'She ___ to school every day.',
      options: ['go', 'goes', 'going', 'went'],
      correct: 'goes',
      explanation: 'Używamy "goes" z podmiotem "she" w Present Simple.'
    },
    {
      question: 'I ___ (eat) pizza yesterday.',
      options: ['eat', 'eats', 'ate', 'eaten'],
      correct: 'ate',
      explanation: 'Past Simple czasownika "eat" to "ate".'
    },
    {
      question: '___ apple a day keeps the doctor away.',
      options: ['A', 'An', 'The', '-'],
      correct: 'An',
      explanation: 'Używamy "an" przed wyrazami zaczynającymi się na samogłoskę.'
    },
    {
      question: 'They ___ playing football now.',
      options: ['is', 'are', 'am', 'be'],
      correct: 'are',
      explanation: 'Podmiot "they" wymaga "are" w Present Continuous.'
    },
    {
      question: 'I have ___ finished my homework.',
      options: ['yet', 'already', 'still', 'never'],
      correct: 'already',
      explanation: '"Already" używamy w zdaniach twierdzących Present Perfect.'
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
        <h3>📝 Koniec quizu!</h3>
        <div className="final-score">
          <p className="score-big">{score}/{questions.length}</p>
          <p className="score-percent">{percentage}%</p>
        </div>
        <p className="score-message">
          {percentage === 100 ? 'Perfekcyjna gramatyka! 🌟' :
           percentage >= 80 ? 'Bardzo dobrze! 👏' :
           percentage >= 60 ? 'Dobry wynik! 👍' :
           'Ćwicz dalej! 💪'}
        </p>
        <button className="btn-primary" onClick={restartGame}>
          Zagraj ponownie
        </button>
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className="grammar-quest-demo">
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
        <h3 className="grammar-question">{current.question}</h3>

        <div className="grammar-options">
          {current.options.map((option, index) => (
            <button
              key={index}
              className={`grammar-option ${
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
              <>✗ Prawidłowa odpowiedź: <strong>{current.correct}</strong></>
            )}
            <p className="explanation">💡 {current.explanation}</p>
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
