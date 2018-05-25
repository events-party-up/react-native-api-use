import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import DropdownAlert from 'react-native-dropdownalert';
export default class Example extends Component {
  onError = error => {
    if (error) {
      this.dropdown.alertWithType('error', 'Error', error);
    }
  };
  onClose(data) {
    // data = {type, title, message, action}
    // action means how the alert was closed.
    // returns: automatic, programmatic, tap, pan or cancel
  }
  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        // !!! Make sure it's the last component in your document tree.
        <DropdownAlert ref={ref => this.dropdown = ref} onClose={data => this.onClose(data)} />
      </View>
    );
  }
}