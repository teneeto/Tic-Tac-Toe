import { checkWinner, Player } from '../minmax';

describe('checkWinner', () => {
  it('detects a win', () => {
    const board: (Player | null)[] = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(checkWinner(board)).toBe('X');
  });

  it('detects a tie', () => {
    const board: (Player | null)[] = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(checkWinner(board)).toBe('tie');
  });

  it('returns null if game ongoing', () => {
    const board = Array(9).fill(null);
    expect(checkWinner(board)).toBeNull();
  });
});
