import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

export default class Start extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={Style.form}>
            <Text>Username:</Text>
            <TextInput style={Style.textInput}></TextInput>
            <Text>Password:</Text>
            <TextInput secureTextEntry={true} style={Style.textInput}></TextInput>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => {this.props.navigation.navigate('Register')}}><Text style={Style.buttonText}> Register</Text></TouchableOpacity>
                <TouchableOpacity style={[Style.button, {marginLeft: 5}]} onPress={() => {this.props.navigation.navigate('Home')}}><Text style={Style.buttonText}> Log in</Text></TouchableOpacity>
            </View>
            <Text style={{marginTop: 10, textAlign: 'center'}}>Don't have an account yet? Press the register button</Text>
          </View>
        </View>
      </View>
    );
  }
}