import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  
var TouchID = require('react-native-touch-id');
//or import TouchID from 'react-native-touch-id'

export default class YourComponent extends React.Component {
  _pressHandler() {
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        AlertIOS.alert('Authenticated Successfully');
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });

  }

  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    TouchID.isSupported()
    .then(biometryType => {
      // Success code
      if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
      } else {
          console.log('TouchID is supported.');
      }
    })
    .catch(error => {
      // Failure code
      console.log(error);
    });
  }
  

  render() {
    console.log('YourComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <TouchableHighlight onPress={this._pressHandler}>
          <Text>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};