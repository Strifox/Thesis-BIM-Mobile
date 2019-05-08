import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from './Start';
import CameraScreen from './Camera'; 

const AppNavigator = createStackNavigator({
    Home: {
        screen: StartScreen
    },
    Camera: {
        screen: CameraScreen
    }
},
{
  initialRouteName: 'Home',
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);