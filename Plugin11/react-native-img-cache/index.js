import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import {CachedImage, CustomCachedImage, } from "react-native-img-cache";
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CachedImage source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }} />

        <CachedImage source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }} mutable />


        <CustomCachedImage
          component={Image}
          source={{ uri: 'http://loremflickr.com/640/480/dog' }} 
          indicator={ProgressBar} 
          style={{
            width: 320, 
            height: 240, 
          }}/>
      </View>
    );
  }
}