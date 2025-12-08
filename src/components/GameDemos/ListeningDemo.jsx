import React, { useState } from 'react';

export default function ListeningDemo({ game }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const questions = [
    {
      text: 'three',
      question: 'Które słowo słyszysz?',
      options: ['tree', 'three', 'free', 'thee'],
      correct: 'three'
    },
    {
      text: 'The cat is sleeping on the sofa',
      question: 'Co robi kot?',
      options: ['Śpi na sofie', 'Biega po domu', 'Je jedzenie', 'Bawi się'],
      correct: 'Śpi na sofie'
    },
    {
      text: 'I love learning English',
      question: 'Co słyszysz?',
      options: ['I love learning English', 'I like learning English', 'I love teaching English', 'I like teaching English'],
      correct: 'I love learning English'
    }
  ];

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(questions[currentQuestion].text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

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
        <h3>🎧 Koniec ćwiczenia!</h3>
        <div className="final-score">
          <p className="score-big">{score}/{questions.length}</p>
          <p className="score-percent">{percentage}%</p>
        </div>
        <p className="score-message">
          {percentage === 100 ? 'Doskonały słuch! 🌟' :
           percentage >= 80 ? 'Świetnie! 👏' :
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
    <div className="listening-demo">
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

      <div className="listening-card">
        <button className="audio-btn-large" onClick={playAudio}>
          🔊 Odtwórz nagranie
        </button>

        <h3 className="listening-question">{current.question}</h3>

        <div className="listening-options">
          {current.options.map((option, index) => (
            <button
              key={index}
              className={`listening-option ${
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
              <>✓ Brawo! Dobrze usłyszałeś!</>
            ) : (
              <>✗ Prawidłowa odpowiedź: <strong>{current.correct}</strong></>
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
