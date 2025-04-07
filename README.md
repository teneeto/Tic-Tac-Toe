# 🎮 Tic Tac Toe — React Native + Expo

A clean, scalable, and fully tested implementation of the classic Tic Tac Toe game built with **React Native**, **Expo**, and **TypeScript**. Designed as a code challenge to demonstrate architecture, testing practices, and UI/UX execution.

---

## 🚀 Features

- 🔁 **3x3 Grid** (Hardcoded currently; scalable grid support baked into architecture)
- 🧠 **Unbeatable AI** with full-depth **Minimax Algorithm** (with memoization)
- 🧪 **Unit Tested** logic and components
- 🔧 **Difficulty Levels**: Easy (random), Medium (limited depth), Hard (full-depth)
- 👤 **Multiplayer Mode**
- 🎮 Choose **who plays first**: You or AI
- 💅 Clean and responsive **UI/UX**
- 🌍 Centralized global **context state**
- 🎨 Themed design tokens (spacing, colors, fonts)
- 📦 Extensible and modular structure
- ✅ Type-safe enums & shared types
- 🔍 AI performance optimized with **memoized scores**

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

## 🗂️ Folder Structure

```
.
├── app/                    # Expo Router screens
│   ├── index.tsx           # Start screen (Single/Multiplayer)
│   ├── game.tsx            # Main gameplay logic
│   └── result.tsx          # Game result screen
├── components/             # Reusable UI components (Button, GridBoard, etc)
├── context/                # Global context (GameSettingsContext)
├── lib/                    # Game logic (engine, move validation)
├── theme/                  # Design tokens (colors, spacing, font sizes)
├── types/                  # TypeScript enums and interfaces
├── utils/                  # AI, Minimax, Random AI, winCombos
└── tests/                  # Unit test cases
```

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

### 🔁 Minimax AI

- Implemented recursively in `utils/minimax.ts`
- Optimized with depth limiting and memoization
- `getAiMove()` chooses strategy based on difficulty level

### 🧩 Componentization

- `GridBoard`, `GameCell`, `Button`, `TurnIndicator` are fully reusable
- Theme constants (`COLORS`, `SPACING`, `FONT_SIZES`) used throughout

### 🧠 Game Logic

Centralized in `lib/gameEngine.ts` and tested thoroughly.

## 💡 AI Strategy

| Difficulty | Description                          | AI Strategy          |
| ---------- | ------------------------------------ | -------------------- |
| Easy       | Makes random moves                   | `getRandomMove()`    |
| Medium     | Plays smarter with limited lookahead | `minimax(depth = 2)` |
| Hard       | Unbeatable Minimax + memoization     | Full-depth search    |

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
- Confidence with algorithms and optimizations (Minimax, memoization)
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
