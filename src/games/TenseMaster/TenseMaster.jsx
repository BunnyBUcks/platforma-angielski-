import React, { useState } from 'react';
import './TenseMaster.css';

export default function TenseMaster() {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedTense, setSelectedTense] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const rounds = [
    {
      sentence: "I ___ (play) tennis every Sunday.",
      verb: "play",
      correct: "Present Simple",
      correctForm: "play",
      hint: "Rutyna, zwyczaj - używamy Present Simple",
      tenses: ["Present Simple", "Past Simple", "Present Perfect", "Future Simple"]
    },
    {
      sentence: "She ___ (watch) TV right now.",
      verb: "watch",
      correct: "Present Continuous",
      correctForm: "is watching",
      hint: "Akcja dzieje się teraz - używamy Present Continuous",
      tenses: ["Present Simple", "Present Continuous", "Past Continuous", "Present Perfect"]
    },
    {
      sentence: "They ___ (live) here for 5 years.",
      verb: "live",
      correct: "Present Perfect",
      correctForm: "have lived",
      hint: "'For' wskazuje na Present Perfect",
      tenses: ["Present Simple", "Past Simple", "Present Perfect", "Future Simple"]
    },
    {
      sentence: "We ___ (go) to Paris last summer.",
      verb: "go",
      correct: "Past Simple",
      correctForm: "went",
      hint: "'Last summer' to konkretny moment w przeszłości",
      tenses: ["Past Simple", "Present Perfect", "Past Perfect", "Past Continuous"]
    },
    {
      sentence: "He ___ (work) when I called him.",
      verb: "work",
      correct: "Past Continuous",
      correctForm: "was working",
      hint: "Akcja w trakcie w przeszłości - Past Continuous",
      tenses: ["Past Simple", "Past Continuous", "Present Continuous", "Past Perfect"]
    },
    {
      sentence: "I ___ (visit) you tomorrow.",
      verb: "visit",
      correct: "Future Simple",
      correctForm: "will visit",
      hint: "'Tomorrow' wskazuje na przyszłość",
      tenses: ["Present Simple", "Future Simple", "Present Continuous", "Present Perfect"]
    },
    {
      sentence: "By 2025, I ___ (finish) my studies.",
      verb: "finish",
      correct: "Future Perfect",
      correctForm: "will have finished",
      hint: "'By + data w przyszłości' = Future Perfect",
      tenses: ["Future Simple", "Future Perfect", "Present Perfect", "Future Continuous"]
    },
    {
      sentence: "She ___ already ___ (eat) when I arrived.",
      verb: "eat",
      correct: "Past Perfect",
      correctForm: "had eaten",
      hint: "Akcja przed inną akcją w przeszłości - Past Perfect",
      tenses: ["Past Simple", "Past Perfect", "Present Perfect", "Past Continuous"]
    },
  ];

  const currentRoundData = rounds[currentRound];

  const handleTenseSelect = (tense) => {
    if (showResult) return;

    setSelectedTense(tense);
    setShowResult(true);

    const isCorrect = tense === currentRoundData.correct;
    if (isCorrect) {
      setScore(score + 15);
    }

    setTimeout(() => {
      if (currentRound < rounds.length - 1) {
        setCurrentRound(currentRound + 1);
        setSelectedTense(null);
        setShowResult(false);
      } else {
        setGameComplete(true);
      }
    }, 3000);
  };

  const restartGame = () => {
    setCurrentRound(0);
    setScore(0);
    setSelectedTense(null);
    setShowResult(false);
    setGameComplete(false);
  };

  if (gameComplete) {
    const maxScore = rounds.length * 15;
    const percentage = Math.round((score / maxScore) * 100);
    const level = percentage >= 90 ? '👑 Mistrz Czasów!' : 
                  percentage >= 70 ? '⭐ Ekspert!' :
                  percentage >= 50 ? '📚 Dobry poziom!' : 
                  '💪 Ćwicz dalej!';

    return (
      <div className="tense-master-container">
        <div className="completion-screen-tense">
          <div className="crown-icon">👑</div>
          <h2>Misja Ukończona!</h2>
          
          <div className="level-badge">{level}</div>

          <div className="score-circle-tense">
            <svg width="180" height="180">
              <circle cx="90" cy="90" r="75" className="circle-bg-tense" />
              <circle 
                cx="90" 
                cy="90" 
                r="75" 
                className="circle-fill-tense"
                strokeDasharray={`${percentage * 4.71} 471`}
              />
            </svg>
            <div className="circle-text-tense">
              <span className="percentage-tense">{percentage}%</span>
              <span className="score-label-tense">{score} / {maxScore}</span>
            </div>
          </div>

          <div className="tenses-summary">
            <h3>Przećwiczone czasy:</h3>
            <div className="tenses-chips">
              {[...new Set(rounds.map(r => r.correct))].map((tense, idx) => (
                <div key={idx} className="tense-chip-final">
                  {tense}
                </div>
              ))}
            </div>
          </div>

          <button className="restart-btn-tense" onClick={restartGame}>
            🔄 Graj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="tense-master-container">
      <div className="game-content-tense">
        
        {/* Header */}
        <div className="header-tense">
          <div className="clock-icon">⏰</div>
          <h2>Tense Master</h2>
          <div className="score-badge-tense">
            ⭐ {score} pkt
          </div>
        </div>

        {/* Progress */}
        <div className="progress-section-tense">
          <div className="round-counter">
            Runda {currentRound + 1} / {rounds.length}
          </div>
          <div className="progress-dots-tense">
            {rounds.map((_, idx) => (
              <div 
                key={idx} 
                className={`dot-tense ${idx < currentRound ? 'completed' : idx === currentRound ? 'active' : 'pending'}`}
              />
            ))}
          </div>
        </div>

        {/* Sentence Card */}
        <div className="sentence-card-tense">
          <div className="verb-badge">Czasownik: <strong>{currentRoundData.verb}</strong></div>
          <p className="sentence-display">{currentRoundData.sentence}</p>
        </div>

        {/* Tenses Grid */}
        <div className="tenses-grid">
          {currentRoundData.tenses.map((tense, idx) => {
            let className = 'tense-option';
            
            if (showResult) {
              if (tense === currentRoundData.correct) {
                className += ' correct-tense';
              } else if (tense === selectedTense) {
                className += ' incorrect-tense';
              } else {
                className += ' disabled-tense';
              }
            }

            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleTenseSelect(tense)}
                disabled={showResult}
              >
                <span className="tense-name">{tense}</span>
                {showResult && tense === currentRoundData.correct && (
                  <span className="check-mark-tense">✓</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Result Box */}
        {showResult && (
          <div className={`result-box-tense ${selectedTense === currentRoundData.correct ? 'correct-result' : 'incorrect-result'}`}>
            <div className="result-icon-tense">
              {selectedTense === currentRoundData.correct ? '🎉' : '📝'}
            </div>
            <div className="result-content-tense">
              <h4>
                {selectedTense === currentRoundData.correct ? 'Doskonale!' : 'Poprawna odpowiedź:'}
              </h4>
              {selectedTense !== currentRoundData.correct && (
                <p className="correct-answer-tense">
                  <strong>{currentRoundData.correct}</strong>: "{currentRoundData.correctForm}"
                </p>
              )}
              <p className="hint-text-tense">{currentRoundData.hint}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
