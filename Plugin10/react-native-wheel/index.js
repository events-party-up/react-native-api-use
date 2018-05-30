import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import WheelView from 'react-native-wheel';

import Dimensions from 'Dimensions';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;


let wheelData = [1,'two',false,0.10,'six','seven','eight','nine','ten'];

let currentIndex;

export default class AwesomeProject extends Component {
  ok(){
    ToastAndroid.show('select index : ' + currentIndex +' select item : ' + wheelData[currentIndex] ,ToastAndroid.SHORT);
  }
  _onItemChange(index){
    currentIndex = index;
  }
  render() {
    console.log('AwesomeProject 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={styles.ok} onPress={this.ok.bind(this)} >
          确定
        </Text>
        <WheelView
          style={styles.wheelview}
          onItemChange={this._onItemChange.bind(this)}
          values={wheelData}
          isLoop={false}
          selectedIndex={0}
          textSize={20}
          velocityFling={20}
        />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ok: {
    margin: 5,
    color: '#000000',
    fontSize: 18,
  },
  wheelview: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT/5*2,
  },
});