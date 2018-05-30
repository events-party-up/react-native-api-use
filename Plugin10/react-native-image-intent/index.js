import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ImageIntent from 'react-native-image-intent';

export default class MyComponent extends Component {
  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    ImageIntent.getImageIntentBase64().then((imageBase64) => {
      console.log('BASE64', imageBase64);
    }).catch(e => console.log(e));

    
    ImageIntent.getImageIntentUrl().then((imageUrl) => {
      console.log('IMAGE_URL', imageUrl);
    }).catch(e => console.log(e));
  }
  
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Image style={{width: 100, height: 100}} source={{uri: `data:image/png;base64,${imageBase64}`}} />
      
        <Image style={{width: 100, height: 100}} source={{uri: `file://${imageUrl}`}} />
      </View>
    );
  }
}