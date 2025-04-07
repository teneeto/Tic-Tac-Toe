import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { useGameSettings } from '../../context/GameSettingsContext';

export default function StartScreen() {
  const { setMode, setDifficulty, setPlayerX, setPlayerO } = useGameSettings();
  const [nameX, setNameXInput] = useState('');
  const [nameO, setNameOInput] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(
    null,
  );

  const handleStart = (userFirst: boolean) => {
    setMode('single');
    if (selectedDifficulty) setDifficulty(selectedDifficulty);
    router.push({ pathname: '/game', params: { userFirst: String(userFirst) } });
  };

  const startMultiplayer = () => {
    setMode('multi');
    setPlayerX(nameX || 'Player X');
    setPlayerO(nameO || 'Player O');
    router.push('/game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Tic Tac Toe</Text>

      <Text style={styles.sectionTitle}>Single Player</Text>
      <View style={styles.row}>
        {['easy', 'medium', 'hard'].map((level) => (
          <Pressable
            key={level}
            style={[styles.button, selectedDifficulty === level && styles.selected]}
            onPress={() => setSelectedDifficulty(level as any)}
          >
            <Text style={styles.buttonText}>{level.toUpperCase()}</Text>
          </Pressable>
        ))}
      </View>

      {selectedDifficulty && (
        <View>
          <Text style={styles.subtext}>Who should play first?</Text>
          <View style={styles.row}>
            <Pressable style={styles.button} onPress={() => handleStart(true)}>
              <Text style={styles.buttonText}>You</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handleStart(false)}>
              <Text style={styles.buttonText}>Computer</Text>
            </Pressable>
          </View>
        </View>
      )}

      <Text style={styles.sectionTitle}>Multiplayer</Text>
      <TextInput
        placeholder="Player X Name"
        value={nameX}
        onChangeText={setNameXInput}
        style={styles.input}
      />
      <TextInput
        placeholder="Player O Name"
        value={nameO}
        onChangeText={setNameOInput}
        style={styles.input}
      />
      <Pressable style={[styles.button, styles.primary]} onPress={startMultiplayer}>
        <Text style={[styles.buttonText, styles.primaryText]}>Start Multiplayer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 32, textAlign: 'center', marginBottom: 30 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  subtext: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  button: {
    backgroundColor: '#ddd',
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    minWidth: 100,
  },
  buttonText: { fontWeight: '600', color: '#333', textAlign: 'center' },
  selected: {
    backgroundColor: '#aaa',
  },
  primary: { backgroundColor: '#007AFF' },
  primaryText: { color: '#fff' },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginVertical: 8,
  },
});
