import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useGameSettings } from '../../context/GameSettingsContext';
import { getAiMove } from '../../utils/ai';
import { Player, checkWinner } from '../../utils/minmax';

export default function GameScreen() {
  const { mode, difficulty, playerX, playerO } = useGameSettings();
  const isMultiplayer = mode === 'multi';

  const { userFirst = 'true' } = useLocalSearchParams<{ userFirst?: string }>();
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(userFirst === 'true' ? 'X' : 'O');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!isMultiplayer && currentPlayer === 'O' && !gameOver) {
      setTimeout(() => {
        const move = getAiMove(board, difficulty);
        if (move !== -1) {
          const newBoard = [...board];
          newBoard[move] = 'O';
          setBoard(newBoard);
          setCurrentPlayer('X');
        }
      }, 600);
    }
  }, [currentPlayer]);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner || !board.includes(null)) {
      setGameOver(true);
      setTimeout(() => {
        router.replace({
          pathname: '/result',
          params: { result: winner === 'X' ? 'win' : winner === 'O' ? 'lose' : 'tie' },
        });
      }, 500);
    }
  }, [board]);

  const handlePress = (i: number) => {
    if (board[i] || gameOver) return;
    if (isMultiplayer || currentPlayer === 'X') {
      const newBoard = [...board];
      newBoard[i] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.turnText}>
        {isMultiplayer
          ? `Turn: ${currentPlayer === 'X' ? playerX : playerO}`
          : `Turn: ${currentPlayer === 'X' ? '🧑 You' : '🤖 AI'}`}
      </Text>
      <View style={styles.grid}>
        {board.map((val, i) => (
          <TouchableOpacity key={i} style={styles.cell} onPress={() => handlePress(i)}>
            <Text
              style={[styles.cellText, val === 'X' && styles.xText, val === 'O' && styles.oText]}
            >
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  turnText: { fontSize: 20, marginBottom: 16, fontWeight: '600' },
  grid: {
    width: 320,
    height: 320,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 0.5,
    backgroundColor: '#fff',
  },
  cellText: { fontSize: 40, fontWeight: 'bold' },
  xText: { color: '#007AFF' },
  oText: { color: '#FF3B30' },
});
