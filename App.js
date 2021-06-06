/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';

import {HomeScreen} from './src/screens/Home/home.screens';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <HomeScreen />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
