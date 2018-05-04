

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter, 
  NativeModules,
} from 'react-native';

import invariant from 'invariant';

var listener;
export default class RNShakeEvent extends Component {
  
  componentWillMount() {
    console.log('RNShakeEvent 组件 this.state, this.props ：', this.state, this.props, )
    RNShakeEvent.addEventListener('shake', () => {
      console.log('Device shake!');
    });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }
  // static addEventListener(type, handler) {
  //   invariant(
  //     type === 'shake',
  //     'RNShakeEventIOS only supports `shake` event'
  //   );
  //   listener = DeviceEventEmitter.addListener('ShakeEvent', () => {
  //     if (handler) {
  //       handler();
  //     }
  //   });
  // }
  // static removeEventListener(type, handler) {
  //   invariant(
  //     type === 'shake',
  //     'RNShakeEventIOS only supports `shake` event'
  //   );
  //   if (!listener) {
  //     return;
  //   }
  //   if (handler) {
  //     handler();
  //   }
  //   listener.remove();
  // }
};