import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { UltimateListView, UltimateRefreshView } from 'react-native-ultimate-listview'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <UltimateRefreshView onRefresh={this.onRefresh}>
          <YourView/>
        </UltimateRefreshView>

        <UltimateListView
          ref={ref => this.listView = ref}
          key={this.state.layout}
          onFetch={this.onFetch}
          keyExtractor={(item, index) => `${index} - ${item}`} 
          refreshableMode="advanced" // basic or advanced
          item={this.renderItem} // this takes three params (item, index, separator)       
          displayDate
          arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }}/>
      </View>
    );
  }
}