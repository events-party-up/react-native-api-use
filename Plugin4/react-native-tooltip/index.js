import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  View,
  Text,
} from 'react-native';

import ToolTip from 'react-native-tooltip';

export default class MyToolTip extends React.Component {
  state = {
      input: 'chirag'
  };
  
  handleCopyPress = () => {
      AlertIOS.alert(`Copy has been pressed!`);
  };
  
  handleOtherPress = () => {
      AlertIOS.alert(`Other has been pressed!`);
  };
  
  handleHide = () => {
      console.log('Tooltip did hide');
  };
  
  handleShow = () => {
      console.log('tooltip did show');
  };
  
  render() {
    console.log('MyToolTip 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ToolTip
          ref='tooltip'
          actions={[
            {text: 'Copy', onPress: this.handleCopyPress },
            {text: 'Other', onPress: this.handleOtherPress }
          ]}
          onHide={this.handleHide}
          onShow={this.handleShow}
          underlayColor={'blue'}
          style={styles.selectedName}
        >
          <Text style={styles.welcome}>
            Press Here.
          </Text>
        </ToolTip>
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
  textinputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    width: 60,
    marginVertical: 2,
    marginHorizontal: 2,
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 5,
    borderColor: '#c7c7cc',
    padding: 2,
    fontSize: 14,
    backgroundColor: 'white',
  },
});
