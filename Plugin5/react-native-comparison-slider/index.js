import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import ComparisonSlider from "react-native-comparison-slider";

export default class Demo extends Component {
    render() {
        console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <ComparisonSlider 
                    imageWidth={667}
                    imageHeight={400}
                    initialPosition={50}
                    leftImage={require("./img/left.jpeg")}
                    rightImage={require("./img/right.jpeg")} 
                /> 
            </View>
        );
    }
  }