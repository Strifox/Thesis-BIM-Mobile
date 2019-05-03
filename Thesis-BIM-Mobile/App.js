import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Company:</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text>Bankgiro:</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text>OCR:</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text>Amount:</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text>Paydate:</Text>
          <TextInput style={styles.textInput}></TextInput>
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
  },
  form: {
    width: 60 + '%',
    textAlign: 'left',
  }
});
