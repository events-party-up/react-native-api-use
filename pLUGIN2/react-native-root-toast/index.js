import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TextInput
} from 'react-native';
import Toast from 'react-native-root-toast';

export default class ToastApp extends Component {
  showToast = () => {
    console.log('  showToast ：', , )
    this.toast = Toast.show('This is a message', {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
          // calls on toast\`s appear animation start
      },
      onShown: () => {
          // calls on toast\`s appear animation end.
      },
      onHide: () => {
          // calls on toast\`s hide animation start.
      },
      onHidden: () => {
          // calls on toast\`s hide animation end.
      }
    });
  }
  hideToast = () => {
    console.log('  hideToast ：',  )
    this.toast.hide(toast);
  }
  render() {
    return (
      <View style={[{flex: 1}]}>
        <Text onPress={this.showToast.bind(this, )}>showToast</Text>
        <Text onPress={this.hideToast.bind(this, )}>hideToast</Text>
      </View>
    );
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
 
  componentDidMount() {
    setTimeout(() => this.setState({
        visible: true
    }), 2000); // show toast after 2s

    setTimeout(() => this.setState({
        visible: false
    }), 5000); // hide toast after 5s
  };

  render() {
    return (
      <Toast
        visible={this.state.visible}
        position={50}
        shadow={false}
        animation={false}
        hideOnPress={true}
      >This is a message</Toast>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});