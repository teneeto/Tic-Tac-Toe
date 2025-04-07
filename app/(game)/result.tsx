import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useGameSettings } from '../../context/GameSettingsContext';

export default function ResultScreen() {
  const { result } = useLocalSearchParams<{ result: string }>();
  const { mode, playerX, playerO } = useGameSettings();
  const isMultiplayer = mode === 'multi';

  const getEmoji = () => (result === 'win' ? '🎉' : result === 'lose' ? '😓' : '🤝');

  const getMessage = () => {
    if (result === 'tie') return 'It’s a Tie!';
    if (isMultiplayer) return result === 'win' ? `${playerX} Wins!` : `${playerO} Wins!`;
    return result === 'win' ? 'You Won!' : 'You Lost!';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{getEmoji()}</Text>
      <Text style={styles.resultText}>{getMessage()}</Text>
      <Pressable style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Play Again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emoji: { fontSize: 64, marginBottom: 20 },
  resultText: { fontSize: 28, fontWeight: '600', textAlign: 'center' },
  button: { marginTop: 30, padding: 12, backgroundColor: '#007AFF', borderRadius: 6 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
