import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

//we get the props from the parent, either we can have the complete object or we can deconstruct it and have individual items
const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    //size on feather component can go in its own stylesheet, but sice this is only one property, keeping it inline

    //instead of this whole function call (newSearchTerm) => onSearchTermChange(newSearchTerm) -we can use a shortcut where we can pass the reference of the function
    //something like onSearchTermChange -notice the parenthesis around the function name is missingin this case indicating , it is a callback
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="search here ... "
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  );
};

//again curly braces inside regular braces indiacte some objects will be instantiated and returned
const styles = StyleSheet.create({
  backgroundStyle: {
    //add a bit of margin from the top ..so the item is bit of pushed down
    marginTop: 15,
    backgroundColor: "red",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    //to bring all the child on a single row, we use flex direction prop .. this will bring search Icon and the text input on the same row
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "yellow",
    borderWidth: 2,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    //alignself allows alignment of a single item
    //if align center is done on the background element then it will come in the center and the lines around it may be unclickable...
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
