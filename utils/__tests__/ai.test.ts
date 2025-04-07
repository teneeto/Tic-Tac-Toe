import { getAiMove } from '../ai';
import { DifficultyLevel, PlayerSymbol, type Player } from '@/types/game';

describe('getAiMove', () => {
  const emptyBoard: (Player | null)[] = Array(9).fill(null);
  const size = 3;

  it('returns a valid index for easy difficulty', () => {
    const move = getAiMove(emptyBoard, size, DifficultyLevel.Easy);
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThan(9);
  });

  it('returns a valid index for medium difficulty', () => {
    const move = getAiMove(emptyBoard, size, DifficultyLevel.Medium);
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThan(9);
  });

  it('returns a valid index for hard difficulty', () => {
    const move = getAiMove(emptyBoard, size, DifficultyLevel.Hard);
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThan(9);
  });

  it('does not overwrite existing moves', () => {
    const board: (Player | null)[] = [
      PlayerSymbol.X,
      null,
      null,
      null,
      PlayerSymbol.O,
      null,
      null,
      null,
      null,
    ];
    const move = getAiMove(board, size, DifficultyLevel.Hard);
    expect(board[move]).toBeNull();
  });
});
