import React, { PureComponent, Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Basic extends Component {
  render() {
    console.log('Basic 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900', }}>
        <NavigationBar
          title={{ title: 'Title', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Forward', }} />
      </View>
    );
  }
}