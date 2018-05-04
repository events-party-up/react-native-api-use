import React from "react"
import {
  Text,
  View,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import {PullView} from 'react-native-pull';

export default class Pulls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onPullRelease = (resolve) => {
    console.log('onPullRelease  resolve ：', resolve);
    //do something
    setTimeout(() => {
        resolve();
    }, 3000);
  }

  render() {
    console.log('Pulls 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <PullView onPullRelease={this.onPullRelease}>
          {/* <Children /> */}
        </PullView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});