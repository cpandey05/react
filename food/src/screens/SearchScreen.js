import React, { useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import ResultsList from "../components/ResultsLIst";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

//this is navigation object coming out of the default prop which is injected over here ..
//no need to pass on the navigator like this { navigation } from parent all the way down to the child ..
//will use withNavigation helper to make navigation directly available to the child
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByEnergyLevel = (energyLevel) => {
    return results.filter((result) => {
      console.log(result.energy_level);
      return result.energy_level === energyLevel;
    });
  };
  return (
    //searchTerm is a state managed by the parent , i.e. seacrch screen which is being passed on to the search bar
    //searchTerm is an prop for the search bar which will be displayed there and wheneven a value is changed, even is propagated to the child
    //i.e. the search bat to display the new value
    //style={{ borderWidth: 5, borderColor: "red" }} these two properties on view can be used to see the impact as how it expands all way down
    // to accomodate all the children
    //flex element can be used to restrict a view by acquiring all the space and rather restrict to the available size only.
    //this is very handy .. {{ flex: 1 }} anytime if things go off screen or get cropped, may be this property need to be set

    //instead of using <View> , we can just use a blank element as <> this will be same as setting flex property ...
    <View style={{ flex: 1 }}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      <Button
        onPress={() => searchApi(searchTerm)}
        title="Press for searching"
        style={{ marginLeft: 15 }}
      ></Button>
      <Text style={styles.textStyle}>Error .. {errorMessage}</Text>
      {errorMessage ? (
        <Text style={styles.textStyle}>
          Conditional Error rendering .. {errorMessage}
        </Text>
      ) : null}
      <Text style={styles.textStyle}>Search now..for {searchTerm}</Text>
      <Text style={styles.textStyle}>Found {results.length} results there</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByEnergyLevel(5)}
          title="Highly energetic"
        />
        <ResultsList
          results={filterResultsByEnergyLevel(4)}
          title="Normal energy"
        />
        <ResultsList results={filterResultsByEnergyLevel(3)} title="Lazy" />
      </ScrollView>
    </View>
  );
};

//again curly braces inside regular braces indiacte some objects will be instantiated and returned
const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 15,
  },
});

export default SearchScreen;
