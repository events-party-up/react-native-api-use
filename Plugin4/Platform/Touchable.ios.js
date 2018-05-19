import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'

export default class TouchableIOS extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('TouchableIOS 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableOpacity
        {...this.props}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});