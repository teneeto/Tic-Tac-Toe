import { DifficultyLevel, Player, type Difficulty } from '@/types/game';

import { getRandomMove } from './random';
import { getBestMove } from './minmax';

export function getAiMove(
  board: (Player | null)[],
  difficulty: Difficulty = DifficultyLevel.Hard,
): number {
  switch (difficulty) {
    case DifficultyLevel.Easy:
      return getRandomMove(board);
    case DifficultyLevel.Medium:
      return getBestMove(board, 2);
    case DifficultyLevel.Hard:
    default:
      return getBestMove(board);
  }
}
