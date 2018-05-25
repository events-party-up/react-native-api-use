
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RadialMenu from 'react-native-radial-menu'

export default class rnRadialMenu extends Component {
  
  constructor(props) {
    super(props);
    this._onOpen = this._onOpen.bind(this);
    this._onClose = this._onClose.bind(this);
  }
  
  componentWillMount() {
    this.setState({ output: "" });
  }

  _onOpen() {
    this.setState({
      output: 'on menu open'
    })
  }

  _onClose() {
    this.setState({
      output: 'on menu close'
    })
  }

  renderItems(count) {
    return [...Array(count)].map((_, i) => {
      return (
        <View style={styles.item} key={i}
          onSelect={ () => {this.setState({output: `onSelect ${i}`})} } >
          <Text>{i}</Text>
        </View>
      );
    })
  }

  renderRoot() {
    return (
      <View style={[styles.item, styles.root]}>
        <Text>MENU</Text>
      </View>
    )
  }

  render() {
    console.log('rnRadialMenu 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={styles.output}>{this.state.output}</Text>
        <RadialMenu
          onOpen ={ this._onOpen }
          onClose={ this._onClose } >

          { this.renderRoot() }
          { this.renderItems(5) }
        </RadialMenu>

        <RadialMenu spreadAngle={120} startAngle={30}
          onOpen ={ this._onOpen }
          onClose={ this._onClose } >

          { this.renderRoot() }
          { this.renderItems(4) }
        </RadialMenu>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },
  root: {
    backgroundColor: '#FFCC00'
  }
});