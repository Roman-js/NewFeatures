import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';
import {Camera, ScanQr, YouTubePlayer, ReactPlayer} from '../components';

export const StackProfileNavigation: React.FC = () => {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={HomeScreen}
        //options={{headerShown: false}}
      />
      <ProfileStack.Screen name="Details" component={HomeScreen} />
      <ProfileStack.Screen name="ScanQR" component={ScanQr} />
      <ProfileStack.Screen name="YoutubePlayer" component={YouTubePlayer} />
      <ProfileStack.Screen name="ReactPlayer" component={ReactPlayer} />
      <ProfileStack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};
