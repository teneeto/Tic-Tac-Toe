import { type Player } from '@/types/game';
import { getAvailableMoves } from './board';

export function getRandomMove(board: (Player | null)[]) {
  const empty = getAvailableMoves(board);

  return empty[Math.floor(Math.random() * empty.length)];
}
