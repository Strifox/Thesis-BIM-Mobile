import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Start extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Login')}}><Text style={styles.buttonText}> Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Register')}}><Text style={styles.buttonText}> Register</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    height: 30,
    paddingLeft: 5,
  },
  form: {
    width: 80 + '%',
    textAlign: 'left',
  },
  button: {
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: 'black',
    height: 30,
    width: 50 + '%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});
