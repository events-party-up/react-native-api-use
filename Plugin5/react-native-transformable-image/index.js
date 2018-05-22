import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import Image from 'react-native-transformable-image';

export default class MyComponent extends Component {
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <Image
                    style={{width: width, height: height}}
                    source={{uri: 'https://raw.githubusercontent.com/yoaicom/resources/master/images/game_of_thrones_1.jpg'}}
                    //pixels={{width: 3607, height: 2400}}
                />
            </View>
        );
    }
  }