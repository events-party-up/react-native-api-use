import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

export default class MyComponent extends Component {
  render () {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <RaisedTextButton title='touch me' />
        <TextButton title='do not touch me' disabled />
      </View>
    )
  }
}