export type Player = "X" | "O";

export function checkWinner(board: (Player | null)[]): Player | "tie" | null {
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
    if (board[a] && board[a] === board[b] && board[b] === board[c])
      return board[a];
  }

  return board.includes(null) ? null : "tie";
}

const scores: Record<"X" | "O" | "tie", number> = { X: -1, O: 1, tie: 0 };

function minimax(
  board: (Player | null)[],
  depth: number,
  isMax: boolean
): number {
  const result = checkWinner(board);
  if (result !== null) return scores[result];

  if (isMax) {
    let maxEval = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "O";
        const evalScore = minimax(board, depth + 1, false);
        board[i] = null;
        maxEval = Math.max(maxEval, evalScore);
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "X";
        const evalScore = minimax(board, depth + 1, true);
        board[i] = null;
        minEval = Math.min(minEval, evalScore);
      }
    }
    return minEval;
  }
}

export function getBestMove(board: (Player | null)[]): number {
  let bestScore = -Infinity;
  let move = -1;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = "O";
      const score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}
