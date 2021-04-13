import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { navigate } from "../navigatonRef";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        submitButtonLabel="SignIN"
        onSubmit={signin}
      />

      <Spacer />
      <NavLink routeName="Signup" text="Not registered? Sign Up First" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
