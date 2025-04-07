import { getBestMove, Player } from './minmax';
import { getRandomMove } from './random';

export type Difficulty = 'easy' | 'medium' | 'hard';

export function getAiMove(board: (Player | null)[], difficulty: Difficulty = 'hard'): number {
  switch (difficulty) {
    case 'easy':
      return getRandomMove(board);
    case 'medium':
      return getBestMove(board, 2);
    case 'hard':
    default:
      return getBestMove(board);
  }
}
