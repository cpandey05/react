import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "12" },
    { name: "Friend #2", age: "13" },
    { name: "Friend #3", age: "14" },
    { name: "Friend #4", age: "15" },
    { name: "Friend #5", age: "16" },
    { name: "Friend #6", age: "17" },
    { name: "Friend #7", age: "18" },
    { name: "Friend #8", age: "19" },
    { name: "Friend #9", age: "11" },
    { name: "Friend #10", age: "32" },
    { name: "Friend #11", age: "12" },
    { name: "Friend #12", age: "12" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element === {item : {name: 'Friend #1'}, index:0}
        return (
          <Text style={styles.textStyle}>
            {item.name} -- Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
