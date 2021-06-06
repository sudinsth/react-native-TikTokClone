import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/Home/home.screens';
import {AppNavigator} from './app.navigation';

const Stack = createStackNavigator();
export const RootNavigation = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
