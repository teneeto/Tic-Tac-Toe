import { GameResult, Player, PlayerSymbol } from '@/types/game';
import { generateWinCombos } from './winCombos';

export function checkWinner(board: (Player | null)[], size: number) {
  const wins = generateWinCombos(size);
  for (const combo of wins) {
    const [first, ...rest] = combo;
    if (board[first] && rest.every((i) => board[i] === board[first])) {
      return board[first];
    }
  }
  return board.includes(null) ? null : GameResult.Tie;
}

const scores = {
  [PlayerSymbol.X]: -1,
  [PlayerSymbol.O]: 1,
  tie: 0,
};

export function getBestMove(
  board: (Player | null)[],
  size: number,
  player: Player,
  maxDepth?: number,
): number {
  let bestScore = -Infinity;
  let move = -1;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = player;
      const score = minimax(board, size, 0, false, maxDepth);
      board[i] = null;

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
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
): number {
  const result = checkWinner(board, size);
  if (result !== null) return scores[result];

  if (maxDepth !== undefined && depth >= maxDepth) return 0;

  const player = isMax ? PlayerSymbol.O : PlayerSymbol.X;
  let best = isMax ? -Infinity : Infinity;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = player;
      const score = minimax(board, size, depth + 1, !isMax, maxDepth);
      board[i] = null;

      best = isMax ? Math.max(best, score) : Math.min(best, score);
    }
  }

  return best;
}
