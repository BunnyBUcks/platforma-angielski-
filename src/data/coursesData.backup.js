// Dane kursów - przykładowa treść dla kursu A1
export const coursesData = {
  'kurs-a1': {
    id: 'kurs-a1',
    title: 'Kurs A1 - Podstawy',
    description: 'Kompleksowy kurs dla początkujących',
    totalModules: 10,
    totalLessons: 50,
    modules: [
      {
        id: 'module-1',
        title: 'Module 1: Greetings & Introductions',
        description: 'Powitania i przedstawianie się',
        lessons: [
          {
            id: 'lesson-1',
            title: 'Lesson 1: Hello! Nice to meet you',
            duration: '15 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: `
                    <h2>Welcome to your first English lesson! 🎉</h2>
                    <p>W tej lekcji nauczysz się podstawowych powitań i jak przedstawić się po angielsku.</p>
                    
                    <h3>Key Phrases (Kluczowe zwroty):</h3>
                    <ul>
                      <li><strong>Hello!</strong> - Cześć!</li>
                      <li><strong>Hi!</strong> - Cześć! (mniej formalne)</li>
                      <li><strong>Good morning</strong> - Dzień dobry (rano)</li>
                      <li><strong>Good afternoon</strong> - Dzień dobry (popołudniu)</li>
                      <li><strong>Good evening</strong> - Dobry wieczór</li>
                      <li><strong>Goodbye / Bye</strong> - Do widzenia</li>
                    </ul>
                  `
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
                  caption: 'Greetings in different situations'
                },
                {
                  type: 'text',
                  content: `
                    <h3>Introducing Yourself (Przedstawianie się):</h3>
                    <div class="dialog-box">
                      <p><strong>Person A:</strong> Hello! My name is Anna. What's your name?</p>
                      <p><strong>Person B:</strong> Hi Anna! I'm Tom. Nice to meet you!</p>
                      <p><strong>Person A:</strong> Nice to meet you too, Tom!</p>
                    </div>
                    
                    <h4>Useful phrases:</h4>
                    <ul>
                      <li><strong>My name is...</strong> - Nazywam się...</li>
                      <li><strong>I'm...</strong> - Jestem... (skrót od "I am")</li>
                      <li><strong>What's your name?</strong> - Jak masz na imię?</li>
                      <li><strong>Nice to meet you</strong> - Miło mi cię poznać</li>
                    </ul>
                  `
                },
                {
                  type: 'audio',
                  title: 'Listen to the dialog',
                  url: '/audio/a1-m1-l1-dialog.mp3',
                  transcript: 'Hello! My name is Anna. What\'s your name? - Hi Anna! I\'m Tom. Nice to meet you!'
                },
                {
                  type: 'video',
                  title: 'Watch: How to greet people',
                  url: 'https://www.youtube.com/embed/example',
                  duration: '3:45'
                },
                {
                  type: 'tip',
                  content: `
                    <strong>💡 Pro Tip:</strong> W języku angielskim używamy "Good morning" tylko rano 
                    (około 5:00-12:00), "Good afternoon" po południu (12:00-18:00), 
                    a "Good evening" wieczorem (po 18:00). "Good night" mówimy tylko na pożegnanie 
                    przed snem, nie jako powitanie!
                  `
                }
              ]
            }
          },
          {
            id: 'lesson-1-quiz',
            title: 'Quiz: Greetings',
            duration: '10 min',
            type: 'quiz',
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                question: 'How do you say "Dzień dobry" in the morning?',
                options: [
                  'Good night',
                  'Good morning',
                  'Good evening',
                  'Goodbye'
                ],
                correctAnswer: 1,
                explanation: 'Good morning is used in the morning (rano). Good night is only for saying goodbye before sleep.'
              },
              {
                id: 'q2',
                type: 'multiple-choice',
                question: 'Choose the correct response: "What\'s your name?"',
                options: [
                  'I\'m fine, thank you',
                  'My name is Tom',
                  'How are you?',
                  'Goodbye'
                ],
                correctAnswer: 1,
                explanation: 'When someone asks "What\'s your name?", you should answer with your name: "My name is..." or "I\'m..."'
              },
              {
                id: 'q3',
                type: 'fill-in-blank',
                question: 'Complete: "Nice to ____ you!"',
                correctAnswer: 'meet',
                caseSensitive: false,
                explanation: 'The phrase "Nice to meet you" is used when you meet someone for the first time.'
              },
              {
                id: 'q4',
                type: 'multiple-choice',
                question: 'Which greeting is INFORMAL?',
                options: [
                  'Good evening',
                  'Good morning',
                  'Hi!',
                  'Good afternoon'
                ],
                correctAnswer: 2,
                explanation: '"Hi" is an informal greeting, like Polish "Cześć". The "Good..." greetings are more formal.'
              },
              {
                id: 'q5',
                type: 'translation',
                question: 'Translate to English: "Miło cię poznać"',
                correctAnswers: ['nice to meet you', 'nice meeting you'],
                caseSensitive: false,
                explanation: '"Nice to meet you" is the standard phrase for "Miło cię poznać".'
              }
            ]
          },
          {
            id: 'lesson-2',
            title: 'Lesson 2: How are you?',
            duration: '15 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: `
                    <h2>How are you today? 😊</h2>
                    <p>W tej lekcji nauczysz się pytać o samopoczucie i odpowiadać na takie pytania.</p>
                    
                    <h3>Asking about feelings (Pytanie o samopoczucie):</h3>
                    <ul>
                      <li><strong>How are you?</strong> - Jak się masz?</li>
                      <li><strong>How are you doing?</strong> - Jak ci idzie?</li>
                      <li><strong>How's it going?</strong> - Jak leci? (informal)</li>
                    </ul>
                  `
                },
                {
                  type: 'text',
                  content: `
                    <h3>Possible answers (Możliwe odpowiedzi):</h3>
                    <div class="answers-grid">
                      <div class="answer-card positive">
                        <h4>✅ Positive:</h4>
                        <ul>
                          <li>I'm fine, thank you</li>
                          <li>I'm good, thanks</li>
                          <li>I'm great!</li>
                          <li>Very well, thank you</li>
                          <li>Couldn't be better!</li>
                        </ul>
                      </div>
                      <div class="answer-card neutral">
                        <h4>😐 Neutral:</h4>
                        <ul>
                          <li>I'm OK</li>
                          <li>Not bad</li>
                          <li>So-so</li>
                          <li>Alright</li>
                        </ul>
                      </div>
                      <div class="answer-card negative">
                        <h4>❌ Negative:</h4>
                        <ul>
                          <li>Not so good</li>
                          <li>I've been better</li>
                          <li>Not great</li>
                          <li>I'm tired</li>
                        </ul>
                      </div>
                    </div>
                  `
                },
                {
                  type: 'text',
                  content: `
                    <h3>Complete Dialog:</h3>
                    <div class="dialog-box">
                      <p><strong>Anna:</strong> Hi Tom! How are you?</p>
                      <p><strong>Tom:</strong> I'm fine, thank you! And you?</p>
                      <p><strong>Anna:</strong> I'm great, thanks!</p>
                    </div>
                    
                    <p><strong>💡 Important:</strong> Angielska uprzejmość wymaga, żeby zapytać "And you?" 
                    lub "How about you?" w odpowiedzi!</p>
                  `
                },
                {
                  type: 'audio',
                  title: 'Listen: Different responses',
                  url: '/audio/a1-m1-l2-responses.mp3',
                  transcript: 'How are you? - I\'m fine, thank you. - I\'m good, thanks. - I\'m great!'
                },
                {
                  type: 'exercise',
                  title: 'Practice: Match the feelings',
                  content: 'Match English phrases with Polish translations'
                }
              ]
            }
          },
          {
            id: 'lesson-2-quiz',
            title: 'Quiz: How are you?',
            duration: '10 min',
            type: 'quiz',
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                question: '"How are you?" - Choose the POSITIVE answer:',
                options: [
                  'Not so good',
                  'I\'m great!',
                  'I\'ve been better',
                  'So-so'
                ],
                correctAnswer: 1,
                explanation: '"I\'m great!" is a very positive response meaning you feel excellent.'
              },
              {
                id: 'q2',
                type: 'fill-in-blank',
                question: 'Complete: "I\'m fine, ____ you!"',
                correctAnswer: 'thank',
                caseSensitive: false,
                explanation: 'The polite response is "I\'m fine, thank you!"'
              },
              {
                id: 'q3',
                type: 'multiple-choice',
                question: 'After someone says "I\'m fine, thank you", what should you say?',
                options: [
                  'Goodbye',
                  'Hello',
                  'And you? / How about you?',
                  'My name is...'
                ],
                correctAnswer: 2,
                explanation: 'It\'s polite to ask back: "And you?" or "How about you?"'
              },
              {
                id: 'q4',
                type: 'translation',
                question: 'Translate: "Jak ci idzie?" (informal)',
                correctAnswers: ['how are you doing', 'how\'s it going', 'hows it going'],
                caseSensitive: false,
                explanation: '"How are you doing?" or "How\'s it going?" are common informal greetings.'
              },
              {
                id: 'q5',
                type: 'multiple-choice',
                question: 'Which answer means "Tak sobie"?',
                options: [
                  'I\'m great!',
                  'So-so',
                  'Very well',
                  'Couldn\'t be better'
                ],
                correctAnswer: 1,
                explanation: '"So-so" means "tak sobie" - neither good nor bad.'
              }
            ]
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Module 2: Numbers & Age',
        description: 'Liczby i wiek',
        lessons: [
          {
            id: 'lesson-3',
            title: 'Lesson 3: Numbers 1-20',
            duration: '20 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: `
                    <h2>Let's count! 🔢</h2>
                    <p>Liczby są podstawą komunikacji. Nauczmy się liczyć po angielsku!</p>
                    
                    <h3>Numbers 1-10:</h3>
                    <div class="numbers-grid">
                      <div>1 - one</div>
                      <div>2 - two</div>
                      <div>3 - three</div>
                      <div>4 - four</div>
                      <div>5 - five</div>
                      <div>6 - six</div>
                      <div>7 - seven</div>
                      <div>8 - eight</div>
                      <div>9 - nine</div>
                      <div>10 - ten</div>
                    </div>
                    
                    <h3>Numbers 11-20:</h3>
                    <div class="numbers-grid">
                      <div>11 - eleven</div>
                      <div>12 - twelve</div>
                      <div>13 - thirteen</div>
                      <div>14 - fourteen</div>
                      <div>15 - fifteen</div>
                      <div>16 - sixteen</div>
                      <div>17 - seventeen</div>
                      <div>18 - eighteen</div>
                      <div>19 - nineteen</div>
                      <div>20 - twenty</div>
                    </div>
                  `
                },
                {
                  type: 'tip',
                  content: `
                    <strong>💡 Pattern Tip:</strong> Zauważ wzór! Od 13 do 19 liczby kończą się na "-teen". 
                    To pomoże Ci je zapamiętać: thirteen, fourteen, fifteen, sixteen...
                  `
                },
                {
                  type: 'audio',
                  title: 'Listen and repeat: Numbers 1-20',
                  url: '/audio/a1-m2-l3-numbers.mp3',
                  transcript: 'One, two, three, four, five...'
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

// Helper function to get course by ID
export const getCourseById = (courseId) => {
  return coursesData[courseId] || null;
};

// Helper function to get lesson by IDs
export const getLesson = (courseId, moduleId, lessonId) => {
  const course = coursesData[courseId];
  if (!course) return null;
  
  const module = course.modules.find(m => m.id === moduleId);
  if (!module) return null;
  
  return module.lessons.find(l => l.id === lessonId) || null;
};
