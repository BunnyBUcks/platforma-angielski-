import React, { useState } from 'react';
import './ArticleAdventure.css';

export default function ArticleAdventure() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);

  const questions = [
    { sentence: "___ sun is shining.", correct: "The", options: ["A", "An", "The", "-"], explanation: "Używamy 'The' dla rzeczy jedynych w swoim rodzaju" },
    { sentence: "I saw ___ elephant.", correct: "an", options: ["a", "an", "the", "-"], explanation: "'An' przed samogłoską" },
    { sentence: "She is ___ doctor.", correct: "a", options: ["a", "an", "the", "-"], explanation: "'A' przed spółgłoską, zawód" },
    { sentence: "___ cats like milk.", correct: "-", options: ["A", "An", "The", "-"], explanation: "Brak przedimka dla rzeczy ogólnych (liczba mnoga)" },
    { sentence: "I play ___ guitar.", correct: "the", options: ["a", "an", "the", "-"], explanation: "'The' przed instrumentami muzycznymi" },
    { sentence: "___ honesty is important.", correct: "-", options: ["A", "An", "The", "-"], explanation: "Brak przedimka przed pojęciami abstrakcyjnymi" },
    { sentence: "She lives in ___ USA.", correct: "the", options: ["a", "an", "the", "-"], explanation: "'The' przed nazwami krajów ze skrótem" },
    { sentence: "This is ___ best day!", correct: "the", options: ["a", "an", "the", "-"], explanation: "'The' przed stopniem najwyższym" },
  ];

  const q = questions[current];

  const handleSelect = (option) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);

    if (option === q.correct) {
      setScore(score + 10);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 2500);
  };

  if (complete) {
    const pct = Math.round((score / (questions.length * 10)) * 100);
    return (
      <div className="article-adventure-container">
        <div className="complete-article">
          <div className="treasure-icon">💎</div>
          <h2>Przygoda zakończona!</h2>
          <div className="score-big-article">{score} / {questions.length * 10}</div>
          <div className="pct-article">{pct}% trafności</div>
          <button className="restart-article" onClick={() => { setCurrent(0); setScore(0); setComplete(false); setShowResult(false); setSelected(null); }}>
            🔄 Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-adventure-container">
      <div className="game-article">
        <div className="header-article">
          <span className="compass-icon">🧭</span>
          <h2>Article Adventure</h2>
          <span className="score-article">{score} pkt</span>
        </div>

        <div className="progress-article">Zadanie {current + 1} / {questions.length}</div>

        <div className="sentence-article">{q.sentence}</div>

        <div className="options-article">
          {q.options.map((opt, idx) => {
            let cls = 'option-article';
            if (showResult) {
              if (opt === q.correct) cls += ' correct-art';
              else if (opt === selected) cls += ' incorrect-art';
              else cls += ' disabled-art';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(opt)} disabled={showResult}>
                {opt === '-' ? '(brak)' : opt}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-article ${selected === q.correct ? 'correct-res' : 'incorrect-res'}`}>
            <strong>{selected === q.correct ? '✅ Świetnie!' : '❌ Błąd'}</strong>
            <p>{q.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
