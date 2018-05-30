import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import BouncingPreloader from 'react-native-bouncing-preloader'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        
        <BouncingPreloader
          icons={[
            'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
            require('./assets/image.png'),
          ]}
          leftRotation="-680deg"
          rightRotation="360deg"
          leftDistance={-180}
          rightDistance={-250}
          speed={1200} />
          
        <BouncingPreloader
          icons={[
            require('./assets/image1.png'),
            require('./assets/image2.png'),
          ]}/>
      </View>
    );
  }
}