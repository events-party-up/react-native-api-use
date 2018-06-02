import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  requireNativeComponent,
  Alert,
  Dimensions,
  Button,
  DeviceEventEmitter,
  Platform,
  PixelRatio,
} from 'react-native'

const ReactNative = require('react-native')
import IMUI from 'aurora-imui-react-native'
const PhotoBrowserView = IMUI.PhotoBrowserView;
const window = Dimensions.get('window')
const PHOTO_BROWSER = "PhotoBrowserView"

export default class PhotoBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    const { params } = this.props.navigation.state
    const photoPathArr = params ? params.photoPath : null
    const msgIdArr = params ? params.msgIds : null
    const msgId = params ? params.clickedMsgId : null
    this.refs[PHOTO_BROWSER].setPhotoPath(photoPathArr, msgIdArr, msgId)
  }

  render() {
    console.log('PhotoBrowser 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <PhotoBrowserView
          ref={PHOTO_BROWSER}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sendCustomBtn: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});