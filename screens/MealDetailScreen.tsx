import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackScreenProps['navigation'];
}

const MealDetailScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen!</Text>
      <Button
        onPress={() => props.navigation.popToTop()}
        title="Go Back To Categories"
      />
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

export default MealDetailScreen;
