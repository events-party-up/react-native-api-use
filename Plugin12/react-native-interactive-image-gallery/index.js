import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ImageBrowser from 'react-native-interactive-image-gallery'

export default class MyComponent extends Component {
  render() {
    const imageURLs: Array<Object> = this.props.images.map(
      (img: Object, index: number) => ({
        URI: img.uri,
        thumbnail: img.thumbnail,
        id: String(index),
        title: img.title,
        description: img.description
      })
    )
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ImageBrowser images={imageURLs} />
      </View>
    );
  }
}