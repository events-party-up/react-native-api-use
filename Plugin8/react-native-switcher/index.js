import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  
import Switcher from 'react-native-switcher';

export default class Demo extends Component {
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Switcher>
          <View style={{flex: 1, backgroundColor: 'green'}} />
          <View style={{flex: 1, backgroundColor: 'orange'}} />
          <View style={{flex: 1, backgroundColor: 'red'}} />
        </Switcher>
      </View>
    );
  }
}