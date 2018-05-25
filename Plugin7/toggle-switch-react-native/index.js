import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ToggleSwitch from 'toggle-switch-react-native'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ToggleSwitch
          isOn={false}
          onColor='green'
          offColor='red'
          label='Example label'
          labelStyle={{color: 'black', fontWeight: '900'}}
          size='large'
          onToggle={ (isOn) => console.log('changed to : ', isOn) }
        />
      </View>
    );
  }
}