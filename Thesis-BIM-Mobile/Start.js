import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

var jwtDecode = require('jwt-decode');

export default class Start extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ' ',
    };
  }

  Login() {
    fetch('https://thesis-bim-backend.azurewebsites.net/api/UserApi/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({
        UserName: this.state.username,
        Password: this.state.password,
      })
    })
    .then((response) => {
      if(response.status !== 200) {
        this.setState({ errorMessage: 'Invalid password or username.' })
        return;
      }
      this.setState({ errorMessage: ' ' })
      return response.text();
    })
    .then((responseJson) => {
      var decodedJwt = jwtDecode(responseJson);
      console.log(decodedJwt.userId);

      let userId = decodedJwt.userId;
      AsyncStorage.setItem('userId', userId);
    });
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <ImageBackground source={require('./assets/startImage.jpg')} style={{ flex: 1, width: 100 + '%', height: 300 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={Style.form}>
              <Text>Username:</Text>
              <TextInput style={Style.textInput} onChangeText={(text) => this.setState({ username: text })}></TextInput>
              <Text>Password:</Text>
              <TextInput secureTextEntry={true} style={Style.textInput} onChangeText={(text) => this.setState({ password: text })}></TextInput>
              
              <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => { this.props.navigation.navigate('Register')} }><Text style={Style.buttonText}> Register</Text></TouchableOpacity>
                  <TouchableOpacity style={[Style.button, {marginLeft: 5}]} onPress={() => { this.Login()}}><Text style={Style.buttonText }> Log in</Text></TouchableOpacity>
                  <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => { this.props.navigation.navigate('Home')} }><Text style={Style.buttonText}> Dev / Home</Text></TouchableOpacity>
              </View>

              <Text style={{ color: 'red', textAlign: 'center', fontSize: 14, marginTop: 10 }}>{this.state.errorMessage}</Text>
              <Text style={{marginTop: 10, textAlign: 'center'}}>Don't have an account yet? Press the register button</Text>
            </View>
        </View>
        </ImageBackground>
        
      </View>
    );
  }
}