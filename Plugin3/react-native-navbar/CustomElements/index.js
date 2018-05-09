import React, { PureComponent, Component } from 'react';
const {
  Text,
  View
} = React;
import NavigationBar from 'react-native-navbar';
import Pickachu from './components/Pickachu';
import Charmander from './components/Charmander';
import Bulbazavr from './components/Bulbazavr';

class CustomElements extends Component {
  render() {
    console.log('CustomElements 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900' }}>
        <NavigationBar
          title={<Pickachu/>}
          leftButton={
            <Charmander
              style={{ marginLeft: 8 }}
              onPress={() => alert('Charmandeeeer!')}/>}
          rightButton={
            <Bulbazavr
              style={{ marginRight: 8 }}
              onPress={() => alert('Bulbazaaaavr!')}/>} />
      </View>
    );
  }
}