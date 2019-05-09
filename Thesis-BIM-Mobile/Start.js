import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

export default class Start extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to BIM!</Text>
        <Text>Never forget your payments again!</Text>
        <TouchableOpacity style={Style.startButton} onPress={() => {this.props.navigation.navigate('Login')}}><Text style={Style.buttonText}> Login</Text></TouchableOpacity>
        <TouchableOpacity style={Style.startButton} onPress={() => {this.props.navigation.navigate('Register')}}><Text style={Style.buttonText}> Register</Text></TouchableOpacity>
        <TouchableOpacity style={[Style.startButton, {marginTop: 50}]} onPress={() => {this.props.navigation.navigate('Invoice')}}><Text style={Style.buttonText}> Dev / Invoice</Text></TouchableOpacity>
      </View>
    );
  }
}