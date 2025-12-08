import React, { useState } from 'react';
import './SoundMatch.css';

export default function SoundMatch() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [played, setPlayed] = useState(false);

  const sounds = [
    { word: "cat", options: ["cat", "cut", "cart", "caught"], correct: "cat", sound: "kot" },
    { word: "ship", options: ["ship", "sheep", "cheap", "chip"], correct: "ship", sound: "statek" },
    { word: "three", options: ["tree", "three", "free", "thee"], correct: "three", sound: "trzy" },
    { word: "bird", options: ["bird", "beard", "bed", "bad"], correct: "bird", sound: "ptak" },
    { word: "work", options: ["work", "walk", "word", "world"], correct: "work", sound: "praca" },
    { word: "thought", options: ["thought", "taught", "fought", "through"], correct: "thought", sound: "myśl" },
    { word: "right", options: ["right", "write", "white", "ride"], correct: "right", sound: "prawy/poprawny" },
    { word: "hear", options: ["hear", "here", "hair", "her"], correct: "hear", sound: "słyszeć" },
  ];

  const s = sounds[current];

  const playSound = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(s.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
      setPlayed(true);
    }
  };

  const handleSelect = (option) => {
    if (showResult || !played) return;
    setSelected(option);
    setShowResult(true);

    if (option === s.correct) {
      setScore(score + 12);
    }

    setTimeout(() => {
      if (current < sounds.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
        setPlayed(false);
      } else {
        setComplete(true);
      }
    }, 2500);
  };

  if (complete) {
    const pct = Math.round((score / (sounds.length * 12)) * 100);
    const grade = pct >= 85 ? '🎧 Mistrz Słuchu!' : pct >= 70 ? '⭐ Świetny Słuch!' : '📚 Ćwicz dalej!';
    
    return (
      <div className="sound-match-container">
        <div className="complete-sound">
          <div className="headphones-icon">🎧</div>
          <h2>Trening Zakończony!</h2>
          <div className="grade-sound">{grade}</div>
          <div className="score-sound">{score} / {sounds.length * 12} pkt</div>
          <div className="accuracy-sound">{pct}% trafności</div>
          <button className="restart-sound" onClick={() => { setCurrent(0); setScore(0); setComplete(false); setShowResult(false); setSelected(null); setPlayed(false); }}>
            🔄 Trenuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sound-match-container">
      <div className="game-sound">
        <div className="header-sound">
          <span className="audio-icon">🎧</span>
          <h2>Sound Match</h2>
          <span className="score-badge-sound">{score} pkt</span>
        </div>

        <div className="progress-sound">Dźwięk {current + 1} / {sounds.length}</div>

        <div className="audio-card">
          <div className="translation-hint">Znaczenie: <strong>{s.sound}</strong></div>
          <button className="play-btn" onClick={playSound}>
            <span className="speaker-icon">🔊</span>
            <span className="play-text">{played ? 'Odtwórz ponownie' : 'Odtwórz dźwięk'}</span>
          </button>
          {!played && (
            <div className="instruction-text">Kliknij, aby usłyszeć słowo</div>
          )}
        </div>

        <div className="options-sound">
          {s.options.map((opt, idx) => {
            let cls = 'option-sound';
            if (showResult) {
              if (opt === s.correct) cls += ' correct-snd';
              else if (opt === selected) cls += ' incorrect-snd';
              else cls += ' disabled-snd';
            } else if (!played) {
              cls += ' locked-snd';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(opt)} disabled={showResult || !played}>
                {opt}
                {!played && <span className="lock-icon">🔒</span>}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-sound ${selected === s.correct ? 'correct-result-snd' : 'incorrect-result-snd'}`}>
            <div className="result-icon-snd">{selected === s.correct ? '✅' : '🎯'}</div>
            <div className="result-text-snd">
              {selected === s.correct ? (
                <strong>Doskonały słuch!</strong>
              ) : (
                <>
                  <strong>Poprawna odpowiedź: {s.correct}</strong>
                  <p>Znaczenie: {s.sound}</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
