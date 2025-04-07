import { GameResult, Player, PlayerSymbol } from '@/types/game';
import { generateWinCombos } from './winCombos';

export function checkWinner(board: (Player | null)[], size: number) {
  if (size === 3) {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of wins) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) return board[a];
    }

    return board.includes(null) ? null : 'tie';
  }

  // fallback for other board sizes
  const winCombos = generateWinCombos(size);
  for (const combo of winCombos) {
    const [first, ...rest] = combo;
    if (board[first] && rest.every((i) => board[i] === board[first])) {
      return board[first];
    }
  }

  return board.includes(null) ? null : 'tie';
}

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
) {
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
) {
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
