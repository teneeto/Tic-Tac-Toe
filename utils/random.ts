import { Player } from '@/types/game';

export function getRandomMove(board: (Player | null)[]) {
  const empty = board.map((v, i) => (v === null ? i : null)).filter((i): i is number => i !== null);

  return empty[Math.floor(Math.random() * empty.length)];
}
