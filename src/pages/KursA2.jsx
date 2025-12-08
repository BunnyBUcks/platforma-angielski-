import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const KursA2 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('intro');
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  // Darmowe pytania quizowe A2 (5 pytań - trudniejsze niż A1)
  const freeQuestions = [
    {
      id: 1,
      question: 'My brother ___ to school every day.',
      image: '🚌',
      options: ['go', 'goes', 'going', 'went'],
      correct: 1,
      explanation: 'Używamy "goes" dla trzeciej osoby (he, she, it) w Present Simple'
    },
    {
      id: 2,
      question: 'There ___ many books on the shelf.',
      image: '📚',
      options: ['is', 'are', 'was', 'be'],
      correct: 1,
      explanation: 'Używamy "are" dla liczby mnogiej (many books)'
    },
    {
      id: 3,
      question: 'I ___ my homework yesterday.',
      image: '✏️',
      options: ['do', 'does', 'did', 'doing'],
      correct: 2,
      explanation: '"Did" to Past Simple czasownika "do" (yesterday = wczoraj)'
    },
    {
      id: 4,
      question: 'She is ___ than her sister.',
      image: '👧👧',
      options: ['tall', 'taller', 'tallest', 'more tall'],
      correct: 1,
      explanation: 'Stopień wyższy: taller (wyższa)'
    },
    {
      id: 5,
      question: 'We ___ TV now.',
      image: '📺',
      options: ['watch', 'watches', 'are watching', 'watched'],
      correct: 2,
      explanation: 'Present Continuous (are watching) - teraz (now)'
    }
  ];

  // Gra: Dopasuj zdania
  const matchingPairs = [
    { id: 1, english: 'How are you?', polish: 'Jak się masz?' },
    { id: 2, english: 'What time is it?', polish: 'Która godzina?' },
    { id: 3, english: 'I like pizza.', polish: 'Lubię pizzę.' },
    { id: 4, english: 'Where is the park?', polish: 'Gdzie jest park?' },
    { id: 5, english: 'Can I help you?', polish: 'Mogę pomóc?' },
    { id: 6, english: 'It\'s raining.', polish: 'Pada deszcz.' },
  ];

  const [englishCards] = useState([...matchingPairs].sort(() => Math.random() - 0.5));
  const [polishCards] = useState([...matchingPairs].sort(() => Math.random() - 0.5));
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [selectedPolish, setSelectedPolish] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);

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

  const handleEnglishClick = (card) => {
    if (matchedPairs.includes(card.id)) return;
    
    // Jeśli to samo co już wybrane, odznacz
    if (selectedEnglish?.id === card.id) {
      setSelectedEnglish(null);
      return;
    }
    
    setSelectedEnglish(card);
    
    // Jeśli jest wybrana polska karta, sprawdź dopasowanie
    if (selectedPolish) {
      checkMatch(card, selectedPolish);
    }
  };

  const handlePolishClick = (card) => {
    if (matchedPairs.includes(card.id)) return;
    
    // Jeśli to samo co już wybrane, odznacz
    if (selectedPolish?.id === card.id) {
      setSelectedPolish(null);
      return;
    }
    
    setSelectedPolish(card);
    
    // Jeśli jest wybrana angielska karta, sprawdź dopasowanie
    if (selectedEnglish) {
      checkMatch(selectedEnglish, card);
    }
  };

  const checkMatch = (engCard, polCard) => {
    if (engCard.id === polCard.id) {
      // Dopasowanie!
      setMatchedPairs([...matchedPairs, engCard.id]);
      setGameScore(gameScore + 10);
      setTimeout(() => {
        setSelectedEnglish(null);
        setSelectedPolish(null);
      }, 600);
    } else {
      // Błędne dopasowanie - pokaż na chwilę
      setTimeout(() => {
        setSelectedEnglish(null);
        setSelectedPolish(null);
      }, 1200);
    }
  };

  const resetGame = () => {
    setSelectedEnglish(null);
    setSelectedPolish(null);
    setMatchedPairs([]);
    setGameScore(0);
  };

  // INTRO
  if (currentSection === 'intro') {
    return (
      <div className="course-page">
        <div className="course-hero level-a2-hero">
          <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
          <div className="course-hero-content">
            <span className="hero-icon">⭐</span>
            <h1>Kurs A2 - Podstawowy Wyższy</h1>
            <p className="hero-subtitle">Rozwijaj swoje umiejętności!</p>
            <div className="level-badge-hero">Poziom: A2</div>
          </div>
        </div>

        <div className="course-intro-content">
          <div className="intro-section">
            <h2>Witaj w kursie A2! 👋</h2>
            <p className="intro-text">
              Kurs A2 to kolejny krok w nauce angielskiego. Nauczysz się tworzyć bardziej złożone zdania!
            </p>

            <div className="course-features">
              <div className="feature-box">
                <span className="feature-icon-big">💬</span>
                <h3>Konwersacje</h3>
                <p>Dialogi i prawdziwe sytuacje</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">⏰</span>
                <h3>Czasy gramatyczne</h3>
                <p>Present Simple, Past Simple</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon-big">🌍</span>
                <h3>Praktyczne zwroty</h3>
                <p>Podróże, zakupy, restauracje</p>
              </div>
            </div>

            <div className="free-preview-section">
              <div className="preview-badge">🎁 DARMOWY PODGLĄD</div>
              <h3>Sprawdź za darmo!</h3>
              <p>5 pytań gramatycznych + gra dopasowywania zdań!</p>
              
              <div className="preview-includes">
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>5 pytań A2</span>
                </div>
                <div className="preview-item">
                  <span className="check-icon">✓</span>
                  <span>Gra: Dopasuj zdania angielskie-polskie</span>
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
                <h3>Pełny kurs A2</h3>
                <div className="price">
                  <span className="price-amount">179</span>
                  <span className="price-currency">zł</span>
                </div>
              </div>
              <ul className="price-features">
                <li>✓ 150+ ćwiczeń</li>
                <li>✓ 30+ gier</li>
                <li>✓ Audio native speakerów</li>
                <li>✓ Dyplom</li>
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
    const gameCompleted = matchedPairs.length === matchingPairs.length;

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
              <span className="stat-label">Dopasowane:</span>
              <span className="stat-value">{matchedPairs.length}/{matchingPairs.length}</span>
            </div>
          </div>
        </div>

        <div className="game-container">
          <div className="game-intro">
            <h2>🎮 Dopasuj zdania!</h2>
            <p>Kliknij angielskie zdanie, potem polskie tłumaczenie.</p>
          </div>

          {!gameCompleted && (
            <div className="matching-game-grid">
              <div className="matching-column">
                <h3>🇬🇧 Angielski</h3>
                {englishCards.map((card) => (
                  <button
                    key={`eng-${card.id}`}
                    className={`matching-card ${matchedPairs.includes(card.id) ? 'matched' : ''} ${selectedEnglish?.id === card.id ? 'selected' : ''}`}
                    onClick={() => handleEnglishClick(card)}
                    disabled={matchedPairs.includes(card.id)}
                  >
                    {card.english}
                  </button>
                ))}
              </div>

              <div className="matching-column">
                <h3>🇵🇱 Polski</h3>
                {polishCards.map((card) => (
                  <button
                    key={`pol-${card.id}`}
                    className={`matching-card ${matchedPairs.includes(card.id) ? 'matched' : ''} ${selectedPolish?.id === card.id ? 'selected' : ''}`}
                    onClick={() => handlePolishClick(card)}
                    disabled={matchedPairs.includes(card.id)}
                  >
                    {card.polish}
                  </button>
                ))}
              </div>
            </div>
          )}

          {gameCompleted && (
            <div className="game-completed">
              <div className="completion-icon">🏆</div>
              <h2>Gratulacje!</h2>
              <p>Punkty: {gameScore}</p>
              
              <div className="game-actions">
                <button className="btn btn-primary" onClick={resetGame}>Zagraj ponownie 🔄</button>
                <button className="btn btn-secondary" onClick={() => navigate('/shop')}>Kup pełny kurs! 🛒</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default KursA2;
