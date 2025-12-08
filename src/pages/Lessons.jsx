export default function Lessons({ user }) {
  return (
    <div className="lessons-page">
      <h1>📚 Moje lekcje</h1>
      <p>Tutaj znajdziesz wszystkie swoje materiały edukacyjne</p>
      
      <div className="lessons-grid">
        <div className="card">
          <h3>Lekcja 1: Wprowadzenie</h3>
          <p>Podstawowe zwroty i powitania</p>
          <button className="btn-primary">Rozpocznij</button>
        </div>
        
        <div className="card">
          <h3>Ćwiczenia gramatyczne</h3>
          <p>Present Simple vs Present Continuous</p>
          <button className="btn-secondary">Przeglądaj</button>
        </div>
        
        <div className="card">
          <h3>Listening</h3>
          <p>Słuchanie ze zrozumieniem - poziom A2</p>
          <button className="btn-secondary">Słuchaj</button>
        </div>
      </div>
    </div>
  )
}
