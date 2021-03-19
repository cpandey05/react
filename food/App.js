import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    //curly braces always indicate some object, we are going to pass some objects to navigator which it will render..
    Search: SearchScreen,
    //second curly braces after the comma indicate second object being returned..
  },
  {
    initialRouteNmae: "Search",
    defaultNavigationOptions: {
      title: "Search",
    },
  }
);
export default createAppContainer(navigator);
