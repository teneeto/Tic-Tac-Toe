import { Tabs } from 'expo-router';
import { GameSettingsProvider } from '../../context/GameSettingsContext';
import { COLORS } from '@/theme';

export default function GameLayout() {
  return (
    <GameSettingsProvider>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.header },
          headerTintColor: COLORS.white,
          headerTitleAlign: 'center',
        }}
      >
        <Tabs.Screen name="(game)" options={{ title: 'Game', headerShown: false }} />
        <Tabs.Screen name="history" options={{ title: 'Game History' }} />
      </Tabs>
    </GameSettingsProvider>
  );
}
