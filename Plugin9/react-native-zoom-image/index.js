import React, { PureComponent, Component } from 'react'
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native' 

import ZoomImage from 'react-native-zoom-image';
import {Easing} from 'react-native'; 

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ZoomImage
          source={{uri: 'https://ooo.0o0.ooo/2017/03/31/58de0e9b287f6.jpg'}}
          imgStyle={{width: 250, height: 230}}
          style={styles.img}
          duration={200}
          enableScaling={false}
          easingFunc={Easing.ease}
        />
      </View>
    );
  }
}

