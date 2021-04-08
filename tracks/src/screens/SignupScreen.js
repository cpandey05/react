import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "./components/Spacer";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(state.errorMessage);
  return (
    //If a fragment is used like <> </>, then we cannot apply styling element to the children , it be wrapped in Parent component like view
    //(password) => setPassword(password) -this can be written as {setPassword}
    //secureTextEntry={true} is same as secureTextEntry when a prop is used without a value , it will take its default value
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for the tracker </Text>
      </Spacer>
      <Input
        label="Email "
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password "
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />
      <Spacer />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Button title="Sign UP" onPress={() => signup({ email, password })} />
      <Spacer />
    </View>
  );
};

//SignupScreen.navigationOptions = () => { --this is deprecated code and shows depreciation warning ...
// return { header: null };
//};
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 5,
    // borderColor: "red",
    //flex of 1 will allow parent component to acquire all of the space available
    flex: 1,
    justifyContent: "center",
    //margiBottom will push the box above -making sure that now it does not acquire the whole screen and then the components will be aligned a bit above
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
});

export default SignupScreen;
