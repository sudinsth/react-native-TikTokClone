import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {RootNavigation} from '../navigation/home.navigation';
import {HomeScreen} from '../screens/Home/home.screens';

const Tabs = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tabStyle: {
            backgroundColor: '#000',
          },
          activeTintColor: '#fff',
          style: {
            height: 55,
          },
        }}>
        <Tabs.Screen
          name="Home"
          component={RootNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name={'home'} size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Discover"
          component={RootNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name={'search1'} size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Upload"
          component={RootNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name={'home'} size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Inbox"
          component={RootNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name={'message-minus-outline'}
                size={25}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={RootNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name={'person-outline'} size={25} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
