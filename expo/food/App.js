import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsDetailsScreen from "./src/screens/ResultsDetailsScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    //curly braces always indicate some object, we are going to pass some objects to navigator which it will render..
    Search: SearchScreen,
    //second curly braces after the comma indicate second object being returned..
    ResultDetails: ResultsDetailsScreen,
  },
  {
    initialRouteNmae: "Search",

    defaultNavigationOptions: {
      title: "Search",
    },
  }
);
export default createAppContainer(navigator);
