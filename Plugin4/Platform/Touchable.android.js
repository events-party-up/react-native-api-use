import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Platform,
  TouchableNativeFeedback,
} from 'react-native'

export default class TouchableAndroid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('TouchableAndroid 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableNativeFeedback
        {...this.props}
      >
        {this.props.children}
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});