import React, { useState } from 'react';
import './SentenceBuilder.css';

export default function SentenceBuilder() {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const sentences = [
    {
      correct: ["I", "am", "learning", "English"],
      translation: "Uczę się angielskiego",
      hint: "Podmiot + czasownik + dopełnienie"
    },
    {
      correct: ["She", "likes", "to", "read", "books"],
      translation: "Ona lubi czytać książki",
      hint: "Podmiot + czasownik + bezokolicznik + dopełnienie"
    },
    {
      correct: ["They", "are", "playing", "football", "now"],
      translation: "Oni grają teraz w piłkę",
      hint: "Present Continuous + określenie czasu"
    },
    {
      correct: ["We", "went", "to", "the", "cinema", "yesterday"],
      translation: "Poszliśmy wczoraj do kina",
      hint: "Past Simple + miejsce + czas"
    },
    {
      correct: ["He", "has", "been", "working", "here", "for", "years"],
      translation: "On pracuje tutaj od lat",
      hint: "Present Perfect Continuous + miejsce + czas trwania"
    },
    {
      correct: ["The", "book", "was", "written", "by", "Shakespeare"],
      translation: "Książka została napisana przez Szekspira",
      hint: "Strona bierna"
    },
  ];

  const currentData = sentences[currentSentence];

  // Initialize shuffled words
  React.useEffect(() => {
    const shuffled = [...currentData.correct].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setShowResult(false);
  }, [currentSentence]);

  const handleWordClick = (word, fromAvailable = true) => {
    if (showResult) return;

    if (fromAvailable) {
      setSelectedWords([...selectedWords, word]);
      setAvailableWords(availableWords.filter(w => availableWords.indexOf(w) !== availableWords.indexOf(word)));
    } else {
      const index = selectedWords.indexOf(word);
      setSelectedWords(selectedWords.filter((_, i) => i !== index));
      setAvailableWords([...availableWords, word]);
    }
  };

  const checkSentence = () => {
    const isCorrect = JSON.stringify(selectedWords) === JSON.stringify(currentData.correct);
    setShowResult(true);

    if (isCorrect) {
      setScore(score + 20);
    }

    setTimeout(() => {
      if (currentSentence < sentences.length - 1) {
        setCurrentSentence(currentSentence + 1);
      } else {
        setGameComplete(true);
      }
    }, 3000);
  };

  const resetSentence = () => {
    const shuffled = [...currentData.correct].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
  };

  const restartGame = () => {
    setCurrentSentence(0);
    setScore(0);
    setGameComplete(false);
  };

  if (gameComplete) {
    const maxScore = sentences.length * 20;
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="sentence-builder-container">
        <div className="completion-screen-builder">
          <div className="builder-icon-big">🏗️</div>
          <h2>Budowa Zakończona!</h2>
          
          <div className="score-display-builder">
            <div className="score-number-builder">{score}</div>
            <div className="score-max-builder">/ {maxScore} pkt</div>
          </div>

          <div className="accuracy-meter">
            <div className="accuracy-label">Trafność: {percentage}%</div>
            <div className="accuracy-bar">
              <div 
                className="accuracy-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="sentences-completed">
            <strong>{Math.round(score / 20)}</strong> / {sentences.length} zdań poprawnie
          </div>

          <button className="restart-btn-builder" onClick={restartGame}>
            🔄 Buduj ponownie
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = showResult && JSON.stringify(selectedWords) === JSON.stringify(currentData.correct);

  return (
    <div className="sentence-builder-container">
      <div className="game-content-builder">
        
        {/* Header */}
        <div className="header-builder">
          <div className="builder-icon">🏗️</div>
          <h2>Sentence Builder</h2>
          <div className="score-badge-builder">
            {score} pkt
          </div>
        </div>

        {/* Progress */}
        <div className="progress-builder">
          Zdanie {currentSentence + 1} / {sentences.length}
        </div>

        {/* Translation Box */}
        <div className="translation-box-builder">
          <div className="translation-label">Ułóż zdanie:</div>
          <div className="translation-text">{currentData.translation}</div>
          <div className="hint-builder">💡 {currentData.hint}</div>
        </div>

        {/* Selected Words Area */}
        <div className="selected-area">
          <div className="area-label">Twoje zdanie:</div>
          <div className={`words-container-selected ${showResult ? (isCorrect ? 'correct-sentence' : 'incorrect-sentence') : ''}`}>
            {selectedWords.length === 0 ? (
              <div className="placeholder-text">Wybierz słowa poniżej...</div>
            ) : (
              selectedWords.map((word, idx) => (
                <button
                  key={idx}
                  className="word-chip selected"
                  onClick={() => handleWordClick(word, false)}
                  disabled={showResult}
                >
                  {word}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Available Words */}
        <div className="available-area">
          <div className="area-label">Dostępne słowa:</div>
          <div className="words-container-available">
            {availableWords.map((word, idx) => (
              <button
                key={idx}
                className="word-chip available"
                onClick={() => handleWordClick(word, true)}
                disabled={showResult}
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actions-builder">
          <button 
            className="btn-reset-builder" 
            onClick={resetSentence}
            disabled={showResult || selectedWords.length === 0}
          >
            🔄 Reset
          </button>
          <button 
            className="btn-check-builder" 
            onClick={checkSentence}
            disabled={showResult || selectedWords.length !== currentData.correct.length}
          >
            ✓ Sprawdź
          </button>
        </div>

        {/* Result */}
        {showResult && (
          <div className={`result-builder ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="result-icon-builder">
              {isCorrect ? '🎉' : '📝'}
            </div>
            <div className="result-text-builder">
              {isCorrect ? (
                <strong>Świetnie! Poprawne zdanie!</strong>
              ) : (
                <>
                  <strong>Niepoprawna kolejność</strong>
                  <div className="correct-version">
                    Poprawnie: {currentData.correct.join(' ')}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
