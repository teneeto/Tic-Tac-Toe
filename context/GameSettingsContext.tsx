import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DifficultyLevel, GameMode } from '@/types/game';
import type { Difficulty, GameResult, Mode } from '@/types/game';

interface GameSettingsContextType {
  difficulty: Difficulty;
  mode: Mode;
  playerX: string;
  playerO: string;
  userFirst: boolean;
  result: GameResult | null;
  setUserFirst: (first: boolean) => void;
  setDifficulty: (d: Difficulty) => void;
  setMode: (m: Mode) => void;
  setPlayerX: (name: string) => void;
  setPlayerO: (name: string) => void;
  setResult: (r: GameResult | null) => void;
}

const GameSettingsContext = createContext<GameSettingsContextType | undefined>(undefined);

export const GameSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(DifficultyLevel.Hard);
  const [mode, setMode] = useState<Mode>(GameMode.Single);
  const [playerX, setPlayerX] = useState<string>('Player X');
  const [playerO, setPlayerO] = useState<string>('Player O');
  const [userFirst, setUserFirst] = useState(true);
  const [result, setResult] = useState<GameResult | null>(null);

  return (
    <GameSettingsContext.Provider
      value={{
        difficulty,
        mode,
        playerX,
        playerO,
        userFirst,
        result,
        setResult,
        setUserFirst,
        setDifficulty,
        setMode,
        setPlayerX,
        setPlayerO,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

export const useGameSettings = (): GameSettingsContextType => {
  const context = useContext(GameSettingsContext);
  if (!context) {
    throw new Error('useGameSettings must be used within a GameSettingsProvider');
  }
  return context;
};
