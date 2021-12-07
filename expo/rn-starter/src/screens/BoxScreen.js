import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Text 1</Text>
      <Text style={styles.textTwoStyle}>Text 2</Text>
      <Text style={styles.textThreeStyle}>Text 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 10,
    borderColor: "black",
    //paddingLeft: 10,
    //paddingTop: 30,
    //default is stretch ... elements stretch to occupy the parent space
    //alignItems: "center",
    //for center , it is center not flex-center
    //flexDirection: "row",
    //justifyContent: "center",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 10,
    borderColor: "red",
    //marginHorizontal: 20,
    //marginVertical: 20,
    //Above two can be merged in one as margin
    //margin: 20,
    paddingTop: 1,
    paddingLeft: 1,
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 10,
    borderColor: "yellow",
    //marginHorizontal: 20,
    //marginVertical: 20,
    //Above two can be merged in one as margin
    ///margin: 20,
    paddingTop: 1,
    paddingLeft: 1,
    flex: 4,
  },
  textThreeStyle: {
    borderWidth: 10,
    borderColor: "green",
    //marginHorizontal: 20,
    //marginVertical: 20,
    //Above two can be merged in one as margin
    // margin: 20,
    paddingTop: 1,
    paddingLeft: 1,
    flex: 2,
  },
});

export default BoxScreen;
