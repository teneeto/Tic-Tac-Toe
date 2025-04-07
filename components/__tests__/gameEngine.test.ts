import { Player, PlayerSymbol } from '@/types/game';
import { applyMove, getNextPlayer, isValidMove } from '../../lib/gameEngine';

describe('gameEngine logic', () => {
  it('applies a move correctly', () => {
    const board = Array(9).fill(null);
    const newBoard = applyMove(board, 0, PlayerSymbol.X);
    expect(newBoard[0]).toBe('X');
    expect(board[0]).toBeNull();
  });

  it('returns the next player', () => {
    expect(getNextPlayer(PlayerSymbol.X)).toBe(PlayerSymbol.O);
    expect(getNextPlayer(PlayerSymbol.O)).toBe(PlayerSymbol.X);
  });

  it('validates move correctly', () => {
    const board: (Player | null)[] = [
      PlayerSymbol.X,
      null,
      PlayerSymbol.O,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    expect(isValidMove(board, 0)).toBe(false);

    expect(isValidMove([...board], 1)).toBe(true);
  });
});
