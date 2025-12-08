# 📚 English Learning Platform

Profesjonalna platforma do nauki języka angielskiego z systemem e-commerce dla korepetytora.

## 🚀 Funkcje

### Dla Uczniów:
- ✅ Rejestracja i logowanie
- 📚 Panel ucznia z postępami
- 🎯 Interaktywne lekcje
- 📝 Osobisty słowniczek
- 🛒 Sklep z kursami

### Dla Korepetytora:
- 👥 Zarządzanie uczniami
- 📁 Upload materiałów edukacyjnych
- 📊 Statystyki i analytics
- 📅 Harmonogram lekcji
- 💰 Przegląd przychodów

### E-commerce:
- 🛍️ Sklep z kursami (A1-C2)
- 💳 Koszyk i checkout
- 📦 Pakiety lekcji (5h, 10h, 20h)
- 💰 Płatności online (gotowe do integracji Stripe)

## 🛠️ Technologie

- **Frontend**: React 18 + Vite
- **Router**: React Router v6
- **Backend**: Firebase
  - Authentication
  - Firestore Database
  - Storage (dla materiałów)
- **Styling**: Custom CSS
- **Hosting**: Gotowe na Netlify/Vercel

## 📦 Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Build produkcyjny
npm run build
```

## 🔧 Konfiguracja Firebase

1. Przejdź do [Firebase Console](https://console.firebase.google.com/)
2. Utwórz nowy projekt
3. Włącz Authentication (Email/Password)
4. Utwórz Firestore Database
5. Skopiuj konfigurację do `src/config/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "TWÓJ_API_KEY",
  authDomain: "TWÓJ_AUTH_DOMAIN",
  projectId: "TWÓJ_PROJECT_ID",
  storageBucket: "TWÓJ_STORAGE_BUCKET",
  messagingSenderId: "TWÓJ_MESSAGING_SENDER_ID",
  appId: "TWÓJ_APP_ID"
}
```

## 📁 Struktura Projektu

```
src/
├── components/
│   └── Navbar.jsx          # Nawigacja
├── pages/
│   ├── Home.jsx            # Strona główna
│   ├── Login.jsx           # Logowanie/Rejestracja
│   ├── StudentDashboard.jsx # Panel ucznia
│   ├── TutorDashboard.jsx  # Panel korepetytora
│   ├── Shop.jsx            # Sklep z kursami
│   └── Lessons.jsx         # Lekcje
├── config/
│   └── firebase.js         # Konfiguracja Firebase
├── styles/
│   └── index.css           # Style globalne
├── App.jsx                 # Główny komponent
└── main.jsx               # Entry point
```

## 🎨 Dostosowanie

### Dodawanie nowych kursów
Edytuj plik `src/pages/Shop.jsx` - tablica `courses`

### Zmiana kolorów
Edytuj zmienne CSS w `src/styles/index.css`:
```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
}
```

## 🚀 Deployment

### Netlify
```bash
npm run build
# Przeciągnij folder 'dist' na netlify.com/drop
```

### Vercel
```bash
npm run build
vercel --prod
```

## 📝 TODO / Rozszerzenia

- [ ] Integracja Stripe dla płatności
- [ ] System wiadomości (chat)
- [ ] Upload plików PDF (materiały)
- [ ] Video player dla lekcji
- [ ] System quizów/testów
- [ ] Dyplomy po ukończeniu
- [ ] Email notifications
- [ ] Progressive Web App (PWA)

## 🤝 Wsparcie

Projekt gotowy do użycia! 

**Autor**: Platforma dla Ani - Korepetycje z języka angielskiego
**Data**: Grudzień 2025

---

✨ **Gotowe do startu!** Uruchom `npm run dev` i otwórz http://localhost:3000
