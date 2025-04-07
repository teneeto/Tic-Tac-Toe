import { GameResult, GameMode } from '@/types/game';

export function getResultMessage(
  result: GameResult | null,
  mode: GameMode,
  playerX: string,
  playerO: string,
): string {
  const isMultiplayer = mode === GameMode.Multi;

  if (result === GameResult.Tie) return 'It’s a Tie!';
  if (isMultiplayer) return result === GameResult.Win ? `${playerX} Wins!` : `${playerO} Wins!`;
  return result === GameResult.Win ? 'You Won!' : 'You Lost!';
}
