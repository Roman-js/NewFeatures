import React, {useRef, useState} from 'react';
import {View, Dimensions, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import IconClose from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import {getCatsAction} from '../../core';
import {RNCamera} from 'react-native-camera';
import {Gyroscope} from '../../components/gyroscope/Gyroscope';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let cameraRef = useRef(null);

  return (
    <View
      style={{
        backgroundColor: 'red',
        width: 500,
        height: 500,

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <IconClose name="stepforward" size={20} color="#AA0430" />
      {/*  <Gyroscope /> */}
      <TouchableOpacity onPress={() => dispatch(getCatsAction())}>
        <Text>Call me</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ReactPlayer')}>
        <Text>React Player</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('YoutubePlayer')}>
        <Text>YoutubePlayer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ScanQR')}>
        <Text>QR Scan</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Details Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Text>Camera</Text>
      </TouchableOpacity>

      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'file:///data/user/0/com.newfeatures/cache/Camera/a67207f5-d5f5-449a-9ccb-4c4389d90aee.jpg',
        }}
      />
    </View>
  );
};
