import React, { Component } from 'react';
import { AppRegistry, Alert, ScrollView,  } from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class Example extends Component {
  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',
      img: require('../assets/some_image.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <ScrollView>
        <View style={{
          position: 'absolute',
          top: 80,
          left: 30,
          width: windows.width,
          height: windows.height,
        }} level={20}
        >
          <Image style={{ width: 115, height: 70 }} source={require('./img/1/c2.png')} />
        </View>
      </ScrollView>
    );
  }
}