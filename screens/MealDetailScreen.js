import { View, StyleSheet, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        complexity={meal.complexity}
        affordability={meal.affordability}
        duration={meal.duration}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      {meal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Subtitle>Steps</Subtitle>
      {meal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    Align: "center",
    color: "white",
  },
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
  detailText: {
    color: "white",
  },

  text: {
    color: "white",
  },
});
