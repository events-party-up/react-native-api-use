import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ProgressBarClassic from 'react-native-progress-bar-classic';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ProgressBarClassic progress={20} />

        <ProgressBarClassic
          progress={20}
          valueStyle={'balloon'}
        />
      </View>
    );
  }
}