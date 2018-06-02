import React from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'
import Video from 'react-native-af-video-player'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

const url = 'https://your-url.com/video.mp4'

export default class VideoExample extends React.Component {
  render() {
    console.log('VideoExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Video url={url} />
      </View>
    )
  }
}