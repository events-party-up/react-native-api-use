import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { drag, pinch, GestureView } from 'react-native-gestures';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  }
})

const movable = {
  backgroundColor: 'green',
  width: 100,
  height: 100,
  position: 'absolute'
}

export default class ShowCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movablePosition: {}
    }
  }
  render() {
    console.log('ShowCase 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <GestureView
          style={movable}
          gestures={[drag, pinch]}
          toStyle={(layout) => {
            return {
              top: layout.y,
              left: layout.x,
              width: layout.width,
              height: layout.height,
              transform: [{rotate: `${layout.rotate}deg`}]
            }
          }}
          onError={console.error.bind(console)}>
          <Text>HEHE</Text>
          <Text>HEHE</Text>
        </GestureView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});