import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //const HomeScreen = (props) => const HomeScreen = ({navigation}) -notice the curly braces around the navigation, indication it is one of the properties of the props
  //props can be replaced with one of the properties navigation
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to component screen"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Squares Demo"
      />
      <Button
        onPress={() => navigation.navigate("SquareReducer")}
        title="Go to Squares Demo Reducer"
      />
      <Button
        onPress={() => navigation.navigate("TextScreen")}
        title="Go to Text screen demo"
      />
      <Button
        onPress={() => navigation.navigate("Box1")}
        title="Go to Box Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Image")}>
        <Text> Go to Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
