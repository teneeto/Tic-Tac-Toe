import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Mode = 'single' | 'multi';

interface GameSettingsContextType {
  difficulty: Difficulty;
  mode: Mode;
  playerX: string;
  playerO: string;
  setDifficulty: (d: Difficulty) => void;
  setMode: (m: Mode) => void;
  setPlayerX: (name: string) => void;
  setPlayerO: (name: string) => void;
}

// ✅ Create the context with `undefined` and cast it safely
const GameSettingsContext = createContext<GameSettingsContextType | undefined>(undefined);

export const GameSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('hard');
  const [mode, setMode] = useState<Mode>('single');
  const [playerX, setPlayerX] = useState<string>('Player X');
  const [playerO, setPlayerO] = useState<string>('Player O');

  return (
    <GameSettingsContext.Provider
      value={{ difficulty, mode, playerX, playerO, setDifficulty, setMode, setPlayerX, setPlayerO }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

// ✅ Custom hook with proper error handling
export const useGameSettings = (): GameSettingsContextType => {
  const context = useContext(GameSettingsContext);
  if (!context) {
    throw new Error('useGameSettings must be used within a GameSettingsProvider');
  }
  return context;
};
