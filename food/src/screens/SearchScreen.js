import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = serSearchTerm("");
  return (
    //searchTerm is a state managed by the parent , i.e. seacrch screen which is being passed on to the search bar
    //searchTerm is an prop for the search bar which will be displayed there and wheneven a value is changed, even is propagated to the child
    //i.e. the search bat to display the new value
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => serSearchTerm(newSearchTerm)}
      />
      <Text>Search .. </Text>
      <Text>{searchTerm} </Text>
    </View>
  );
};

//again curly braces inside regular braces indiacte some objects will be instantiated and returned
const styles = StyleSheet.create({});

export default SearchScreen;
