import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { View, Text, StyleSheet, FlatList } from "react-native";
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <Text>{catId}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
