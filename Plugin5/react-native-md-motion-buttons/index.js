import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Login } from 'react-native-md-motion-buttons';

export default class Home extends Component {
  render() {
    console.log('Home 组件 this.state, this.props ：', this.state, this.props, )
    return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Text style={styles.welcome}>
        New screen
      </Text>
      <Button title="Reset" onPress={this.props.logout} />

    </View>)
  }
}