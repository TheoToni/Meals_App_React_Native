import { View, StyleSheet, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: meal.imageUrl }} />
      <Text>{meal.title}</Text>
      <MealDetails
        complexity={meal.complexity}
        affordability={meal.affordability}
        duration={meal.duration}
      />
      {meal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      {meal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    paddding: 8,
    marginBottom: 16,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
