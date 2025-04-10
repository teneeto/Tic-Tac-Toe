import { type Player } from '@/types/game';

export function generateWinCombos(size: number, winLength: number = size): number[][] {
  const combos: number[][] = [];

  // Horizontal wins
  for (let row = 0; row < size; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      const combo: number[] = [];
      for (let offset = 0; offset < winLength; offset++) {
        combo.push(row * size + (col + offset));
      }
      combos.push(combo);
    }
  }

  // Vertical wins
  for (let col = 0; col < size; col++) {
    for (let row = 0; row <= size - winLength; row++) {
      const combo: number[] = [];
      for (let offset = 0; offset < winLength; offset++) {
        combo.push((row + offset) * size + col);
      }
      combos.push(combo);
    }
  }

  // Diagonal down-right wins
  for (let row = 0; row <= size - winLength; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      const combo: number[] = [];
      for (let offset = 0; offset < winLength; offset++) {
        combo.push((row + offset) * size + (col + offset));
      }
      combos.push(combo);
    }
  }

  // Diagonal down-left wins
  for (let row = 0; row <= size - winLength; row++) {
    for (let col = winLength - 1; col < size; col++) {
      const combo: number[] = [];
      for (let offset = 0; offset < winLength; offset++) {
        combo.push((row + offset) * size + (col - offset));
      }
      combos.push(combo);
    }
  }

  return combos;
}

export function getAvailableMoves(board: (Player | null)[]): number[] {
  return board.reduce<number[]>((acc, cell, i) => {
    if (cell === null) acc.push(i);
    return acc;
  }, []);
}
