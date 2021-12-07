import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//The way props like color has been passed here, we can send call back functions as well
const ColorCounter = ({ color, onIncrease, onDecrease, colorVal }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => onIncrease()}
        title={`More ${color} ${colorVal}`}
      />
      <Button
        onPress={() => onDecrease()}
        title={`Less ${color}  ${colorVal}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
