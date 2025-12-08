import React, { useState, useEffect } from 'react';
import './SpellingBee.css';

export default function SpellingBee() {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [lives, setLives] = useState(3);
  const [hint, setHint] = useState('');
  const [audioPlayed, setAudioPlayed] = useState(false);

  const words = [
    { word: 'beautiful', translation: 'piękny', difficulty: 'medium', category: 'Przymiotniki' },
    { word: 'chocolate', translation: 'czekolada', difficulty: 'easy', category: 'Jedzenie' },
    { word: 'environment', translation: 'środowisko', difficulty: 'hard', category: 'Natura' },
    { word: 'necessary', translation: 'konieczny', difficulty: 'hard', category: 'Przymiotniki' },
    { word: 'restaurant', translation: 'restauracja', difficulty: 'medium', category: 'Miejsca' },
    { word: 'Wednesday', translation: 'środa', difficulty: 'medium', category: 'Czas' },
    { word: 'definitely', translation: 'zdecydowanie', difficulty: 'hard', category: 'Przysłówki' },
    { word: 'library', translation: 'biblioteka', difficulty: 'easy', category: 'Miejsca' },
    { word: 'surprise', translation: 'niespodzianka', difficulty: 'medium', category: 'Rzeczowniki' },
    { word: 'tomorrow', translation: 'jutro', difficulty: 'easy', category: 'Czas' },
  ];

  const currentWordData = words[currentWord];

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWordData.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
      setAudioPlayed(true);
    }
  };

  const showHintLetters = () => {
    const word = currentWordData.word;
    const hintText = word[0] + '_'.repeat(word.length - 2) + word[word.length - 1];
    setHint(hintText);
  };

  const checkSpelling = () => {
    if (!userInput.trim()) return;

    const correct = userInput.toLowerCase().trim() === currentWordData.word.toLowerCase();
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 10);
      setTimeout(() => {
        if (currentWord < words.length - 1) {
          setCurrentWord(currentWord + 1);
          resetRound();
        } else {
          setGameComplete(true);
        }
      }, 1500);
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        setTimeout(() => {
          setGameComplete(true);
        }, 1500);
      } else {
        setTimeout(() => {
          setShowFeedback(false);
        }, 1500);
      }
    }
  };

  const resetRound = () => {
    setUserInput('');
    setShowFeedback(false);
    setHint('');
    setAudioPlayed(false);
  };

  const restartGame = () => {
    setScore(0);
    setCurrentWord(0);
    setLives(3);
    setGameComplete(false);
    resetRound();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !showFeedback) {
      checkSpelling();
    }
  };

  useEffect(() => {
    if (!audioPlayed && currentWordData) {
      // Auto-play na starcie każdego słowa
      setTimeout(() => playAudio(), 500);
    }
  }, [currentWord]);

  if (gameComplete) {
    const percentage = Math.round((score / (words.length * 10)) * 100);
    const grade = percentage >= 80 ? '🏆 Mistrz Literowania!' : 
                  percentage >= 60 ? '🥈 Dobra robota!' :
                  percentage >= 40 ? '🥉 Niezły start!' : 
                  '📚 Poćwicz jeszcze!';

    return (
      <div className="spelling-bee-container">
        <div className="completion-screen">
          <div className="bee-celebration">🐝✨🐝✨🐝</div>
          <h2>Ukończono test literowania!</h2>
          
          <div className="final-score-box">
            <div className="score-circle-bee">
              <svg width="150" height="150">
                <circle cx="75" cy="75" r="65" className="score-bg-bee" />
                <circle 
                  cx="75" 
                  cy="75" 
                  r="65" 
                  className="score-fill-bee"
                  strokeDasharray={`${percentage * 4.08} 408`}
                />
              </svg>
              <div className="score-text-bee">
                <span className="score-number-bee">{percentage}%</span>
              </div>
            </div>
            <h3 className="grade-text">{grade}</h3>
          </div>

          <div className="stats-summary-bee">
            <div className="stat-box-bee">
              <span className="stat-icon-bee">✅</span>
              <span className="stat-value-bee">{score / 10}</span>
              <span className="stat-label-bee">Poprawne</span>
            </div>
            <div className="stat-box-bee">
              <span className="stat-icon-bee">❌</span>
              <span className="stat-value-bee">{words.length - (score / 10)}</span>
              <span className="stat-label-bee">Błędne</span>
            </div>
            <div className="stat-box-bee">
              <span className="stat-icon-bee">🎯</span>
              <span className="stat-value-bee">{score}</span>
              <span className="stat-label-bee">Punkty</span>
            </div>
          </div>

          <button className="restart-btn-bee" onClick={restartGame}>
            🔄 Spróbuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="spelling-bee-container">
      <div className="game-content-bee">
        
        {/* Header z życiami i postępem */}
        <div className="header-bee">
          <div className="lives-display">
            {[...Array(3)].map((_, i) => (
              <span key={i} className={`heart ${i < lives ? 'active' : 'lost'}`}>
                {i < lives ? '❤️' : '🖤'}
              </span>
            ))}
          </div>
          <div className="progress-bee">
            Słowo {currentWord + 1} / {words.length}
          </div>
          <div className="score-display-bee">
            🍯 {score} pkt
          </div>
        </div>

        {/* Pszczoła animowana */}
        <div className="bee-character">
          <div className="bee-flying">🐝</div>
          <div className="honey-trail">✨</div>
        </div>

        {/* Kategoria i trudność */}
        <div className="word-info-bee">
          <span className="category-badge">{currentWordData.category}</span>
          <span className={`difficulty-badge ${currentWordData.difficulty}`}>
            {currentWordData.difficulty === 'easy' ? '⭐ Łatwe' :
             currentWordData.difficulty === 'medium' ? '⭐⭐ Średnie' :
             '⭐⭐⭐ Trudne'}
          </span>
        </div>

        {/* Tłumaczenie */}
        <div className="translation-box">
          <p className="translation-label">Przetłumacz po angielsku:</p>
          <h2 className="word-to-translate">{currentWordData.translation}</h2>
        </div>

        {/* Podpowiedź */}
        {hint && (
          <div className="hint-display">
            <span className="hint-icon">💡</span>
            <span className="hint-text">{hint}</span>
          </div>
        )}

        {/* Pole do wpisania */}
        <div className="input-section-bee">
          <input
            type="text"
            className={`spelling-input ${showFeedback ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Wpisz słowo..."
            disabled={showFeedback}
            autoFocus
          />
          {showFeedback && (
            <div className={`feedback-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <>
                  <span className="feedback-icon">✅</span>
                  <span>Świetnie! Poprawna pisownia!</span>
                </>
              ) : (
                <>
                  <span className="feedback-icon">❌</span>
                  <span>Błąd! Poprawnie: <strong>{currentWordData.word}</strong></span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Przyciski */}
        <div className="action-buttons-bee">
          <button className="btn-listen-bee" onClick={playAudio}>
            🔊 Posłuchaj
          </button>
          <button className="btn-hint-bee" onClick={showHintLetters} disabled={!!hint}>
            💡 Podpowiedź
          </button>
          <button 
            className="btn-check-bee" 
            onClick={checkSpelling}
            disabled={!userInput.trim() || showFeedback}
          >
            ✓ Sprawdź
          </button>
        </div>

        {/* Plaster miodu z postępem */}
        <div className="honeycomb-progress">
          {words.map((_, index) => (
            <div 
              key={index} 
              className={`hexagon ${index < currentWord ? 'completed' : index === currentWord ? 'current' : 'pending'}`}
            >
              {index < currentWord ? '✓' : index + 1}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
