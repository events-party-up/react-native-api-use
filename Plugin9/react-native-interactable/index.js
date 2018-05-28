import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Interactable from 'react-native-interactable'

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0)
  }
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Interactable.View
          horizontalOnly={true}
          snapPoints={[{x: 0}, {x: -200}]}
          onSnap={this.onDrawerSnap}>
        
          {/* // the view that you wrap here will now support interactions */}
        
        </Interactable.View>


        <Animated.View style={{
          transform: [{
            scale: this._deltaY.interpolate({
              inputRange: [-150, -150, 0, 0],
              outputRange: [0.3, 0.3, 1, 1]
            })
          }]
        }}>
          {/* ... */}
        </Animated.View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{y: 0}, {y: -150}]}
          animatedValueY={this._deltaY}
        >
          {/* ... */}
        </Interactable.View>
      </View>
    );
  }
}