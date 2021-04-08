import tracker from "../api/tracker";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
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
    try {
      console.log("email--");
      console.log(email);
      console.log(password);
      const response = await tracker.post("/users/sign-up", {
        email: email,
        password: password,
      });
      console.log("done--");
      console.log(response);
    } catch (error) {
      console.log("error");
      dispatch({
        type: "add_error",
        payload: "Something went wrong while signing up",
      });
    }
    console.log("Out of try catch --- ");
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //make request
    //mark success and update the state
    //mark failure and update the state
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
