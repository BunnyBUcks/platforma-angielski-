import React, { useState } from 'react';
import './PronunciationPro.css';

export default function PronunciationPro() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [practicing, setPracticing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [userRating, setUserRating] = useState(null);

  const words = [
    { word: "thorough", phonetic: "/ˈθʌrəʊ/", difficulty: "Hard", tip: "TH jak w 'think', końcówka jak 'oh'" },
    { word: "entrepreneur", phonetic: "/ˌɒntrəprəˈnɜː/", difficulty: "Hard", tip: "Akcent na ostatniej sylabie" },
    { word: "rural", phonetic: "/ˈrʊərəl/", difficulty: "Medium", tip: "Dwa R, uważaj na wymowę" },
    { word: "worcestershire", phonetic: "/ˈwʊstəʃə/", difficulty: "Hard", tip: "Wuster-sher (pomijamy środkowe litery)" },
    { word: "February", phonetic: "/ˈfebruəri/", difficulty: "Medium", tip: "Feb-roo-ary, nie 'Feb-u-ary'" },
    { word: "comfortable", phonetic: "/ˈkʌmftəbl/", difficulty: "Medium", tip: "KUMF-tuh-bull, nie 'comfor-table'" },
    { word: "specific", phonetic: "/spəˈsɪfɪk/", difficulty: "Easy", tip: "Spuh-SIF-ik, S nie SH" },
    { word: "colonel", phonetic: "/ˈkɜːnl/", difficulty: "Hard", tip: "Wymawia się jak 'kernel'" },
  ];

  const w = words[current];

  const playWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(w.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.7;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePractice = () => {
    setPracticing(true);
    playWord();
    
    // Symulacja treningu wymowy
    setTimeout(() => {
      setPracticing(false);
    }, 2000);
  };

  const handleRate = (rating) => {
    if (showResult) return;
    setUserRating(rating);
    setShowResult(true);

    // Punkty zależne od samooceny: 5★=20pkt, 4★=15pkt, 3★=10pkt, 2★=5pkt, 1★=2pkt
    const points = rating === 5 ? 20 : rating === 4 ? 15 : rating === 3 ? 10 : rating === 2 ? 5 : 2;
    setScore(score + points);

    setTimeout(() => {
      if (current < words.length - 1) {
        setCurrent(current + 1);
        setShowResult(false);
        setUserRating(null);
      } else {
        setComplete(true);
      }
    }, 3000);
  };

  if (complete) {
    const maxScore = words.length * 20;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '🎤 Perfekcyjna Wymowa!' : pct >= 70 ? '⭐ Świetny Akcent!' : '📚 Trenuj dalej!';

    return (
      <div className="pronunciation-pro-container">
        <div className="complete-pronunciation">
          <div className="microphone-icon">🎤</div>
          <h2>Trening Zakończony!</h2>
          <div className="grade-pronunciation">{grade}</div>
          <div className="score-pronunciation">{score} / {maxScore} pkt</div>
          <div className="accuracy-pronunciation">{pct}% samooceny</div>
          <button className="restart-pronunciation" onClick={() => { setCurrent(0); setScore(0); setComplete(false); setShowResult(false); setUserRating(null); setPracticing(false); }}>
            🔄 Trenuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pronunciation-pro-container">
      <div className="game-pronunciation">
        <div className="header-pronunciation">
          <span className="mic-icon">🎤</span>
          <h2>Pronunciation Pro</h2>
          <span className="score-badge-pronunciation">{score} pkt</span>
        </div>

        <div className="progress-pronunciation">Słowo {current + 1} / {words.length}</div>

        <div className="word-card-pronunciation">
          <div className={`difficulty-badge ${w.difficulty.toLowerCase()}`}>
            {w.difficulty === 'Easy' ? '⭐ Łatwe' : w.difficulty === 'Medium' ? '⭐⭐ Średnie' : '⭐⭐⭐ Trudne'}
          </div>
          <div className="word-display">{w.word}</div>
          <div className="phonetic-display">{w.phonetic}</div>
          <div className="tip-box">
            <span className="tip-icon">💡</span>
            <span className="tip-text">{w.tip}</span>
          </div>
        </div>

        <div className="practice-section">
          <button className={`practice-btn ${practicing ? 'practicing' : ''}`} onClick={handlePractice} disabled={practicing}>
            <span className="speaker-pronunciation">🔊</span>
            <span className="practice-text">{practicing ? 'Słucham...' : 'Posłuchaj i powtórz'}</span>
          </button>
          <div className="instruction-pronunciation">
            Posłuchaj wymowy, powtórz na głos, a następnie oceń siebie
          </div>
        </div>

        <div className="rating-section">
          <div className="rating-title">Jak oceniasz swoją wymowę?</div>
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`star-btn ${userRating === star ? 'selected-star' : ''} ${showResult ? 'disabled-star' : ''}`}
                onClick={() => handleRate(star)}
                disabled={showResult}
              >
                {userRating >= star || (showResult && userRating >= star) ? '⭐' : '☆'}
              </button>
            ))}
          </div>
          <div className="rating-labels">
            <span className="rating-label-left">Słabo</span>
            <span className="rating-label-right">Świetnie</span>
          </div>
        </div>

        {showResult && (
          <div className="result-pronunciation">
            <div className="result-icon-pro">
              {userRating >= 4 ? '🎉' : userRating === 3 ? '👍' : '💪'}
            </div>
            <div className="result-text-pro">
              {userRating >= 4 ? (
                <strong>Świetna wymowa! Tak trzymaj!</strong>
              ) : userRating === 3 ? (
                <strong>Dobra robota! Ćwicz dalej!</strong>
              ) : (
                <strong>Nie poddawaj się! Trening czyni mistrza!</strong>
              )}
              <p className="points-earned">+{userRating === 5 ? 20 : userRating === 4 ? 15 : userRating === 3 ? 10 : userRating === 2 ? 5 : 2} pkt</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
