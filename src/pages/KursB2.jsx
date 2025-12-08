import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const KursB2 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('intro');
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  // Darmowe pytania quizowe B2 (5 pytań - poziom wyższy średnio-zaawansowany)
  const freeQuestions = [
    {
      id: 1,
      question: 'Had I known about the meeting, I ___ attended.',
      image: '📅',
      options: ['would have', 'will have', 'would', 'have'],
      correct: 0,
      explanation: 'Third Conditional z inwersją: Had I known = If I had known'
    },
    {
      id: 2,
      question: 'The report ___ by the time you arrive.',
      image: '📊',
      options: ['will finish', 'will be finished', 'will have been finished', 'is finished'],
      correct: 2,
      explanation: 'Future Perfect Passive: will have been finished - zostanie ukończony'
    },
    {
      id: 3,
      question: 'Rarely ___ such a beautiful sunset.',
      image: '🌅',
      options: ['I have seen', 'have I seen', 'I saw', 'did I saw'],
      correct: 1,
      explanation: 'Inwersja po rarely: Rarely have I seen (rzadko widziałem)'
    },
    {
      id: 4,
      question: 'I would rather you ___ to the party yesterday.',
      image: '🎉',
      options: ['came', 'come', 'had come', 'would come'],
      correct: 2,
      explanation: 'Would rather + Past Perfect (had come) dla przeszłości'
    },
    {
      id: 5,
      question: '___ hard he tries, he never succeeds.',
      image: '💪',
      options: ['Despite', 'Although', 'However', 'Whatever'],
      correct: 2,
      explanation: 'However hard = No matter how hard (jakkolwiek bardzo)'
    }
  ];

  // Gra: Uzupełnij luki (fill in the blanks)
  const fillInBlanksSentences = [
    {
      id: 1,
      text: 'If I ___ earlier, I ___ the bus.',
      blanks: ['had left', 'would have caught'],
      options: [
        ['left', 'had left', 'leave', 'will leave'],
        ['caught', 'catch', 'would catch', 'would have caught']
      ],
      correctIndexes: [1, 3],
      translation: 'Gdybym wyszedł wcześniej, złapałbym autobus',
      hint: 'Third Conditional'
    },
    {
      id: 2,
      text: 'The house ___ when we arrived.',
      blanks: ['had already been sold'],
      options: [
        ['already sold', 'was already selling', 'had already been sold', 'has already sold']
      ],
      correctIndexes: [2],
      translation: 'Dom został już sprzedany, gdy przybyliśmy',
      hint: 'Past Perfect Passive'
    },
    {
      id: 3,
      text: 'Not only ___ the exam, but ___ also got the highest score.',
      blanks: ['did she pass', 'she'],
      options: [
        ['she passed', 'did she pass', 'she did pass', 'passed she'],
        ['she', 'did she', 'she did', 'has she']
      ],
      correctIndexes: [1, 0],
      translation: 'Nie tylko zdała egzamin, ale także dostała najwyższy wynik',
      hint: 'Inwersja po "not only"'
    },
    {
      id: 4,
      text: 'I wish I ___ more attention in class.',
      blanks: ['had paid'],
      options: [
        ['pay', 'paid', 'had paid', 'would pay']
      ],
      correctIndexes: [2],
      translation: 'Chciałbym był zwracał większą uwagę na lekcji',
      hint: 'I wish + Past Perfect (żal o przeszłości)'
    },
    {
      id: 5,
      text: 'By this time next year, I ___ my degree.',
      blanks: ['will have completed'],
      options: [
        ['complete', 'will complete', 'will have completed', 'am completing']
      ],
      correctIndexes: [2],
      translation: 'O tym czasie w przyszłym roku, ukończę swój stopień',
      hint: 'Future Perfect'
    }
  ];

  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Inicjalizacja ćwiczenia
  React.useEffect(() => {
    if (currentSection === 'game' && currentExercise < fillInBlanksSentences.length) {
      const sentence = fillInBlanksSentences[currentExercise];
      setUserAnswers(new Array(sentence.blanks.length).fill(null));
      setExerciseCompleted(false);
      setIsCorrect(false);
    }
  }, [currentSection, currentExercise]);

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

  const handleBlankSelection = (blankIndex, optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[blankIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const sentence = fillInBlanksSentences[currentExercise];
    const correct = userAnswers.every((answer, index) => answer === sentence.correctIndexes[index]);
    
    setIsCorrect(correct);
    setExerciseCompleted(true);
    
    if (correct) {
      setGameScore(gameScore + 20);
    }
  };

  const nextExercise = () => {
    if (currentExercise < fillInBlanksSentences.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      // Przejdź do ekranu zakończenia
      setCurrentExercise(fillInBlanksSentences.length);
    }
  };

  const resetExercise = () => {
    const sentence = fillInBlanksSentences[currentExercise];
    setUserAnswers(new Array(sentence.blanks.length).fill(null));
    setExerciseCompleted(false);
    setIsCorrect(false);
  };

  // INTRO
  if (currentSection === 'intro') {
    return (
      <div className="course-page">
        <div className="course-hero level-b2-hero">
          <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
          <div className="course-hero-content">
            <span className="hero-icon">🏆</span>
            <h1>Kurs B2 - Wyższy średnio-zaawansowany</h1>
            <p className="hero-subtitle">Opanuj zaawansowaną gramatykę!</p>
            <div className="level-badge-hero">Poziom: B2</div>
          </div>
        </div>

        <div className="course-intro-content">
          <div className="intro-section">
            <h2>Witaj w kursie B2! 🎓</h2>
            <p className="intro-text">
              Kurs B2 to poziom wyższy średnio-zaawansowany. Nauczysz się zaawansowanych struktur, inwersji i perfekcyjnego używania czasów złożonych!
            </p>

            <div className="course-features">
              <div className="feature-box">
                <span className="feature-icon-big">🔄</span>
                <h3>Inwersja</h3>
                <p>Rarely, Not only, Had I known</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">🎯</span>
                <h3>Zaawansowane czasy</h3>
                <p>Future Perfect, Past Perfect Passive</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">💼</span>
                <h3>Język biznesowy</h3>
                <p>Formal writing, Presentations</p>
              </div>
            </div>

            <div className="free-preview-section">
              <div className="preview-badge">🎁 DARMOWY PODGLĄD</div>
              <h3>Sprawdź za darmo!</h3>
              <p>5 pytań B2 + gra uzupełniania luk!</p>
              
              <div className="preview-includes">
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>5 pytań B2 (Inwersja, Third Conditional, Future Perfect)</span>
                </div>
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>Gra: Uzupełnij luki - wybierz poprawne formy</span>
                </div>
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>Wyjaśnienia gramatyczne</span>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-large pulse-animation"
                onClick={() => setCurrentSection('quiz')}
              >
                Rozpocznij! 🚀
              </button>
            </div>

            <div className="course-price-box">
              <div className="price-header">
                <h3>Pełny kurs B2</h3>
                <div className="price">
                  <span className="price-amount">249</span>
                  <span className="price-currency">zł</span>
                </div>
              </div>
              <ul className="price-features">
                <li>✓ 250+ ćwiczeń</li>
                <li>✓ 50+ gier interaktywnych</li>
                <li>✓ Mock exams (FCE)</li>
                <li>✓ Dyplom B2</li>
              </ul>
              <button className="btn btn-secondary btn-large" onClick={() => navigate('/shop')}>
                Kup kurs 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // QUIZ
  if (currentSection === 'quiz') {
    const question = freeQuestions[currentQuizQuestion];
    const currentAnswer = quizAnswers[quizAnswers.length - 1];
    const showResult = currentAnswer && currentAnswer.questionId === question.id;

    return (
      <div className="course-page">
        <div className="quiz-header-simple">
          <button className="back-btn-small" onClick={() => setCurrentSection('intro')}>← Wróć</button>
          <div className="quiz-progress-simple">Pytanie {currentQuizQuestion + 1} / {freeQuestions.length}</div>
        </div>

        <div className="quiz-container-kids">
          <div className="question-card-kids">
            <div className="question-number">Pytanie {currentQuizQuestion + 1}</div>
            <div className="question-image-big">{question.image}</div>
            <h2 className="question-text-kids">{question.question}</h2>
            
            {!showResult && (
              <div className="options-grid-kids">
                {question.options.map((option, index) => (
                  <button key={index} className="option-btn-kids" onClick={() => handleQuizAnswer(index)}>
                    {option}
                  </button>
                ))}
              </div>
            )}

            {showResult && (
              <div className={`answer-feedback ${currentAnswer.correct ? 'correct' : 'wrong'}`}>
                <div className="feedback-icon">{currentAnswer.correct ? '🎉' : '💡'}</div>
                <div className="feedback-text">{currentAnswer.correct ? 'Świetnie!' : 'Spróbuj ponownie!'}</div>
                <div className="feedback-explanation">{question.explanation}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // GAME
  if (currentSection === 'game') {
    const allExercisesCompleted = currentExercise >= fillInBlanksSentences.length;

    if (allExercisesCompleted) {
      return (
        <div className="course-page">
          <div className="game-container">
            <div className="game-completed">
              <div className="completion-icon">🏆</div>
              <h2>Gratulacje!</h2>
              <p>Ukończyłeś wszystkie ćwiczenia!</p>
              <p className="final-score-text">Punkty: {gameScore} / 100</p>
              
              <div className="game-actions">
                <button className="btn btn-primary" onClick={() => {
                  setCurrentExercise(0);
                  setGameScore(0);
                }}>
                  Zagraj ponownie 🔄
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/shop')}>
                  Kup pełny kurs! 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const exercise = fillInBlanksSentences[currentExercise];
    const allAnswered = userAnswers.every(answer => answer !== null);

    // Budowanie zdania z lukami
    const textParts = exercise.text.split('___');

    return (
      <div className="course-page">
        <div className="game-header">
          <button className="back-btn-small" onClick={() => setCurrentSection('intro')}>← Wróć</button>
          <div className="game-stats">
            <div className="stat-item">
              <span className="stat-label">Punkty:</span>
              <span className="stat-value">{gameScore}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Ćwiczenie:</span>
              <span className="stat-value">{currentExercise + 1}/{fillInBlanksSentences.length}</span>
            </div>
          </div>
        </div>

        <div className="game-container">
          <div className="game-intro">
            <h2>📝 Uzupełnij luki!</h2>
            <p className="game-hint">💡 {exercise.hint}</p>
            <p className="game-translation">Tłumaczenie: <strong>{exercise.translation}</strong></p>
          </div>

          <div className="fill-blanks-exercise">
            <div className="sentence-display">
              {textParts.map((part, index) => (
                <React.Fragment key={index}>
                  <span className="sentence-text">{part}</span>
                  {index < exercise.blanks.length && (
                    <span className={`blank-space ${userAnswers[index] !== null ? 'filled' : ''}`}>
                      {userAnswers[index] !== null ? exercise.options[index][userAnswers[index]] : '___'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {!exerciseCompleted && (
              <div className="blanks-options">
                {exercise.options.map((optionsGroup, blankIndex) => (
                  <div key={blankIndex} className="blank-option-group">
                    <h4>Luka {blankIndex + 1}:</h4>
                    <div className="option-buttons-grid">
                      {optionsGroup.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-btn-fill ${userAnswers[blankIndex] === optionIndex ? 'selected' : ''}`}
                          onClick={() => handleBlankSelection(blankIndex, optionIndex)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!exerciseCompleted && allAnswered && (
              <div className="puzzle-actions">
                <button className="btn btn-primary" onClick={checkAnswers}>
                  Sprawdź ✓
                </button>
                <button className="btn btn-secondary" onClick={resetExercise}>
                  Reset 🔄
                </button>
              </div>
            )}

            {exerciseCompleted && (
              <div className={`puzzle-result ${isCorrect ? 'correct' : 'wrong'}`}>
                <div className="result-icon">{isCorrect ? '✅' : '❌'}</div>
                <h3>{isCorrect ? 'Brawo! Poprawnie!' : 'Spróbuj ponownie!'}</h3>
                {isCorrect ? (
                  <p>+20 punktów!</p>
                ) : (
                  <div>
                    <p>Poprawne odpowiedzi:</p>
                    {exercise.blanks.map((blank, index) => (
                      <p key={index} className="correct-answer-text">
                        Luka {index + 1}: <strong>{blank}</strong>
                      </p>
                    ))}
                  </div>
                )}
                <button 
                  className="btn btn-primary"
                  onClick={isCorrect ? nextExercise : resetExercise}
                >
                  {isCorrect ? (currentExercise < fillInBlanksSentences.length - 1 ? 'Następne →' : 'Zakończ 🏆') : 'Spróbuj ponownie 🔄'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default KursB2;
