import React, {useState, useCallback, useRef} from 'react';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Gyroscope} from '../gyroscope/Gyroscope';

export const YouTubePlayer = () => {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef();

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        //ref={frameRef}
        play={playing}
        videoId={'ey3zZLi-DSg'}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
};
