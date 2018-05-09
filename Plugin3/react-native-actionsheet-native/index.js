import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ActionSheet from 'react-native-actionsheet';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  showAction = () => {
    console.log('showAction ：', );
    ActionSheet.showActionSheetWithOptions({
      options: ['Disconnect', 'Cancel'],
      cancelButtonIndex: 1
    },
    (buttonIndex) => {
      const { dispatch } = this.props;
      if (buttonIndex === 0) {
        // Do something.
      }
    });
  }
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <Text onPress={this.showAction.bind(this, )}>
          showAction
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});