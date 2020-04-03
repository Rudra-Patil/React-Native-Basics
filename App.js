import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/Goalinput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
      //courseGoals is an object created having a key property(has to be string) and a value property-- For flatlist implementation
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        // if your function for flatlist does not have a key, we use a ID property instead of keys using keyextractor function
        data={courseGoals}
        //Flatlist needs a data source which is an array and having key and value property which is called.
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
        //the item will fetch the value property from item as item is no longer a string but an object
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
