import React, { useState, useEffect } from 'react';
import './DictationRace.css';

export default function DictationRace() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [timer, setTimer] = useState(90);
  const [started, setStarted] = useState(false);

  const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "She sells seashells by the seashore",
    "Practice makes perfect",
    "Time flies when you're having fun",
    "A picture is worth a thousand words",
    "Better late than never",
    "Actions speak louder than words",
    "Every cloud has a silver lining",
  ];

  const s = sentences[current];

  useEffect(() => {
    if (started && timer > 0 && !complete) {
      const interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !complete) {
      setComplete(true);
    }
  }, [started, timer, complete]);

  const playDictation = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(s);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
      if (!started) setStarted(true);
    }
  };

  const handleSubmit = () => {
    if (showResult || !input.trim()) return;
    setShowResult(true);

    const userWords = input.trim().toLowerCase().split(/\s+/);
    const correctWords = s.toLowerCase().split(/\s+/);
    const matches = userWords.filter((w, i) => w === correctWords[i]).length;
    const accuracy = Math.round((matches / correctWords.length) * 100);
    const points = Math.round((accuracy / 100) * 15);

    setScore(score + points);

    setTimeout(() => {
      if (current < sentences.length - 1) {
        setCurrent(current + 1);
        setInput('');
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 3000);
  };

  if (complete) {
    const maxScore = sentences.length * 15;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '🏆 Mistrz Dyktanda!' : pct >= 70 ? '⭐ Świetny Wynik!' : '📝 Trenuj dalej!';

    return (
      <div className="dictation-race-container">
        <div className="complete-dictation">
          <div className="trophy-icon">🏁</div>
          <h2>Wyścig Zakończony!</h2>
          <div className="grade-dictation">{grade}</div>
          <div className="score-dictation">{score} / {maxScore} pkt</div>
          <div className="accuracy-dictation">{pct}% dokładności</div>
          <div className="time-info">Czas: {90 - timer}s</div>
          <button className="restart-dictation" onClick={() => { setCurrent(0); setScore(0); setInput(''); setComplete(false); setShowResult(false); setTimer(90); setStarted(false); }}>
            🔄 Rozpocznij ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dictation-race-container">
      <div className="game-dictation">
        <div className="header-dictation">
          <span className="pencil-icon">✏️</span>
          <h2>Dictation Race</h2>
          <span className="score-badge-dictation">{score} pkt</span>
        </div>

        <div className="timer-section">
          <div className="timer-circle">
            <svg className="timer-svg" viewBox="0 0 100 100">
              <circle className="timer-bg" cx="50" cy="50" r="45" />
              <circle 
                className="timer-progress" 
                cx="50" 
                cy="50" 
                r="45"
                style={{
                  strokeDashoffset: 283 - (283 * (timer / 90))
                }}
              />
            </svg>
            <div className="timer-text">{timer}s</div>
          </div>
          <div className="progress-dictation">Zdanie {current + 1} / {sentences.length}</div>
        </div>

        <div className="dictation-section">
          <div className="instruction-dictation">Posłuchaj i wpisz zdanie:</div>
          <button className="play-dictation-btn" onClick={playDictation}>
            <span className="speaker-dictation">🔊</span>
            <span>Odtwórz zdanie</span>
          </button>
        </div>

        <div className="input-section">
          <textarea
            className="dictation-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Wpisz usłyszane zdanie..."
            disabled={showResult}
            rows="3"
          />
          <button 
            className="submit-dictation-btn" 
            onClick={handleSubmit}
            disabled={showResult || !input.trim()}
          >
            ✓ Sprawdź
          </button>
        </div>

        {showResult && (
          <div className="result-dictation">
            <div className="correct-sentence">
              <strong>Poprawne zdanie:</strong>
              <p>{s}</p>
            </div>
            <div className="your-sentence">
              <strong>Twoja odpowiedź:</strong>
              <p>{input}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
