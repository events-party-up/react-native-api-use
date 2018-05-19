import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import TouchableBounce from 'react-native-touchable-bounce'

export default class Demo extends React.Component {
  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <TouchableBounce onPress={() => console.log('pressed')}>
          <Text>Click me</Text>
        </TouchableBounce>
      </View>
    );
  }
}