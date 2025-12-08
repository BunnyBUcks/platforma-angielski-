import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const TestDoroslych = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const [showReview, setShowReview] = useState(false);

  // Pytania testowe - 20 pytań z naciskiem na biznes
  const questions = [
    {
      id: 1,
      level: 'A1',
      category: 'basic',
      question: 'Hello! How ___ you?',
      options: ['is', 'am', 'are', 'be'],
      correct: 2,
      points: 1
    },
    {
      id: 2,
      level: 'A1',
      category: 'basic',
      question: 'I ___ from Poland.',
      options: ['am', 'is', 'are', 'be'],
      correct: 0,
      points: 1
    },
    {
      id: 3,
      level: 'A1',
      category: 'business',
      question: 'Nice to ___ you. (spotkanie biznesowe)',
      options: ['meet', 'see', 'know', 'find'],
      correct: 0,
      points: 1
    },
    {
      id: 4,
      level: 'A2',
      category: 'basic',
      question: 'She ___ to work by car every day.',
      options: ['go', 'goes', 'going', 'went'],
      correct: 1,
      points: 2
    },
    {
      id: 5,
      level: 'A2',
      category: 'business',
      question: 'I would like to ___ an appointment.',
      options: ['do', 'make', 'have', 'take'],
      correct: 1,
      points: 2
    },
    {
      id: 6,
      level: 'A2',
      category: 'business',
      question: 'Could you please ___ me your email address?',
      options: ['say', 'tell', 'give', 'speak'],
      correct: 2,
      points: 2
    },
    {
      id: 7,
      level: 'A2',
      category: 'basic',
      question: 'There ___ many people at the conference yesterday.',
      options: ['is', 'are', 'was', 'were'],
      correct: 3,
      points: 2
    },
    {
      id: 8,
      level: 'B1',
      category: 'business',
      question: 'We need to ___ the deadline for this project.',
      options: ['meet', 'reach', 'achieve', 'arrive'],
      correct: 0,
      points: 3
    },
    {
      id: 9,
      level: 'B1',
      category: 'basic',
      question: 'If I ___ more time, I would learn another language.',
      options: ['have', 'had', 'will have', 'would have'],
      correct: 1,
      points: 3
    },
    {
      id: 10,
      level: 'B1',
      category: 'business',
      question: 'The sales figures ___ significantly since last quarter.',
      options: ['increase', 'increased', 'have increased', 'are increasing'],
      correct: 2,
      points: 3
    },
    {
      id: 11,
      level: 'B1',
      category: 'business',
      question: 'I am writing to ___ about the position advertised on your website.',
      options: ['ask', 'inquire', 'question', 'demand'],
      correct: 1,
      points: 3
    },
    {
      id: 12,
      level: 'B1',
      category: 'basic',
      question: 'She asked me ___ I could help her with the presentation.',
      options: ['that', 'if', 'what', 'which'],
      correct: 1,
      points: 3
    },
    {
      id: 13,
      level: 'B2',
      category: 'business',
      question: 'We need to ___ a strategy to improve customer satisfaction.',
      options: ['develop', 'make', 'do', 'create'],
      correct: 0,
      points: 4
    },
    {
      id: 14,
      level: 'B2',
      category: 'basic',
      question: 'By the time the meeting starts, I ___ the report.',
      options: ['finish', 'will finish', 'will have finished', 'have finished'],
      correct: 2,
      points: 4
    },
    {
      id: 15,
      level: 'B2',
      category: 'business',
      question: 'The proposal ___ by the board of directors next week.',
      options: ['reviews', 'will review', 'will be reviewed', 'is reviewing'],
      correct: 2,
      points: 4
    },
    {
      id: 16,
      level: 'B2',
      category: 'business',
      question: 'Despite ___ hard, we didn\'t meet our quarterly targets.',
      options: ['work', 'working', 'to work', 'worked'],
      correct: 1,
      points: 4
    },
    {
      id: 17,
      level: 'C1',
      category: 'business',
      question: 'The company is ___ restructuring to improve efficiency.',
      options: ['undergoing', 'undertaking', 'understanding', 'underlining'],
      correct: 0,
      points: 5
    },
    {
      id: 18,
      level: 'C1',
      category: 'business',
      question: 'Had I known about the issue earlier, I ___ immediate action.',
      options: ['took', 'would take', 'would have taken', 'will take'],
      correct: 2,
      points: 5
    },
    {
      id: 19,
      level: 'C1',
      category: 'business',
      question: 'The CEO emphasized the importance of ___ competitive in the global market.',
      options: ['staying', 'to stay', 'stay', 'stayed'],
      correct: 0,
      points: 5
    },
    {
      id: 20,
      level: 'C1',
      category: 'business',
      question: 'Our company has been ___ recognized as an industry leader in innovation.',
      options: ['consistently', 'consequently', 'considerably', 'continuously'],
      correct: 0,
      points: 5
    },
  ];

  const handleStartTest = () => {
    if (studentName && purpose) {
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
      level: questions[currentQuestion].level,
      category: questions[currentQuestion].category
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
      C1: answers.filter(a => a.level === 'C1' && a.correct).length,
    };

    const businessCorrect = answers.filter(a => a.category === 'business' && a.correct).length;
    const businessTotal = questions.filter(q => q.category === 'business').length;
    const businessPercentage = Math.round((businessCorrect / businessTotal) * 100);

    let recommendedLevel = 'A1';
    let levelDescription = '';
    let courseRecommendation = '';
    let additionalRecommendation = '';

    if (percentage >= 85) {
      recommendedLevel = 'C1';
      levelDescription = 'Zaawansowany';
      courseRecommendation = '/biznesowy-c1';
      additionalRecommendation = 'Angielski biznesowy C1';
    } else if (percentage >= 70) {
      recommendedLevel = 'B2';
      levelDescription = 'Średniozaawansowany wyższy';
      courseRecommendation = businessPercentage >= 60 ? '/biznesowy-b2' : '/kurs-b2';
      additionalRecommendation = businessPercentage >= 60 ? 'Angielski biznesowy B2' : 'Kurs ogólny B2';
    } else if (percentage >= 55) {
      recommendedLevel = 'B1';
      levelDescription = 'Średniozaawansowany';
      courseRecommendation = '/kurs-b1';
      additionalRecommendation = 'Kurs ogólny B1';
    } else if (percentage >= 35) {
      recommendedLevel = 'A2';
      levelDescription = 'Podstawowy wyższy';
      courseRecommendation = '/kurs-a2';
      additionalRecommendation = 'Kurs ogólny A2';
    } else {
      recommendedLevel = 'A1';
      levelDescription = 'Podstawowy';
      courseRecommendation = '/kurs-a1';
      additionalRecommendation = 'Kurs ogólny A1';
    }

    return {
      totalPoints,
      maxPoints,
      percentage: Math.round(percentage),
      recommendedLevel,
      levelDescription,
      courseRecommendation,
      additionalRecommendation,
      levelsByPoints,
      businessCorrect,
      businessTotal,
      businessPercentage
    };
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowIntro(true);
    setStudentName('');
    setPurpose('');
    setShowReview(false);
  };

  if (showIntro) {
    return (
      <div className="test-page">
        <div className="test-hero adult-hero">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Wróć
          </button>
          <div className="test-hero-content">
            <span className="hero-icon">👔</span>
            <h1>Test Poziomujący dla Dorosłych</h1>
            <p className="hero-subtitle">
              Sprawdź swój poziom języka angielskiego (15+ lat)
            </p>
          </div>
        </div>

        <div className="test-intro">
          <div className="intro-card">
            <h2>Witaj! 👋</h2>
            <p>
              Ten test pomoże określić Twój aktualny poziom znajomości języka angielskiego, 
              ze szczególnym uwzględnieniem <strong>języka biznesowego</strong>. Test zawiera <strong>20 pytań</strong> z różnych poziomów trudności (A1-C1).
            </p>
            
            <div className="test-info-grid">
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <h3>Czas</h3>
                <p>Około 15-20 minut</p>
              </div>
              <div className="info-item">
                <span className="info-icon">📝</span>
                <h3>Pytania</h3>
                <p>20 pytań</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🎯</span>
                <h3>Poziomy</h3>
                <p>A1, A2, B1, B2, C1</p>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <h3>Język biznesowy</h3>
                <p>13 pytań biznesowych</p>
              </div>
            </div>

            <div className="student-form">
              <h3>Zanim zaczniemy...</h3>
              <div className="form-group">
                <label>Imię:</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Wpisz swoje imię..."
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Cel nauki angielskiego:</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="form-input"
                >
                  <option value="">Wybierz...</option>
                  <option value="praca">Praca / Kariera</option>
                  <option value="biznes">Język biznesowy</option>
                  <option value="podroz">Podróże</option>
                  <option value="egzamin">Przygotowanie do egzaminu</option>
                  <option value="rozwoj">Rozwój osobisty</option>
                  <option value="inne">Inne</option>
                </select>
              </div>
              <button 
                className="btn btn-primary btn-large"
                onClick={handleStartTest}
                disabled={!studentName || !purpose}
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
        <div className="test-hero results-hero adult-results">
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
                    style={{ width: `${(result.levelsByPoints.A1 / 3) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.A1}/3</span>
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
                    style={{ width: `${(result.levelsByPoints.B1 / 5) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.B1}/5</span>
              </div>
              <div className="breakdown-item">
                <span className="level-label">B2 (Średniozaawansowany wyższy)</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill level-b2" 
                    style={{ width: `${(result.levelsByPoints.B2 / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.B2}/4</span>
              </div>
              <div className="breakdown-item">
                <span className="level-label">C1 (Zaawansowany)</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill level-c1" 
                    style={{ width: `${(result.levelsByPoints.C1 / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="breakdown-score">{result.levelsByPoints.C1}/4</span>
              </div>
            </div>
          </div>

          <div className="result-card business-card">
            <h3>💼 Język biznesowy</h3>
            <p>
              Twój wynik w pytaniach biznesowych: <strong>{result.businessCorrect}/{result.businessTotal}</strong> ({result.businessPercentage}%)
            </p>
            <div className="business-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill business-fill" 
                  style={{ width: `${result.businessPercentage}%` }}
                ></div>
              </div>
            </div>
            {result.businessPercentage >= 70 && (
              <div className="business-recommendation">
                ✨ Świetnie radzisz sobie z językiem biznesowym! Polecamy zaawansowane kursy biznesowe.
              </div>
            )}
            {result.businessPercentage >= 40 && result.businessPercentage < 70 && (
              <div className="business-recommendation">
                💡 Masz solidne podstawy języka biznesowego. Kurs biznesowy pomoże Ci je rozwinąć.
              </div>
            )}
            {result.businessPercentage < 40 && (
              <div className="business-recommendation">
                📚 Warto zacząć od kursu ogólnego, a potem przejść do języka biznesowego.
              </div>
            )}
          </div>

          <div className="result-card recommendations">
            <h3>Co dalej?</h3>
            <p>
              Na podstawie wyniku testu i Twojego celu (<strong>{
                purpose === 'praca' ? 'Praca/Kariera' :
                purpose === 'biznes' ? 'Język biznesowy' :
                purpose === 'podroz' ? 'Podróże' :
                purpose === 'egzamin' ? 'Przygotowanie do egzaminu' :
                purpose === 'rozwoj' ? 'Rozwój osobisty' : 'Inne'
              }</strong>), 
              rekomendujemy rozpoczęcie nauki od poziomu <strong>{result.recommendedLevel}</strong>.
            </p>
            <div className="recommendation-actions">
              <button 
                className="btn btn-primary"
                onClick={() => navigate(result.courseRecommendation)}
              >
                {result.additionalRecommendation}
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
        <div className="test-hero adult-hero">
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
                  <span className="review-number">
                    Pytanie {qIndex + 1}
                    {question.category === 'business' && <span className="business-badge"> 💼 Biznesowy</span>}
                  </span>
                  <span className={`review-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓ Poprawnie' : '✗ Niepoprawnie'}
                  </span>
                </div>
                
                <div className="review-level">Poziom: {question.level}</div>
                <h3 className="review-question-text">{question.question}</h3>
                
                {question.context && (
                  <div className="question-context">{question.context}</div>
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
            {question.category === 'business' && <span className="business-badge"> 💼 Biznesowy</span>}
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

export default TestDoroslych;
