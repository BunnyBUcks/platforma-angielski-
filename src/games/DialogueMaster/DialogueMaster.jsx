import React, { useState } from 'react';
import './DialogueMaster.css';

export default function DialogueMaster() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [conversation, setConversation] = useState([]);

  const dialogues = [
    {
      situation: "At a restaurant",
      context: "Kelner pyta o zamówienie",
      question: "Kelner: Are you ready to order?",
      options: [
        "Yes, I'll have a burger, please.",
        "No, I'm not hungry.",
        "Where is the bathroom?",
        "How much is this?"
      ],
      correct: 0,
      explanation: "To najbardziej naturalna odpowiedź na pytanie o zamówienie."
    },
    {
      situation: "Meeting someone",
      context: "Przedstawienie się komuś nowemu",
      question: "Osoba: Hi, I'm Sarah. What's your name?",
      options: [
        "Goodbye!",
        "Nice to meet you, I'm Alex.",
        "I don't know.",
        "See you later."
      ],
      correct: 1,
      explanation: "Odpowiadamy tym samym - przedstawiamy się i witamy osobę."
    },
    {
      situation: "Shopping",
      context: "W sklepie z ubraniami",
      question: "Sprzedawca: Can I help you find something?",
      options: [
        "No, thank you. I'm just looking.",
        "Yes, what time is it?",
        "I want to go home.",
        "This is expensive."
      ],
      correct: 0,
      explanation: "Grzeczna odpowiedź - odmowa pomocy lub jej przyjęcie."
    },
    {
      situation: "Asking for directions",
      context: "Pytasz o drogę",
      question: "Ty: Excuse me, where is the train station?",
      options: [
        "Przechodzeń: It's two blocks down on your right.",
        "Przechodzeń: I don't eat meat.",
        "Przechodzeń: What's your name?",
        "Przechodzeń: The weather is nice."
      ],
      correct: 0,
      explanation: "Odpowiedź zawiera kierunki - to logiczna reakcja na pytanie o drogę."
    },
    {
      situation: "Phone call",
      context: "Odbierasz telefon",
      question: "Dzwoniący: Hello, may I speak to John?",
      options: [
        "Yes, this is John speaking.",
        "What color is your car?",
        "I like pizza.",
        "It's raining today."
      ],
      correct: 0,
      explanation: "Potwierdzamy swoją tożsamość w odpowiedzi na prośbę o rozmowę."
    },
    {
      situation: "At the doctor",
      context: "U lekarza",
      question: "Lekarz: How are you feeling today?",
      options: [
        "I'm feeling much better, thank you.",
        "My favorite color is blue.",
        "I live in New York.",
        "I can swim."
      ],
      correct: 0,
      explanation: "Odpowiadamy na pytanie o samopoczucie."
    },
  ];

  const d = dialogues[current];

  const playDialogue = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);

    const newMessage = {
      speaker: idx === d.correct ? '✅ Ty' : '❌ Ty',
      text: d.options[idx],
      correct: idx === d.correct
    };
    setConversation([...conversation, newMessage]);

    if (idx === d.correct) {
      setScore(score + 15);
    }

    setTimeout(() => {
      if (current < dialogues.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        setComplete(true);
      }
    }, 3500);
  };

  if (complete) {
    const maxScore = dialogues.length * 15;
    const pct = Math.round((score / maxScore) * 100);
    const grade = pct >= 85 ? '🎭 Mistrz Konwersacji!' : pct >= 70 ? '💬 Świetny Rozmówca!' : '📚 Ćwicz dalej!';

    return (
      <div className="dialogue-master-container">
        <div className="complete-dialogue">
          <div className="chat-icon">💬</div>
          <h2>Konwersacja Zakończona!</h2>
          <div className="grade-dialogue">{grade}</div>
          <div className="score-dialogue">{score} / {maxScore} pkt</div>
          <div className="accuracy-dialogue">{pct}% poprawnych odpowiedzi</div>
          <button className="restart-dialogue" onClick={() => { setCurrent(0); setScore(0); setComplete(false); setShowResult(false); setSelected(null); setConversation([]); }}>
            🔄 Nowa konwersacja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dialogue-master-container">
      <div className="game-dialogue">
        <div className="header-dialogue">
          <span className="bubble-icon">💬</span>
          <h2>Dialogue Master</h2>
          <span className="score-badge-dialogue">{score} pkt</span>
        </div>

        <div className="progress-dialogue">Dialog {current + 1} / {dialogues.length}</div>

        <div className="situation-card">
          <div className="situation-title">📍 {d.situation}</div>
          <div className="situation-context">{d.context}</div>
        </div>

        <div className="conversation-box">
          <div className="message-bubble npc-bubble">
            <div className="bubble-header">
              <span className="avatar">👤</span>
              <span className="speaker-name">Rozmówca</span>
            </div>
            <div className="bubble-text">{d.question}</div>
            <button className="audio-btn-small" onClick={() => playDialogue(d.question)}>
              🔊
            </button>
          </div>

          {showResult && conversation.length > 0 && (
            <div className={`message-bubble your-bubble ${conversation[conversation.length - 1].correct ? 'correct-bubble' : 'incorrect-bubble'}`}>
              <div className="bubble-header">
                <span className="avatar">😊</span>
                <span className="speaker-name">{conversation[conversation.length - 1].speaker}</span>
              </div>
              <div className="bubble-text">{conversation[conversation.length - 1].text}</div>
            </div>
          )}
        </div>

        <div className="response-section">
          <div className="response-title">Wybierz swoją odpowiedź:</div>
          <div className="options-dialogue">
            {d.options.map((opt, idx) => {
              let cls = 'option-dialogue';
              if (showResult) {
                if (idx === d.correct) cls += ' correct-opt';
                else if (idx === selected) cls += ' incorrect-opt';
                else cls += ' disabled-opt';
              }
              return (
                <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={showResult}>
                  <span className="option-number">{String.fromCharCode(65 + idx)}</span>
                  <span className="option-text">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {showResult && (
          <div className={`result-dialogue ${selected === d.correct ? 'correct-result' : 'incorrect-result'}`}>
            <div className="result-icon-dia">{selected === d.correct ? '🎉' : '💡'}</div>
            <div className="result-text-dia">
              {selected === d.correct ? (
                <strong>Świetna odpowiedź!</strong>
              ) : (
                <>
                  <strong>Poprawna odpowiedź: {d.options[d.correct]}</strong>
                </>
              )}
              <p>{d.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
