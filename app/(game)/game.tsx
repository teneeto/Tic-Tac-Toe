import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getBestMove, Player, checkWinner } from "../../utils/minmax";

export default function GameScreen() {
  const { userFirst } = useLocalSearchParams();
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [userTurn, setUserTurn] = useState(userFirst === "true");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!userTurn && !gameOver) {
      requestAnimationFrame(() => {
        const move = getBestMove(board);
        if (move !== -1) {
          const newBoard = [...board];
          newBoard[move] = "O";
          setBoard(newBoard);
          setUserTurn(true);
        }
      });
    }
  }, [userTurn, board, gameOver]);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner || !board.includes(null)) {
      setGameOver(true);
      setTimeout(() => {
        router.replace({
          pathname: "/result",
          params: {
            result: winner === "X" ? "win" : winner === "O" ? "lose" : "tie",
          },
        });
      }, 600);
    }
  }, [board]);

  const handlePress = (index: number) => {
    if (board[index] || gameOver || !userTurn) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setUserTurn(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.turnText}>
        Turn: {userTurn ? "🧑 You" : "🤖 Computer"}
      </Text>
      <View style={styles.grid}>
        {board.map((val, i) => (
          <TouchableOpacity
            key={i}
            style={styles.cell}
            onPress={() => handlePress(i)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.cellText,
                val === "X" && styles.xText,
                val === "O" && styles.oText,
              ]}
            >
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  turnText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "600",
    color: "#444",
  },
  grid: {
    width: 320,
    height: 320,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
  },
  cell: {
    width: "33.33%",
    height: "33.33%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 0.5,
  },
  cellText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  xText: {
    color: "#007AFF",
  },
  oText: {
    color: "#FF3B30",
  },
});
