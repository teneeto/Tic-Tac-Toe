export function generateWinCombos(size: number): number[][] {
  const combos: number[][] = [];

  for (let r = 0; r < size; r++) {
    const row: number[] = [];
    for (let c = 0; c < size; c++) {
      row.push(r * size + c);
    }
    combos.push(row);
  }

  for (let c = 0; c < size; c++) {
    const col: number[] = [];
    for (let r = 0; r < size; r++) {
      col.push(c + r * size);
    }
    combos.push(col);
  }

  combos.push(Array.from({ length: size }, (_, i) => i * (size + 1)));

  combos.push(Array.from({ length: size }, (_, i) => (i + 1) * (size - 1)));

  return combos;
}
