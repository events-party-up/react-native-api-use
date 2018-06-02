import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';

export default class MyComponent extends Component {
  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    const url = "http://lacavewebradio.chickenkiller.com:8000/stream.mp3";
    ReactNativeAudioStreaming.pause();
    ReactNativeAudioStreaming.resume();
    ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
    ReactNativeAudioStreaming.stop();

  }
  
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Player url={"http://lacavewebradio.chickenkiller.com:8000/stream.mp3"} />
      
      
      </View>
    );
  }
}