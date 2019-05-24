import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

export default class Register extends React.Component {
  
  //Fixa så att data från textinputsen skickar i register

  Register() {
    let data = {
      Username: 'Andre',
      Email: 'andre@andre.com',
      Password: 'Andre123',
      PushToken: 0
    }

    fetch('https://thesis-bim-backend.azurewebsites.net/api/User/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({
        userName: 'Andre',
        email: 'andre@andre.com',
        password: 'Andre123',
        expoPushToken: '0'
      })
    });
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={Style.form}>
                <Text>Email:</Text>
                <TextInput style={Style.textInput}></TextInput>
                <Text>Username:</Text>
                <TextInput style={Style.textInput}></TextInput>
                <Text>Password:</Text>
                <TextInput secureTextEntry={true} style={Style.textInput}></TextInput>
                <Text>Confirm Password:</Text>
                <TextInput secureTextEntry={true} style={Style.textInput}></TextInput>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => {this.props.navigation.goBack()}}><Text style={Style.buttonText}> Back</Text></TouchableOpacity>
                    <TouchableOpacity style={[Style.button, {marginLeft: 5}]} onPress={() => {this.Register()}}><Text style={Style.buttonText}> Register</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}