import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text> Image Screen</Text>
      <ImageDetail
        imageName="Forest"
        imagePath={require("../../assets/forest.jpg")}
        imageScore={8}
      ></ImageDetail>
      <ImageDetail
        imageName="Beach"
        imagePath={require("../../assets/beach.jpg")}
        imageScore={7}
      ></ImageDetail>
      <ImageDetail
        imageName="Mountain "
        imagePath={require("../../assets/mountain.jpg")}
        imageScore={9}
      ></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
