import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, CameraRoll, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';
import { Camera, Permissions, Constants } from 'expo';
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
  state = {
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    type: Camera.Constants.Type.back,
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
    this.props.navigation.navigate('Invoice', {
      Company: 'Inteleon AB',
      Bankgiro: '170-3453',
      OCR: 11880906711,
      Amount: 95,
      Paydate: '2019-04-30'
    });
    //CameraRoll.saveToCameraRoll(photo.uri, 'photo');
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