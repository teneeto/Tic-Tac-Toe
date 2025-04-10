import { checkWinner } from '@/lib/gameEngine';
import { GameResult, PlayerSymbol, type Player } from '@/types/game';
import { getAvailableMoves } from './board';

const scores = {
  [PlayerSymbol.X]: -1,
  [PlayerSymbol.O]: 1,
  [GameResult.Tie]: 0,
};

export function getBestMove(
  board: (Player | null)[],
  size: number,
  player: Player,
  maxDepth?: number,
  winLength?: number,
) {
  let bestScore = -Infinity;
  let move = -1;

  for (const i of getAvailableMoves(board)) {
    board[i] = player;
    const score = minimax(board, size, 0, false, maxDepth, winLength);
    board[i] = null;

    if (score > bestScore) {
      bestScore = score;
      move = i;
    }
  }

  return move;
}

function minimax(
  board: (Player | null)[],
  size: number,
  depth: number,
  isMax: boolean,
  maxDepth?: number,
  winLength?: number,
) {
  const result = checkWinner(board, size);
  if (result !== null) return scores[result];

  if (maxDepth !== undefined && depth >= maxDepth) return 0;

  const player = isMax ? PlayerSymbol.O : PlayerSymbol.X;
  let best = isMax ? -Infinity : Infinity;

  for (const i of getAvailableMoves(board)) {
    board[i] = player;
    const score = minimax(board, size, depth + 1, !isMax, maxDepth, winLength);
    board[i] = null;

    best = isMax ? Math.max(best, score) : Math.min(best, score);
  }

  return best;
}
