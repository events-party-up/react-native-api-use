import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

import Gallery from 'react-native-gallery';
const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Gallery
          style={{flex: 1, backgroundColor: 'black'}}
          images={[
            'http://p10.qhimg.com/t019e9cf51692f735be.jpg',
            'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
            'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});