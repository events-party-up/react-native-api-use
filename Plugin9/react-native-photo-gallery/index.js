import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Gallery from 'react-native-photo-gallery';

export default class YourGalleryComponent extends Component {
  render() {
    console.log('YourGalleryComponent 组件 this.state, this.props ：', this.state, this.props, )
    const data = [
      {
        id: 'first image',
        image: require('./yourImage.jpg'),
        thumb: require('./yourImageThumb.jpg'),
        overlay: <Overlay />
      },
      {
        id: 'Second image',
        image: require('./yourImage2.jpg'),
        thumb: require('./yourImageThumb2.jpg'),
        overlay: <OtherOverlay />
      }
    ];

    return <Gallery data={data} />;
  }
}