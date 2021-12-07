import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponentScreen = () => {
  const myName = "Chandan";
  return (
    <View>
      <Text style={styles.textStyleHeader}>
        Getting started with React native!
      </Text>
      <Text style={styles.textStyleContent}>
        My Name is {myName} -This is componenr screen
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyleHeader: {
    fontSize: 45,
  },
  textStyleContent: {
    fontSize: 20,
  },
});

export default ComponentScreen;
