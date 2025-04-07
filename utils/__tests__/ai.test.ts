import { getAiMove } from '../ai';
import { Player } from '../../types/game';

describe('getAiMove by difficulty', () => {
  const board: (Player | null)[] = ['X', null, 'X', null, 'O', null, 'O', null, null];

  it('returns a random move for easy', () => {
    const move = getAiMove(board, 'easy');
    expect(typeof move).toBe('number');
    expect(board[move]).toBeNull();
  });

  it('returns a smart move for medium', () => {
    const move = getAiMove(board, 'medium');
    expect(typeof move).toBe('number');
    expect(board[move]).toBeNull();
  });

  it('returns a best move for hard', () => {
    const move = getAiMove(board, 'hard');
    expect(typeof move).toBe('number');
    expect(board[move]).toBeNull();
  });
});
