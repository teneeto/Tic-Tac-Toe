import { useState } from 'react';
import { Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { router } from 'expo-router';

import Button from '@/components/Button';
import { SPACING } from '@/theme';
import { useGameSettings } from '@/context/GameSettingsContext';
import { GameMode, type Difficulty } from '@/types/game';
import DifficultySelector from '@/components/DifficultySelector';
import FirstPlayerSelector from '@/components/FirstPlayerSelector';
import PlayerInput from '@/components/PlayerInput';

export default function StartScreen() {
  const { setMode, setDifficulty, setPlayerX, setPlayerO, setUserFirst } = useGameSettings();
  const [nameX, setNameXInput] = useState('');
  const [nameO, setNameOInput] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>();

  const handleStart = (userFirst: boolean) => {
    if (!selectedDifficulty) return;
    setMode(GameMode.Single);
    setDifficulty(selectedDifficulty);
    setUserFirst(userFirst);
    router.replace('/game');
  };

  const startMultiplayer = () => {
    setMode(GameMode.Multi);
    setPlayerX(nameX || 'Player X');
    setPlayerO(nameO || 'Player O');
    router.replace('/game');
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
        <PlayerInput placeholder="Player X Name" value={nameX} onChangeText={setNameXInput} />
        <PlayerInput placeholder="Player O Name" value={nameO} onChangeText={setNameOInput} />
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
  difficultyWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
});
