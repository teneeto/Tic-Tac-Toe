import { useLocalSearchParams, router } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ResultScreen() {
  const { result } = useLocalSearchParams<{ result: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {result === "win"
          ? "You Won!"
          : result === "lose"
          ? "You Lost!"
          : "It's a Tie!"}
      </Text>
      <Button title="Play Again" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, marginBottom: 20 },
});
