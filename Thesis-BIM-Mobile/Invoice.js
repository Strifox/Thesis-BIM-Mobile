import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';

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
  
  SaveInvoice = async () => {
    fetch('https://thesis-bim-backend.azurewebsites.net/api/InvoicesApi/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify({
          UserId: this.state.userId,
          CompanyName: "Västra Götaland",
          BankAccountNumber: "394-5771",
          Ocr: 19808332689947,
          AmountToPay: 300.00,
          Paydate: "2019-05-30 00:00:00.0000000"
        })
    })
    .then(response => response)
    .catch(err => console.log(err))
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={Style.form}>
          <Text>Company:</Text>
          <TextInput style={Style.textInput}>{this.props.navigation.getParam('Company', '')}</TextInput>
          <Text>Bankgiro:</Text>
          <TextInput style={Style.textInput}>{this.props.navigation.getParam('Bankgiro', '')}</TextInput>
          <Text>OCR:</Text>
          <TextInput style={Style.textInput}>{this.props.navigation.getParam('OCR', '')}</TextInput>
          <Text>Amount:</Text>
          <TextInput style={Style.textInput} onChangeText={() => {}}>{this.props.navigation.getParam('Amount', '')}</TextInput>
          <Text>Paydate:</Text>
          <TextInput style={Style.textInput}>{this.props.navigation.getParam('Paydate', '')}</TextInput>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[Style.button, {marginRight: 5}]} onPress={() => {this.props.navigation.navigate('Camera')}}><View style={{flexDirection: 'row'}}><Icon name='camera-retro' size={20} color='white'/><Text style={Style.buttonText}> Scan</Text></View></TouchableOpacity>
              <TouchableOpacity style={[Style.button, {marginLeft: 5}]} onPress={() => {this.SaveInvoice()}}><View style={{flexDirection: 'row'}}><Icon name='save' size={22} color='white' /><Text style={Style.buttonText}> Save</Text></View></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}