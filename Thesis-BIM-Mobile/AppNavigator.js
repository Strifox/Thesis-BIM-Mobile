import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from './Start';
import CameraScreen from './Camera'; 
import LoginScreen from './Login';
import RegisterScreen from './Register';
import InvoiceScreen from './Invoice';
import InvoicesScreen from './Invoices';
import HomeScreen from './Home';

const AppNavigator = createStackNavigator({
    Start: {
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
    Invoices: {
        screen: InvoicesScreen
    },    
    Camera: {
        screen: CameraScreen
    },
    Home: {
        screen: HomeScreen
    }
},
{
  initialRouteName: 'Start',
  headerMode: 'none',
  transitionConfig : () => ({
    transitionSpec: {
        duration: 0,
    },
}),
});

export default createAppContainer(AppNavigator);