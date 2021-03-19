import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//The way props like color has been passed here, we can send call back functions as well
const ColorCounterReducer = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`More ${color}`} />
      <Button onPress={() => onDecrease()} title={`Less ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounterReducer;
