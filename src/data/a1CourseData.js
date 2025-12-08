// ============================================
// KURS A1 - Kompletny kurs angielskiego dla początkujących
// ============================================
// 
// STRUKTURA:
// ✓ 4 moduły tematyczne
// ✓ 100+ ćwiczeń interaktywnych
// ✓ 21 gier edukacyjnych
// ✓ Materiały do druku (PDF)
// ✓ Fiszki do nauki słówek
// ✓ Dyplom po ukończeniu

export const coursesData = {
  'kurs-a1': {
    id: 'kurs-a1',
    title: 'Kurs A1 - Podstawy Angielskiego',
    description: 'Kompletny kurs dla początkujących - od zera do podstawowej komunikacji',
    level: 'A1',
    totalModules: 4,
    totalLessons: 104, // ~26 lekcji na moduł
    estimatedTime: '40 godzin',
    certificate: true,
    
    // Materiały dodatkowe
    resources: {
      pdfs: [
        { id: 'vocab-lists', title: 'Listy słówek - wszystkie moduły', url: '/pdfs/a1-vocabulary.pdf' },
        { id: 'grammar-summary', title: 'Podsumowanie gramatyki A1', url: '/pdfs/a1-grammar.pdf' },
        { id: 'exercises-workbook', title: 'Zeszyt ćwiczeń (drukowany)', url: '/pdfs/a1-workbook.pdf' },
        { id: 'flashcards', title: 'Fiszki do wydruku - 200 słów', url: '/pdfs/a1-flashcards.pdf' }
      ],
      flashcards: {
        total: 200,
        perModule: 50,
        categories: ['Podstawowe', 'Codzienne', 'Gramatyka', 'Zwroty']
      }
    },

    modules: [
      // ========================================
      // MODUŁ 1: ALFABET I LICZBY
      // ========================================
      {
        id: 'module-1',
        number: 1,
        title: '📖 Moduł 1: Alfabet i Liczby',
        description: 'Podstawy języka - litery, liczby, kolory, dni tygodnia',
        icon: '📖',
        totalLessons: 26,
        estimatedTime: '10 godzin',
        
        topics: [
          'Alfabet angielski A-Z',
          'Liczby 0-100',
          'Kolory podstawowe',
          'Dni tygodnia',
          'Miesiące',
          'Podstawowe zwroty powitalne'
        ],
        
        games: [
          { id: 1, name: 'Word Match', topic: 'Słownictwo' },
          { id: 2, name: 'Flashcard Frenzy', topic: 'Litery i liczby' },
          { id: 3, name: 'Spelling Bee', topic: 'Ortografia' }
        ],

        lessons: [
          // Lekcja 1: Alfabet
          {
            id: 'lesson-1-1',
            number: 1,
            title: 'The English Alphabet (A-M)',
            duration: '20 min',
            type: 'content',
            hasAudio: true,
            content: {
              sections: [
                {
                  type: 'text',
                  content: `
                    <h2>🔤 Alfabet angielski - Część 1 (A-M)</h2>
                    <p>Poznaj pierwsze 13 liter alfabetu angielskiego z prawidłową wymową!</p>
                    
                    <div class="alphabet-grid">
                      <div class="letter-card"><strong>A</strong> /eɪ/ - <em>apple</em> 🍎</div>
                      <div class="letter-card"><strong>B</strong> /biː/ - <em>book</em> 📚</div>
                      <div class="letter-card"><strong>C</strong> /siː/ - <em>cat</em> 🐱</div>
                      <div class="letter-card"><strong>D</strong> /diː/ - <em>dog</em> 🐕</div>
                      <div class="letter-card"><strong>E</strong> /iː/ - <em>egg</em> 🥚</div>
                      <div class="letter-card"><strong>F</strong> /ef/ - <em>fish</em> 🐟</div>
                      <div class="letter-card"><strong>G</strong> /dʒiː/ - <em>girl</em> 👧</div>
                      <div class="letter-card"><strong>H</strong> /eɪtʃ/ - <em>house</em> 🏠</div>
                      <div class="letter-card"><strong>I</strong> /aɪ/ - <em>ice cream</em> 🍦</div>
                      <div class="letter-card"><strong>J</strong> /dʒeɪ/ - <em>juice</em> 🧃</div>
                      <div class="letter-card"><strong>K</strong> /keɪ/ - <em>kite</em> 🪁</div>
                      <div class="letter-card"><strong>L</strong> /el/ - <em>lion</em> 🦁</div>
                      <div class="letter-card"><strong>M</strong> /em/ - <em>monkey</em> 🐵</div>
                    </div>
                  `
                },
                {
                  type: 'audio',
                  title: '🔊 Posłuchaj wymowy liter A-M',
                  url: '/audio/alphabet-a-m.mp3',
                  transcript: 'A (ei), B (bi), C (si), D (di), E (i), F (ef), G (dżi), H (ejcz), I (aj), J (dżej), K (kej), L (el), M (em)'
                },
                {
                  type: 'tip',
                  content: `
                    <strong>💡 Wskazówka:</strong> Słuchaj nagrania kilka razy i powtarzaj na głos. 
                    Zwróć uwagę na różnice w wymowie względem polskiego alfabetu!
                  `
                }
              ]
            }
          },
          
          // Lekcja 2: Alfabet cd.
          {
            id: 'lesson-1-2',
            number: 2,
            title: 'The English Alphabet (N-Z)',
            duration: '20 min',
            type: 'content',
            hasAudio: true,
            content: {
              sections: [
                {
                  type: 'text',
                  content: `
                    <h2>🔤 Alfabet angielski - Część 2 (N-Z)</h2>
                    <p>Dokończmy alfabet - kolejne 13 liter!</p>
                    
                    <div class="alphabet-grid">
                      <div class="letter-card"><strong>N</strong> /en/ - <em>nose</em> 👃</div>
                      <div class="letter-card"><strong>O</strong> /əʊ/ - <em>orange</em> 🍊</div>
                      <div class="letter-card"><strong>P</strong> /piː/ - <em>pen</em> 🖊️</div>
                      <div class="letter-card"><strong>Q</strong> /kjuː/ - <em>queen</em> 👸</div>
                      <div class="letter-card"><strong>R</strong> /ɑː(r)/ - <em>rabbit</em> 🐰</div>
                      <div class="letter-card"><strong>S</strong> /es/ - <em>sun</em> ☀️</div>
                      <div class="letter-card"><strong>T</strong> /tiː/ - <em>tree</em> 🌳</div>
                      <div class="letter-card"><strong>U</strong> /juː/ - <em>umbrella</em> ☂️</div>
                      <div class="letter-card"><strong>V</strong> /viː/ - <em>violin</em> 🎻</div>
                      <div class="letter-card"><strong>W</strong> /ˈdʌb(ə)ljuː/ - <em>water</em> 💧</div>
                      <div class="letter-card"><strong>X</strong> /eks/ - <em>fox</em> 🦊</div>
                      <div class="letter-card"><strong>Y</strong> /waɪ/ - <em>yellow</em> 💛</div>
                      <div class="letter-card"><strong>Z</strong> /zed/ - <em>zebra</em> 🦓</div>
                    </div>
                  `
                }
              ]
            }
          },

          // Lekcja 3: Quiz - Alfabet
          {
            id: 'lesson-1-3',
            number: 3,
            title: 'Quiz: Alfabet angielski',
            duration: '15 min',
            type: 'quiz',
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                question: 'Jak wymawia się literę "A" po angielsku?',
                options: ['a', 'ei', 'aj', 'e'],
                correctAnswer: 1,
                explanation: 'Litera A wymawia się /eɪ/ (polskie "ej")'
              },
              {
                id: 'q2',
                type: 'multiple-choice',
                question: 'Która litera to /dʒiː/?',
                options: ['J', 'G', 'H', 'I'],
                correctAnswer: 1,
                explanation: 'G wymawia się /dʒiː/ (polskie "dżi")'
              },
              {
                id: 'q3',
                type: 'multiple-choice',
                question: 'Ile liter ma alfabet angielski?',
                options: ['24', '25', '26', '27'],
                correctAnswer: 2,
                explanation: 'Alfabet angielski ma 26 liter (A-Z)'
              },
              {
                id: 'q4',
                type: 'multiple-choice',
                question: 'Która litera zaczyna słowo "cat"?',
                options: ['K', 'C', 'S', 'Q'],
                correctAnswer: 1,
                explanation: '"Cat" (kot) zaczyna się na literę C'
              },
              {
                id: 'q5',
                type: 'multiple-choice',
                question: 'Jak po angielsku wymawia się literę Z?',
                options: ['zi', 'zet', 'zed', 'ze'],
                correctAnswer: 2,
                explanation: 'W brytyjskim angielskim Z wymawia się "zed" /zed/'
              }
            ]
          },

          // Lekcja 4: Liczby 0-10
          {
            id: 'lesson-1-4',
            number: 4,
            title: 'Numbers 0-10',
            duration: '20 min',
            type: 'content',
            hasAudio: true,
            content: {
              sections: [
                {
                  type: 'text',
                  content: `
                    <h2>🔢 Liczby 0-10</h2>
                    <p>Naucz się podstawowych liczb w języku angielskim!</p>
                    
                    <table class="numbers-table">
                      <tr><td>0</td><td><strong>zero</strong></td><td>/ˈzɪərəʊ/</td></tr>
                      <tr><td>1</td><td><strong>one</strong></td><td>/wʌn/</td></tr>
                      <tr><td>2</td><td><strong>two</strong></td><td>/tuː/</td></tr>
                      <tr><td>3</td><td><strong>three</strong></td><td>/θriː/</td></tr>
                      <tr><td>4</td><td><strong>four</strong></td><td>/fɔː(r)/</td></tr>
                      <tr><td>5</td><td><strong>five</strong></td><td>/faɪv/</td></tr>
                      <tr><td>6</td><td><strong>six</strong></td><td>/sɪks/</td></tr>
                      <tr><td>7</td><td><strong>seven</strong></td><td>/ˈsev(ə)n/</td></tr>
                      <tr><td>8</td><td><strong>eight</strong></td><td>/eɪt/</td></tr>
                      <tr><td>9</td><td><strong>nine</strong></td><td>/naɪn/</td></tr>
                      <tr><td>10</td><td><strong>ten</strong></td><td>/ten/</td></tr>
                    </table>
                  `
                }
              ]
            }
          },

          // Lekcja 5: Gra - Word Match
          {
            id: 'lesson-1-5',
            number: 5,
            title: '🎮 Gra: Word Match - Liczby',
            duration: '10 min',
            type: 'game',
            gameIcon: '🎯',
            gameTitle: 'Word Match',
            gameDescription: 'Dopasuj liczby do ich angielskich nazw!',
            objectives: [
              'Utrwalenie liczb 0-10',
              'Rozpoznawanie pisowni liczb',
              'Szybkie kojarzenie liczby z nazwą'
            ],
            gameData: {
              id: 1,
              icon: '🎯',
              name: 'Word Match',
              description: 'Dopasuj liczby'
            }
          },

          // ... Więcej lekcji w module 1
          // (kontynuacja w następnym komentarzu)
          
        ] // koniec lessons Module 1
      }, // koniec Module 1

      // Placeholder dla pozostałych modułów (będą rozbudowane później)
      {
        id: 'module-2',
        number: 2,
        title: '🐾 Moduł 2: Zwierzęta i Natura',
        description: 'Zwierzęta domowe i dzikie, pogoda, pory roku',
        totalLessons: 26,
        lessons: [] // TODO: rozbudować
      },
      {
        id: 'module-3',
        number: 3,
        title: '🏠 Moduł 3: Dom i Rodzina',
        description: 'Członkowie rodziny, pokoje, meble',
        totalLessons: 26,
        lessons: [] // TODO: rozbudować
      },
      {
        id: 'module-4',
        number: 4,
        title: '🎨 Moduł 4: Czasowniki i Akcje',
        description: 'Podstawowe czasowniki, proste zdania',
        totalLessons: 26,
        lessons: [] // TODO: rozbudować
      }
    ] // koniec modules
  } // koniec kurs-a1
};

// Funkcja pomocnicza do pobierania kursu
export function getCourseById(courseId) {
  return coursesData[courseId] || null;
}
