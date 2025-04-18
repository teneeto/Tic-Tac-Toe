import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DifficultyLevel, GameMode } from '@/types/game';
import { Difficulty, GameResult, Mode } from '@/types/game';
import { DEFAULT_GRID_SIZE, DEFAULT_WIN_LENGTH } from '@/constants';
import { GameHistoryEntry } from '@/types/gameHistory';

interface GameSettingsContextType {
  difficulty: Difficulty;
  mode: Mode;
  playerX: string;
  playerO: string;
  userFirst: boolean;
  result: GameResult | null;
  gridSize: number;
  winLength: number;
  gameHistory: GameHistoryEntry[];
  setUserFirst: (first: boolean) => void;
  setDifficulty: (d: Difficulty) => void;
  setMode: (m: Mode) => void;
  setPlayerX: (name: string) => void;
  setPlayerO: (name: string) => void;
  setResult: (r: GameResult | null) => void;
  setGridSize: (size: number) => void;
  setWinLength: (size: number) => void;
  addGameToHistory: (entry: GameHistoryEntry) => void;
}

const GameSettingsContext = createContext<GameSettingsContextType | undefined>(undefined);

export const GameSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(DifficultyLevel.Hard);
  const [mode, setMode] = useState<Mode>(GameMode.Single);
  const [playerX, setPlayerX] = useState<string>('Player X');
  const [playerO, setPlayerO] = useState<string>('Player O');
  const [userFirst, setUserFirst] = useState(true);
  const [result, setResult] = useState<GameResult | null>(null);
  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);
  const [winLength, setWinLength] = useState<number>(DEFAULT_WIN_LENGTH);
  const [gameHistory, setGameHistory] = useState<GameHistoryEntry[]>([]);

  const addGameToHistory = (entry: GameHistoryEntry) => {
    setGameHistory((prev) => [entry, ...prev]);
  };

  return (
    <GameSettingsContext.Provider
      value={{
        difficulty,
        mode,
        playerX,
        playerO,
        userFirst,
        result,
        gridSize,
        winLength,
        gameHistory,
        setResult,
        setUserFirst,
        setDifficulty,
        setMode,
        setPlayerX,
        setPlayerO,
        setGridSize,
        setWinLength,
        addGameToHistory,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

const useGameSettings = (): GameSettingsContextType => {
  const context = useContext(GameSettingsContext);
  if (!context) {
    throw new Error('useGameSettings must be used within a GameSettingsProvider');
  }
  return context;
};
export { useGameSettings, GameSettingsContext };
