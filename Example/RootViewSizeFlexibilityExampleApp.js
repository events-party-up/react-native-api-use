import React from "react"
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

export default class RootViewSizeFlexibilityExampleApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }

  _onPressButton = () => {
    console.log('_onPressButton ：', )
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    const viewStyle = this.state.toggled ? styles.bigContainer : styles.smallContainer;
    console.log('RootViewSizeFlexibilityExampleApp 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <View style={viewStyle}>
          <View style={styles.center}>
            <Text style={styles.whiteText}>
              React Native Button
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    height: 60,
    backgroundColor: 'gray',
  },
  smallContainer: {
    flex: 1,
    height: 40,
    backgroundColor: 'gray',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  }
});
