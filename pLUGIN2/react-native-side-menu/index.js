import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  Image,
  View,
  PanResponder,
  StyleSheet
} from 'react-native';
import SideMenu from 'react-native-side-menu'

class ContentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('ContentView 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

export default class Application extends React.Component {
  render() {
    const menu = <Menu navigator={navigator}/>;
    console.log('Application 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});