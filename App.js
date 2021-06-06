/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';

import {RootNavigation} from './src/navigation/home.navigation';
import {AppNavigator} from './src/navigation/app.navigation';

const App = () => {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
