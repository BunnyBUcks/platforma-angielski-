import React, { useState } from 'react';
import './StoryBuilder.css';

export default function StoryBuilder() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [story, setStory] = useState([]);

  const storyParts = [
    {
      context: "Początek opowieści",
      built: "",
      question: "Once upon a time, there ___ a young prince.",
      options: ["was", "were", "is", "are"],
      correct: 0,
      explanation: "Przeszły czas, liczba pojedyncza - 'was'"
    },
    {
      context: "Rozwinięcie",
      question: "He ___ in a beautiful castle near the sea.",
      options: ["live", "lives", "lived", "living"],
      correct: 2,
      explanation: "Przeszły czas - 'lived'"
    },
    {
      context: "Akcja",
      question: "One day, he ___ to go on an adventure.",
      options: ["decide", "decided", "decides", "deciding"],
      correct: 1,
      explanation: "Przeszły czas - 'decided'"
    },
    {
      context: "Rozwój fabuły",
      question: "He ___ his horse and rode into the forest.",
      options: ["take", "took", "taken", "taking"],
      correct: 1,
      explanation: "Przeszły czas nieregularny - 'took'"
    },
    {
      context: "Komplikacja",
      question: "In the forest, he ___ a mysterious cave.",
      options: ["find", "finds", "found", "finding"],
      correct: 2,
      explanation: "Przeszły czas nieregularny - 'found'"
    },
    {
      context: "Kulminacja",
      question: "Inside the cave, there ___ a magical treasure!",
      options: ["was", "were", "is", "are"],
      correct: 0,
      explanation: "Przeszły czas, 'treasure' jest pojedyncze - 'was'"
    },
    {
      context: "Zakończenie",
      question: "The prince ___ the treasure back to his kingdom.",
      options: ["bring", "brings", "brought", "bringing"],
      correct: 2,
      explanation: "Przeszły czas nieregularny - 'brought'"
    },
    {
      context: "Morał",
      question: "And everyone ___ happily ever after.",
      options: ["live", "lives", "lived", "living"],
      correct: 2,
      explanation: "Przeszły czas - 'lived'"
    },
  ];

  const s = storyParts[current];

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);

    const completedSentence = s.question.replace('___', s.options[idx]);
    
    if (idx === s.correct) {
      setScore(score + 12);
      setStory([...story, { text: completedSentence, correct: true }]);
    } else {
      setStory([...story, { text: completedSentence, correct: false }]);
    }

    setTimeout(() => {
      if (current < storyParts.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 2500);
  };

  if (complete) {
    const maxScore = storyParts.length * 12;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '📚 Mistrz Opowieści!' : pct >= 70 ? '✨ Świetny Narrator!' : '📖 Ćwicz dalej!';

    return (
      <div className="story-builder-container">
        <div className="complete-story">
          <div className="book-icon">📖</div>
          <h2>Opowieść Ukończona!</h2>
          <div className="grade-story">{grade}</div>
          <div className="score-story">{score} / {maxScore} pkt</div>
          <div className="accuracy-story">{pct}% poprawności</div>
          
          <div className="final-story">
            <h3>Twoja opowieść:</h3>
            <div className="story-text">
              {story.map((line, idx) => (
                <p key={idx} className={line.correct ? 'story-line-correct' : 'story-line-incorrect'}>
                  {line.text}
                </p>
              ))}
            </div>
          </div>

          <button className="restart-story" onClick={() => { 
            setCurrent(0); 
            setScore(0); 
            setComplete(false); 
            setShowResult(false); 
            setSelected(null); 
            setStory([]);
          }}>
            🔄 Napisz nową historię
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="story-builder-container">
      <div className="game-story">
        <div className="header-story">
          <span className="quill-icon">🪶</span>
          <h2>Story Builder</h2>
          <span className="score-badge-story">{score} pkt</span>
        </div>

        <div className="chapter-progress">
          <div className="chapter-label">{s.context}</div>
          <div className="progress-story">Część {current + 1} / {storyParts.length}</div>
        </div>

        <div className="story-preview">
          <div className="story-header">📜 Dotychczasowa historia:</div>
          <div className="story-so-far">
            {story.length > 0 ? (
              story.map((line, idx) => (
                <p key={idx} className="story-line">{line.text}</p>
              ))
            ) : (
              <p className="story-placeholder">Twoja opowieść zacznie się tutaj...</p>
            )}
          </div>
        </div>

        <div className="question-story">
          <div className="sentence-display">
            {s.question.split('___').map((part, idx) => (
              <React.Fragment key={idx}>
                {part}
                {idx < s.question.split('___').length - 1 && (
                  <span className="blank-space">___</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="options-story">
          {s.options.map((opt, idx) => {
            let cls = 'option-story';
            if (showResult) {
              if (idx === s.correct) cls += ' correct-story';
              else if (idx === selected) cls += ' incorrect-story';
              else cls += ' disabled-story';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={showResult}>
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-story ${selected === s.correct ? 'correct-result-story' : 'incorrect-result-story'}`}>
            <div className="result-icon-story">{selected === s.correct ? '✅' : '💡'}</div>
            <div className="result-text-story">
              {selected === s.correct ? (
                <strong>Doskonały wybór!</strong>
              ) : (
                <strong>Poprawna odpowiedź: {s.options[s.correct]}</strong>
              )}
              <p>{s.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
