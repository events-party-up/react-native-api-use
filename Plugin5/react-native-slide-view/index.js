import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import SlideView from 'react-native-slide-view';

export default class MyComponent extends Component {
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <SlideView>
                    <YourCustomComponent />
                </SlideView>
            </View>
        );
    }
  }