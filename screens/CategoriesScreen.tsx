import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen: NavigationStackScreenComponent = (props) => {
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryCard
        item={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal  Categories',
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
