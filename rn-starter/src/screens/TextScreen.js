import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        //These two properties , auto capitalize and autocorrect are useful for blog posts or comments but not for fields like password, email or user name
        // use it correctly
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
      <Text>Enter Password</Text>
      <TextInput
        //These two properties , auto capitalize and autocorrect are useful for blog posts or comments but not for fields like password, email or user name
        // use it correctly
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newPassValue) => setPassword(newPassValue)}
      />
      {password.length < 4 ? <Text>Password must be 5 char long</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
