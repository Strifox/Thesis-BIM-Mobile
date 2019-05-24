{/* This screen will be used as a homeScreen once a user has logged in. The user should be able to choose to add a new invoice and other stuff */}
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

export default class Home extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home</Text>
            <TouchableOpacity style={[Style.startButton, {marginTop: 50}]} onPress={() => {this.props.navigation.navigate('Invoice')}}><Text style={Style.buttonText}>Add Invoice</Text></TouchableOpacity>
        </View>
    );
  }
}