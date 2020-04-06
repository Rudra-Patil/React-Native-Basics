import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const GoalItem = props => {
  return (
    //touchable wraps around any object and registers a touch of by user
  <TouchableNativeFeedback onPress={props.onDelete.bind(this,props.id)}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableNativeFeedback>
  //touchablenativefeedback produces a ripple effect on button press
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;
