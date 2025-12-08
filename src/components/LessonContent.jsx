export default function LessonContent({ lesson, onComplete }) {
  if (!lesson || !lesson.content) {
    return <div>Brak treści lekcji</div>;
  }

  return (
    <div className="lesson-content">
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <span className="lesson-duration">⏱️ {lesson.duration}</span>
      </div>

      <div className="lesson-sections">
        {lesson.content.sections.map((section, index) => (
          <div key={index} className="lesson-section">
            {section.type === 'text' && (
              <div 
                className="text-section" 
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}

            {section.type === 'image' && (
              <div className="image-section">
                <img src={section.url} alt={section.caption} />
                {section.caption && <p className="image-caption">{section.caption}</p>}
              </div>
            )}

            {section.type === 'audio' && (
              <div className="audio-section">
                <h3>🎧 {section.title}</h3>
                <audio controls>
                  <source src={section.url} type="audio/mpeg" />
                  Twoja przeglądarka nie wspiera odtwarzania audio.
                </audio>
                {section.transcript && (
                  <details className="transcript">
                    <summary>Pokaż transkrypcję</summary>
                    <p>{section.transcript}</p>
                  </details>
                )}
              </div>
            )}

            {section.type === 'video' && (
              <div className="video-section">
                <h3>🎥 {section.title}</h3>
                <div className="video-wrapper">
                  <iframe
                    src={section.url}
                    title={section.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {section.duration && <p className="video-duration">Długość: {section.duration}</p>}
              </div>
            )}

            {section.type === 'tip' && (
              <div className="tip-section">
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            )}

            {section.type === 'exercise' && (
              <div className="exercise-section">
                <h3>✍️ {section.title}</h3>
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="lesson-complete-section">
        <button onClick={onComplete} className="btn-complete-lesson">
          ✅ Ukończyłem tę lekcję - Idź dalej
        </button>
      </div>
    </div>
  );
}
