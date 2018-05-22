import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Button} from 'react-native-buttons';

class button extends Component {
  _onPressButton () {
    console.log('onpress');
  }
  render() {
    console.log('button  组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{marginLeft: 20, marginTop: 20}}>
          <Button
            type="surface"
            size="small"
            theme="orange"
            loadingTitle="正在加载"
            isLoading={true}
            onPress={this._onPressButton}>Small</Button>
          <Button
            selfStyle={{marginLeft: 120}}
            type="ghost"
            size="small"
            theme="blue"
            isLoading={true}
            onPress={this._onPressButton}>Default</Button>
      </View>
      );
  }
}

export default button;