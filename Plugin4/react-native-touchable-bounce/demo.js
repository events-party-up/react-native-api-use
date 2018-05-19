import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import TouchableBounce from 'react-native-touchable-bounce'

export default class DemExampleo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressCount: 0,
    }
  }

  onPress() {
    this.setState({
      pressCount: this.state.pressCount + 1
    });
  }

  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TouchableBounce
        </Text>
        <Text style={styles.instructions}>
          Press count: {this.state.pressCount}
        </Text>
        <TouchableBounce onPress={this.onPress}>
          <Text style={styles.button}>Click me</Text>
        </TouchableBounce>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#cdcdcd',
    padding: 20,
  }
});