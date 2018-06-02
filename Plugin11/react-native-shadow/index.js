import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

const shadowOpt = {
	width:100,
	height:100,
	color:"#000",
	border:2,
	radius:3,
	opacity:0.2,
	x:0,
	y:3,
	style:{marginVertical:5}
}
export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Shadow setting={shadowOpt}>
          <View style={{width:100,height:100}}/>
        </Shadow>
      </View>
    );
  }
}