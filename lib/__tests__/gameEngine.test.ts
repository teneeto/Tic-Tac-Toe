import { getNextPlayer, isValidMove, applyMove } from '../gameEngine';
import { PlayerSymbol } from '@/types/game';

describe('gameEngine', () => {
  describe('getNextPlayer', () => {
    it('returns O when current player is X', () => {
      expect(getNextPlayer(PlayerSymbol.X)).toBe(PlayerSymbol.O);
    });

    it('returns X when current player is O', () => {
      expect(getNextPlayer(PlayerSymbol.O)).toBe(PlayerSymbol.X);
    });
  });

  describe('isValidMove', () => {
    const board = [PlayerSymbol.X, null, PlayerSymbol.O];

    it('returns true for an empty cell', () => {
      expect(isValidMove(board, 1)).toBe(true);
    });

    it('returns false for a filled cell', () => {
      expect(isValidMove(board, 0)).toBe(false);
    });
  });

  describe('applyMove', () => {
    const board = [null, null, null];

    it('returns a new board with the move applied', () => {
      const result = applyMove(board, 1, PlayerSymbol.X);
      expect(result).toEqual([null, PlayerSymbol.X, null]);
    });

    it('does not mutate the original board', () => {
      const original = [null, null, null];
      const copy = [...original];
      applyMove(original, 0, PlayerSymbol.O);
      expect(original).toEqual(copy);
    });
  });
});
