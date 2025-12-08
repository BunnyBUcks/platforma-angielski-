# Instrukcja: Jak dodać plik PDF

## Krok 1: Skopiuj plik PDF do projektu

Otwórz **NOWY** terminal (nie ten, w którym działa serwer) i wykonaj:

```bash
cp "/Users/janwagrowski/Desktop/Project 1/Repetytorium dla klasy 8.pdf" "/Users/janwagrowski/Desktop/Project 1/Platfroma 2 Ania/public/materials/repetytorium-klasa-8.pdf"
```

Lub możesz to zrobić ręcznie:
1. Znajdź plik "Repetytorium dla klasy 8.pdf" na Pulpicie w folderze "Project 1"
2. Skopiuj go do folderu: `Platfroma 2 Ania/public/materials/`
3. Zmień nazwę na: `repetytorium-klasa-8.pdf` (bez spacji, małe litery)

## Krok 2: Sprawdź czy plik został skopiowany

W terminalu wykonaj:
```bash
ls -la "/Users/janwagrowski/Desktop/Project 1/Platfroma 2 Ania/public/materials/"
```

Powinieneś zobaczyć plik `repetytorium-klasa-8.pdf`

## Gotowe! 🎉

Teraz:
1. Przejdź do sklepu (http://localhost:3000/shop)
2. Zobaczysz nowy kurs "Repetytorium dla klasy 8 🎓" z oznaczeniem ⭐ NOWOŚĆ
3. Dodaj go do koszyka i kup (wersja DEMO)
4. Przejdź do dashboardu (/dashboard)
5. Kliknij "Otwórz kurs →"
6. Zobaczysz materiały PDF do pobrania i podglądu!

## Jak to działa:

- **Sklep**: Kurs kosztuje 149 PLN (możesz zmienić cenę w `src/pages/Shop.jsx`)
- **Zakup DEMO**: Kliknięcie "Kup teraz" dodaje kurs do Firestore (pole `courses` w dokumencie użytkownika)
- **Dashboard**: Pokazuje wszystkie zakupione kursy z przyciskami "Otwórz kurs"
- **CourseViewer**: Sprawdza czy użytkownik ma dostęp, jeśli tak - pokazuje materiały
- **PDF**: Można otworzyć w nowej karcie lub pobrać

## Dalsze możliwości:

Możesz dodać więcej materiałów edytując plik `src/pages/CourseViewer.jsx`:
- Dodaj więcej sekcji (np. "Testy końcowe", "Materiały dodatkowe")
- Dodaj filmy (YouTube embed)
- Dodaj pliki audio
- Dodaj quizy interaktywne
