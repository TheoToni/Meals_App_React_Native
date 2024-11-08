import { View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({});
