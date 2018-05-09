import React, { PureComponent, Component } from 'react';
import {
  Text,
  Navigator,
  View
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import InitialScreen from './components/InitialScreen';

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class Routing extends Component {
  render() {
    const initialRoute = {
      component: InitialScreen
    };
    console.log('Routing 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flex: 1, }}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene}/>
      </View>
    );
  }
}