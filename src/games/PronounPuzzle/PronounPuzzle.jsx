import React, { useState } from 'react';
import './PronounPuzzle.css';

export default function PronounPuzzle() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);

  const puzzles = [
    { sentence: "John is my friend. ___ is very kind.", correct: "He", options: ["He", "She", "It", "They"], explanation: "John to mężczyzna - używamy 'He'" },
    { sentence: "The cat is hungry. ___ wants food.", correct: "It", options: ["He", "She", "It", "They"], explanation: "Zwierzę (bez określenia płci) - 'It'" },
    { sentence: "Maria and I went shopping. ___ bought new clothes.", correct: "We", options: ["I", "We", "They", "You"], explanation: "'Maria and I' = 'We'" },
    { sentence: "This is Anna. Do you know ___?", correct: "her", options: ["she", "her", "hers", "herself"], explanation: "Po czasowniku 'know' - forma dopełnieniowa 'her'" },
    { sentence: "The students are here. ___ are waiting.", correct: "They", options: ["He", "She", "It", "They"], explanation: "'Students' (liczba mnoga) - 'They'" },
    { sentence: "Is this book ___?", correct: "yours", options: ["you", "your", "yours", "yourself"], explanation: "Pytanie o posiadacza - 'yours'" },
    { sentence: "I made this cake ___.", correct: "myself", options: ["me", "my", "mine", "myself"], explanation: "Zrobiłem sam - zaimek zwrotny 'myself'" },
    { sentence: "___ car is red.", correct: "My", options: ["I", "Me", "My", "Mine"], explanation: "Przed rzeczownikiem - przymiotnik dzierżawczy 'My'" },
  ];

  const p = puzzles[current];

  const handleSelect = (option) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);

    if (option === p.correct) {
      setScore(score + 15);
    }

    setTimeout(() => {
      if (current < puzzles.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 2500);
  };

  if (complete) {
    const pct = Math.round((score / (puzzles.length * 15)) * 100);
    const grade = pct >= 80 ? '🏆 Mistrz Zaimków!' : pct >= 60 ? '⭐ Świetnie!' : '📚 Ćwicz dalej!';
    
    return (
      <div className="pronoun-puzzle-container">
        <div className="complete-pronoun">
          <div className="puzzle-complete-icon">🧩</div>
          <h2>Puzzle Rozwiązane!</h2>
          <div className="grade-pronoun">{grade}</div>
          <div className="score-pronoun">{score} / {puzzles.length * 15} pkt</div>
          <div className="pct-pronoun">{pct}%</div>
          <button className="restart-pronoun" onClick={() => { setCurrent(0); setScore(0); setComplete(false); setShowResult(false); setSelected(null); }}>
            🔄 Graj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pronoun-puzzle-container">
      <div className="game-pronoun">
        <div className="header-pronoun">
          <span className="puzzle-icon">🧩</span>
          <h2>Pronoun Puzzle</h2>
          <span className="score-badge-pronoun">{score} pkt</span>
        </div>

        <div className="progress-pronoun">Zagadka {current + 1} / {puzzles.length}</div>

        <div className="sentence-pronoun">{p.sentence}</div>

        <div className="options-pronoun">
          {p.options.map((opt, idx) => {
            let cls = 'option-pronoun';
            if (showResult) {
              if (opt === p.correct) cls += ' correct-pro';
              else if (opt === selected) cls += ' incorrect-pro';
              else cls += ' disabled-pro';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(opt)} disabled={showResult}>
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-pronoun ${selected === p.correct ? 'correct-result-pro' : 'incorrect-result-pro'}`}>
            <div className="result-icon-pro">{selected === p.correct ? '✅' : '📖'}</div>
            <div className="result-text-pro">
              <strong>{selected === p.correct ? 'Doskonale!' : 'Poprawna odpowiedź: ' + p.correct}</strong>
              <p>{p.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
