import { Difficulty, DifficultyLevel, Player } from '@/types/game';
import { getRandomMove } from './random';
import { getBestMove } from './minmax';

const depthMap: Record<Difficulty, number | undefined> = {
  [DifficultyLevel.Easy]: undefined, // uses random
  [DifficultyLevel.Medium]: 2,
  [DifficultyLevel.Hard]: 6,
};

export function getAiMove(
  board: (Player | null)[],
  size: number,
  difficulty: Difficulty = DifficultyLevel.Hard,
) {
  if (difficulty === DifficultyLevel.Easy) {
    return getRandomMove(board);
  }

  const depth = depthMap[difficulty];
  return getBestMove(board, size, depth);
}
