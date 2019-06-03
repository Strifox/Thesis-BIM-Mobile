import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Style';
import { ScrollView } from "react-native-gesture-handler";

export default class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      isLoading: true,
      invoices: []
    }
  }

  GetAllInvoices = async () => {
    try {
      let userId = await AsyncStorage.getItem('userId')
      this.setState({ userId : userId })
      console.log(this.state.userId);
    }
    catch(error) {
      console.log(error);
    }
    fetch('https://thesis-bim-backend.azurewebsites.net/api/InvoicesApi/GetInvoices?userId=' + this.state.userId, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      this.setState({ invoices: responseJson })
      console.log(this.state.invoices)
    })
    this.setState({ isLoading: false })
  };

  componentDidMount() {
    this.GetAllInvoices();
  }

  renderItems() {
    return this.state.invoices.map(item => {
      return (
        <View key={item.id} style={{ borderColor: 'black', borderRadius: 15, borderWidth: 1, width: 90 + '%', height: 120, marginTop: 70 }}>
          <Text style={{ textAlign: 'center' }}>Company: {item.companyName}</Text>
          <Text style={{ textAlign: 'center' }}>Bankgiro: {item.bankAccountNumber}</Text>
          <Text style={{ textAlign: 'center' }}>Ocr: {item.ocr}</Text>
          <Text style={{ textAlign: 'center' }}>Belopp: {item.amountToPay}</Text>
          <Text style={{ textAlign: 'center' }}>Förfallodatum: {item.paydate.slice(0, 10)}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          {
            this.state.isLoading ? <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>Loading...</Text> : this.renderItems()
          }
        </View>
      </ScrollView>
    );
  }
}