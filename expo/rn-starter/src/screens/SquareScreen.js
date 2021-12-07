import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./ColorCounter";

const COLOR_INCREMENT = 10;
const SquareScreen = () => {
  //Three different state value and three different setters to initialize those values..
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log("red : " + red);
  console.log("green : " + green);
  console.log("blue : " + blue);
  //onIncrease and onDecrease are callback functions which are being sent to the child which sets the state in the parent

  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change  === +15, -15

    /* if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    } */

    //instead of if else we can use switch case statements

    switch (color) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        } else {
          setRed(red + change);
        }
      case "blue":
        //use ternary operation
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        } else {
          setGreen(green + change);
        }
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
        colorVal={red}
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
        colorVal={blue}
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
        colorVal={green}
      ></ColorCounter>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
