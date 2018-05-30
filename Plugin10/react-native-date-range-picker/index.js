import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DateRangePicker from './DateRangePicker';

export default class App extends Component {
  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <DateRangePicker
          initialRange={['2018-04-01', '2018-04-10']}
          onSuccess={(s, e) => alert(s + '||' + e)}
          theme={{ markColor: 'red', markTextColor: 'white' }}/>
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
  }
});