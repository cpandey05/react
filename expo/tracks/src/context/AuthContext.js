import tracker from "../api/tracker";
import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate } from "../navigatonRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { token: action.payload, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    //make api request to sign up with email and password
    //if sign up successfull then modify state and say that sign up was successfull
    // if there is error in api call or the sign up fail, set the error condition indicating that sign up has failed
    console.log("trying to sign up to remote server");
    try {
      const response = await tracker.post("/users/sign-up", {
        email: email,
        password: password,
      });

      //await AsyncStorage.setItem("token", response);
      //dispatch({ type: "signup", payload: response });
      console.log(response);
      console.log("trying to navigate to sign IN screen ");
      navigate("Signin");
    } catch (error) {
      console.log("Error occurred whiling signing up --");
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong while signing up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    //make request
    //mark success and update the state
    //mark failure and update the state
    console.log(
      "trying to sign in with the email and password to remote server"
    );
    try {
      const response = await tracker.post("/login", {
        email: email,
        password: password,
      });

      console.log(response);
      await AsyncStorage.setItem("token", response.headers.authorization);
      dispatch({ type: "signin", payload: response.headers.authorization });
      console.log(response.headers.authorization);
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong while signing in",
      });
    }
  };
};

const signout = (dispatch) => {
  return ({ email }) => {
    //sign out the user from server
    //update the state
    //mark failure and update state
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
