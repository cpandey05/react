/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppHome from './src/screens/AppHome';
import SignIn from './src/screens/login/SignIn';
import MoviesHome from './src/screens/movies/MoviesHome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen
          name="AppHome"
          component={AppHome}
          options={{title: 'Welcome To App Home'}}
        />
        <Stack.Screen name="MoviesHome" component={MoviesHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
