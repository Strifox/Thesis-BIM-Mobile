import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

//Fetch funktion för alla invoices på den specifika inloggade användaren

export default class Invoice extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300 }}>
              <Text>Invoice #1</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300 }}>
              <Text>Invoice #2</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300 }}>
              <Text>Invoice #3</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300 }}>
              <Text>Invoice #4</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300 }}>
              <Text>Invoice #5</Text>
          </View>
      </View>
    );
  }
}