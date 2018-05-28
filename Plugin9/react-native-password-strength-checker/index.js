import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import PasswordStrengthChecker from 'react-native-password-strength-checker';
const strengLevels = [
      {
        label: 'Weak',
        labelColor: '#fff',
        widthPercent: '33',
        innerBarColor: '#fe6c6c'
      },
      {
        label: 'Weak',
        labelColor: '#fff',
        widthPercent: '33',
        innerBarColor: '#fe6c6c'
      },
      {
        label: 'Fair',
        labelColor: '#fff',
        widthPercent: '67',
        innerBarColor: '#feb466'
      },
      {
        label: 'Fair',
        labelColor: '#fff',
        widthPercent: '67',
        innerBarColor: '#feb466'
      },
      {
        label: 'Strong',
        labelColor: '#fff',
        widthPercent: '100',
        innerBarColor: '#6cfeb5'
      }
];

// Define too short object
const tooShort = {
      enabled: true,
      label: 'Too short',
      labelColor: 'red'
};

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <PasswordStrength
            secureTextEntry
            minLength={4}
            ruleNames="symbols|words"
            strengthLevels={strengthLevels}
            tooShort={tooShort}
            minLevel={0}
            barWidthPercent={65}
            showBarOnEmpty={true}
            barColor="#ccc"
            onChangeText={(text, isValid) => this.setState({ password: { value: text, isValid: isValid } })} 
        />
      </View>
    );
  }
}