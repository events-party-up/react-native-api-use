import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import CollapsingToolbar from 'react-native-collapsingtoolbar';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyComponent extends Component {
  componentDidMount(){
    Proximity.addListener(this._proximityListener);
  }
  _proximityListener(data) {
    console.log('_proximityListener ：', data);
    this.setState({
      proximity: data.proximity,
      distance: data.distance // Android-only 
    });
  }
  
  componentWillUnmount() {
    Proximity.removeListener(this._proximityListener);
  }
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
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