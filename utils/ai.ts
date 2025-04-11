import { Difficulty, DifficultyLevel, Player, PlayerSymbol } from '@/types/game';
import { getRandomMove } from './random';
import { getBestMove } from './minmax';

export function getAiMove(
  board: (Player | null)[],
  size: number,
  difficulty: Difficulty = DifficultyLevel.Hard,
): number {
  switch (difficulty) {
    case DifficultyLevel.Easy:
      return getRandomMove(board);
    case DifficultyLevel.Medium:
      return getBestMove(board, size, PlayerSymbol.O, 1.5);
    case DifficultyLevel.Hard:
    default:
      return getBestMove(board, size, PlayerSymbol.O, 4);
  }
}
