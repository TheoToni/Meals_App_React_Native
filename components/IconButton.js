import { StyleSheet, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function IconButton({ icon, color, onPress }) {
  return (
    <View style={styles.button}>
      <Pressable
        android_ripple={{
          color: "#ccc",
          borderless: true,
          foreground: true,
        }}
        style={({ pressed }) => [
          styles.iconContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <Ionicons name={icon} size={24} color={color} style={styles.icon} />
      </Pressable>
    </View>
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

  icon: {
    ...Platform.select({
      android: {
        paddingHorizontal: 4,
        paddingVertical: 4,
      },
    }),
  },
});
