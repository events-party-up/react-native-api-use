import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CollapsibleList from 'react-native-collapsible-list'

export default class App extends Component {
  render () {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <CollapsibleList
          numberOfVisibleItems={1}
          items={[
            <View style={styles.collapsibleItem}>
              <Text>Hello Collapsable List :)</Text>
            </View>,
            <View style={styles.collapsibleItem}>
              <Text>Collapsable List Item</Text>
            </View>,
            <View style={styles.collapsibleItem}>
              <Text>Collapsable List Item</Text>
            </View>
          ]}
        />
      </View>
    )
  }
}