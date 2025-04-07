import { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';

import Button from '@/components/Button';
import { COLORS, SPACING } from '@/theme';
import { useGameSettings } from '@/context/GameSettingsContext';
import { GameMode, type Difficulty } from '@/types/game';
import DifficultySelector from '@/components/DifficultySelector';
import FirstPlayerSelector from '@/components/FirstPlayerSelector';

export default function StartScreen() {
  const { setMode, setDifficulty, setPlayerX, setPlayerO, setUserFirst } = useGameSettings();
  const [nameX, setNameXInput] = useState('');
  const [nameO, setNameOInput] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>();

  // useEffect(() => {
  //   setSelectedDifficulty(undefined);
  //   setNameXInput('');
  //   setNameOInput('');
  // }, []);

  const handleStart = (userFirst: boolean) => {
    if (!selectedDifficulty) return;
    setMode(GameMode.Single);
    setDifficulty(selectedDifficulty);
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}
    >
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>🎮 Tic Tac Toe</Text>

        <Text style={styles.section}>Single Player vs AI</Text>

        <DifficultySelector selected={selectedDifficulty} onSelect={setSelectedDifficulty} />

        {selectedDifficulty && <FirstPlayerSelector onSelect={handleStart} />}

        <Text style={styles.section}>Multiplayer</Text>
        <TextInput
          placeholder="Player X Name"
          value={nameX}
          returnKeyType="done"
          onChangeText={setNameXInput}
          style={styles.input}
        />
        <TextInput
          placeholder="Player O Name"
          value={nameO}
          returnKeyType="done"
          onChangeText={setNameOInput}
          style={styles.input}
        />
        <Button title="Start Multiplayer" onPress={startMultiplayer} variant="primary" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: SPACING.large,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: SPACING.large,
  },
  section: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
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
