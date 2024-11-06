import { MEALS } from "../data/dummy-data";

import { View, Text, StyleSheet, FlatList } from "react-native";
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return (
    <View style={styles.container}>
      <Text>{catId}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
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
