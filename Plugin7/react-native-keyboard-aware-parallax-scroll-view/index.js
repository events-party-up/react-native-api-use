import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ParallaxKeyboardAwareScrollView from 'react-native-keyboard-aware-parallax-scroll-view'; 

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ParallaxKeyboardAwareScrollView
          backgroundImage={{ uri: kitchenPicture }}
          imageHeight={160}
          onScroll={props.onScroll}
        >
            {renderContent()}
        </ParallaxKeyboardAwareScrollView>
      </View>
    );
  }
}