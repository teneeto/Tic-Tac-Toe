import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Button
        title="Play First"
        onPress={() =>
          router.push({ pathname: "/game", params: { userFirst: "true" } })
        }
      />
      <Button
        title="Let Computer Start"
        onPress={() =>
          router.push({ pathname: "/game", params: { userFirst: "false" } })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, marginBottom: 20 },
});
