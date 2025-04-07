import { Player } from '../types/game';

export function getNextPlayer(current: Player): Player {
  return current === 'X' ? 'O' : 'X';
}

export function isValidMove(board: (Player | null)[], index: number): boolean {
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
