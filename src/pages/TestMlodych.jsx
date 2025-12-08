import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const TestMlodych = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const [showReview, setShowReview] = useState(false);

  // Pytania testowe - 15 pytań różnego poziomu
  const questions = [
    {
      id: 1,
      level: 'A1',
      question: 'What is this? 🐕',
      image: '🐕',
      options: ['A dog', 'A cat', 'A bird', 'A fish'],
      correct: 0,
      points: 1
    },
    {
      id: 2,
      level: 'A1',
      question: 'How do you say "Dzień dobry" in English?',
      options: ['Good night', 'Good morning', 'Goodbye', 'Thank you'],
      correct: 1,
      points: 1
    },
    {
      id: 3,
      level: 'A1',
      question: 'I ___ a student.',
      options: ['is', 'am', 'are', 'be'],
      correct: 1,
      points: 1
    },
    {
      id: 4,
      level: 'A1',
      question: 'Choose the correct number: 🍎🍎🍎',
      options: ['two', 'three', 'four', 'five'],
      correct: 1,
      points: 1
    },
    {
      id: 5,
      level: 'A2',
      question: 'My sister ___ to school every day.',
      options: ['go', 'goes', 'going', 'went'],
      correct: 1,
      points: 2
    },
    {
      id: 6,
      level: 'A2',
      question: 'What is the opposite of "big"?',
      options: ['small', 'tall', 'long', 'short'],
      correct: 0,
      points: 2
    },
    {
      id: 7,
      level: 'A2',
      question: 'I ___ my homework yesterday.',
      options: ['do', 'does', 'did', 'doing'],
      correct: 2,
      points: 2
    },
    {
      id: 8,
      level: 'A2',
      question: 'There ___ many books on the shelf.',
      options: ['is', 'are', 'was', 'be'],
      correct: 1,
      points: 2
    },
    {
      id: 9,
      level: 'B1',
      question: 'If it ___ tomorrow, we will stay home.',
      options: ['rain', 'rains', 'will rain', 'rained'],
      correct: 1,
      points: 3
    },
    {
      id: 10,
      level: 'B1',
      question: 'I have ___ finished my homework.',
      options: ['yet', 'already', 'still', 'never'],
      correct: 1,
      points: 3
    },
    {
      id: 11,
      level: 'B1',
      question: 'She asked me ___ I wanted to go to the cinema.',
      options: ['that', 'if', 'what', 'which'],
      correct: 1,
      points: 3
    },
    {
      id: 12,
      level: 'B1',
      question: 'This book is ___ than that one.',
      options: ['more interesting', 'interestinger', 'most interesting', 'interesting'],
      correct: 0,
      points: 3
    },
    {
      id: 13,
      level: 'B2',
      question: 'By the time we arrived, the movie ___ already ___.',
      options: ['has / started', 'had / started', 'have / started', 'will / start'],
      correct: 1,
      points: 4
    },
    {
      id: 14,
      level: 'B2',
      question: 'I wish I ___ speak Chinese fluently.',
      options: ['can', 'could', 'will', 'would'],
      correct: 1,
      points: 4
    },
    {
      id: 15,
      level: 'B2',
      question: 'The project ___ by the team last week.',
      options: ['completes', 'completed', 'was completed', 'has completed'],
      correct: 2,
      points: 4
    },
  ];

  const handleStartTest = () => {
    if (studentName && age) {
      setShowIntro(false);
    }
  };

  const handleAnswer = (selectedIndex) => {
    const isCorrect = selectedIndex === questions[currentQuestion].correct;
    const points = isCorrect ? questions[currentQuestion].points : 0;
    
    setAnswers([...answers, { 
      questionId: questions[currentQuestion].id, 
      selected: selectedIndex, 
      correct: isCorrect,
      points: points,
      level: questions[currentQuestion].level
    }]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const totalPoints = answers.reduce((sum, answer) => sum + answer.points, 0);
    const maxPoints = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = (totalPoints / maxPoints) * 100;

    // Poziomy według punktów
    const levelsByPoints = {
      A1: answers.filter(a => a.level === 'A1' && a.correct).length,
      A2: answers.filter(a => a.level === 'A2' && a.correct).length,
      B1: answers.filter(a => a.level === 'B1' && a.correct).length,
      B2: answers.filter(a => a.level === 'B2' && a.correct).length,
    };

    let recommendedLevel = 'A1';
    let levelDescription = '';
    let courseRecommendation = '';

    if (percentage >= 80) {
      recommendedLevel = 'B2';
      levelDescription = 'Średniozaawansowany wyższy';
      courseRecommendation = '/kurs-b2';
    } else if (percentage >= 60) {
      recommendedLevel = 'B1';
      levelDescription = 'Średniozaawansowany';
      courseRecommendation = '/kurs-b1';
    } else if (percentage >= 40) {
      recommendedLevel = 'A2';
      levelDescription = 'Podstawowy wyższy';
      courseRecommendation = '/kurs-a2';
    } else {
      recommendedLevel = 'A1';
      levelDescription = 'Podstawowy';
      courseRecommendation = '/kurs-a1';
    }

    return {
      totalPoints,
      maxPoints,
      percentage: Math.round(percentage),
      recommendedLevel,
      levelDescription,
      courseRecommendation,
      levelsByPoints
    };
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowIntro(true);
    setStudentName('');
    setAge('');
    setShowReview(false);
  };

  if (showIntro) {
    return (
      <div className="test-page">
        <div className="test-hero">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Wróć
          </button>
          <div className="test-hero-content">
            <span className="hero-icon">🧒</span>
            <h1>Test Poziomujący dla Młodych</h1>
            <p className="hero-subtitle">
              Sprawdź poziom angielskiego dziecka (7-14 lat)
            </p>
          </div>
        </div>

        <div className="test-intro">
          <div className="intro-card">
            <h2>Witaj! 👋</h2>
            <p>
              Ten test pomoże określić aktualny poziom znajomości języka angielskiego. 
              Test zawiera <strong>15 pytań</strong> z różnych poziomów trudności.
            </p>
            
            <div className="test-info-grid">
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <h3>Czas</h3>
                <p>Około 10-15 minut</p>
              </div>
              <div className="info-item">
                <span className="info-icon">📝</span>
                <h3>Pytania</h3>
                <p>15 pytań</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🎯</span>
                <h3>Poziomy</h3>
                <p>A1, A2, B1, B2</p>
              </div>
            </div>

            <div className="student-form">
              <h3>Zanim zaczniemy...</h3>
              <div className="form-group">
                <label>Imię ucznia:</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Wpisz imię..."
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Wiek:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Wpisz wiek..."
                  min="7"
                  max="14"
                  className="form-input"
                />
              </div>
              <button 
                className="btn btn-primary btn-large"
                onClick={handleStartTest}
                disabled={!studentName || !age}
              >
                Rozpocznij test! 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const result = calculateResult();
    
    return (
      <div className="test-page">
        <div className="test-hero results-hero">
          <div className="test-hero-content">
            <span className="hero-icon">🎉</span>
            <h1>Gratulacje, {studentName}!</h1>
            <p className="hero-subtitle">Test ukończony!</p>
          </div>
        </div>

        <div className="test-results">
          <div className="result-card main-result">
            <h2>Twój wynik:</h2>
            <div className="score-circle">
              <div className="score-value">{result.percentage}%</div>
              <div className="score-label">{result.totalPoints}/{result.maxPoints} punktów</div>
            </div>
            
            <div className="level-badge" data-level={result.recommendedLevel}>
              <h3>Rekomendowany poziom:</h3>
              <div className="level-name">{result.recommendedLevel}</div>
              <div className="level-desc">{result.levelDescription}</div>
            </div>
          </div>

          <div className="result-card breakdown">
            <h3>Szczegółowe wyniki:</h3>
            <div className="level-breakdown">
              <div className="breakdown-item">
                <span className="level-label">A1 (Podstawowy)</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill level-a1" 
                    style={{ width: `${(result.levelsByPoints.A1 / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.A1}/4</span>
              </div>
              <div className="breakdown-item">
                <span className="level-label">A2 (Podstawowy wyższy)</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill level-a2" 
                    style={{ width: `${(result.levelsByPoints.A2 / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.A2}/4</span>
              </div>
              <div className="breakdown-item">
                <span className="level-label">B1 (Średniozaawansowany)</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill level-b1" 
                    style={{ width: `${(result.levelsByPoints.B1 / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.B1}/4</span>
              </div>
              <div className="breakdown-item">
                <span className="level-label">B2 (Średniozaawansowany wyższy)</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill level-b2" 
                    style={{ width: `${(result.levelsByPoints.B2 / 3) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.B2}/3</span>
              </div>
            </div>
          </div>

          <div className="result-card recommendations">
            <h3>Co dalej?</h3>
            <p>
              Na podstawie wyniku testu, rekomendujemy rozpoczęcie nauki od poziomu <strong>{result.recommendedLevel}</strong>.
            </p>
            <div className="recommendation-actions">
              <button 
                className="btn btn-primary"
                onClick={() => navigate(result.courseRecommendation)}
              >
                Zobacz kurs {result.recommendedLevel}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/shop')}
              >
                Przejdź do sklepu
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => setShowReview(true)}
              >
                Zobacz odpowiedzi
              </button>
              <button 
                className="btn btn-outline"
                onClick={restartTest}
              >
                Powtórz test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Review section - pokazuje wszystkie odpowiedzi
  if (showReview) {
    return (
      <div className="test-page">
        <div className="test-hero">
          <button className="back-btn" onClick={() => setShowReview(false)}>
            ← Wróć do wyników
          </button>
          <div className="test-hero-content">
            <span className="hero-icon">📋</span>
            <h1>Przegląd odpowiedzi</h1>
            <p className="hero-subtitle">
              Twoje odpowiedzi wraz z poprawnymi rozwiązaniami
            </p>
          </div>
        </div>

        <div className="review-container">
          {questions.map((question, qIndex) => {
            const userAnswer = answers.find(a => a.questionId === question.id);
            const isCorrect = userAnswer?.correct || false;
            const userSelectedIndex = userAnswer?.selected;
            
            return (
              <div key={question.id} className="review-question-card">
                <div className="review-header">
                  <span className="review-number">Pytanie {qIndex + 1}</span>
                  <span className={`review-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓ Poprawnie' : '✗ Niepoprawnie'}
                  </span>
                </div>
                
                <div className="review-level">Poziom: {question.level}</div>
                <h3 className="review-question-text">{question.question}</h3>
                
                {question.image && (
                  <div className="review-image">{question.image}</div>
                )}
                
                <div className="review-options">
                  {question.options.map((option, optIndex) => {
                    const isUserAnswer = optIndex === userSelectedIndex;
                    const isCorrectAnswer = optIndex === question.correct;
                    
                    let className = 'review-option';
                    if (isCorrectAnswer) {
                      className += ' correct-answer';
                    }
                    if (isUserAnswer && !isCorrect) {
                      className += ' wrong-answer';
                    }
                    
                    return (
                      <div key={optIndex} className={className}>
                        <span className="option-letter">{String.fromCharCode(65 + optIndex)}</span>
                        <span className="option-text">{option}</span>
                        {isCorrectAnswer && <span className="answer-label">✓ Poprawna odpowiedź</span>}
                        {isUserAnswer && !isCorrect && <span className="answer-label">✗ Twoja odpowiedź</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          
          <div className="review-actions">
            <button 
              className="btn btn-primary"
              onClick={() => setShowReview(false)}
            >
              Wróć do wyników
            </button>
            <button 
              className="btn btn-outline"
              onClick={restartTest}
            >
              Powtórz test
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="test-page">
      <div className="test-header">
        <button className="back-btn-small" onClick={() => navigate('/')}>
          ← Wróć
        </button>
        <div className="test-progress">
          <div className="progress-info">
            Pytanie {currentQuestion + 1} z {questions.length}
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <div className="test-question-container">
        <div className="question-card">
          <div className="question-level">Poziom: {question.level}</div>
          <h2 className="question-text">{question.question}</h2>
          {question.image && (
            <div className="question-image">{question.image}</div>
          )}
          <div className="options-grid">
            {question.options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswer(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMlodych;
