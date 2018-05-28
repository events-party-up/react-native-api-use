import React, { Component } from 'react';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default class Example extends Component {
  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <DotIndicator color='white' />
    );
  }
}