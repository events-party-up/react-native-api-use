import React, { Component } from 'react';
import { View, Text } from 'react-native';

import KeepAwake from 'react-native-keep-awake';

// Method 1
const MyComponent extends Component {
  render() {
    if (this.props.screenShouldBeAwake) {
      return (
        <View>
          <Text>Screen will be kept awake</Text>
          <KeepAwake />
        </View>
      )
    } else {
      return (
        <View>
          <Text>Screen can sleep</Text>
        </View>
      );
    }
  }
}

// Method 2
function changeKeepAwake(shouldBeAwake) {
  if (shouldBeAwake) {
    KeepAwake.activate();
  } else {
    KeepAwake.deactivate();
  }
}