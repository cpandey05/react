import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  //todo : fix this
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //counter++; cannot change the statre directly -must use the function
          setCounter(counter + 1);
          console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //counter--;
          setCounter(counter - 1);
          console.log(counter);
        }}
      />
      <Text> Current Count : {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
