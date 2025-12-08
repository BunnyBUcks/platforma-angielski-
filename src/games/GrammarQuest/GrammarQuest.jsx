import React, { useState } from 'react';
import './GrammarQuest.css';

export default function GrammarQuest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [lives, setLives] = useState(3);

  const questions = [
    {
      id: 1,
      question: "She ___ to school every day.",
      options: ["go", "goes", "going", "gone"],
      correct: 1,
      explanation: "Używamy 'goes' (3. osoba liczby pojedynczej w Present Simple)",
      category: "Present Simple",
      difficulty: "easy"
    },
    {
      id: 2,
      question: "They ___ playing football now.",
      options: ["is", "am", "are", "be"],
      correct: 2,
      explanation: "Używamy 'are' dla 'they' w Present Continuous",
      category: "Present Continuous",
      difficulty: "easy"
    },
    {
      id: 3,
      question: "I ___ finished my homework yesterday.",
      options: ["have", "has", "had", "having"],
      correct: 0,
      explanation: "Używamy 'have' dla 'I' w Present Perfect",
      category: "Present Perfect",
      difficulty: "medium"
    },
    {
      id: 4,
      question: "He ___ to London last week.",
      options: ["go", "goes", "went", "going"],
      correct: 2,
      explanation: "Używamy 'went' (Past Simple) z 'last week'",
      category: "Past Simple",
      difficulty: "easy"
    },
    {
      id: 5,
      question: "If I ___ rich, I would travel the world.",
      options: ["am", "was", "were", "be"],
      correct: 2,
      explanation: "W trybie warunkowym II używamy 'were' dla wszystkich osób",
      category: "Conditionals",
      difficulty: "hard"
    },
    {
      id: 6,
      question: "The book ___ by millions of people.",
      options: ["reads", "is read", "read", "reading"],
      correct: 1,
      explanation: "Strona bierna: 'is read' (Present Simple Passive)",
      category: "Passive Voice",
      difficulty: "medium"
    },
    {
      id: 7,
      question: "___ you ever been to Paris?",
      options: ["Do", "Does", "Have", "Has"],
      correct: 2,
      explanation: "Present Perfect z 'you' używa 'Have'",
      category: "Present Perfect",
      difficulty: "medium"
    },
    {
      id: 8,
      question: "She's ___ person I've ever met.",
      options: ["nice", "nicer", "nicest", "the nicest"],
      correct: 3,
      explanation: "Stopień najwyższy: 'the nicest' z 'ever'",
      category: "Comparatives",
      difficulty: "medium"
    },
  ];

  const currentQ = questions[currentQuestion];

  const handleAnswerClick = (index) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = index === currentQ.correct;

    if (isCorrect) {
      setScore(score + 10);
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        setTimeout(() => {
          setGameComplete(true);
        }, 2000);
        return;
      }
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameComplete(true);
      }
    }, 2500);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameComplete(false);
    setLives(3);
  };

  if (gameComplete) {
    const percentage = Math.round((score / (questions.length * 10)) * 100);
    const rank = percentage >= 80 ? '🏆 Mistrz Gramatyki!' : 
                 percentage >= 60 ? '⭐ Dobry Start!' :
                 percentage >= 40 ? '📚 Kontynuuj naukę!' : 
                 '💪 Nie poddawaj się!';

    return (
      <div className="grammar-quest-container">
        <div className="completion-screen-grammar">
          <div className="trophy-animation-grammar">🎓</div>
          <h2>Misja Ukończona!</h2>
          
          <div className="rank-display">
            <h3 className="rank-title">{rank}</h3>
            <div className="score-badge-grammar">
              <span className="score-big">{score}</span>
              <span className="score-max">/ {questions.length * 10}</span>
            </div>
          </div>

          <div className="stats-grid-grammar">
            <div className="stat-card-grammar">
              <span className="stat-icon-grammar">✅</span>
              <h4>{Math.round(score / 10)}</h4>
              <p>Poprawne</p>
            </div>
            <div className="stat-card-grammar">
              <span className="stat-icon-grammar">❌</span>
              <h4>{questions.length - Math.round(score / 10)}</h4>
              <p>Błędne</p>
            </div>
            <div className="stat-card-grammar">
              <span className="stat-icon-grammar">📊</span>
              <h4>{percentage}%</h4>
              <p>Wynik</p>
            </div>
          </div>

          <div className="category-breakdown">
            <h4>Kategorie:</h4>
            <div className="categories-list">
              {[...new Set(questions.map(q => q.category))].map((cat, idx) => (
                <div key={idx} className="category-chip">
                  {cat}
                </div>
              ))}
            </div>
          </div>

          <button className="restart-btn-grammar" onClick={restartGame}>
            🔄 Spróbuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grammar-quest-container">
      <div className="game-content-grammar">
        
        {/* Header */}
        <div className="header-grammar">
          <div className="quest-icon">⚔️</div>
          <div className="progress-info-grammar">
            <div className="question-counter">
              Pytanie {currentQuestion + 1} / {questions.length}
            </div>
            <div className="progress-bar-grammar">
              <div 
                className="progress-fill-grammar"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="lives-hearts">
            {[...Array(3)].map((_, i) => (
              <span key={i} className={`heart-grammar ${i < lives ? 'alive' : 'dead'}`}>
                {i < lives ? '❤️' : '🖤'}
              </span>
            ))}
          </div>
        </div>

        {/* Category and Difficulty Badge */}
        <div className="badges-row">
          <span className="category-badge-grammar">{currentQ.category}</span>
          <span className={`difficulty-badge-grammar ${currentQ.difficulty}`}>
            {currentQ.difficulty === 'easy' ? '⭐ Łatwe' :
             currentQ.difficulty === 'medium' ? '⭐⭐ Średnie' :
             '⭐⭐⭐ Trudne'}
          </span>
        </div>

        {/* Question Card */}
        <div className="question-card-grammar">
          <div className="question-number-big">#{currentQ.id}</div>
          <h3 className="question-text-grammar">{currentQ.question}</h3>
        </div>

        {/* Options */}
        <div className="options-grid-grammar">
          {currentQ.options.map((option, index) => {
            let className = 'option-btn-grammar';
            
            if (showResult) {
              if (index === currentQ.correct) {
                className += ' correct';
              } else if (index === selectedAnswer) {
                className += ' incorrect';
              } else {
                className += ' disabled';
              }
            } else if (selectedAnswer === index) {
              className += ' selected';
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
                {showResult && index === currentQ.correct && (
                  <span className="check-icon-grammar">✓</span>
                )}
                {showResult && index === selectedAnswer && index !== currentQ.correct && (
                  <span className="cross-icon-grammar">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={`explanation-box ${selectedAnswer === currentQ.correct ? 'correct-exp' : 'incorrect-exp'}`}>
            <div className="explanation-icon">
              {selectedAnswer === currentQ.correct ? '✅' : '❌'}
            </div>
            <div className="explanation-content">
              <h4>
                {selectedAnswer === currentQ.correct ? 'Świetnie!' : 'Błędna odpowiedź'}
              </h4>
              <p>{currentQ.explanation}</p>
            </div>
          </div>
        )}

        {/* Score Display */}
        <div className="score-footer">
          <span className="score-label-grammar">Punkty:</span>
          <span className="score-value-grammar">{score}</span>
        </div>

      </div>
    </div>
  );
}
