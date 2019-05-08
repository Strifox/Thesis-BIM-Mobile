import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, CameraRoll } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}