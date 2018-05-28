import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import CollapsingToolbar from 'react-native-collapsingtoolbar';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyComponent extends Component {
  capture = () => {
    this.refs.cropper.crop()
    .then(base64 => console.log(base64))
  }
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ImageCrop 
          ref={'cropper'}
          image={this.state.image}
          cropHeight={this.state.height}
          cropWidth={this.state.width}
          zoom={this.state.zoom}
          maxZoom={80}
          minZoom={20}
          panToMove={true}
          pinchToZoom={true}
        />
        <Text onPress={this.capture()}>Capture()</Text>
      </View>
    );
  }
}