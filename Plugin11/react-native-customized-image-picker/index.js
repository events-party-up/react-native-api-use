import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ImagePicker from 'react-native-customized-image-picker'

export default class MyComponent extends Component {
  ImagePicker = () => {
    console.log('ImagePicker ：', )
    ImagePicker.openPicker({}).then(image => {
      console.log(image);
    });
  }
  mutilple = () => {
    console.log('mutilple ：', )
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    });
  }
  withParams = () => {
    console.log('withParams ：', )
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  openVideo = () => {
    console.log('openVideo ：', )
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      isVideo: true
    }).then(image => {
      console.log(image);
    });
  }
  Clean = () => {
    console.log('Clean ：', )
    ImagePicker.clean().then(() => {
      console.log('removed all tmp images from tmp directory');
    }).catch(e => {
      console.log(e);
    });
  }
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Button
          onPress={this.ImagePicker}
          title={'选择器'}
          color="#841584"
        />
        <Button
          onPress={this.mutilple}
          title={'打开选择器'}
          color="#841584"
        />
        <Button
          onPress={this.withParams}
          title={'带有参数'}
          color="#841584"
        />
        <Button
          onPress={this.openVideo}
          title={'打开video'}
          color="#841584"
        />
        <Button
          onPress={this.Clean}
          title={'清空'}
          color="#841584"
        />
      </View>
    );
  }
}