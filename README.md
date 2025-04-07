# 🎮 Tic Tac Toe – React Native (Expo)

A clean and scalable single-player & multiplayer Tic Tac Toe game built with React Native + Expo. Developed as part of a hiring challenge for This Dot Labs.

---

## ✅ Features

- 🧠 **Unbeatable AI** using the Minimax algorithm (Hard mode)
- 🧩 **Difficulty Levels**: Easy (random), Medium (depth-limited), Hard (Minimax)
- 👯 **Multiplayer Mode**: Two-player mode with custom names
- 🧠 **Turn Indicator**: Shows who's playing – You vs Computer, or Player X vs O
- 🎉 **Game Result Screen**: Custom win/loss/tie messages with emojis
- 🎨 **Clean UI**: Styled components with reusable themes and spacing
- 📱 **Responsive Design**: Works on various screen sizes
- ✅ **Tested**: Core logic and components tested with Jest

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

## 🚀 Getting Started

### 📥 Clone

```bash
git clone https://github.com/your-username/tic-tac-toe-react-native.git
cd tic-tac-toe-react-native
```

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run the App

```bash
npx expo start
```

---

## 🧪 Testing

Run unit tests:

```bash
npm test
```

Includes tests for:

- Game logic (minimax, win checks)
- AI move generation
- UI components (Button, GameCell, GridBoard)
- Result logic

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

---

## 📚 Folder Structure

```
/app
  └── index.tsx         ← Start screen
  └── game.tsx          ← Game screen
  └── result.tsx        ← Result screen
/components
  └── Button.tsx, GridBoard.tsx, etc.
/context
  └── GameSettingsContext.tsx
/lib
  └── gameEngine.ts     ← Core logic
/utils
  └── minimax.ts, ai.ts, random.ts
/theme
  └── colors.ts, spacing.ts, fontSizes.ts
/types
  └── game.ts           ← Enums + shared types
```

---

## 📌 Notes for Reviewers

- The app is locked to **portrait orientation** to maintain layout consistency.
- While difficulty levels and multiplayer mode are **not required**, they were added to demonstrate architectural thinking and user experience polish.
- All gameplay paths (win/loss/tie) have been verified, and the hard mode is truly unbeatable.

---

## 🧑‍💻 Author

Etotaziba Olei Tene Kamalu  
React Native Engineer · Technical Product Thinker

---

## 🥂 Thank You!

Thanks for reviewing this project. I’m excited to discuss the decisions made here in the next interview!
