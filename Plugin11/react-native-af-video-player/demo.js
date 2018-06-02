import React,  {Component} from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'

import Video from 'react-native-af-video-player'

const theme = {
  title: '#FFF',
  more: '#446984',
  center: '#7B8F99',
  fullscreen: '#446984',
  volume: '#A5957B',
  scrubberThumb: '#234458',
  scrubberBar: '#DBD5C7',
  seconds: '#DBD5C7',
  duration: '#DBD5C7',
  progress: '#446984',
  loading: '#DBD5C7'
}
export default class MyComponent extends Component {
  play() {
    this.video.play()
    this.video.seekTo(25)
  }

  pause() {
    this.video.pause()
  }

  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Video
          url={url}
          ref={(ref) => { this.video = ref }}
          theme={theme}
        />
        <Button onPress={() => this.play()}>Play</Button>
        <Button onPress={() => this.pause()}>Pause</Button>
      </View>
    )
  }
}