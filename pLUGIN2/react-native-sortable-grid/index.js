import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

import SortableGrid from 'react-native-sortable-grid'

// 还有很多demo
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <SortableGrid>
          {
            ['a', 'b', 'c'].map( (letter, index) =>
              <View key={index}>
                <Text>{letter}</Text>
              </View>
            )
          }
        </SortableGrid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});