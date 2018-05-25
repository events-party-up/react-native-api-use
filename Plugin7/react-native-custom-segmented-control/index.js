import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import {CustomSegmentedControl} from 'react-native-custom-segmented-control'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CustomSegmentedControl 
          style={{
            flex:1,
            backgroundColor: 'white',	
            marginVertical: 8
          }}
          textValues={['ORDERS','PRODUCTS' ]}
          selected={0}
          segmentedStyle={{
            selectedLineHeight: 2,
            fontSize:17,
            fontWeight: 'bold', // bold, italic, regular (default)
            segmentBackgroundColor: 'transparent',
            segmentTextColor: '#7a92a5',
            segmentHighlightTextColor: '#7a92a599',
            selectedLineColor: '#00adf5',
            selectedLineAlign: 'bottom', // top/bottom/text
            selectedLineMode: 'text', // full/text
            selectedTextColor: 'black',                                                  
            selectedLinePaddingWidth: 30,
            segmentFontFamily: 'system-font-bold'
          }}
          animation={{
            duration: 0.7,
            damping: 0.5,
            animationType: 'middle-line',
            initialDampingVelocity: 0.4
          }}
          onSelectedWillChange={(event)=> {
          }}
          onSelectedDidChange={(event)=> {
          }}
        />
      </View>
    );
  }
}