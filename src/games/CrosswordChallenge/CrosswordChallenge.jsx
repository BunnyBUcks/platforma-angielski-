import React, { useState } from 'react';
import './CrosswordChallenge.css';

export default function CrosswordChallenge() {
  const [gameComplete, setGameComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [revealedHints, setRevealedHints] = useState([]);

  // Crossword structure - simplified 5x5 grid
  const crosswordData = {
    grid: [
      ['C', 'A', 'T', '', ''],
      ['', 'P', '', '', ''],
      ['D', 'O', 'G', '', ''],
      ['', 'P', '', '', ''],
      ['', 'L', 'E', 'G', ''],
    ],
    words: [
      { 
        id: 1, 
        word: 'CAT', 
        clue: 'Zwierzę które miauczy', 
        direction: 'across', 
        startRow: 0, 
        startCol: 0,
        translation: 'kot'
      },
      { 
        id: 2, 
        word: 'DOG', 
        clue: 'Najlepszy przyjaciel człowieka', 
        direction: 'across', 
        startRow: 2, 
        startCol: 0,
        translation: 'pies'
      },
      { 
        id: 3, 
        word: 'APPLE', 
        clue: 'Czerwony lub zielony owoc', 
        direction: 'down', 
        startRow: 0, 
        startCol: 1,
        translation: 'jabłko'
      },
      { 
        id: 4, 
        word: 'LEG', 
        clue: 'Część ciała używana do chodzenia', 
        direction: 'across', 
        startRow: 4, 
        startCol: 1,
        translation: 'noga'
      },
    ]
  };

  const [userAnswers, setUserAnswers] = useState(
    crosswordData.grid.map(row => row.map(cell => cell === '' ? '' : ''))
  );

  const handleInputChange = (row, col, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[row][col] = value.toUpperCase();
    setUserAnswers(newAnswers);
  };

  const checkAnswer = (wordObj) => {
    let isCorrect = true;
    let positions = [];

    if (wordObj.direction === 'across') {
      for (let i = 0; i < wordObj.word.length; i++) {
        const col = wordObj.startCol + i;
        positions.push({ row: wordObj.startRow, col });
        if (userAnswers[wordObj.startRow][col] !== wordObj.word[i]) {
          isCorrect = false;
        }
      }
    } else { // down
      for (let i = 0; i < wordObj.word.length; i++) {
        const row = wordObj.startRow + i;
        positions.push({ row, col: wordObj.startCol });
        if (userAnswers[row][wordObj.startCol] !== wordObj.word[i]) {
          isCorrect = false;
        }
      }
    }

    if (isCorrect) {
      setScore(score + 20);
      return { isCorrect: true, positions };
    }
    return { isCorrect: false, positions };
  };

  const revealHint = (wordId) => {
    if (!revealedHints.includes(wordId)) {
      setRevealedHints([...revealedHints, wordId]);
      setScore(Math.max(0, score - 5));
    }
  };

  const checkAllAnswers = () => {
    let allCorrect = true;
    let totalScore = 0;

    crosswordData.words.forEach(word => {
      const result = checkAnswer(word);
      if (!result.isCorrect) {
        allCorrect = false;
      } else {
        totalScore += 20;
      }
    });

    if (allCorrect) {
      setScore(totalScore - (revealedHints.length * 5));
      setGameComplete(true);
    } else {
      alert('Nie wszystkie odpowiedzi są poprawne! Spróbuj ponownie.');
    }
  };

  const restartGame = () => {
    setUserAnswers(crosswordData.grid.map(row => row.map(cell => cell === '' ? '' : '')));
    setScore(0);
    setRevealedHints([]);
    setGameComplete(false);
  };

  const getCellNumber = (row, col) => {
    const word = crosswordData.words.find(w => 
      w.startRow === row && w.startCol === col
    );
    return word ? word.id : null;
  };

  if (gameComplete) {
    const maxScore = crosswordData.words.length * 20;
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="crossword-container">
        <div className="completion-screen-crossword">
          <div className="trophy-icon-crossword">🏆</div>
          <h2>Krzyżówka ukończona!</h2>
          
          <div className="score-display-final">
            <div className="score-circle-crossword">
              <svg width="160" height="160">
                <circle cx="80" cy="80" r="70" className="score-bg-crossword" />
                <circle 
                  cx="80" 
                  cy="80" 
                  r="70" 
                  className="score-fill-crossword"
                  strokeDasharray={`${percentage * 4.4} 440`}
                />
              </svg>
              <div className="score-text-crossword">
                <span className="score-number-crossword">{score}</span>
                <span className="score-label-crossword">punktów</span>
              </div>
            </div>
          </div>

          <div className="stats-summary-crossword">
            <div className="stat-box-crossword">
              <span className="stat-icon-crossword">✓</span>
              <h3>{crosswordData.words.length}</h3>
              <p>Słów rozwiązanych</p>
            </div>
            <div className="stat-box-crossword">
              <span className="stat-icon-crossword">💡</span>
              <h3>{revealedHints.length}</h3>
              <p>Podpowiedzi użyte</p>
            </div>
          </div>

          <div className="words-summary">
            <h3>Rozwiązane słowa:</h3>
            <div className="words-list-summary">
              {crosswordData.words.map(word => (
                <div key={word.id} className="word-summary-item">
                  <strong>{word.word}</strong> - {word.translation}
                </div>
              ))}
            </div>
          </div>

          <button className="restart-btn-crossword" onClick={restartGame}>
            🔄 Rozwiąż ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="crossword-container">
      <div className="game-content-crossword">
        
        {/* Header */}
        <div className="header-crossword">
          <div className="puzzle-icon">📝</div>
          <h2>Krzyżówka po Angielsku</h2>
          <div className="score-display-crossword-game">
            🌟 {score} pkt
          </div>
        </div>

        <div className="crossword-wrapper">
          
          {/* Grid */}
          <div className="grid-container-crossword">
            <div className="crossword-grid">
              {crosswordData.grid.map((row, rowIndex) => (
                <div key={rowIndex} className="crossword-row">
                  {row.map((cell, colIndex) => {
                    const cellNumber = getCellNumber(rowIndex, colIndex);
                    const isBlank = crosswordData.grid[rowIndex][colIndex] === '';
                    
                    return (
                      <div 
                        key={`${rowIndex}-${colIndex}`} 
                        className={`crossword-cell ${isBlank ? 'blank' : 'active'}`}
                      >
                        {!isBlank && (
                          <>
                            {cellNumber && (
                              <span className="cell-number">{cellNumber}</span>
                            )}
                            <input
                              type="text"
                              maxLength="1"
                              className="cell-input"
                              value={userAnswers[rowIndex][colIndex]}
                              onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Clues */}
          <div className="clues-section">
            <h3 className="clues-title">📋 Wskazówki</h3>
            
            <div className="clues-group">
              <h4>Poziomo →</h4>
              {crosswordData.words.filter(w => w.direction === 'across').map(word => (
                <div key={word.id} className="clue-item">
                  <span className="clue-number">{word.id}.</span>
                  <span className="clue-text">{word.clue}</span>
                  <button 
                    className="hint-btn-small"
                    onClick={() => revealHint(word.id)}
                    disabled={revealedHints.includes(word.id)}
                  >
                    {revealedHints.includes(word.id) ? word.translation : '💡'}
                  </button>
                </div>
              ))}
            </div>

            <div className="clues-group">
              <h4>Pionowo ↓</h4>
              {crosswordData.words.filter(w => w.direction === 'down').map(word => (
                <div key={word.id} className="clue-item">
                  <span className="clue-number">{word.id}.</span>
                  <span className="clue-text">{word.clue}</span>
                  <button 
                    className="hint-btn-small"
                    onClick={() => revealHint(word.id)}
                    disabled={revealedHints.includes(word.id)}
                  >
                    {revealedHints.includes(word.id) ? word.translation : '💡'}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Check Button */}
        <div className="action-section-crossword">
          <button className="check-btn-crossword" onClick={checkAllAnswers}>
            ✓ Sprawdź odpowiedzi
          </button>
        </div>

        <div className="instructions-crossword">
          <strong>Jak grać:</strong> Wpisz angielskie słowa według wskazówek. Możesz użyć podpowiedzi (💡), ale stracisz 5 punktów za każdą.
        </div>

      </div>
    </div>
  );
}
