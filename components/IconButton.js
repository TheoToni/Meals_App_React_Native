import { StyleSheet, Text, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function IconButton() {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
