import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import NestedListview, {NestedRow} from 'react-native-nested-listview'
const data = [{title: 'Node 1', items: [{title: 'Node 1.1'}, {title: 'Node 1.2'}]}]

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>

        <NestedListView
          data={data}
          getChildrenName={(node) => 'items'}
          onNodePressed={(node) => alert('Selected node')}
          renderNode={(node, level) => (
            <NestedRow
              level={level}
              style={styles.row}
            >
              <Text>{node.title}</Text>
            </NestedRow>
          )}
        />
      </View>
    );
  }
}