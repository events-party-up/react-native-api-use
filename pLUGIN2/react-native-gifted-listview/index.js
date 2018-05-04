import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'

const GiftedListView = require('react-native-gifted-listview');

export default class Example extends React.Component {
  // /**
  //  * Will be called when refreshing
  //  * Should be replaced by your own logic
  //  * @param {number} page Requested page to fetch
  //  * @param {function} callback Should pass the rows
  //  * @param {object} options Inform if first load
  //  */
  _onFetch = (page = 1, callback, options) => {
    console.log('_onFetch ：', page, callback, options)
    setTimeout(() => {
      const rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      if (page === 3) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  }


  // /**
  //  * When a row is touched
  //  * @param {object} rowData Row data
  //  */
  _onPress = (rowData) => {
    console.log(rowData+' pressed');
  }

  // /**
  //  * Render a row
  //  * @param {object} rowData Row data
  //  */
  _renderRowView = (rowData) => {
    console.log('_renderRowView this.state, this.props ：', rowData, this.state, this.props, )
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        <Text>{rowData}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <View style={styles.navBar} />
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}

          refreshableTintColor="blue"
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    padding: 10,
    height: 44,
  },
};