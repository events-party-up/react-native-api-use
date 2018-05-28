import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import PulseLoader from 'react-native-pulse-loader';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <PulseLoader
          avatar={'https://scontent-fra3-1.cdninstagram.com/t51.2885-15/e35/11429705_386886401514376_550879228_n.jpg'}
        />
      </View>
    );
  }
}