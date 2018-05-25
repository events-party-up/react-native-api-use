import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu, MenuItem } from 'react-native-side-reveal-menu';

export default class SideRevealMenuDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: true
    }

    this.onBtnPress = this.onBtnPress.bind(this);
  }

  onBtnPress() {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  }

  render() {
    console.log('SideRevealMenuDev 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>

        <TouchableNativeFeedback onPress={this.onBtnPress}>
          <View style={styles.btn}><Text style={styles.text}>Toggle Menu</Text></View>
        </TouchableNativeFeedback>

        <Menu isOpened={this.state.menuOpened}>
          <MenuItem onPress={() => console.log('Adress book pressed')}>
            <Icon name="address-book" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('Calendar pressed')}>
            <Icon name="calendar" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('Envelope pressed')}>
            <Icon name="envelope" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('Info pressed')}>
            <Icon name="info" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('User pressed')}>
            <Icon name="user" size={25} color="#fff" />
          </MenuItem>
        </Menu>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF'
  },
  btn: {
    padding: 20, backgroundColor: '#00ab6b', alignItems: 'center', justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});