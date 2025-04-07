import { GameResult, Player, PlayerSymbol } from '@/types/game';

export function checkWinner(board: (Player | null)[]) {
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
  return board.includes(null) ? null : GameResult.Tie;
}

const scores = { X: -1, O: 1, tie: 0 };

export function getBestMove(board: (Player | null)[], maxDepth?: number) {
  let bestScore = -Infinity;
  let move = -1;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = PlayerSymbol.O;
      const score = minimax(board, 0, false, maxDepth);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

function minimax(board: (Player | null)[], depth: number, isMax: boolean, maxDepth?: number) {
  const result = checkWinner(board);
  if (result !== null) return scores[result];

  if (maxDepth !== undefined && depth >= maxDepth) return 0;

  if (isMax) {
    let best = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = PlayerSymbol.O;
        const score = minimax(board, depth + 1, false, maxDepth);
        board[i] = null;
        best = Math.max(best, score);
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = PlayerSymbol.X;
        const score = minimax(board, depth + 1, true, maxDepth);
        board[i] = null;
        best = Math.min(best, score);
      }
    }
    return best;
  }
}
