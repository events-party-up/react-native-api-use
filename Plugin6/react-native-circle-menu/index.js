import React, {Component} from 'react'
import CircleMenu from '@ramotion/react-native-circle-menu'

export default class Example extends Component {
    items = [
      {
        name: 'md-home',
        color: '#298CFF'
      },
      {
        name: 'md-search',
        color: '#30A400'
      },
      {
        name: 'md-time',
        color: '#FF4B32'
      },
      {
        name: 'md-settings',
        color: '#8A39FF'
      },
      {
        name: 'md-navigate',
        color: '#FF6A00'
      }
    ];
    
    onPress = index => console.warn(`${this.items[index].name} icon pressed!`);
    
    render() {
      console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    	return <CircleMenu
            bgColor="#E74C3C"
            items={this.items}
            onPress={this.onPress}
        />
    }
}