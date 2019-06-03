import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, CameraRoll, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';
import { Camera, Permissions, Constants, ImageManipulator, FileSystem } from 'expo';
import { PermissionsAndroid } from 'react-native';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

async function requestCameraRollPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA_ROLL
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the cameraroll');
    } else {
      console.log('Cameraroll permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      hasCameraRollPermission: null,
      type: Camera.Constants.Type.back,
      base64: null,
      companyName: null,
      bankAccountNumber: null,
      ocr: null,
      amountToPay: null,
      paydate: null
    }
  };

  async componentDidMount() {
    StatusBar.setHidden(true);
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { cameraRollStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted', hasCameraRollPermission: cameraRollStatus === 'granted'});
  }

  async componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  snap = async () => {
    let photo = await this.camera.takePictureAsync();
    console.log("Took photo")
    let maniPhoto = await ImageManipulator.manipulateAsync(photo.uri, [{ resize: { width: 1080, height: 1920 }}, { format: 'jpg' }]);
    console.log("Mani photo")
    let imageInBase64 = await FileSystem.readAsStringAsync(maniPhoto.uri, { encoding: FileSystem.EncodingTypes.Base64 });
    console.log("Encoded photo")

    this.setState({ base64: imageInBase64 });

    fetch('https://thesis-bim-backend.azurewebsites.net/api/InvoicesApi/AnalyzeImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify({
          Base64String: this.state.base64
        })
    })
    .then((response) =>  {
      return response.json();
    })
    .then((responseJson) => {
      this.setState({
        companyName: responseJson.companyName,
        bankAccountNumber: responseJson.bankAccountNumber,
        ocr: responseJson.ocr,
        amountToPay: responseJson.amountToPay,
        paydate: responseJson.paydate.slice(0, 10)
      })

      this.props.navigation.navigate('Invoice', {
        Company: this.state.companyName,
        Bankgiro: this.state.bankAccountNumber,
        OCR: this.state.ocr,
        Amount: this.state.amountToPay,
        Paydate: this.state.paydate
      });
    })
    CameraRoll.saveToCameraRoll(photo.uri, 'photo');
    CameraRoll.saveToCameraRoll(maniPhoto.uri, 'photo');
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={this.state.type} ratio='16:9'>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end'
              }}>
              <TouchableOpacity style={{ flex: 0.1, marginBottom: 20 }} onPress={() => {this.snap()}}><Icon name='circle-thin' size={52} color='white'/></TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}