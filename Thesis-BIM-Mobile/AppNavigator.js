import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from './Start';
import CameraScreen from './Camera'; 
import LoginScreen from './Login';
import RegisterScreen from './Register';
import InvoiceScreen from './Invoice';

const AppNavigator = createStackNavigator({
    Home: {
        screen: StartScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    },
    Invoice: {
        screen: InvoiceScreen
    },   
    Camera: {
        screen: CameraScreen
    },
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