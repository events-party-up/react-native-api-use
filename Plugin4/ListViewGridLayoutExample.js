import React from "react"
import {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const THUMB_URLS = [
  require('./img/Thumbnails/like.png'),
  require('./img/Thumbnails/dislike.png'),
  require('./img/Thumbnails/call.png'),
  require('./img/Thumbnails/fist.png'),
  require('./img/Thumbnails/bandaged.png'),
  require('./img/Thumbnails/flowers.png'),
  require('./img/Thumbnails/heart.png'),
  require('./img/Thumbnails/liking.png'),
  require('./img/Thumbnails/party.png'),
  require('./img/Thumbnails/poke.png'),
  require('./img/Thumbnails/superlike.png'),
  require('./img/Thumbnails/victory.png'),
];

export default class ListViewGridLayoutExample extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({})),
    }
  }

  _pressData = () => {
    console.log('  _pressData ：', _pressData, )
  }

  componentWillMount() {
    this._pressData = {};
  }

  render() {
    console.log('ListViewGridLayoutExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      // ListView wraps ScrollView and so takes on its properties.
      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}

        
        // 指定在组件刚挂载的时候渲染多少行数据。用这个属性来确保首屏显示合适数量的数据，而不是花费太多帧逐步显示出来。
        initialListSize={21}
        // 每次事件循环（每帧）渲染的行数。
        pageSize={3} // should be a multiple of the no. of visible cells per row
        scrollRenderAheadDistance={500}
        // 从数据源(Data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。
        // 如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。当一行被高亮时，其两侧的分割线会被隐藏。行的高亮状态可以通过调用highlightRow(null)来重置。
        renderRow={this._renderRow}

        // 当可见的行的集合变化的时候调用此回调函数。visibleRows 以 { sectionID: { rowID: true }}的格式包含了所有可见行，而changedRows 以{ sectionID: { rowID: true | false }}的格式包含了所有刚刚改变了可见性的行，其中如果值为true表示一个行变得可见，而为false表示行刚刚离开可视区域而变得不可见。
        onChangeVisibleRows={this.onChangeVisibleRows}

        // 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用。原生的滚动事件会被作为参数传递。译注：当第一次渲染时，如果数据不足一屏（比如初始值是空的），这个事件也会被触发，请自行做标记过滤。
        onEndReached={this.onEndReached}

        // 调用onEndReached之前的临界值，单位是像素。
        onEndReachedThreshold={this.onEndReachedThreshold}

        // 用于提升大列表的滚动性能。需要给行容器添加样式overflow:'hidden'。（Android已默认添加此样式）。此属性默认开启
        removeClippedSubviews={true}
        // removeClippedSubviews={false}

        renderFooter={this.renderFooter}
        renderHeader={this.renderHeader}

        // 指定一个函数，在其中返回一个可以滚动的组件。ListView将会在该组件内部进行渲染。默认情况下会返回一个包含指定属性的ScrollView。
        renderScrollComponent={this.renderScrollComponent}

        // 如果提供了此函数，会为每个小节(section)渲染一个粘性的标题。
        // 粘性是指当它刚出现时，会处在对应小节的内容顶部；继续下滑当它到达屏幕顶端的时候，它会停留在屏幕顶端，一直到对应的位置被下一个小节的标题占据为止。可以使用 stickySectionHeadersEnabled来决定是否启用其粘性特性。
        renderSectionHeader={this.renderSectionHeader}

        // 如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。
        renderSeparator={this.renderSeparator}

        // 当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行。
        scrollRenderAheadDistance={20}

        // 一个子视图下标的数组，用于决定哪些成员会在滚动之后固定在屏幕顶端。举个例子，传递stickyHeaderIndices={[0]}会让第一个成员固定在滚动视图顶端。这个属性不能和horizontal={true}一起使用。
        stickyHeaderIndices={[2]}

        // 设置小节标题(section header)是否具有粘性。粘性是指当它刚出现时，会处在对应小节的内容顶部；
        // 继续下滑当它到达屏幕顶端的时候，它会停留在屏幕顶端，一直到对应的位置被下一个小节的标题占据为止。
        // 注意此设置在水平模式（horizontal={true}）下无效。
        // 由于不同平台的设计原则不同，此选项在iOS上默认开启，andriod上默认关闭。
        stickySectionHeadersEnabled={true}
        // stickySectionHeadersEnabled={false}

        // 滚动到视图底部（水平方向的视图则滚动到最右边）。
        // 加上动画参数 scrollToEnd({animated: true})则启用平滑滚动动画，或是调用 scrollToEnd({animated: false})来立即跳转。如果不使用参数，则animated选项默认启用。
        scrollToEnd={this.scrollToEnd}

        // 滚动到指定的x, y偏移处，可以指定是否加上过渡动画。
        scrollTo={this.scrollTo}
      />
    );
  }

  onChangeVisibleRows = (e, v) => {
    console.log('  onChangeVisibleRows ：', e, v  )
  }
  onEndReached = (e, v) => {
    console.log('  onEndReached ：', e, v  )
  }
  onEndReachedThreshold = (e, v) => {
    console.log('  onEndReachedThreshold ：', e, v  )
  }
  renderFooter = (e, v) => {
    console.log('  onEndReachedThreshold ：', e, v  )
  }
  renderHeader = (e, v) => {
    console.log('  renderHeader ：', e, v  )
  }
  renderScrollComponent = (e, v) => {
    console.log('  renderScrollComponent ：', e, v  )
  }
  renderSectionHeader = (e, v) => {
    console.log('  renderSectionHeader ：', e, v  )
  }
  renderSeparator = (e, v) => {
    console.log('  renderSeparator ：', e, v  )
  }
  scrollToEnd = (e, v) => {
    console.log('  scrollToEnd ：', e, v  )
  }
  scrollTo = (e, v) => {
    console.log('  scrollTo ：', e, v  )
  }


  // 3376118933 随机数： 6 Cell rowData： 0 - 17 sectionID： s1 rowID： 0 - 17 
  _renderRow = (rowData, sectionID, rowID) => {
    const rowHash = Math.abs(hashCode(rowData));
    const imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    // console.log('_renderRow ：', rowHash, imgSource, rowData, sectionID, rowID)
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor="transparent">
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _genRows = (pressData) => {
    const dataBlob = [];
    for (const ii = 0; ii < 100; ii++) {
      const pressedText = pressData[ii] ? ' (X)' : '';
      dataBlob.push('Cell ' + ii + pressedText);
    }
    console.log('_genRows ：', dataBlob, pressData)
    return dataBlob;
  }

  _pressRow = (rowID) => {
    this._pressData[rowID] = !this._pressData[rowID];
    console.log('_pressRow ：', this._pressData, rowID)
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  }
}

/* eslint no-bitwise: 0 */
const hashCode = function(str) {
  // console.log('hashCode ：', str)
  let hash = 15;
  for (let ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
});
