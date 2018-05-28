import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ImagePreview from 'react-native-image-preview';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ImagePreview visible={visible} source={{uri: 'some-source'}} close={setVisibleToFalse} />
      </View>
    );
  }
}