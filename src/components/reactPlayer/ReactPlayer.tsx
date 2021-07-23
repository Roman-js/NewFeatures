import React from 'react';
import TrackPlayer from 'react-native-track-player';
import {TouchableOpacity, View, Dimensions, Text} from 'react-native';

export const ReactPlayer = () => {
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: 'https://soundcloud.com/gazgolder/01-4?in=gazgolder/sets/basta4.mp3',
      title: 'Track Title',
      artist: 'Track Artist',
      //artwork: require('track.png'),
    });

    // Start playing it
    await TrackPlayer.play();
  };
  return (
    <View
      style={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'lightgreen',
      }}>
      <TouchableOpacity onPress={() => start()}>
        <Text>Start Player</Text>
      </TouchableOpacity>
    </View>
  );
};
