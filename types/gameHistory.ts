import type { Mode, Result } from './game';

export type GameHistoryEntry = {
  mode: Mode;
  result: Result;
  playerX: string;
  playerO: string;
  date: string;
};
