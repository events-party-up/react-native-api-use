import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import {Image, CacheManager, } from "react-native-expo-image-cache";

// preview can be a local image or a data uri
const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };
const uri = "https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641";

const {uri} = this.props;
const path = CacheManager.get(uri).getPath();



export default class MyComponent extends Component {

componentDidMount() {
  console.log('CacheManager.get(uri).cancel() 组件componentDidMount挂载 ：', this.state, this.props, )
  CacheManager.get(uri).cancel()
}

  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Image style={{ height: 100, width: 100 }} {...{preview, uri}} />
      
      
      
      
      </View>
    );
  }
}