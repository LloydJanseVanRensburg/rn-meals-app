import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealCard from '../components/MealCard';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealInterface } from '../models/meal';

const CategoryMealsScreen: NavigationStackScreenComponent = (props) => {
  const renderMealItem = ({ item }: { item: MealInterface }) => {
    return <MealCard onSelectMeal={() => {}} item={item} />;
  };

  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        renderItem={renderMealItem}
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory?.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    width: '90%',
  },
});

export default CategoryMealsScreen;
