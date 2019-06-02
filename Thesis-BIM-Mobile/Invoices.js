import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';
import { ScrollView } from "react-native-gesture-handler";

//Fetch funktion för alla invoices på den specifika inloggade användaren

export default class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    }
  }

  RetrieveLocalStorage = async () => {
    try {
      let userId = await AsyncStorage.getItem('userId')
      this.setState({ userId : userId })
      console.log(this.state.userId);
    }
    catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.RetrieveLocalStorage();
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300, marginTop: 70 }}>
              <Text style={{ textAlign: 'center' }}>Invoice #1</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300, marginTop: 40 }}>
              <Text style={{ textAlign: 'center' }}>Invoice #2</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300, marginTop: 40 }}>
              <Text style={{ textAlign: 'center' }}>Invoice #3</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300, marginTop: 40 }}>
              <Text style={{ textAlign: 'center' }}>Invoice #4</Text>
          </View>
          <View style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 300, marginTop: 40 }}>
              <Text style={{ textAlign: 'center' }}>Invoice #5</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}