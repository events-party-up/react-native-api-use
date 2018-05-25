import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
} from 'react-native';    

import CollapsingToolbar from 'react-native-collapsingtoolbar';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TagInputExample extends Component {
  render() {
    console.log('TagInputExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CollapsingToolbar 
          leftItem={<Icon name="md-menu" size={30} color="#fff" />}
          rightItem={<Icon name="md-create" size={30}  color="#fff" />}   
          toolbarColor='#2196f3'  
          title='Demo Toolbar'
          src={require('../../../images/drawer6.png')}>
          <Text>
              Create             
          </Text>
        </CollapsingToolbar>

      </View>
    );
  }
}