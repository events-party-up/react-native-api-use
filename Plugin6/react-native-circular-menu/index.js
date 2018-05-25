
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CircularMenu from 'react-native-circular-menu';

export default class CircularMenuDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('CircularMenuDemo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <CircularMenu
          items={this._renderItems()}
          closeBtn={this._renderCloseBtn()}
          show={false}
          // items={[...]}
          position={"topLeft"}
        />
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
});