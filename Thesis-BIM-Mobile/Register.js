import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmedPassword: ''
    };
  }

  Register() {
    if(this.state.password === this.state.confirmedPassword) {
      fetch('https://thesis-bim-backend.azurewebsites.net/api/User/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify({
          userName: this.state.username,
          email: this.state.email,
          password: this.state.password,
          expoPushToken: '0'
        })
      });
    }
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={Style.form}>
                <Text>Email:</Text>
                <TextInput style={Style.textInput} onChangeText={(text) => this.setState({ email: text })}></TextInput>
                <Text>Username:</Text>
                <TextInput style={Style.textInput} onChangeText={(text) => this.setState({ username: text })}></TextInput>
                <Text>Password:</Text>
                <TextInput secureTextEntry={true} style={Style.textInput} onChangeText={(text) => this.setState({ password: text })}></TextInput>
                <Text>Confirm Password:</Text>
                <TextInput secureTextEntry={true} style={Style.textInput} onChangeText={(text) => this.setState({ confirmedPassword: text })}></TextInput>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => {this.props.navigation.goBack()}}><Text style={Style.buttonText}> Back</Text></TouchableOpacity>
                    <TouchableOpacity style={[Style.button, {marginLeft: 5}]} onPress={() => {this.Register()}}><Text style={Style.buttonText}> Register</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}