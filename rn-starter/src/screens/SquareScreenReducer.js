import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounterReducer from "./ColorCounterReducer";

const COLOR_INCREMENT = 10;
//this could have been defined inside the component but to avoid readability confusion, it is better to define outside. for e.g.
// the state variable passed, although there would not be any conflict due to scope but readability wise, this can create confusion
const reducer = (state, action) => {
  console.log("reducer state red : " + state.red);
  console.log("reducer state green : " + state.green);
  console.log("reducer state blue : " + state.blue);
  //what is the state which need to be monitored and what is the action that can be performed on this state.
  //state == {red: number, green:number, blue:number}
  //action === {colorToChange: 'red'|| "green"| "blue", amount:15 || -15}
  console.log(action);
  console.log("State is " + state);
  switch (action.colorToChange) {
    case "red":
      console.log("In red");
      //The n in the amount was missing and "amout"  was being passed- this was causing NaN for amout and ultimately resulting NaN for state.red variable
      //Always check for the typo -when it comes to JS

      return { ...state, red: state.red + action.amount };
    case "blue":
      console.log("In blue");
      return { ...state, blue: state.blue + action.amount };
    case "green":
      console.log("In green");
      return { ...state, green: state.green + action.amount };
    default:
      return state;
  }
};
const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log("red : " + red);
  console.log("green : " + green);
  console.log("blue : " + blue);
  console.log("state red : " + state.red);
  console.log("state green : " + state.green);
  console.log("state blue : " + state.blue);
  //the above has assigned value of state to local variable , this could have been written pretty well like this as well
  //state.red, state.blue, state.green
  // state is combination of red blue and green, we are not tracking individual fields rather they are being tracked through single variable
  //console.log(state)// this will print {red:0, green:0, blue:0}
  return (
    <View>
      <ColorCounterReducer
        onIncrease={() => dispatch({ colorToChange: "red", amount: 10 })}
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      ></ColorCounterReducer>
      <ColorCounterReducer
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: 1 * COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      ></ColorCounterReducer>
      <ColorCounterReducer
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: 1 * COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      ></ColorCounterReducer>
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

export default SquareScreenReducer;
