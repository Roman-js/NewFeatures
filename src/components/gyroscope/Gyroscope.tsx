import React from 'react';
import {
  setUpdateIntervalForType,
  SensorTypes,
  accelerometer,
} from 'react-native-sensors';
import {View, Text} from 'react-native';

setUpdateIntervalForType(SensorTypes.accelerometer, 1000);

export const Gyroscope = () => {
  const subscription = accelerometer.subscribe(({x, y, z, timestamp}) => {
    console.log('position: ', x, y, z);
    console.log(new Date(timestamp).toLocaleTimeString('fr-FR'));
  });
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};
