import React, { Component } from 'react';
import { View } from 'react-native';
import { ProcessingManager } from 'react-native-video-processing';
export default class App extends Component {
  componentWillMount() {
    const { source } = this.props;
    ProcessingManager.getVideoInfo(source)
      .then(({ duration, size, frameRate, bitrate }) => console.log(duration, size, frameRate, bitrate));

    ProcessingManager.trim(source, options) // like VideoPlayer trim options
          .then((data) => console.log(data));

    ProcessingManager.compress(source, options) // like VideoPlayer compress options
              .then((data) => console.log(data));

    ProcessingManager.reverse(source) // reverses the source video 
              .then((data) => console.log(data)); // returns the new file source

    ProcessingManager.boomerang(source) // creates a "boomerang" of the surce video (plays forward then plays backwards)
              .then((data) => console.log(data)); // returns the new file source

    const maximumSize = { width: 100, height: 200 };
    ProcessingManager.getPreviewForSecond(source, forSecond, maximumSize)
      .then((data) => console.log(data))
  }
  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return <View />;
  }
}