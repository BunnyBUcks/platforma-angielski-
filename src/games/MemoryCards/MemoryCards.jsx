import React, { useState, useEffect } from 'react';
import './MemoryCards.css';

export default function MemoryCards() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  const cardPairs = [
    { id: 1, english: 'cat', polish: 'kot' },
    { id: 2, english: 'dog', polish: 'pies' },
    { id: 3, english: 'house', polish: 'dom' },
    { id: 4, english: 'tree', polish: 'drzewo' },
    { id: 5, english: 'water', polish: 'woda' },
    { id: 6, english: 'sun', polish: 'słońce' },
    { id: 7, english: 'book', polish: 'książka' },
    { id: 8, english: 'car', polish: 'samochód' },
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const gameCards = [];
    cardPairs.forEach(pair => {
      gameCards.push({ id: `${pair.id}-en`, pairId: pair.id, text: pair.english, lang: 'en' });
      gameCards.push({ id: `${pair.id}-pl`, pairId: pair.id, text: pair.polish, lang: 'pl' });
    });
    
    // Shuffle cards
    const shuffled = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const handleCardClick = (cardId) => {
    if (flipped.length === 2 || flipped.includes(cardId) || matched.includes(cardId)) {
      return;
    }

    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      
      const card1 = cards.find(c => c.id === newFlipped[0]);
      const card2 = cards.find(c => c.id === newFlipped[1]);

      if (card1.pairId === card2.pairId) {
        // Match found!
        setTimeout(() => {
          setMatched([...matched, newFlipped[0], newFlipped[1]]);
          setFlipped([]);
          setScore(score + 20);
          
          if (matched.length + 2 === cards.length) {
            setTimeout(() => setComplete(true), 500);
          }
        }, 800);
      } else {
        // No match
        setTimeout(() => {
          setFlipped([]);
        }, 1200);
      }
    }
  };

  const restartGame = () => {
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setScore(0);
    setComplete(false);
    initializeGame();
  };

  if (complete) {
    const grade = moves <= 12 ? '🧠 Mistrz Pamięci!' : moves <= 18 ? '⭐ Świetna Pamięć!' : '📚 Dobra próba!';

    return (
      <div className="memory-cards-container">
        <div className="complete-memory">
          <div className="brain-icon">🧠</div>
          <h2>Gratulacje!</h2>
          <div className="grade-memory">{grade}</div>
          <div className="score-memory">{score} pkt</div>
          <div className="moves-memory">Wykonano ruchów: {moves}</div>
          <button className="restart-memory" onClick={restartGame}>
            🔄 Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="memory-cards-container">
      <div className="game-memory">
        <div className="header-memory">
          <span className="cards-icon">🃏</span>
          <h2>Memory Cards</h2>
          <span className="score-badge-memory">{score} pkt</span>
        </div>

        <div className="stats-memory">
          <div className="stat-item-memory">
            <span className="stat-label-memory">Ruchy:</span>
            <span className="stat-value-memory">{moves}</span>
          </div>
          <div className="stat-item-memory">
            <span className="stat-label-memory">Znaleziono:</span>
            <span className="stat-value-memory">{matched.length / 2} / {cardPairs.length}</span>
          </div>
        </div>

        <div className="cards-grid">
          {cards.map((card) => {
            const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
            const isMatched = matched.includes(card.id);

            return (
              <div
                key={card.id}
                className={`memory-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <span className="card-question">?</span>
                  </div>
                  <div className="card-back">
                    <span className={`card-lang ${card.lang}`}>
                      {card.lang === 'en' ? '🇬🇧' : '🇵🇱'}
                    </span>
                    <span className="card-text">{card.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
