import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Masonry from 'react-native-masonry'
import FastImage from 'react-native-fast-image'

const fastProps = {
  onProgress: e => console.log(e.nativeEvent.loaded / e.nativeEvent.total),
  resizeMode: FastImage.resizeMode.contain
};

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Masonry
          sorted // optional - Default: false
          columns={4} // optional - Default: 2
          bricks={[
            { uri: 'http://image1.jpg' },
            { uri: 'http://image2.jpg' },
            { uri: 'http://image3.jpg' }
          ]}
        />
        
        <Masonry
          bricks={data}
          customImageComponent={FastImage}
          customImageProps={fastProps} />
      </View>
    );
  }
}