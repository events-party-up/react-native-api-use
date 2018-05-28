import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native' 

import SVGImage from 'react-native-svg-image'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <SVGImage
          style={{ width: 80, height: 80 }}
          source={{uri:'https://fluent-panda.appspot.com.storage.googleapis.com/dumbbell.svg'}}
        />
      </View>
    );
  }
}