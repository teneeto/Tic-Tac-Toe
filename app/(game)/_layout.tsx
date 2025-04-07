import { Stack } from 'expo-router';
import { GameSettingsProvider } from '../../context/GameSettingsContext';
import { COLORS } from '@/theme';

export default function GameLayout() {
  return (
    <GameSettingsProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.header },
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
          contentStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Start Game' }} />
        <Stack.Screen name="game" options={{ title: 'Play' }} />
        <Stack.Screen name="result" options={{ title: 'Game Result' }} />
      </Stack>
    </GameSettingsProvider>
  );
}
