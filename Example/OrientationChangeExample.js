import React from "react"
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  DeviceEventEmitter,
} from 'react-native'
import EmitterSubscription from 'EmitterSubscription';

class OrientationChangeExample extends React.Component {
  state = {
    currentOrientation: '',
    orientationDegrees: 0,
    isLandscape: false,
  };
  componentDidMount() {
    console.log('OrientationChangeExample 组件componentDidMount挂载 ：', this.state, this.props, )
    this._orientationSubscription = DeviceEventEmitter.addListener(
      'namedOrientationDidChange', this._onOrientationChange,
    );
  }

  componentWillUnmount() {
    this._orientationSubscription.remove();
  }

  _onOrientationChange = (orientation) => {
    console.log('_onOrientationChange ：', orientation)
    this.setState({
      currentOrientation: orientation.name,
      orientationDegrees: orientation.rotationDegrees,
      isLandscape: orientation.isLandscape,
    });
  }

  render() {
    console.log('OrientationChangeExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <OrientationChangeExample />
      </ScrollView>
    );
  }
}
