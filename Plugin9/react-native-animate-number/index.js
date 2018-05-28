import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import AnimateNumber from 'react-native-animate-number'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
         <AnimateNumber value={100}/>

         <AnimateNumber value={100} formatter={(val) => {
            return '$ ' + parseFloat(val).toFixed(2)
          }}/>
          
          <AnimateNumber value={100} timing="linear"/>
          <AnimateNumber value={100} timing="easeOut"/>
          <AnimateNumber value={100} timing="easeIn"/>

          <AnimateNumber value={200}
            countBy={1}
            timing={(interval, progress) => {
              // slow start, slow end
              return interval * (1 - Math.sin(Math.PI*progress) )*10
            }}/>
      </View>
    );
  }
}