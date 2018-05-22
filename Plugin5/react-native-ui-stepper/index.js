import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import UIStepper from 'react-native-ui-stepper';

export default class MyComponent extends Component {
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <UIStepper
                    onValueChange={(value) => { this.setValue(value) }}
                />


            </View>
        );
    }
  }