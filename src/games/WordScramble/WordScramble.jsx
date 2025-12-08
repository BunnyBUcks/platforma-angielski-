import React, { useState } from 'react';
import './WordScramble.css';

export default function WordScramble() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [hint, setHint] = useState(false);

  const words = [
    { word: 'computer', scrambled: 'rptcemou', hint: 'Urządzenie elektroniczne', category: 'Technology' },
    { word: 'kitchen', scrambled: 'ctehikn', hint: 'Pomieszczenie do gotowania', category: 'Home' },
    { word: 'elephant', scrambled: 'lphaenet', hint: 'Duże zwierzę z trąbą', category: 'Animals' },
    { word: 'beautiful', scrambled: 'uaftibelu', hint: 'Synonim "pretty"', category: 'Adjectives' },
    { word: 'mountain', scrambled: 'nmouatin', hint: 'Wysoka forma terenu', category: 'Nature' },
    { word: 'important', scrambled: 'tpmnorati', hint: 'Bardzo istotny', category: 'Adjectives' },
    { word: 'telephone', scrambled: 'hpneeelot', hint: 'Urządzenie do rozmów', category: 'Technology' },
    { word: 'wonderful', scrambled: 'nwdrouefl', hint: 'Wspaniały, cudowny', category: 'Adjectives' },
  ];

  const w = words[current];

  const handleSubmit = () => {
    if (showResult || !input.trim()) return;
    setShowResult(true);

    const isCorrect = input.toLowerCase().trim() === w.word.toLowerCase();
    
    if (isCorrect) {
      const points = hint ? 8 : 12; // Mniej punktów za użycie podpowiedzi
      setScore(score + points);
    }

    setTimeout(() => {
      if (current < words.length - 1) {
        setCurrent(current + 1);
        setInput('');
        setShowResult(false);
        setHint(false);
      } else {
        setComplete(true);
      }
    }, 2500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (complete) {
    const maxScore = words.length * 12;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '🎯 Mistrz Słów!' : pct >= 70 ? '⭐ Świetna Praca!' : '📚 Trenuj dalej!';

    return (
      <div className="word-scramble-container">
        <div className="complete-scramble">
          <div className="trophy-scramble">🏆</div>
          <h2>Wyzwanie Ukończone!</h2>
          <div className="grade-scramble">{grade}</div>
          <div className="score-scramble">{score} / {maxScore} pkt</div>
          <div className="accuracy-scramble">{pct}% wydajności</div>
          <button className="restart-scramble" onClick={() => { 
            setCurrent(0); 
            setScore(0); 
            setInput('');
            setComplete(false); 
            setShowResult(false); 
            setHint(false);
          }}>
            🔄 Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = input.toLowerCase().trim() === w.word.toLowerCase();

  return (
    <div className="word-scramble-container">
      <div className="game-scramble">
        <div className="header-scramble">
          <span className="shuffle-icon">🔀</span>
          <h2>Word Scramble</h2>
          <span className="score-badge-scramble">{score} pkt</span>
        </div>

        <div className="progress-scramble">Słowo {current + 1} / {words.length}</div>

        <div className="category-badge-scramble">{w.category}</div>

        <div className="scrambled-word">
          {w.scrambled.split('').map((letter, idx) => (
            <span key={idx} className="letter-box" style={{ animationDelay: `${idx * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </div>

        <div className="hint-section">
          {hint ? (
            <div className="hint-display">
              <span className="hint-icon">💡</span>
              <span className="hint-text">{w.hint}</span>
            </div>
          ) : (
            <button className="hint-btn" onClick={() => setHint(true)}>
              💡 Pokaż podpowiedź (-4 pkt)
            </button>
          )}
        </div>

        <div className="input-scramble-section">
          <input
            type="text"
            className="scramble-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ułóż słowo z liter..."
            disabled={showResult}
            autoFocus
          />
          <button 
            className="submit-scramble-btn" 
            onClick={handleSubmit}
            disabled={showResult || !input.trim()}
          >
            ✓ Sprawdź
          </button>
        </div>

        {showResult && (
          <div className={`result-scramble ${isCorrect ? 'correct-result-scramble' : 'incorrect-result-scramble'}`}>
            <div className="result-icon-scramble">{isCorrect ? '🎉' : '❌'}</div>
            <div className="result-text-scramble">
              {isCorrect ? (
                <>
                  <strong>Świetnie!</strong>
                  <p>Poprawnie ułożyłeś słowo!</p>
                </>
              ) : (
                <>
                  <strong>Poprawna odpowiedź: {w.word}</strong>
                  <p>Twoja odpowiedź: {input}</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
