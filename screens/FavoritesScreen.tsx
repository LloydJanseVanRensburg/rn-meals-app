import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const FavoritesScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
