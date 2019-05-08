import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.form}>
                <Text>Email:</Text>
                <TextInput style={styles.textInput}></TextInput>
                <Text>Password:</Text>
                <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
                <Text>Confirm Password:</Text>
                <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={[styles.button, {marginRight: 5}]} onPress={() => {this.props.navigation.goBack()}}><Text style={styles.buttonText}> Go back</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {marginLeft: 5}]} onPress={() => {}}><Text style={styles.buttonText}> Register</Text></TouchableOpacity>
                </View>
            </View>
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
      flex: 1,
      borderRadius: 7,
      marginTop: 10,
      backgroundColor: 'black',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    }
  });