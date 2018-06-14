import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { ImageViewer } from 'react-native-image-fit';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ImageViewer
          disabled={false} // by default
          source={require('./photo.png')} // or { url: 'https://...' }
          doubleTapEnabled={true} // by default double tap will zoom image
          onMove={(e, gestureState) => null}
          onPress={(opening) => console.log(opening)}
          mainImageStyle={styles.someStyle}
          zoomedImageStyle={styles.zoomedImageStyle}
          mainImageProps={{
              resizeMode: 'contain'
          }}
          zoomedImageProps={{
              resizeMode: 'contain'
          }}
        />
      </View>
    );
  }
}