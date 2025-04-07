import { Stack } from "expo-router";

export default function GameLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: "#f9f9f9" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Start Game" }} />
      <Stack.Screen name="game" options={{ title: "Play" }} />
      <Stack.Screen name="result" options={{ title: "Game Result" }} />
    </Stack>
  );
}
