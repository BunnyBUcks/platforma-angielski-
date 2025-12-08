import React, { useState } from 'react';
import './ReadingQuiz.css';

export default function ReadingQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);

  const passages = [
    {
      text: "Sarah loves to read books. Every evening, she sits in her favorite armchair with a cup of tea and reads for at least an hour. Her favorite genre is mystery novels because she enjoys solving puzzles.",
      question: "What does Sarah enjoy doing every evening?",
      options: ["Watching TV", "Reading books", "Playing games", "Cooking"],
      correct: 1
    },
    {
      text: "The Amazon rainforest is the largest tropical rainforest in the world. It covers about 5.5 million square kilometers and is home to millions of species of plants and animals. Scientists believe that many species there have not yet been discovered.",
      question: "What is special about the Amazon rainforest?",
      options: [
        "It's the smallest forest",
        "It has no animals",
        "It's the largest tropical rainforest",
        "It has only one species"
      ],
      correct: 2
    },
    {
      text: "Learning a new language can be challenging but rewarding. Regular practice, immersion, and speaking with native speakers are the best ways to improve. Don't be afraid to make mistakes – they are an important part of the learning process.",
      question: "According to the text, what is important when learning a language?",
      options: [
        "Never making mistakes",
        "Only reading books",
        "Regular practice and speaking",
        "Avoiding native speakers"
      ],
      correct: 2
    },
    {
      text: "The invention of the internet changed the world forever. It allows people to communicate instantly across vast distances, access information quickly, and work remotely. However, it also presents challenges like privacy concerns and misinformation.",
      question: "What does the text mention as a challenge of the internet?",
      options: [
        "It's too slow",
        "Privacy concerns",
        "It's too expensive",
        "Nobody uses it"
      ],
      correct: 1
    },
    {
      text: "Regular exercise is essential for maintaining good health. It helps strengthen muscles, improve cardiovascular health, and boost mental wellbeing. Experts recommend at least 30 minutes of moderate exercise most days of the week.",
      question: "How much exercise do experts recommend?",
      options: [
        "10 minutes daily",
        "30 minutes most days",
        "2 hours weekly",
        "Exercise is not important"
      ],
      correct: 1
    },
  ];

  const p = passages[current];

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);

    if (idx === p.correct) {
      setScore(score + 20);
    }

    setTimeout(() => {
      if (current < passages.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 3000);
  };

  if (complete) {
    const maxScore = passages.length * 20;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '📖 Mistrz Czytania!' : pct >= 70 ? '⭐ Świetne Zrozumienie!' : '📚 Ćwicz dalej!';

    return (
      <div className="reading-quiz-container">
        <div className="complete-reading">
          <div className="book-reading-icon">📚</div>
          <h2>Quiz Zakończony!</h2>
          <div className="grade-reading">{grade}</div>
          <div className="score-reading">{score} / {maxScore} pkt</div>
          <div className="accuracy-reading">{pct}% poprawnych odpowiedzi</div>
          <button className="restart-reading" onClick={() => { 
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
    <div className="reading-quiz-container">
      <div className="game-reading">
        <div className="header-reading">
          <span className="glasses-icon">👓</span>
          <h2>Reading Quiz</h2>
          <span className="score-badge-reading">{score} pkt</span>
        </div>

        <div className="progress-reading">Tekst {current + 1} / {passages.length}</div>

        <div className="passage-box">
          <div className="passage-label">📄 Przeczytaj tekst uważnie:</div>
          <div className="passage-text">{p.text}</div>
        </div>

        <div className="question-reading">
          <div className="question-label">❓ Pytanie:</div>
          <div className="question-text">{p.question}</div>
        </div>

        <div className="options-reading">
          {p.options.map((opt, idx) => {
            let cls = 'option-reading';
            if (showResult) {
              if (idx === p.correct) cls += ' correct-reading';
              else if (idx === selected) cls += ' incorrect-reading';
              else cls += ' disabled-reading';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={showResult}>
                <span className="option-letter-reading">{String.fromCharCode(65 + idx)}</span>
                <span className="option-text-reading">{opt}</span>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`result-reading ${selected === p.correct ? 'correct-result-reading' : 'incorrect-result-reading'}`}>
            <div className="result-icon-reading">{selected === p.correct ? '✅' : '💡'}</div>
            <div className="result-text-reading">
              {selected === p.correct ? (
                <strong>Świetnie! Dobrze zrozumiałeś tekst!</strong>
              ) : (
                <>
                  <strong>Poprawna odpowiedź: {p.options[p.correct]}</strong>
                  <p>Przeczytaj tekst jeszcze raz uważniej.</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
