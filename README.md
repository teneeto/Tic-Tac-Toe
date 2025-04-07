# 🎮 Tic Tac Toe — React Native + Expo

[![CodeFactor](https://www.codefactor.io/repository/github/teneeto/tic-tac-toe/badge)](https://www.codefactor.io/repository/github/teneeto/tic-tac-toe)
![Expo](https://img.shields.io/badge/Expo-%5E49.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.0-blue)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![ESLint](https://img.shields.io/badge/eslint-passing-brightgreen.svg)
![Last Commit](https://img.shields.io/github/last-commit/teneeto/tic-tac-toe)
![Tests](https://github.com/teneeto/tic-tac-toe/actions/workflows/test.yml/badge.svg)

---

## 🚀 Features

- ♻️ **3x3 Grid** (Hardcoded currently; scalable grid support baked into architecture)
- 🧠 **Unbeatable AI** with full-depth **Minimax Algorithm**
- 🧪 **Unit Tested** logic and components
- 🔧 **Difficulty Levels**: Easy (random), Medium (limited depth), Hard (full-depth)
- 👤 **Multiplayer Mode**
- 🎮 Choose **who plays first**: You or AI
- 💅 Clean and responsive **UI/UX**
- 🌍 Centralized global **context state**
- 🎨 Themed design tokens (spacing, colors, fonts)
- 📆 Extensible and modular structure
- ✅ Type-safe enums & shared types

---

## 📦 Stack

- React Native + Expo
- TypeScript
- Expo Router
- Context API (for global game settings)
- Minimax Algorithm (for unbeatable AI)
- Jest + Testing Library (unit tests)
- ESLint + Prettier + Theming system

---

## ⚙️ How to Run

### 1. Clone Repository

```bash
git clone https://github.com/teneeto/Tic-Tac-Toe.git
cd Tic-Tac-Toe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npx expo start
```

> Expo Go or emulator required.

---

## 🧪 Running Tests

```bash
npm run test
```

> Test coverage includes:
>
> - Game engine logic (move application, winner detection)
> - Minimax algorithm
> - GridBoard, GameCell, TurnIndicator
> - AI utility switching based on difficulty

---

## 🧠 Technical Overview

### ♻️ Minimax AI

- Implemented recursively in `utils/minimax.ts`
- Optimized with configurable depth limiting
- `getAiMove()` dynamically adjusts AI strategy based on difficulty level

### 🧹 Componentization

- `GridBoard`, `GameCell`, `Button`, `TurnIndicator` are fully reusable
- Theme constants (`COLORS`, `SPACING`, `FONT_SIZES`) used throughout

### 🧠 Game Logic

Centralized in `lib/gameEngine.ts` and tested thoroughly.

## 💡 AI Strategy

| Difficulty | Description                          | AI Strategy          |
| ---------- | ------------------------------------ | -------------------- |
| Easy       | Makes random moves                   | `getRandomMove()`    |
| Medium     | Plays smarter with limited lookahead | `minimax(depth = 2)` |
| Hard       | Unbeatable full Minimax              | Full-depth search    |

---

## ⚠️ Limitations

- ✅ Game is **currently hardcoded to 3x3 grid**
- 🔧 The architecture supports variable `gridSize`, and win conditions adapt accordingly using dynamic combo generation
- ✨ Future enhancements could include grid size selection, scoring history, animations, and undo moves

---

## 🤝 Context Usage

We used a centralized `GameSettingsContext` to manage:

- Mode (Single/Multiplayer)
- Difficulty
- Player names
- Turn preferences
- Game result
- Grid size (currently hardcoded to 3)

This allows seamless communication across all screens without prop drilling.

---

## 🧠 Design Considerations

- **Scalability**: Code is organized to easily plug in features like 4x4/5x5 support.
- **Code Quality**: Separated logic, styling, types, and components.
- **Testing**: Critical logic is tested and mock-safe.
- **Theming**: Fully centralized theme system.
- **Extensibility**: Utility-based AI switching and dynamic win condition generator.

---

## 📧 Submission Note

This challenge demonstrates:

- Clear understanding of separation of concerns
- Readable and maintainable code
- Familiarity with React Native and Expo
- Confidence with algorithms and optimizations (Minimax)
- Proactive structure for scalability

---

## 📌 Notes for Reviewers

- The app is locked to **portrait orientation** to maintain layout consistency.
- While difficulty levels and multiplayer mode are **not required**, they were added to demonstrate architectural thinking and user experience polish.
- All gameplay paths (win/loss/tie) have been verified, and the hard mode is truly unbeatable.

## 📬 Author

---

**Etotaziba Olei**  
[GitHub Repo](https://github.com/teneeto/Tic-Tac-Toe)

---

Thanks for the opportunity! 🙏 I hope this project reflects the care and thoughtfulness it was built with.
