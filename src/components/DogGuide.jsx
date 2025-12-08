import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DogGuide() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDialog, setCurrentDialog] = useState('intro');
  const [dogPosition, setDogPosition] = useState({ x: 20, y: 80 });
  const [isJumping, setIsJumping] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Drzewo dialogów
  const dialogs = {
    intro: {
      message: 'Hau hau! 🐕 Jestem Mops Maksimus, Twój przewodnik po tej platformie! Miło Cię poznać!',
      options: [
        { text: 'Cześć Maksimus! 👋', next: 'greeting' },
        { text: 'Co tu robisz?', next: 'purpose' },
      ]
    },
    greeting: {
      message: 'Cieszę się, że Cię widzę! 😊 Chcesz, żebym Ci coś opowiedział o tej platformie?',
      options: [
        { text: 'Tak, opowiedz mi!', next: 'main_menu' },
        { text: 'Może później...', next: 'bye' },
      ]
    },
    purpose: {
      message: 'Jestem tu, żeby Ci pomóc! 🎯 Znam każdy zakamarek tej strony i chętnie Cię oprowadzę!',
      options: [
        { text: 'Super! Co możesz mi pokazać?', next: 'main_menu' },
        { text: 'Dzięki, sam się rozejrzę', next: 'bye' },
      ]
    },
    main_menu: {
      message: 'O czym chcesz się dowiedzieć? Wybierz temat! 📚',
      options: [
        { text: '🛒 Jak kupić kurs?', next: 'how_to_buy' },
        { text: '� Jakie kursy są dostępne?', next: 'courses_info' },
        { text: '👨‍🏫 Kto jest korepetytorem?', next: 'tutor_info' },
        { text: '🎓 Jak przygotować się do egzaminu?', next: 'exam_prep' },
        { text: '🏠 Wróć na stronę główną', action: 'go_home' },
      ]
    },
    how_to_buy: {
      message: 'To proste! 🎉 Kliknij "Sklep" w menu, wybierz kurs, dodaj do koszyka i kup. Po zakupie kursy zobaczysz w swoim panelu!',
      options: [
        { text: '🛒 Zabierz mnie do sklepu!', action: 'go_shop' },
        { text: '📖 Co jeszcze mogę wiedzieć?', next: 'main_menu' },
        { text: '✅ Dzięki, to wszystko!', next: 'bye' },
      ]
    },
    courses_info: {
      message: 'Mamy super kursy! 🌟 Polecam "Repetytorium dla klasy 8" - świeże materiały z teorią i ćwiczeniami. Są też kursy A1-C2 i pakiety lekcji!',
      options: [
        { text: '🛒 Pokaż mi kursy!', action: 'go_shop' },
        { text: '🎓 Jak się przygotować do egzaminu?', next: 'exam_prep' },
        { text: '📖 Pytanie o coś innego', next: 'main_menu' },
      ]
    },
    tutor_info: {
      message: 'Nasza korepetytorka to Ania! 👩‍🏫 Doświadczona nauczycielka z dyplomami, która przygotowuje autorskie materiały!',
      options: [
        { text: '💬 Jak się z nią skontaktować?', next: 'contact_info' },
        { text: '📚 Jakie kursy prowadzi?', next: 'courses_info' },
        { text: '📖 Pytanie o coś innego', next: 'main_menu' },
      ]
    },
    exam_prep: {
      message: 'Przygotowanie do egzaminu? Mamy to! 🎯 Kurs "Repetytorium dla klasy 8" zawiera wszystko: teorię, ćwiczenia i testy!',
      options: [
        { text: '🛒 Kupię ten kurs!', action: 'go_shop' },
        { text: '📚 Powiedz więcej o kursach', next: 'courses_info' },
        { text: '📖 Pytanie o coś innego', next: 'main_menu' },
      ]
    },
    contact_info: {
      message: 'Możesz napisać do Ani przez chat na platformie (wkrótce!) lub zobaczyć więcej info na stronie głównej! 💌',
      options: [
        { text: '🏠 Idę na stronę główną', action: 'go_home' },
        { text: '📖 Pytanie o coś innego', next: 'main_menu' },
        { text: '✅ Dzięki!', next: 'bye' },
      ]
    },
    bye: {
      message: 'Dobrze! Jakbyś czegoś potrzebował, kliknij na mnie - jestem zawsze w prawym dolnym rogu! 🐾',
      options: [
        { text: '👋 Pa pa!', action: 'close' },
      ]
    },
  };

  useEffect(() => {
    // Sprawdź czy użytkownik już widział intro (zapisane w localStorage)
    const hasSeenIntro = localStorage.getItem('dogGuideIntroSeen');
    
    if (!hasSeenIntro) {
      // Pokazuj intro tylko raz przy pierwszym załadowaniu
      setTimeout(() => {
        setIsVisible(true);
        setCurrentDialog('intro');
        localStorage.setItem('dogGuideIntroSeen', 'true');
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }, 1500);
    }
  }, []);

  const handleOptionClick = (option) => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);

    // Akcje specjalne
    if (option.action) {
      switch (option.action) {
        case 'close':
          setIsVisible(false);
          break;
        case 'go_shop':
          navigate('/shop');
          setIsVisible(false);
          break;
        case 'go_home':
          navigate('/');
          setIsVisible(false);
          break;
        default:
          break;
      }
      return;
    }

    // Przejście do następnego dialogu
    if (option.next) {
      setCurrentDialog(option.next);
    }
  };

  const handleDogClick = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
    setIsVisible(true);
    setCurrentDialog('main_menu');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const dialog = dialogs[currentDialog];

  return (
    <>
      {/* Pływający psiak - zawsze widoczny */}
      <div 
        className={`dog-avatar ${isJumping ? 'jumping' : ''}`}
        onClick={handleDogClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9998,
        }}
      >
        <div className="dog-face">
          🐕
        </div>
        <div className="dog-bubble-mini">💬</div>
      </div>

      {/* Dymek z wiadomością */}
      {isVisible && dialog && (
        <div 
          className={`dog-guide ${isJumping ? 'jumping' : ''}`}
          style={{
            bottom: `${dogPosition.y}px`,
            left: `${dogPosition.x}px`,
          }}
        >
          <button className="dog-close" onClick={handleClose}>✕</button>
          <div className="dog-character">
            <div className="dog-emoji">🐕</div>
            <div className="dog-name">Mops Maksimus</div>
          </div>
          <div className="dog-message">
            {dialog.message}
          </div>
          
          {/* Opcje wyboru */}
          <div className="dog-options">
            {dialog.options.map((option, index) => (
              <button
                key={index}
                className="dog-option-btn"
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
          
          <div className="dog-paw">🐾</div>
        </div>
      )}
    </>
  );
}

export default DogGuide;
