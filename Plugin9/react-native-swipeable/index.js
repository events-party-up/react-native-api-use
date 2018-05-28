import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Swipeable from 'react-native-swipeable';

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
          <Text>My swipeable content</Text>
        </Swipeable>
        
        <ScrollView scrollEnabled={!this.state.isSwiping}>
          <Swipeable
            onSwipeStart={() => this.setState({isSwiping: true})}
            onSwipeRelease={() => this.setState({isSwiping: false})}>
          </Swipeable>
        </ScrollView>
        
        <ListView
          scrollEnabled={!this.state.isSwiping}
          renderRow={() => (
            <Swipeable
              onSwipeStart={() => this.setState({isSwiping: true})}
              onSwipeRelease={() => this.setState({isSwiping: false})}>
            </Swipeable>
          )}
        />
      </View>
    );
  }
}