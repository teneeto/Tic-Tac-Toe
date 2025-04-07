import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useGameSettings } from '../../context/GameSettingsContext';
import { getAiMove } from '../../utils/ai';
import { checkWinner } from '../../utils/minmax';
import { getNextPlayer, isValidMove, applyMove } from '../../lib/gameEngine';
import { Player } from '../../types/game';
import GridBoard from '../../components/GridBoard';
import TurnIndicator from '../../components/TurnIndicator';

export default function GameScreen() {
  const { mode, difficulty, playerX, playerO } = useGameSettings();
  const isMultiplayer = mode === 'multi';

  const { userFirst = 'true' } = useLocalSearchParams<{ userFirst?: string }>();
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(userFirst === 'true' ? 'X' : 'O');
  const [gameOver, setGameOver] = useState(false);

  // AI move trigger
  useEffect(() => {
    if (!isMultiplayer && currentPlayer === 'O' && !gameOver) {
      const delay = setTimeout(() => {
        const move = getAiMove(board, difficulty);
        if (move !== -1) {
          setBoard(applyMove(board, move, 'O'));
          setCurrentPlayer('X');
        }
      }, 600);
      return () => clearTimeout(delay);
    }
  }, [currentPlayer]);

  // Win/tie check
  useEffect(() => {
    const winner = checkWinner(board);
    if (winner || !board.includes(null)) {
      setGameOver(true);
      setTimeout(() => {
        router.replace({
          pathname: '/result',
          params: {
            result: winner === 'X' ? 'win' : winner === 'O' ? 'lose' : 'tie',
          },
        });
      }, 500);
    }
  }, [board]);

  // Handle tap on cell
  const handlePress = (i: number) => {
    if (!isValidMove(board, i) || gameOver) return;
    if (isMultiplayer || currentPlayer === 'X') {
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
            ? `Turn: ${currentPlayer === 'X' ? playerX : playerO}`
            : `Turn: ${currentPlayer === 'X' ? '🧑 You' : '🤖 AI'}`
        }
      />
      <GridBoard board={board} onCellPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
