import { generateWinCombos } from '@/utils/board';
import { GameResult, Player, PlayerSymbol } from '../types/game';

export function getNextPlayer(current: Player): Player {
  return current === PlayerSymbol.X ? PlayerSymbol.O : PlayerSymbol.X;
}

export function isValidMove(board: (Player | null)[], index: number) {
  return board[index] === null;
}

export function applyMove(
  board: (Player | null)[],
  index: number,
  player: Player,
): (Player | null)[] {
  const newBoard = [...board];
  newBoard[index] = player;
  return newBoard;
}

export function checkWinner(
  board: (Player | null)[],
  size: number,
  winLength: number = size,
): Player | GameResult.Tie | null {
  const winCombos = generateWinCombos(size, winLength);

  for (const combo of winCombos) {
    const [first, ...rest] = combo;
    if (board[first] && rest.every((i) => board[i] === board[first])) {
      return board[first];
    }
  }

  return board.includes(null) ? null : GameResult.Tie;
}
