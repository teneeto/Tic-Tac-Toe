import { getBestMove } from '../../minmax';
import { PlayerSymbol, type Player } from '@/types/game';

describe('getBestMove', () => {
  const size = 3;

  it('chooses the winning move if available', () => {
    const board: (Player | null)[] = [
      PlayerSymbol.O,
      PlayerSymbol.O,
      null,
      PlayerSymbol.X,
      PlayerSymbol.X,
      null,
      null,
      null,
      null,
    ];
    const move = getBestMove(board, size);
    expect(move).toBe(2); // AI should win on index 2
  });

  it('blocks opponent winning move', () => {
    const board: (Player | null)[] = [
      PlayerSymbol.X,
      PlayerSymbol.X,
      null,
      PlayerSymbol.O,
      null,
      null,
      null,
      null,
      null,
    ];
    const move = getBestMove(board, size);
    expect(move).toBe(2); // AI should block at index 2
  });

  it('makes a move on empty board', () => {
    const board: (Player | null)[] = Array(9).fill(null);
    const move = getBestMove(board, size);
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThan(9);
  });

  it('returns -1 for full board (no moves)', () => {
    const board: (Player | null)[] = [
      PlayerSymbol.X,
      PlayerSymbol.O,
      PlayerSymbol.X,
      PlayerSymbol.X,
      PlayerSymbol.O,
      PlayerSymbol.O,
      PlayerSymbol.O,
      PlayerSymbol.X,
      PlayerSymbol.X,
    ];
    const move = getBestMove(board, size);
    expect(move).toBe(-1);
  });
});
