import React, { useState, useEffect } from 'react';
import './VocabChallenge.css';

export default function VocabChallenge() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [timer, setTimer] = useState(60);
  const [started, setStarted] = useState(false);
  const [streak, setStreak] = useState(0);

  const vocab = [
    { word: 'Abundant', definition: 'Obfity, liczny', options: ['Obfity, liczny', 'Rzadki', 'Mały', 'Pusty'], correct: 0 },
    { word: 'Benevolent', definition: 'Życzliwy, dobrotliwy', options: ['Okrutny', 'Życzliwy, dobrotliwy', 'Obojętny', 'Gniewny'], correct: 1 },
    { word: 'Cautious', definition: 'Ostrożny', options: ['Bezmyślny', 'Szybki', 'Ostrożny', 'Głośny'], correct: 2 },
    { word: 'Diligent', definition: 'Pracowity, pilny', options: ['Pracowity, pilny', 'Leniwy', 'Wolny', 'Słaby'], correct: 0 },
    { word: 'Eloquent', definition: 'Wymowny, elokwentny', options: ['Cichy', 'Wymowny, elokwentny', 'Niezdarny', 'Prosty'], correct: 1 },
    { word: 'Frugal', definition: 'Oszczędny', options: ['Rozrzutny', 'Bogaty', 'Oszczędny', 'Drogi'], correct: 2 },
    { word: 'Genuine', definition: 'Prawdziwy, autentyczny', options: ['Prawdziwy, autentyczny', 'Fałszywy', 'Tani', 'Stary'], correct: 0 },
    { word: 'Humble', definition: 'Skromny, pokorny', options: ['Dumny', 'Skromny, pokorny', 'Głośny', 'Bogaty'], correct: 1 },
    { word: 'Innovative', definition: 'Innowacyjny, nowatorski', options: ['Stary', 'Standardowy', 'Innowacyjny, nowatorski', 'Prosty'], correct: 2 },
    { word: 'Jovial', definition: 'Wesoły, jowialny', options: ['Wesoły, jowialny', 'Smutny', 'Gniewny', 'Zmęczony'], correct: 0 },
  ];

  const v = vocab[current];

  useEffect(() => {
    if (!started) return;
    
    if (timer > 0 && !complete) {
      const interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !complete) {
      setComplete(true);
    }
  }, [timer, started, complete]);

  const startChallenge = () => {
    setStarted(true);
  };

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);

    if (idx === v.correct) {
      setScore(score + 10);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (current < vocab.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 2000);
  };

  if (!started) {
    return (
      <div className="vocab-challenge-container">
        <div className="start-screen">
          <div className="challenge-icon">⚡</div>
          <h2>Vocab Challenge</h2>
          <p className="challenge-desc">Masz 60 sekund na przejście przez {vocab.length} słów!</p>
          <div className="challenge-rules">
            <div className="rule-item">⏱️ 60 sekund na wszystkie pytania</div>
            <div className="rule-item">🎯 10 punktów za każdą poprawną odpowiedź</div>
            <div className="rule-item">🔥 Zbuduj serię poprawnych odpowiedzi!</div>
          </div>
          <button className="start-challenge-btn" onClick={startChallenge}>
            🚀 Rozpocznij Challenge
          </button>
        </div>
      </div>
    );
  }

  if (complete) {
    const maxScore = vocab.length * 10;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '⚡ Mistrz Słownictwa!' : pct >= 70 ? '🌟 Świetna Znajomość!' : '📖 Trenuj dalej!';

    return (
      <div className="vocab-challenge-container">
        <div className="complete-vocab">
          <div className="lightning-icon">⚡</div>
          <h2>Challenge Ukończony!</h2>
          <div className="grade-vocab">{grade}</div>
          <div className="score-vocab">{score} / {maxScore} pkt</div>
          <div className="stats-vocab">
            <div className="stat-vocab">
              <span className="stat-label-vocab">Dokładność:</span>
              <span className="stat-value-vocab">{pct}%</span>
            </div>
            <div className="stat-vocab">
              <span className="stat-label-vocab">Najdłuższa seria:</span>
              <span className="stat-value-vocab">{streak} 🔥</span>
            </div>
          </div>
          <button className="restart-vocab" onClick={() => { 
            setCurrent(0); 
            setScore(0); 
            setComplete(false); 
            setShowResult(false); 
            setSelected(null); 
            setTimer(60);
            setStarted(false);
            setStreak(0);
          }}>
            🔄 Spróbuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="vocab-challenge-container">
      <div className="game-vocab">
        <div className="header-vocab">
          <span className="vocab-icon">📚</span>
          <h2>Vocab Challenge</h2>
          <span className="score-badge-vocab">{score} pkt</span>
        </div>

        <div className="top-bar-vocab">
          <div className="timer-vocab">
            <span className="timer-icon">⏱️</span>
            <span className={`timer-value ${timer <= 10 ? 'timer-warning' : ''}`}>{timer}s</span>
          </div>
          <div className="progress-vocab">
            {current + 1} / {vocab.length}
          </div>
          {streak > 0 && (
            <div className="streak-vocab">
              <span className="streak-fire">🔥</span>
              <span className="streak-count">{streak}</span>
            </div>
          )}
        </div>

        <div className="word-card-vocab">
          <div className="word-vocab">{v.word}</div>
          <div className="word-label">Co oznacza to słowo?</div>
        </div>

        <div className="options-vocab">
          {v.options.map((opt, idx) => {
            let cls = 'option-vocab';
            if (showResult) {
              if (idx === v.correct) cls += ' correct-vocab';
              else if (idx === selected) cls += ' incorrect-vocab';
              else cls += ' disabled-vocab';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={showResult}>
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-vocab ${selected === v.correct ? 'correct-result-vocab' : 'incorrect-result-vocab'}`}>
            {selected === v.correct ? '✅ Poprawnie!' : `❌ Poprawna odpowiedź: ${v.definition}`}
          </div>
        )}
      </div>
    </div>
  );
}
