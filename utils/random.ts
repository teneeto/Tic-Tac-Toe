import { Player } from './minmax';

export function getRandomMove(board: (Player | null)[]): number {
  const empty = board.map((v, i) => (v === null ? i : null)).filter((i): i is number => i !== null);

  return empty[Math.floor(Math.random() * empty.length)];
}
