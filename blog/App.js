import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);
//instead of directly exporting this, assign this to a variable

//this is what we typically export ----- createAppContainer which wraps navigator function       export default createAppContainer(navigator);
const App = createAppContainer(navigator);
//and then export a cutom component
export default () => {
  //blog provider takes App as argument and displays that component -that is the children being passed to it
  return (
    <Provider>
      <App />
    </Provider>
  );
};
