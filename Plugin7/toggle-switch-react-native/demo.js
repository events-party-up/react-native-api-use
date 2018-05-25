
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'

export default class App extends Component<{}> {
  onToggle(isOn){
    alert('Changed to ' + isOn)
  }

  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Example Toggle Switch
        </Text>
        <Text style={styles.instructions}>
          Default Toggle
        </Text>
        <ToggleSwitch onToggle={this.onToggle} label="Hello" />
        <Text style={styles.instructions}>
          Default Toggle Large
        </Text>
        <ToggleSwitch onToggle={this.onToggle} size="large" label="Hello" />
        <Text style={styles.instructions}>
          Change On Color
        </Text>
        <ToggleSwitch onToggle={this.onToggle} onColor="#2196F3" size="medium" label="Hello" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});