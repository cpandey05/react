import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  return (
    //If a fragment is used like <> </>, then we cannot apply styling element to the children , it be wrapped in Parent component like view
    //(password) => setPassword(password) -this can be written as {setPassword}
    //secureTextEntry={true} is same as secureTextEntry when a prop is used without a value , it will take its default value
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        submitButtonLabel="SignUP"
        onSubmit={signup}
      />
      <Spacer />
      <NavLink routeName="Signin" text="Already a user ... Sign In instead!" />
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

  link: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SignupScreen;
