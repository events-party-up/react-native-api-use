
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNGradientBlurView from 'react-native-gradient-blur-view'

export default class App extends Component {
  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <RNGradientBlurView style={styles.gradientView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  gradientView: {
    flex: 1
  }
});