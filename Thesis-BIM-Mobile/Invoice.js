import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

export default class Invoice extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={Style.form}>
          <Text>Company:</Text>
          <TextInput style={Style.textInput}></TextInput>
          <Text>Bankgiro:</Text>
          <TextInput style={Style.textInput}></TextInput>
          <Text>OCR:</Text>
          <TextInput style={Style.textInput}></TextInput>
          <Text>Amount:</Text>
          <TextInput style={Style.textInput} onChangeText={() => {}}></TextInput>
          <Text>Paydate:</Text>
          <TextInput style={Style.textInput}></TextInput>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => {this.props.navigation.navigate('Camera')}}><View style={{flexDirection: 'row'}}><Icon name='camera-retro' size={20} color='white'/><Text style={Style.buttonText}> Scan</Text></View></TouchableOpacity>
              <TouchableOpacity style={[Style.button, {marginLeft: 5}]} onPress={() => {}}><View style={{flexDirection: 'row'}}><Icon name='save' size={22} color='white' /><Text style={Style.buttonText}> Save</Text></View></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}