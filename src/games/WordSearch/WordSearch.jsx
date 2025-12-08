import React, { useState, useEffect } from 'react';
import './WordSearch.css';

export default function WordSearch() {
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [hints, setHints] = useState(3);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const words = [
    { word: 'CAT', translation: 'kot', hint: 'Zwierzę domowe, miauczy' },
    { word: 'DOG', translation: 'pies', hint: 'Najlepszy przyjaciel człowieka' },
    { word: 'SUN', translation: 'słońce', hint: 'Świeci na niebie w dzień' },
    { word: 'BOOK', translation: 'książka', hint: 'Czytamy to' },
    { word: 'TREE', translation: 'drzewo', hint: 'Rośnie w lesie' },
    { word: 'FISH', translation: 'ryba', hint: 'Pływa w wodzie' },
  ];

  // 8x8 grid with hidden words
  const grid = [
    ['C', 'A', 'T', 'X', 'B', 'O', 'O', 'K'],
    ['X', 'X', 'R', 'X', 'X', 'X', 'X', 'X'],
    ['D', 'O', 'G', 'X', 'F', 'X', 'S', 'X'],
    ['X', 'X', 'E', 'X', 'I', 'X', 'U', 'X'],
    ['X', 'X', 'E', 'X', 'S', 'X', 'N', 'X'],
    ['X', 'X', 'X', 'X', 'H', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ];

  // Word positions (for validation)
  const wordPositions = {
    'CAT': [{row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2}],
    'DOG': [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}],
    'SUN': [{row: 2, col: 6}, {row: 3, col: 6}, {row: 4, col: 6}],
    'BOOK': [{row: 0, col: 4}, {row: 0, col: 5}, {row: 0, col: 6}, {row: 0, col: 7}],
    'TREE': [{row: 1, col: 2}, {row: 2, col: 2}, {row: 3, col: 2}, {row: 4, col: 2}],
    'FISH': [{row: 2, col: 4}, {row: 3, col: 4}, {row: 4, col: 4}, {row: 5, col: 4}],
  };

  useEffect(() => {
    if (foundWords.length > 0 && foundWords.length < words.length) {
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [foundWords.length, words.length]);

  useEffect(() => {
    if (foundWords.length === words.length) {
      setGameComplete(true);
    }
  }, [foundWords.length, words.length]);

  const handleCellMouseDown = (row, col) => {
    setIsSelecting(true);
    setSelectedCells([{row, col}]);
  };

  const handleCellMouseEnter = (row, col) => {
    if (isSelecting) {
      const newSelection = [...selectedCells, {row, col}];
      setSelectedCells(newSelection);
    }
  };

  const handleCellMouseUp = () => {
    setIsSelecting(false);
    checkWord();
  };

  const checkWord = () => {
    if (selectedCells.length === 0) return;

    const selectedWord = selectedCells
      .map(cell => grid[cell.row][cell.col])
      .join('');

    const foundWord = words.find(w => w.word === selectedWord);

    if (foundWord && !foundWords.includes(foundWord.word)) {
      setFoundWords([...foundWords, foundWord.word]);
      setScore(score + foundWord.word.length * 10);
    }

    setSelectedCells([]);
  };

  const useHint = () => {
    if (hints === 0) return;

    const remainingWords = words.filter(w => !foundWords.includes(w.word));
    if (remainingWords.length === 0) return;

    const randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
    alert(`💡 Podpowiedź: ${randomWord.hint}`);
    setHints(hints - 1);
  };

  const restartGame = () => {
    setFoundWords([]);
    setSelectedCells([]);
    setGameComplete(false);
    setHints(3);
    setScore(0);
    setTimeElapsed(0);
  };

  const isCellSelected = (row, col) => {
    return selectedCells.some(cell => cell.row === row && cell.col === col);
  };

  const isCellFound = (row, col) => {
    return foundWords.some(word => {
      const positions = wordPositions[word];
      return positions && positions.some(pos => pos.row === row && pos.col === col);
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (gameComplete) {
    return (
      <div className="word-search-container">
        <div className="completion-screen-search">
          <div className="detective-celebration">🔍✨🎉✨🔍</div>
          <h2>Gratulacje, Detektywie!</h2>
          <p className="completion-message">Odnalazłeś wszystkie słowa!</p>

          <div className="stats-grid-search">
            <div className="stat-card-search">
              <span className="stat-icon-search">⏱️</span>
              <h3>{formatTime(timeElapsed)}</h3>
              <p>Czas</p>
            </div>
            <div className="stat-card-search">
              <span className="stat-icon-search">🎯</span>
              <h3>{score}</h3>
              <p>Punkty</p>
            </div>
            <div className="stat-card-search">
              <span className="stat-icon-search">💡</span>
              <h3>{hints}</h3>
              <p>Podpowiedzi pozostałe</p>
            </div>
          </div>

          <div className="found-words-final">
            <h3>Znalezione słowa:</h3>
            <div className="words-list-final">
              {words.map((w, index) => (
                <div key={index} className="word-final-item">
                  <span className="word-check">✓</span>
                  <strong>{w.word}</strong> - {w.translation}
                </div>
              ))}
            </div>
          </div>

          <button className="restart-btn-search" onClick={restartGame}>
            🔄 Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="word-search-container">
      <div className="game-content-search">
        
        {/* Header */}
        <div className="header-search">
          <div className="detective-icon">🔍</div>
          <div className="game-stats-search">
            <div className="stat-item-search">
              <span className="stat-label-search">⏱️ Czas:</span>
              <span className="stat-value-search">{formatTime(timeElapsed)}</span>
            </div>
            <div className="stat-item-search">
              <span className="stat-label-search">🎯 Punkty:</span>
              <span className="stat-value-search">{score}</span>
            </div>
            <div className="stat-item-search">
              <span className="stat-label-search">💡 Podpowiedzi:</span>
              <span className="stat-value-search">{hints}</span>
            </div>
          </div>
        </div>

        <div className="search-content-wrapper">
          {/* Grid */}
          <div className="grid-section">
            <div 
              className="word-grid"
              onMouseUp={handleCellMouseUp}
              onMouseLeave={handleCellMouseUp}
            >
              {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                  {row.map((letter, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`grid-cell ${
                        isCellFound(rowIndex, colIndex) ? 'found' : ''
                      } ${
                        isCellSelected(rowIndex, colIndex) ? 'selected' : ''
                      }`}
                      onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                      onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <button 
              className="hint-btn-search" 
              onClick={useHint}
              disabled={hints === 0}
            >
              💡 Użyj podpowiedzi ({hints})
            </button>
          </div>

          {/* Words List */}
          <div className="words-list-section">
            <h3 className="words-list-title">
              <span className="magnifying-glass">🔎</span>
              Znajdź słowa:
            </h3>
            <div className="words-to-find">
              {words.map((w, index) => (
                <div 
                  key={index} 
                  className={`word-item ${foundWords.includes(w.word) ? 'found-word' : ''}`}
                >
                  <div className="word-info">
                    <span className="word-english">{w.word}</span>
                    <span className="word-polish">{w.translation}</span>
                  </div>
                  {foundWords.includes(w.word) && (
                    <span className="check-mark">✓</span>
                  )}
                </div>
              ))}
            </div>

            <div className="progress-bar-search">
              <div className="progress-label">
                Postęp: {foundWords.length} / {words.length}
              </div>
              <div className="progress-track">
                <div 
                  className="progress-fill"
                  style={{ width: `${(foundWords.length / words.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="instructions-search">
          <strong>Jak grać:</strong> Przeciągnij myszką po literach, aby zaznaczyć słowo (w poziomie lub w pionie). Znajdź wszystkie słowa z listy!
        </div>

      </div>
    </div>
  );
}
