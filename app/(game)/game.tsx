import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import { getAiMove } from '@/utils/ai';
import { checkWinner } from '@/utils/minmax';
import TurnIndicator from '@/components/TurnIndicator';
import { GameMode, GameResult, PlayerSymbol, type Player } from '@/types/game';
import { applyMove, getNextPlayer, isValidMove } from '@/lib/gameEngine';
import { useGameSettings } from '@/context/GameSettingsContext';
import GridBoard from '@/components/GridBoard';
import { useDelayedCallback } from '@/hooks/useDelayedCallback';

export default function GameScreen() {
  const { mode, difficulty, playerX, playerO, gridSize } = useGameSettings();
  const isMultiplayer = mode === GameMode.Multi;

  const { userFirst, setResult } = useGameSettings();
  const [board, setBoard] = useState<(Player | null)[]>(Array(gridSize * gridSize).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(
    userFirst ? PlayerSymbol.X : PlayerSymbol.O,
  );
  const [gameOver, setGameOver] = useState(false);

  useDelayedCallback(
    () => {
      if (!isMultiplayer && currentPlayer === PlayerSymbol.O && !gameOver) {
        const move = getAiMove(board, gridSize, difficulty);
        if (move !== -1) {
          setBoard(applyMove(board, move, PlayerSymbol.O));
          setCurrentPlayer(PlayerSymbol.X);
        }
      }
    },
    600,
    [currentPlayer, isMultiplayer, board, difficulty, gameOver, gridSize],
  );

  useDelayedCallback(
    () => {
      const winner = checkWinner(board, gridSize);
      if (winner || !board.includes(null)) {
        setGameOver(true);

        const outcome =
          winner === PlayerSymbol.X
            ? GameResult.Win
            : winner === PlayerSymbol.O
              ? GameResult.Lose
              : GameResult.Tie;

        setResult(outcome);
        router.replace('/result');
      }
    },
    600,
    [board, gridSize, setResult],
  );

  const handlePress = (i: number) => {
    if (!isValidMove(board, i) || gameOver) return;
    if (isMultiplayer || currentPlayer === PlayerSymbol.X) {
      const updated = applyMove(board, i, currentPlayer);
      setBoard(updated);
      setCurrentPlayer(getNextPlayer(currentPlayer));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TurnIndicator
        text={
          isMultiplayer
            ? `Turn: ${currentPlayer === PlayerSymbol.X ? playerX : playerO}`
            : `Turn: ${currentPlayer === PlayerSymbol.X ? '🧑 You' : '🤖 AI'}`
        }
      />
      <GridBoard board={board} onCellPress={handlePress} size={gridSize} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
