import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import CircleSizeSelector from 'react-native-circle-size-selector'

export default class App extends Component {
  state = {
    value: 3,
  }

  onChange = (value) => {
    console.log('onChange ：', value)
    this.setState({ value })
  }

  render () {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <CircleSizeSelector
          minValue={1}
          maxValue={7}
          initialValue={3}
          onChange={this.onChange}
        />
        
        <CircleSizeSelector
          manualValues={[1, 2, 3, 5, 7, 11, 13]}
        />

        <CircleSizeSelector
        >
          <View>
            <Text>
              {this.state.value}
            </Text>
          </View>
        </CircleSizeSelector>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});