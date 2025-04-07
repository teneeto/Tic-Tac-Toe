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

export function getBestMove(board: (Player | null)[], size: number, maxDepth?: number) {
  const cache = new Map<string, number>();

  let bestScore = -Infinity;
  let move = -1;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = PlayerSymbol.O;
      const score = minimax(board, size, 0, false, maxDepth, cache);
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
  cache?: Map<string, number>,
) {
  const key = board.join('');

  if (cache?.has(key)) {
    return cache.get(key)!;
  }

  const result = checkWinner(board, size);
  if (result !== null) return scores[result];

  if (maxDepth !== undefined && depth >= maxDepth) return 0;

  let best = isMax ? -Infinity : Infinity;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = isMax ? PlayerSymbol.O : PlayerSymbol.X;
      const score = minimax(board, size, depth + 1, !isMax, maxDepth, cache);
      board[i] = null;

      best = isMax ? Math.max(best, score) : Math.min(best, score);
    }
  }

  cache?.set(key, best);
  return best;
}
