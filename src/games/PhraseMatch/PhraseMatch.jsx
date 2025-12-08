import React, { useState } from 'react';
import './PhraseMatch.css';

export default function PhraseMatch() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);

  const phrases = [
    {
      phrase: "Break the ice",
      meaning: "Zacząć rozmowę w niezręcznej sytuacji",
      options: [
        "Zacząć rozmowę w niezręcznej sytuacji",
        "Rozbić coś na kawałki",
        "Być bardzo zimnym",
        "Naprawić lodówkę"
      ],
      correct: 0
    },
    {
      phrase: "Piece of cake",
      meaning: "Coś bardzo łatwego",
      options: [
        "Rodzaj deseru",
        "Mała część czegoś",
        "Coś bardzo łatwego",
        "Przepis kulinarny"
      ],
      correct: 2
    },
    {
      phrase: "Hit the books",
      meaning: "Zacząć się intensywnie uczyć",
      options: [
        "Uderzyć w książki",
        "Zacząć się intensywnie uczyć",
        "Rzucić książkami",
        "Sprzedać książki"
      ],
      correct: 1
    },
    {
      phrase: "Cost an arm and a leg",
      meaning: "Być bardzo drogim",
      options: [
        "Mieć problemy zdrowotne",
        "Stracić coś ważnego",
        "Być bardzo drogim",
        "Być bezpłatnym"
      ],
      correct: 2
    },
    {
      phrase: "Under the weather",
      meaning: "Czuć się chorym",
      options: [
        "Stać w deszczu",
        "Czuć się chorym",
        "Być na zewnątrz",
        "Mieć zły humor"
      ],
      correct: 1
    },
    {
      phrase: "Let the cat out of the bag",
      meaning: "Zdradzić sekret",
      options: [
        "Wypuścić kota z torby",
        "Kupić zwierzę",
        "Zdradzić sekret",
        "Otworzyć prezent"
      ],
      correct: 2
    },
    {
      phrase: "Once in a blue moon",
      meaning: "Bardzo rzadko",
      options: [
        "Raz w miesiącu",
        "Bardzo często",
        "Bardzo rzadko",
        "W nocy"
      ],
      correct: 2
    },
    {
      phrase: "Spill the beans",
      meaning: "Wyjawić prawdę lub sekret",
      options: [
        "Rozlać kawę",
        "Ugotować posiłek",
        "Wyjawić prawdę lub sekret",
        "Zrobić bałagan"
      ],
      correct: 2
    },
  ];

  const p = phrases[current];

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);

    if (idx === p.correct) {
      setScore(score + 15);
    }

    setTimeout(() => {
      if (current < phrases.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 3000);
  };

  if (complete) {
    const maxScore = phrases.length * 15;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '🎯 Mistrz Idiomów!' : pct >= 70 ? '⭐ Świetna Znajomość!' : '📚 Ćwicz dalej!';

    return (
      <div className="phrase-match-container">
        <div className="complete-phrase">
          <div className="puzzle-icon">🧩</div>
          <h2>Wyzwanie Ukończone!</h2>
          <div className="grade-phrase">{grade}</div>
          <div className="score-phrase">{score} / {maxScore} pkt</div>
          <div className="accuracy-phrase">{pct}% trafności</div>
          <button className="restart-phrase" onClick={() => { 
            setCurrent(0); 
            setScore(0); 
            setComplete(false); 
            setShowResult(false); 
            setSelected(null); 
          }}>
            🔄 Spróbuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="phrase-match-container">
      <div className="game-phrase">
        <div className="header-phrase">
          <span className="idiom-icon">💭</span>
          <h2>Phrase Match</h2>
          <span className="score-badge-phrase">{score} pkt</span>
        </div>

        <div className="progress-phrase">Idiom {current + 1} / {phrases.length}</div>

        <div className="phrase-card">
          <div className="phrase-label">Angielski idiom:</div>
          <div className="phrase-display">"{p.phrase}"</div>
          <div className="phrase-hint">Co to oznacza po polsku?</div>
        </div>

        <div className="options-phrase">
          {p.options.map((opt, idx) => {
            let cls = 'option-phrase';
            if (showResult) {
              if (idx === p.correct) cls += ' correct-phrase';
              else if (idx === selected) cls += ' incorrect-phrase';
              else cls += ' disabled-phrase';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={showResult}>
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="option-content">{opt}</span>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-phrase ${selected === p.correct ? 'correct-result-phrase' : 'incorrect-result-phrase'}`}>
            <div className="result-icon-phrase">{selected === p.correct ? '🎉' : '💡'}</div>
            <div className="result-text-phrase">
              {selected === p.correct ? (
                <>
                  <strong>Doskonale!</strong>
                  <p>Świetnie znasz angielskie idiomy!</p>
                </>
              ) : (
                <>
                  <strong>Poprawna odpowiedź:</strong>
                  <p>{p.meaning}</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
