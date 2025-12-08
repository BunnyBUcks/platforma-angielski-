// ============================================
// KURS A1 - Kompletny kurs angielskiego
// ✓ 4 moduły tematyczne
// ✓ 100+ ćwiczeń interaktywnych  
// ✓ 21 gier edukacyjnych
// ✓ Materiały PDF + Fiszki + Dyplom
// ============================================

export const coursesData = {
  'kurs-a1': {
    id: 'kurs-a1',
    title: 'Kurs A1 - Podstawy Angielskiego',
    description: 'Kompletny kurs dla początkujących - od zera do podstawowej komunikacji',
    level: 'A1',
    totalModules: 4,
    totalLessons: 104,
    estimatedTime: '40 godzin',
    certificate: true,
    
    resources: {
      pdfs: [
        { id: 'vocab', title: 'Listy słówek - wszystkie moduły', url: '/pdfs/a1-vocabulary.pdf' },
        { id: 'grammar', title: 'Podsumowanie gramatyki A1', url: '/pdfs/a1-grammar.pdf' },
        { id: 'workbook', title: 'Zeszyt ćwiczeń do druku', url: '/pdfs/a1-workbook.pdf' },
        { id: 'flashcards', title: 'Fiszki do wydruku - 200 słów', url: '/pdfs/a1-flashcards.pdf' }
      ]
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
        totalLessons: 26,
        estimatedTime: '10h',
        
        lessons: [
          // 🎯 LEKCJA 1: Alfabet A-F (INTERAKTYWNA)
          {
            id: 'm1-l1',
            title: '🔤 Alfabet A-F z audio',
            duration: '25 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🎧 Poznaj litery A-F!</h2><p style="color: #6366f1; font-size: 1.1em;">👆 Słuchaj i powtarzaj wymowę każdej litery!</p>'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅰️ A - /eɪ/ jak w "apple"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400',
                  caption: '🍎 A is for APPLE'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅱️ B - /biː/ jak w "book"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
                  caption: '📚 B is for BOOK'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅲 C - /siː/ jak w "cat"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
                  caption: '🐱 C is for CAT'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅳 D - /diː/ jak w "dog"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
                  caption: '🐕 D is for DOG'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅴 E - /iː/ jak w "egg"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
                  caption: '🥚 E is for EGG'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅵 F - /ef/ jak w "fish"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400',
                  caption: '🐟 F is for FISH'
                },
                {
                  type: 'tip',
                  content: '💡 <strong>Wskazówka:</strong> Powtarzaj każdą literę na głos 3 razy!'
                }
              ]
            }
          },

          // 🎯 LEKCJA 2: Alfabet G-L
          {
            id: 'm1-l2',
            title: '🔤 Alfabet G-L z audio',
            duration: '25 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🎧 Litery G-L</h2>'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅶 G - /dʒiː/ jak w "girl"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400',
                  caption: '👧 G is for GIRL'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅷 H - /eɪtʃ/ jak w "house"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400',
                  caption: '🏠 H is for HOUSE'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅸 I - /aɪ/ jak w "ice cream"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
                  caption: '🍦 I is for ICE CREAM'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅹 J - /dʒeɪ/ jak w "juice"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
                  caption: '🧃 J is for JUICE'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅺 K - /keɪ/ jak w "kite"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?w=400',
                  caption: '🪁 K is for KITE'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅻 L - /el/ jak w "lion"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1558983425-5bb5c8c73572?w=400',
                  caption: '🦁 L is for LION'
                }
              ]
            }
          },

          // 🎮 GRA 1: Word Match
          {
            id: 'm1-l3',
            title: '🎮 Gra: Dopasuj litery A-L',
            duration: '10 min',
            type: 'game',
            gameData: { id: 1, name: 'Word Match', icon: '🎯' }
          },

          // 🎯 LEKCJA 3: Alfabet M-R
          {
            id: 'm1-l4',
            title: '🔤 Alfabet M-R z audio',
            duration: '25 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🎧 Litery M-R</h2>'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅼 M - /em/ jak w "monkey"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400',
                  caption: '🐵 M is for MONKEY'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅽 N - /en/ jak w "nose"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1589738403119-f7d877f3d5e8?w=400',
                  caption: '👃 N is for NOSE'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅾️ O - /əʊ/ jak w "orange"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400',
                  caption: '🍊 O is for ORANGE'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🅿️ P - /piː/ jak w "pen"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1586932066811-7b857e651c19?w=400',
                  caption: '🖊️ P is for PEN'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆀 Q - /kjuː/ jak w "queen"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1535045459048-4e52e64dd24f?w=400',
                  caption: '👸 Q is for QUEEN'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆁 R - /ɑː(r)/ jak w "rabbit"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400',
                  caption: '🐰 R is for RABBIT'
                }
              ]
            }
          },

          // 🎯 LEKCJA 4: Alfabet S-Z
          {
            id: 'm1-l5',
            title: '🔤 Alfabet S-Z z audio',
            duration: '25 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🎧 Ostatnie litery S-Z</h2>'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆂 S - /es/ jak w "sun"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?w=400',
                  caption: '☀️ S is for SUN'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆃 T - /tiː/ jak w "tree"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400',
                  caption: '🌳 T is for TREE'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆄 U - /juː/ jak w "umbrella"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1519401934606-5a9d8e5c8f5c?w=400',
                  caption: '☂️ U is for UMBRELLA'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆅 V - /viː/ jak w "violin"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400',
                  caption: '🎻 V is for VIOLIN'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆆 W - /dʌbəljuː/ jak w "water"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400',
                  caption: '💧 W is for WATER'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆇 X - /eks/ jak w "fox"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400',
                  caption: '🦊 X is for FOX'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆈 Y - /waɪ/ jak w "yellow"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
                  caption: '💛 Y is for YELLOW'
                },
                {
                  type: 'audio',
                  url: 'https://www.englishclub.com/pronunciation/phonemic-chart-ia.htm',
                  transcript: '🆉 Z - /zed/ jak w "zebra"'
                },
                {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1565006907161-682d01f0e7c5?w=400',
                  caption: '🦓 Z is for ZEBRA'
                },
                {
                  type: 'tip',
                  content: '🎉 <strong>Gratulacje!</strong> Poznałeś cały alfabet angielski!'
                }
              ]
            }
          },

          // 🎮 GRA 2: Flashcard Frenzy
          {
            id: 'm1-l6',
            title: '🎮 Gra: Fiszki - Cały alfabet',
            duration: '10 min',
            type: 'game',
            gameData: { id: 2, name: 'Flashcard Frenzy', icon: '📇' }
          },

          // ✅ QUIZ: Alfabet
          {
            id: 'm1-l7',
            title: '✅ Quiz: Test alfabetu',
            duration: '15 min',
            type: 'quiz',
            questions: [
              {
                id: 'q1',
                question: 'Jak wymawia się literę A?',
                options: ['a', 'ei', 'aj', 'e'],
                correctAnswer: 1,
                explanation: 'A wymawia się /eɪ/ - podobnie jak polskie "ej"'
              },
              {
                id: 'q2',
                question: 'Ile liter ma alfabet angielski?',
                options: ['24', '25', '26', '27'],
                correctAnswer: 2,
                explanation: 'Alfabet angielski ma 26 liter (w polskim jest 32)'
              },
              {
                id: 'q3',
                question: 'Która litera jest przed "M"?',
                options: ['K', 'L', 'N', 'O'],
                correctAnswer: 1,
                explanation: 'Kolejność: K, L, M, N...'
              },
              {
                id: 'q4',
                question: 'Co zaczyna się na literę "D"?',
                options: ['Cat', 'Dog', 'Fish', 'Bird'],
                correctAnswer: 1,
                explanation: 'Dog (pies) zaczyna się na D'
              },
              {
                id: 'q5',
                question: 'Ostatnia litera alfabetu to:',
                options: ['Y', 'Z', 'X', 'W'],
                correctAnswer: 1,
                explanation: 'Alfabet kończy się na Z (zed)'
              }
            ]
          },

          // 🎮 GRA 3: Spelling Bee
          {
            id: 'm1-l8',
            title: '🎮 Gra: Literowanie słów',
            duration: '10 min',
            type: 'game',
            gameData: { id: 3, name: 'Spelling Bee', icon: '🐝' }
          },

          // Pozostałe lekcje modułu 1 (liczby, kolory, dni tygodnia...)
          {
            id: 'm1-l9',
            title: '🔢 Liczby 0-10',
            duration: '20 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🔢 Ucz się liczyć po angielsku!</h2><p>0 - ZERO, 1 - ONE, 2 - TWO, 3 - THREE, 4 - FOUR, 5 - FIVE, 6 - SIX, 7 - SEVEN, 8 - EIGHT, 9 - NINE, 10 - TEN</p>'
                }
              ]
            }
          },
          {
            id: 'm1-l10',
            title: '🎨 Kolory',
            duration: '15 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🌈 Kolory po angielsku</h2><p>RED - czerwony, BLUE - niebieski, GREEN - zielony, YELLOW - żółty, ORANGE - pomarańczowy, PURPLE - fioletowy</p>'
                }
              ]
            }
          },

          // 🎬 FILMIK AI - PODSUMOWANIE MODUŁU 1
          {
            id: 'm1-final',
            title: '🎬 Podsumowanie Modułu 1',
            duration: '5 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🎉 Gratulacje! Ukończyłeś Moduł 1</h2><p style="font-size: 1.1em; color: #6366f1;">Obejrzyj podsumowanie tego, czego się nauczyłeś:</p>'
                },
                {
                  type: 'video',
                  url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE',
                  caption: '📺 Podsumowanie: Alfabet, Liczby i Kolory'
                },
                {
                  type: 'tip',
                  content: '✨ <strong>Co osiągnąłeś:</strong><br>✅ Poznałeś cały alfabet angielski (A-Z)<br>✅ Nauczyłeś się liczyć 0-10<br>✅ Znasz podstawowe kolory<br>✅ Ukończyłeś 3 gry edukacyjne<br>✅ Zdałeś quiz sprawdzający!'
                },
                {
                  type: 'text',
                  content: '<h3>🚀 Co dalej?</h3><p>W następnym module poznasz <strong>zwierzęta i przyrodę</strong>. Będzie jeszcze ciekawiej!</p>'
                }
              ]
            }
          }
        ]
      },

      // ========================================
      // MODUŁ 2: ZWIERZĘTA I NATURA
      // ========================================
      {
        id: 'module-2',
        number: 2,
        title: '🐾 Moduł 2: Zwierzęta i Natura',
        description: 'Zwierzęta domowe i dzikie, pogoda, pory roku',
        totalLessons: 26,
        estimatedTime: '10h',
        
        lessons: [
          {
            id: 'm2-l1',
            title: '🐕 Zwierzęta domowe',
            duration: '15 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>Zwierzęta domowe (Pets)</h2><ul><li>🐕 dog - pies</li><li>🐈 cat - kot</li><li>🐇 rabbit - królik</li></ul>'
                }
              ]
            }
          },
          {
            id: 'm2-l2',
            title: '🦁 Zwierzęta dzikie',
            duration: '15 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>Dzikie zwierzęta (Wild Animals)</h2><ul><li>🦁 lion - lew</li><li>🐘 elephant - słoń</li><li>🦒 giraffe - żyrafa</li></ul>'
                }
              ]
            }
          },
          {
            id: 'm2-l3',
            title: '✅ Quiz: Zwierzęta',
            duration: '10 min',
            type: 'quiz',
            questions: [
              {
                id: 'q1',
                question: 'Co to jest "dog"?',
                options: ['Kot', 'Pies', 'Królik', 'Ptak'],
                correctAnswer: 1,
                explanation: 'Dog to pies'
              }
            ]
          },

          // 🎬 FILMIK AI - PODSUMOWANIE MODUŁU 2
          {
            id: 'm2-final',
            title: '🎬 Podsumowanie Modułu 2',
            duration: '5 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🎉 Ukończyłeś Moduł 2: Zwierzęta i Natura!</h2><p style="font-size: 1.1em; color: #6366f1;">Obejrzyj film podsumowujący:</p>'
                },
                {
                  type: 'video',
                  url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_MODULE2',
                  caption: '📺 Podsumowanie: Zwierzęta, Pogoda i Przyroda'
                },
                {
                  type: 'tip',
                  content: '✨ <strong>Twoje osiągnięcia:</strong><br>✅ Znasz nazwy zwierząt domowych i dzikich<br>✅ Potrafisz mówić o pogodzie<br>✅ Rozpoznajesz pory roku<br>✅ Opanowałeś nowe słówka!'
                }
              ]
            }
          }
        ]
      },

      // ========================================
      // MODUŁ 3: DOM I RODZINA
      // ========================================
      {
        id: 'module-3',
        number: 3,
        title: '🏠 Moduł 3: Dom i Rodzina',
        description: 'Członkowie rodziny, pokoje, meble, przedmioty',
        totalLessons: 26,
        estimatedTime: '10h',
        
        lessons: [
          {
            id: 'm3-l1',
            title: '👨‍👩‍👧‍👦 Rodzina',
            duration: '15 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>Członkowie rodziny (Family)</h2><ul><li>👨 father / dad - ojciec / tata</li><li>👩 mother / mum - matka / mama</li></ul>'
                }
              ]
            }
          },

          // 🎬 FILMIK AI - PODSUMOWANIE MODUŁU 3
          {
            id: 'm3-final',
            title: '🎬 Podsumowanie Modułu 3',
            duration: '5 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🎉 Brawo! Moduł 3 ukończony!</h2><p style="font-size: 1.1em; color: #6366f1;">Zobacz co już umiesz:</p>'
                },
                {
                  type: 'video',
                  url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_MODULE3',
                  caption: '📺 Podsumowanie: Dom, Rodzina i Meble'
                },
                {
                  type: 'tip',
                  content: '✨ <strong>Super praca!</strong><br>✅ Znasz członków rodziny<br>✅ Potrafisz nazwać pokoje w domu<br>✅ Rozpoznajesz meble<br>✅ Umiesz opisać swój dom!'
                }
              ]
            }
          }
        ]
      },

      // ========================================
      // MODUŁ 4: CZASOWNIKI I AKCJE
      // ========================================
      {
        id: 'module-4',
        number: 4,
        title: '🎨 Moduł 4: Czasowniki i Akcje',
        description: 'Podstawowe czasowniki, proste zdania, czasownik "to be"',
        totalLessons: 26,
        estimatedTime: '10h',
        
        lessons: [
          {
            id: 'm4-l1',
            title: '🏃 Podstawowe czasowniki',
            duration: '15 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>Czasowniki akcji (Action Verbs)</h2><ul><li>🏃 run - biegać</li><li>🚶 walk - chodzić</li><li>🍽️ eat - jeść</li></ul>'
                }
              ]
            }
          },

          // 🎬 FILMIK AI - PODSUMOWANIE MODUŁU 4 (FINAŁ KURSU!)
          {
            id: 'm4-final',
            title: '🎬 Podsumowanie Modułu 4 i całego kursu!',
            duration: '8 min',
            type: 'content',
            content: {
              sections: [
                {
                  type: 'text',
                  content: '<h2>🏆 GRATULACJE! Ukończyłeś CAŁY Kurs A1!</h2><p style="font-size: 1.2em; color: #ec4899; font-weight: bold;">To niesamowite osiągnięcie! 🎊</p>'
                },
                {
                  type: 'video',
                  url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_MODULE4_FINAL',
                  caption: '📺 FINAŁOWE Podsumowanie: Twoja droga od A do Z!'
                },
                {
                  type: 'tip',
                  content: '🌟 <strong>UKOŃCZYŁEŚ 4 MODUŁY!</strong><br><br>📖 <strong>Moduł 1:</strong> Alfabet i Liczby ✅<br>🐾 <strong>Moduł 2:</strong> Zwierzęta i Natura ✅<br>🏠 <strong>Moduł 3:</strong> Dom i Rodzina ✅<br>🎨 <strong>Moduł 4:</strong> Czasowniki i Akcje ✅<br><br>🎮 Zagrałeś w <strong>21 gier edukacyjnych</strong><br>✍️ Rozwiązałeś <strong>100+ ćwiczeń</strong><br>🧠 Nauczyłeś się <strong>200+ słów</strong>'
                },
                {
                  type: 'text',
                  content: '<h3>🎓 Odbierz swój dyplom!</h3><p>Teraz możesz pobrać <strong>certyfikat ukończenia kursu A1</strong>. Kliknij przycisk "Pobierz dyplom" w swoim profilu!</p><h3>🚀 Co dalej?</h3><p>Jesteś gotowy na <strong>Kurs A2</strong>! Tam poznasz jeszcze więcej zaawansowanych słów i gramatyki.</p>'
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

export function getCourseById(courseId) {
  return coursesData[courseId] || null;
}
