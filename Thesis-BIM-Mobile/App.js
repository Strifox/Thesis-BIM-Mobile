import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { Permissions } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    state = {
      image: null
    }
  }

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({ allowsEditiing: false });
    this.setState({ image: uri });
  }
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
          <TextInput style={styles.textInput} onChangeText={() => {}}></TextInput>
          <Text>Paydate:</Text>
          <TextInput style={styles.textInput}></TextInput>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.button, {marginRight: 5}]} onPress={() => {this.takePicture()}}><View style={{flexDirection: 'row'}}><Icon name='camera' size={20} color='white'/><Text style={styles.buttonText}> Scan</Text></View></TouchableOpacity>
              <TouchableOpacity style={[styles.button, {marginLeft: 5}]} onPress={() => {}}><View style={{flexDirection: 'row'}}><Icon name='save' size={22} color='white' /><Text style={styles.buttonText}> Save</Text></View></TouchableOpacity>
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
