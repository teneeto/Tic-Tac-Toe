import { generateWinCombos } from '../board';

describe('generateWinCombos', () => {
  it('should generate correct win combos for 3x3', () => {
    const size = 3;
    const expected = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    expect(generateWinCombos(size)).toEqual(expected);
  });

  it('should generate correct number of combos for 4x4', () => {
    const size = 4;
    const combos = generateWinCombos(size);

    expect(combos).toHaveLength(10);

    expect(combos).toContainEqual([0, 1, 2, 3]); // first row
    expect(combos).toContainEqual([0, 4, 8, 12]); // first column
    expect(combos).toContainEqual([0, 5, 10, 15]); // main diagonal
    expect(combos).toContainEqual([3, 6, 9, 12]); // anti-diagonal
  });
});
