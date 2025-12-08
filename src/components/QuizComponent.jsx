import { useState } from 'react';

export default function QuizComponent({ lesson, onComplete, result, onNext }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState({});

  if (!lesson || !lesson.questions) {
    return <div>Brak pytań w quizie</div>;
  }

  const currentQuestion = lesson.questions[currentQuestionIndex];
  const totalQuestions = lesson.questions.length;

  const handleAnswer = (questionId, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResults = () => {
    let correctCount = 0;

    lesson.questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      
      if (question.type === 'multiple-choice') {
        if (userAnswer === question.correctAnswer) {
          correctCount++;
        }
      } else if (question.type === 'fill-in-blank' || question.type === 'translation') {
        const correctAnswers = Array.isArray(question.correctAnswers) 
          ? question.correctAnswers 
          : [question.correctAnswer];
        
        const userAnswerNormalized = question.caseSensitive 
          ? userAnswer 
          : userAnswer?.toLowerCase().trim();
        
        const isCorrect = correctAnswers.some(correct => {
          const correctNormalized = question.caseSensitive 
            ? correct 
            : correct?.toLowerCase().trim();
          return userAnswerNormalized === correctNormalized;
        });

        if (isCorrect) {
          correctCount++;
        }
      }
    });

    setShowResults(true);
    onComplete(correctCount, totalQuestions);
  };

  const isQuestionAnswered = () => {
    const answer = userAnswers[currentQuestion.id];
    return answer !== undefined && answer !== '' && answer !== null;
  };

  const isCorrect = (question) => {
    const userAnswer = userAnswers[question.id];
    
    if (question.type === 'multiple-choice') {
      return userAnswer === question.correctAnswer;
    } else if (question.type === 'fill-in-blank' || question.type === 'translation') {
      const correctAnswers = Array.isArray(question.correctAnswers) 
        ? question.correctAnswers 
        : [question.correctAnswer];
      
      const userAnswerNormalized = question.caseSensitive 
        ? userAnswer 
        : userAnswer?.toLowerCase().trim();
      
      return correctAnswers.some(correct => {
        const correctNormalized = question.caseSensitive 
          ? correct 
          : correct?.toLowerCase().trim();
        return userAnswerNormalized === correctNormalized;
      });
    }
    
    return false;
  };

  if (showResults && result) {
    return (
      <div className="quiz-results">
        <div className="results-header">
          <h2>📊 Wyniki Quizu</h2>
          <div className="score-display">
            <div className="score-circle" style={{
              background: result.percentage >= 70 
                ? 'linear-gradient(135deg, #10b981, #059669)' 
                : result.percentage >= 50
                ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                : 'linear-gradient(135deg, #ef4444, #dc2626)'
            }}>
              <span className="percentage">{Math.round(result.percentage)}%</span>
              <span className="fraction">{result.score}/{result.totalQuestions}</span>
            </div>
          </div>
          <p className="result-message">
            {result.percentage >= 70 
              ? '🎉 Świetna robota! Przechodzisz dalej!' 
              : result.percentage >= 50
              ? '👍 Nieźle! Możesz przejść dalej, ale warto powtórzyć materiał.'
              : '📚 Należy powtórzyć materiał. Spróbuj jeszcze raz!'}
          </p>
        </div>

        <div className="quiz-review">
          <h3>Przegląd odpowiedzi:</h3>
          {lesson.questions.map((question, index) => {
            const correct = isCorrect(question);
            return (
              <div key={question.id} className={`question-review ${correct ? 'correct' : 'incorrect'}`}>
                <div className="question-review-header">
                  <span className="question-number">Pytanie {index + 1}</span>
                  <span className="result-icon">{correct ? '✅' : '❌'}</span>
                </div>
                <p className="question-text">{question.question}</p>
                
                {question.type === 'multiple-choice' && (
                  <div className="options-review">
                    {question.options.map((option, optIndex) => (
                      <div 
                        key={optIndex}
                        className={`option-review ${
                          optIndex === question.correctAnswer ? 'correct-answer' : ''
                        } ${
                          userAnswers[question.id] === optIndex ? 'user-answer' : ''
                        }`}
                      >
                        {option}
                        {optIndex === question.correctAnswer && <span className="badge">Poprawna</span>}
                        {userAnswers[question.id] === optIndex && optIndex !== question.correctAnswer && (
                          <span className="badge wrong">Twoja</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {(question.type === 'fill-in-blank' || question.type === 'translation') && (
                  <div className="text-answer-review">
                    <p><strong>Twoja odpowiedź:</strong> {userAnswers[question.id] || '(brak)'}</p>
                    <p><strong>Poprawna odpowiedź:</strong> {
                      Array.isArray(question.correctAnswers)
                        ? question.correctAnswers.join(' / ')
                        : question.correctAnswer
                    }</p>
                  </div>
                )}

                {question.explanation && (
                  <div className="explanation">
                    <strong>💡 Wyjaśnienie:</strong> {question.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="results-actions">
          {result.percentage >= 50 ? (
            <button onClick={onNext} className="btn-next-lesson">
              Następna lekcja →
            </button>
          ) : (
            <button onClick={() => window.location.reload()} className="btn-retry">
              🔄 Spróbuj ponownie
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>📝 {lesson.title}</h2>
        <div className="quiz-progress">
          <span>Pytanie {currentQuestionIndex + 1} z {totalQuestions}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-text">{currentQuestion.question}</h3>

        {currentQuestion.type === 'multiple-choice' && (
          <div className="options-list">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion.id, index)}
                className={`option-btn ${userAnswers[currentQuestion.id] === index ? 'selected' : ''}`}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>
        )}

        {(currentQuestion.type === 'fill-in-blank' || currentQuestion.type === 'translation') && (
          <div className="text-input-section">
            <input
              type="text"
              value={userAnswers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              placeholder="Wpisz swoją odpowiedź..."
              className="text-answer-input"
            />
          </div>
        )}

        {showExplanation[currentQuestion.id] && currentQuestion.explanation && (
          <div className="inline-explanation">
            <strong>💡 Wskazówka:</strong> {currentQuestion.explanation}
          </div>
        )}
      </div>

      <div className="quiz-navigation">
        <button 
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="btn-quiz-nav"
        >
          ← Poprzednie
        </button>

        <button
          onClick={() => setShowExplanation({
            ...showExplanation,
            [currentQuestion.id]: !showExplanation[currentQuestion.id]
          })}
          className="btn-hint"
        >
          💡 Podpowiedź
        </button>

        <button 
          onClick={handleNext}
          disabled={!isQuestionAnswered()}
          className="btn-quiz-nav btn-quiz-next"
        >
          {currentQuestionIndex < totalQuestions - 1 ? 'Następne →' : 'Zakończ Quiz ✓'}
        </button>
      </div>
    </div>
  );
}
