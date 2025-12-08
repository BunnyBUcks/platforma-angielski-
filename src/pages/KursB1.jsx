import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const KursB1 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('intro');
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  // Darmowe pytania quizowe B1 (5 pytań - poziom średnio-zaawansowany)
  const freeQuestions = [
    {
      id: 1,
      question: 'If I ___ more time, I would travel the world.',
      image: '✈️',
      options: ['have', 'had', 'will have', 'would have'],
      correct: 1,
      explanation: 'Second Conditional: If + Past Simple, would + infinitive (had)'
    },
    {
      id: 2,
      question: 'She has been working here ___ 2020.',
      image: '💼',
      options: ['for', 'since', 'from', 'during'],
      correct: 1,
      explanation: 'Używamy "since" z konkretną datą/rokiem (2020)'
    },
    {
      id: 3,
      question: 'The book ___ by millions of people.',
      image: '📖',
      options: ['reads', 'is read', 'was read', 'has read'],
      correct: 1,
      explanation: 'Strona bierna (Passive Voice): is read - jest czytana'
    },
    {
      id: 4,
      question: 'I wish I ___ speak French fluently.',
      image: '🇫🇷',
      options: ['can', 'could', 'will', 'would'],
      correct: 1,
      explanation: 'I wish + Past Simple (could) - wyrażamy życzenie o teraźniejszości'
    },
    {
      id: 5,
      question: 'By next year, I ___ living here for 10 years.',
      image: '🏠',
      options: ['am', 'will be', 'will have been', 'have been'],
      correct: 2,
      explanation: 'Future Perfect: will have been - będę mieszkał (przez 10 lat)'
    }
  ];

  // Gra: Ułóż zdanie (przeciągnij słowa)
  const sentencePuzzles = [
    {
      id: 1,
      correctOrder: ['I', 'have', 'been', 'studying', 'English'],
      translation: 'Uczę się angielskiego (od jakiegoś czasu)',
      hint: 'Present Perfect Continuous'
    },
    {
      id: 2,
      correctOrder: ['She', 'told', 'me', 'that', 'she', 'was', 'tired'],
      translation: 'Powiedziała mi, że była zmęczona',
      hint: 'Reported Speech'
    },
    {
      id: 3,
      correctOrder: ['If', 'I', 'were', 'you', 'I', 'would', 'go'],
      translation: 'Gdybym był tobą, poszedłbym',
      hint: 'Second Conditional'
    },
    {
      id: 4,
      correctOrder: ['The', 'car', 'was', 'repaired', 'by', 'mechanic'],
      translation: 'Samochód został naprawiony przez mechanika',
      hint: 'Passive Voice'
    },
    {
      id: 5,
      correctOrder: ['I', 'wish', 'I', 'had', 'more', 'free', 'time'],
      translation: 'Chciałbym mieć więcej wolnego czasu',
      hint: 'I wish + Past Simple'
    }
  ];

  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userOrder, setUserOrder] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Inicjalizacja gry
  React.useEffect(() => {
    if (currentSection === 'game' && currentPuzzle < sentencePuzzles.length) {
      const shuffled = [...sentencePuzzles[currentPuzzle].correctOrder]
        .sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled);
      setUserOrder([]);
      setPuzzleCompleted(false);
      setIsCorrect(false);
    }
  }, [currentSection, currentPuzzle]);

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

  const handleWordClick = (word, index) => {
    // Przenieś słowo z dostępnych do ułożonych
    setUserOrder([...userOrder, word]);
    setAvailableWords(availableWords.filter((_, i) => i !== index));
  };

  const handleRemoveWord = (word, index) => {
    // Przenieś słowo z powrotem do dostępnych
    setAvailableWords([...availableWords, word]);
    setUserOrder(userOrder.filter((_, i) => i !== index));
  };

  const checkSentence = () => {
    const puzzle = sentencePuzzles[currentPuzzle];
    const correct = JSON.stringify(userOrder) === JSON.stringify(puzzle.correctOrder);
    
    setIsCorrect(correct);
    setPuzzleCompleted(true);
    
    if (correct) {
      setGameScore(gameScore + 20);
    }
  };

  const nextPuzzle = () => {
    if (currentPuzzle < sentencePuzzles.length - 1) {
      setCurrentPuzzle(currentPuzzle + 1);
    } else {
      // Przejdź do ekranu zakończenia
      setCurrentPuzzle(sentencePuzzles.length);
    }
  };

  const resetPuzzle = () => {
    const shuffled = [...sentencePuzzles[currentPuzzle].correctOrder]
      .sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setUserOrder([]);
    setPuzzleCompleted(false);
    setIsCorrect(false);
  };

  // INTRO
  if (currentSection === 'intro') {
    return (
      <div className="course-page">
        <div className="course-hero level-b1-hero">
          <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
          <div className="course-hero-content">
            <span className="hero-icon">🎯</span>
            <h1>Kurs B1 - Średnio-zaawansowany</h1>
            <p className="hero-subtitle">Opanuj bardziej złożoną gramatykę!</p>
            <div className="level-badge-hero">Poziom: B1</div>
          </div>
        </div>

        <div className="course-intro-content">
          <div className="intro-section">
            <h2>Witaj w kursie B1! 🚀</h2>
            <p className="intro-text">
              Kurs B1 to poziom średnio-zaawansowany. Nauczysz się używać czasów Perfect, mowy zależnej i trybu warunkowego!
            </p>

            <div className="course-features">
              <div className="feature-box">
                <span className="feature-icon-big">⚡</span>
                <h3>Czasy Perfect</h3>
                <p>Present Perfect, Past Perfect</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">🗣️</span>
                <h3>Mowa zależna</h3>
                <p>Reported Speech</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">🎭</span>
                <h3>Conditionals</h3>
                <p>Tryby warunkowe (If clauses)</p>
              </div>
            </div>

            <div className="free-preview-section">
              <div className="preview-badge">🎁 DARMOWY PODGLĄD</div>
              <h3>Sprawdź za darmo!</h3>
              <p>5 pytań B1 + gra układania zdań!</p>
              
              <div className="preview-includes">
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>5 pytań B1 (Conditionals, Perfect tenses, Passive)</span>
                </div>
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>Gra: Ułóż zdanie - przeciągnij słowa</span>
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
                <h3>Pełny kurs B1</h3>
                <div className="price">
                  <span className="price-amount">199</span>
                  <span className="price-currency">zł</span>
                </div>
              </div>
              <ul className="price-features">
                <li>✓ 200+ ćwiczeń</li>
                <li>✓ 40+ gier interaktywnych</li>
                <li>✓ Wideo lekcje</li>
                <li>✓ Dyplom B1</li>
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
    const allPuzzlesCompleted = currentPuzzle >= sentencePuzzles.length;

    if (allPuzzlesCompleted) {
      return (
        <div className="course-page">
          <div className="game-container">
            <div className="game-completed">
              <div className="completion-icon">🏆</div>
              <h2>Gratulacje!</h2>
              <p>Ukończyłeś wszystkie puzzle!</p>
              <p className="final-score-text">Punkty: {gameScore} / 100</p>
              
              <div className="game-actions">
                <button className="btn btn-primary" onClick={() => {
                  setCurrentPuzzle(0);
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

    const puzzle = sentencePuzzles[currentPuzzle];

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
              <span className="stat-label">Puzzle:</span>
              <span className="stat-value">{currentPuzzle + 1}/{sentencePuzzles.length}</span>
            </div>
          </div>
        </div>

        <div className="game-container">
          <div className="game-intro">
            <h2>🧩 Ułóż zdanie!</h2>
            <p className="game-hint">💡 {puzzle.hint}</p>
            <p className="game-translation">Tłumaczenie: <strong>{puzzle.translation}</strong></p>
          </div>

          <div className="sentence-builder">
            <div className="user-sentence-area">
              <h3>Twoje zdanie:</h3>
              <div className="word-dropzone">
                {userOrder.length === 0 ? (
                  <p className="empty-message">Kliknij słowa poniżej, aby ułożyć zdanie</p>
                ) : (
                  userOrder.map((word, index) => (
                    <button
                      key={`user-${index}`}
                      className="word-chip placed"
                      onClick={() => handleRemoveWord(word, index)}
                    >
                      {word}
                    </button>
                  ))
                )}
              </div>
            </div>

            <div className="available-words-area">
              <h3>Dostępne słowa:</h3>
              <div className="word-bank">
                {availableWords.map((word, index) => (
                  <button
                    key={`avail-${index}`}
                    className="word-chip available"
                    onClick={() => handleWordClick(word, index)}
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>

            {!puzzleCompleted && userOrder.length > 0 && (
              <div className="puzzle-actions">
                <button className="btn btn-primary" onClick={checkSentence}>
                  Sprawdź ✓
                </button>
                <button className="btn btn-secondary" onClick={resetPuzzle}>
                  Reset 🔄
                </button>
              </div>
            )}

            {puzzleCompleted && (
              <div className={`puzzle-result ${isCorrect ? 'correct' : 'wrong'}`}>
                <div className="result-icon">{isCorrect ? '✅' : '❌'}</div>
                <h3>{isCorrect ? 'Brawo! Poprawnie!' : 'Spróbuj ponownie!'}</h3>
                {isCorrect ? (
                  <p>+20 punktów!</p>
                ) : (
                  <p>Poprawna kolejność: {puzzle.correctOrder.join(' ')}</p>
                )}
                <button 
                  className="btn btn-primary"
                  onClick={isCorrect ? nextPuzzle : resetPuzzle}
                >
                  {isCorrect ? (currentPuzzle < sentencePuzzles.length - 1 ? 'Następne →' : 'Zakończ 🏆') : 'Spróbuj ponownie 🔄'}
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

export default KursB1;
