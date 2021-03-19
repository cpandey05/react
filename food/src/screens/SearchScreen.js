import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: { limit: 50, term: { searchTerm }, location: "san jose" },
    });
    setResults(response.data.businesses);
  };
  return (
    //searchTerm is a state managed by the parent , i.e. seacrch screen which is being passed on to the search bar
    //searchTerm is an prop for the search bar which will be displayed there and wheneven a value is changed, even is propagated to the child
    //i.e. the search bat to display the new value

    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        onSearchTermSubmit={() => searchApi()}
      />
      <Text>Search .. </Text>
      <Text>Found {results.length} results</Text>
    </View>
  );
};

//again curly braces inside regular braces indiacte some objects will be instantiated and returned
const styles = StyleSheet.create({});

export default SearchScreen;
