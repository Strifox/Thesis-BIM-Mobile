import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from './Start';
import CameraScreen from './Camera'; 
import LoginScreen from './Login';
import RegisterScreen from './Register';

const AppNavigator = createStackNavigator({
    Home: {
        screen: StartScreen
    },
    Camera: {
        screen: CameraScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
},
{
  initialRouteName: 'Home',
  headerMode: 'none',
  transitionConfig : () => ({
    transitionSpec: {
        duration: 0,
    },
}),
});

export default createAppContainer(AppNavigator);