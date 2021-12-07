import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text>Show details screen ..</Text>
      <Text>
        {blogPost.title} -- {blogPost.id}
      </Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      //Pass on to a second parameter to the navigation object -by passing this object , this will become available to edit wcreen
      //if this id is part of the navigation object itself why we need to pass it additionally? cannot it be retrieved by the navigation object itself which is
      //available everywehre?
      //AHh.. this param is available here because it has been passed through and not available by default ..from show screen
      //it was passed as navigation.navigate("Show", { id: item.id }) ..so it need to be set again if it need to be accessed..
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});
export default ShowScreen;
