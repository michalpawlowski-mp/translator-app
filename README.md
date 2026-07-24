# Translator App

Prosta aplikacja do tłumaczenia tekstu między językami, zbudowana w React + TypeScript + Vite.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

🔗 **[Live Demo](https://translator-app-mpdev.vercel.app/)**

## Funkcje

- Automatyczne tłumaczenie po chwili od zaprzestania pisania (debounce)
- Tłumaczenie tekstu między 7 językami (polski, angielski, francuski, niemiecki, hiszpański, portugalski, włoski)
- Zamiana języków jednym kliknięciem
- Odczytywanie tekstu i tłumaczenia na głos (Web Speech API)
- Kopiowanie tłumaczenia do schowka
- Czyszczenie pola tekstowego
- Tryb jasny i ciemny z zapamiętaniem wyboru
- Responsywny design — działa na mobile i desktop
- Obsługa błędów API

## Technologie

- React 18
- TypeScript
- Vite
- [MyMemory API](https://mymemory.translated.net/)
- Web Speech API

## Uruchomienie lokalne

```bash
git clone https://github.com/michalpawlowski-mp/translator-app
cd translator-app
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`.

## Autor

**Michał Pawłowski** — [michalpawlowski.pl](https://michalpawlowski.pl)
