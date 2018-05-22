import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import CrossMarker from 'react-native-animated-check-mark';

export default class myproject extends Component {
  render() {
    console.log('myproject 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <CrossMarker />
          <CrossMarker
            height={50}
            width={5}
            color={'green'}
            delay={300}
            onMarkPress={() => console.log('To Cross')}
            onCrossPress={() => console.log('To Mark')}
          />
          <CrossMarker height={70} width={6} color={'red'} delay={1000} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
