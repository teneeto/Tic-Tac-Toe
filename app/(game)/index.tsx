import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import Button from '@/components/Button';
import { COLORS, SPACING } from '@/theme';
import { useGameSettings } from '@/context/GameSettingsContext';
import { DifficultyLevel, GameMode, type Difficulty } from '@/types/game';

const difficulties: Difficulty[] = [
  DifficultyLevel.Easy,
  DifficultyLevel.Medium,
  DifficultyLevel.Hard,
];

export default function StartScreen() {
  const { setMode, setDifficulty, setPlayerX, setPlayerO, setUserFirst } = useGameSettings();
  const [nameX, setNameXInput] = useState('');
  const [nameO, setNameOInput] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>();

  const handleStart = (userFirst: boolean) => {
    setMode(GameMode.Single);
    if (selectedDifficulty) setDifficulty(selectedDifficulty);
    setUserFirst(userFirst);
    router.push('/game');
  };

  const startMultiplayer = () => {
    setMode(GameMode.Multi);
    setPlayerX(nameX || 'Player X');
    setPlayerO(nameO || 'Player O');
    router.push('/game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Tic Tac Toe</Text>

      <Text style={styles.section}>Single Player vs AI</Text>

      <View style={styles.row}>
        {difficulties.map((level) => (
          <View key={level} style={styles.difficultyWrapper}>
            <Button
              title={level.toUpperCase()}
              onPress={() => setSelectedDifficulty(level)}
              style={selectedDifficulty === level ? styles.selected : undefined}
            />
            {level === DifficultyLevel.Hard && (
              <View style={styles.unbeatableTag}>
                <Text style={styles.unbeatableText}>Unbeatable</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {selectedDifficulty && (
        <>
          <Text style={styles.subtext}>Who should play first?</Text>
          <View style={styles.row}>
            <Button title="You" onPress={() => handleStart(true)} />
            <Button title="Computer" onPress={() => handleStart(false)} />
          </View>
        </>
      )}

      <Text style={styles.section}>Multiplayer</Text>
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
      <Button title="Start Multiplayer" onPress={startMultiplayer} variant="primary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACING.large, justifyContent: 'center' },
  title: { fontSize: 32, textAlign: 'center', marginBottom: SPACING.large },
  section: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  subtext: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
    padding: 10,
    borderRadius: 6,
    marginVertical: 8,
  },
  selected: {
    backgroundColor: COLORS.grey,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  difficultyWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  unbeatableTag: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  unbeatableText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
