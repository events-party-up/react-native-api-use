import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

// ListView
import EasyListView from 'react-native-easy-listview-gridview'
export default class ListViewSample extends Component {
  constructor(props) {
    super(props)

    this.renderListItem = this._renderListItem.bind(this)
    this.renderGridItem = this._renderGridItem.bind(this)
    this.onFetch = this._onFetch.bind(this)
  }

  render() {
    console.log('renderListItem 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <EasyListView
        ref={component => this.listview = component}
        renderItem={this.renderListItem}
        refreshHandler={this.onFetch}
        loadMoreHandler={this.onFetch}
      />
    )
  }

  _renderListItem(rowData, sectionID, rowID, highlightRow) {
    console.log('_renderListItem ：', rowData, sectionID, rowID, highlightRow)
    return (
      <View
        style={Styles.rowContainer}>
        <TouchableHighlight
          style={{flex: 1}}
          onPress= {() => alert(rowData)}>
          <View
            style={Styles.rowContent}>
            <Text
              style={Styles.rowTitle}>
              {rowData}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={Styles.separate}/>
      </View>
    )
  }

  _onFetch(pageNo, success, failure) {
    console.log('_onFetch ：', pageNo, success, failure);
  }
}

// GridView
import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import EasyListView from 'react-native-easy-listview-gridview'

export default class GridViewSample extends Component {
  constructor(props) {
    super(props)

    this.renderListItem = this._renderListItem.bind(this)
    this.renderGridItem = this._renderGridItem.bind(this)
    this.onFetch = this._onFetch.bind(this)
  }

  render() {
    return (
      <EasyListView
        ref={component => this.gridview = component}
        column={2}
        renderItem={this.renderGridItem}
        refreshHandler={this.onFetch}
        loadMoreHandler={this.onFetch}
        // other props
      />
    )
  }

  _renderGridItem(index, rowData, sectionID, rowID, highlightRow) {
    return (
      <View
        key={index}
        style={GridStyles.rowContainer}>
        <TouchableHighlight
          style={{flex: 1}}
          onPress= {() => alert(rowData)}>
          <View
            style={GridStyles.rowContent}>
            <Text
              style={GridStyles.rowTitle}>
              {rowData}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  _onFetch(pageNo, success, failure) {
    // ...
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});