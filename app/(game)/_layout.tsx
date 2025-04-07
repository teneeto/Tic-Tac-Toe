import { Stack } from 'expo-router';
import { GameSettingsProvider } from '../../context/GameSettingsContext';

export default function GameLayout() {
  return (
    <GameSettingsProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#111' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          contentStyle: { backgroundColor: '#f9f9f9' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Start Game' }} />
        <Stack.Screen name="game" options={{ title: 'Play' }} />
        <Stack.Screen name="result" options={{ title: 'Game Result' }} />
      </Stack>
    </GameSettingsProvider>
  );
}
