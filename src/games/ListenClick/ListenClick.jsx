import React, { useState } from 'react';
import './ListenClick.css';

export default function ListenClick() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [listening, setListening] = useState(false);

  const challenges = [
    { word: "apple", phrase: "I ate an apple", options: ["🍎 Apple", "🍊 Orange", "🍌 Banana", "🍇 Grapes"], correct: 0 },
    { word: "happy", phrase: "She feels very happy today", options: ["😊 Happy", "😢 Sad", "😡 Angry", "😴 Tired"], correct: 0 },
    { word: "dog", phrase: "The dog is barking loudly", options: ["🐶 Dog", "🐱 Cat", "🐦 Bird", "🐟 Fish"], correct: 0 },
    { word: "run", phrase: "They run every morning", options: ["🏃 Run", "🚶 Walk", "🧘 Sit", "🛌 Sleep"], correct: 0 },
    { word: "blue", phrase: "The sky is blue", options: ["🔵 Blue", "🔴 Red", "🟢 Green", "🟡 Yellow"], correct: 0 },
    { word: "book", phrase: "She is reading a book", options: ["📖 Book", "📱 Phone", "💻 Computer", "📺 TV"], correct: 0 },
    { word: "cold", phrase: "It's very cold outside", options: ["❄️ Cold", "🔥 Hot", "🌧️ Rainy", "☀️ Sunny"], correct: 0 },
    { word: "car", phrase: "He drives a red car", options: ["🚗 Car", "🚲 Bike", "🚂 Train", "✈️ Plane"], correct: 0 },
  ];

  const c = challenges[current];

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      setListening(true);
      const utterance = new SpeechSynthesisUtterance(c.phrase);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setListening(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClick = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);

    if (idx === c.correct) {
      setScore(score + 10);
    }

    setTimeout(() => {
      if (current < challenges.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 2500);
  };

  if (complete) {
    const pct = Math.round((score / (challenges.length * 10)) * 100);
    const grade = pct >= 85 ? '🎯 Perfekcyjny Słuch!' : pct >= 70 ? '⭐ Świetna Uwaga!' : '📚 Trenuj dalej!';

    return (
      <div className="listen-click-container">
        <div className="complete-listen">
          <div className="wave-icon">🌊</div>
          <h2>Misja Ukończona!</h2>
          <div className="grade-listen">{grade}</div>
          <div className="score-listen">{score} / {challenges.length * 10} pkt</div>
          <div className="accuracy-listen">{pct}% trafności</div>
          <button className="restart-listen" onClick={() => { setCurrent(0); setScore(0); setComplete(false); setShowResult(false); setSelected(null); }}>
            🔄 Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="listen-click-container">
      <div className="game-listen">
        <div className="header-listen">
          <span className="ear-icon">👂</span>
          <h2>Listen & Click</h2>
          <span className="score-badge-listen">{score} pkt</span>
        </div>

        <div className="progress-listen">
          <div className="progress-bar-listen">
            <div className="progress-fill-listen" style={{ width: `${((current + 1) / challenges.length) * 100}%` }}></div>
          </div>
          <span className="progress-text-listen">{current + 1} / {challenges.length}</span>
        </div>

        <div className="audio-section-listen">
          <div className="instruction-listen">Posłuchaj zdania i kliknij odpowiedni obrazek:</div>
          <button className={`listen-btn ${listening ? 'listening' : ''}`} onClick={playAudio} disabled={listening}>
            <span className="waves">
              <span className="wave"></span>
              <span className="wave"></span>
              <span className="wave"></span>
            </span>
            <span className="listen-text">{listening ? 'Słucham...' : 'Posłuchaj'}</span>
          </button>
        </div>

        <div className="options-listen">
          {c.options.map((opt, idx) => {
            let cls = 'option-listen';
            if (showResult) {
              if (idx === c.correct) cls += ' correct-listen';
              else if (idx === selected) cls += ' incorrect-listen';
              else cls += ' disabled-listen';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleClick(idx)} disabled={showResult}>
                <span className="emoji-listen">{opt.split(' ')[0]}</span>
                <span className="label-listen">{opt.split(' ').slice(1).join(' ')}</span>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-listen ${selected === c.correct ? 'correct-result-listen' : 'incorrect-result-listen'}`}>
            <div className="result-icon-listen">{selected === c.correct ? '🎉' : '💡'}</div>
            <div className="result-text-listen">
              {selected === c.correct ? (
                <strong>Doskonale! Dobrze słuchasz!</strong>
              ) : (
                <>
                  <strong>Poprawna odpowiedź: {c.options[c.correct]}</strong>
                  <p>Zdanie: "{c.phrase}"</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
