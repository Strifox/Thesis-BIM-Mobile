import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

export default class Login extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={Style.form}>
            <Text>Email / Username:</Text>
            <TextInput style={Style.textInput}></TextInput>
            <Text>Password:</Text>
            <TextInput secureTextEntry={true} style={Style.textInput}></TextInput>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => {this.props.navigation.goBack()}}><Text style={Style.buttonText}> Go back</Text></TouchableOpacity>
                {/* Redirect to Home.js upon succesful login */}
                <TouchableOpacity style={[Style.button, {marginLeft: 5}]} onPress={() => {}}><Text style={Style.buttonText}> Login</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    );
  }
}