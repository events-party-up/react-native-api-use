import React from "react"
import {
  Image,
  SwipeableListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native'

export default class SwipeableListViewSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    const ds = SwipeableListView.getNewDataSource();
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(...this._genDataSource({})),
    }
  }

  // _pressData: ({}: {[key]: boolean}),

  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    this._pressData = {};
  }
  
  render() {
    console.log('SwipeableListViewSimpleExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View
        title={this.props.navigator ? null : '<SwipeableListView>'}
        noSpacer={true}
        noScroll={true}>
        <SwipeableListView
          dataSource={this.state.dataSource}
          maxSwipeDistance={100}
          renderQuickActions={
            (rowData, sectionID, rowID) => {
            return (<View style={styles.actionsContainer}>
              <TouchableHighlight onPress={() => {
                Alert.alert('Tips', 'You could do something with this row: ' + rowData.text);
              }}>
                <Text>Remove</Text>
              </TouchableHighlight>
            </View>);
          }}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeperator}
        />
      </View>
    );
  }

  // _renderRow(rowData, sectionID, rowID, highlightRow: (sectionID, rowID) => {}) {
  _renderRow(rowData, sectionID, rowID,) {
    const rowHash = Math.abs(hashCode(rowData.id));
    const imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    console.log('_renderRow ：', rowData, sectionID, rowID, rowHash, imgSource, )
    return (
      <TouchableHighlight onPress={() => {}}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData.id + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _genDataSource(pressData) {
    console.log('_genDataSource pressData ：', pressData)
    const dataBlob = {};
    const sectionIDs = ['Section 0'];
    const rowIDs = [[]];
    /**
     * dataBlob example below:
      {
        'Section 0': {
          'Row 0': {
            id: '0',
            text: 'row 0 text'
          },
          'Row 1': {
            id: '1',
            text: 'row 1 text'
          }
        }
      }
    */
    // only one section in this example
    dataBlob['Section 0'] = {};
    for (let ii = 0; ii < 100; ii++) {
      const pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob[sectionIDs[0]]['Row ' + ii] = {id: 'Row ' + ii, text: 'Row ' + ii + pressedText};
      rowIDs[0].push('Row ' + ii);
    }
    return [dataBlob, sectionIDs, rowIDs];
  }

  _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
    console.log('_renderSeperator ：', sectionID, rowID, adjacentRowHighlighted)
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }
}

const THUMB_URLS = [
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
  ];
const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
const hashCode = function(str) {
  const hash = 15;
  for (const ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});