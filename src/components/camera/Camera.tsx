import React, {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const Camera = () => {
  let cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
      //here you can write function and send the picture to the server
    }
  };
  return (
    <View>
      <RNCamera
        style={{
          //width: 100,
          //height: 100,
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        /*  onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }} */
      />
      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height * 0.87,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => takePicture()}>
          {/* <Text style={{fontSize: 14}}> SNAP </Text> */}
          {/* <Icon name="camera" size={40} color="grey" /> */}
          <Icons name="circle" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
