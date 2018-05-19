import React, { PureComponent } from 'react';
import {
  DeviceEventEmitter,
  ListView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import dismissKeyboard from 'dismissKeyboard';

import _ from 'lodash';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

import EntypoGlyphs from 'react-native-vector-icons/glyphmaps/Entypo';
import EvilIconsGlyphs from 'react-native-vector-icons/glyphmaps/EvilIcons';
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather';
import FontAwesomeGlyphs from 'react-native-vector-icons/glyphmaps/FontAwesome';
import FoundationGlyphs from 'react-native-vector-icons/glyphmaps/Foundation';
import IoniconsGlyphs from 'react-native-vector-icons/glyphmaps/Ionicons';
import MaterialIconsGlyphs from 'react-native-vector-icons/glyphmaps/MaterialIcons';
import MaterialCommunityIconsGlyphs from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons';
import OcticonsGlyphs from 'react-native-vector-icons/glyphmaps/Octicons';
import ZocialGlyphs from 'react-native-vector-icons/glyphmaps/Zocial';

const GLYPH_MAPS = {
  Entypo: EntypoGlyphs,
  EvilIcons: EvilIconsGlyphs,
  Feather: FeatherGlyphs,
  FontAwesome: FontAwesomeGlyphs,
  Foundation: FoundationGlyphs,
  Ionicons: IoniconsGlyphs,
  MaterialIcons: MaterialIconsGlyphs,
  MaterialCommunityIcons: MaterialCommunityIconsGlyphs,
  Octicons: OcticonsGlyphs,
  Zocial: ZocialGlyphs,
};

const ICON_SETS = _.map({
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
}, (component, name) => ({ name, component }))
.map(iconSet => {
  // Some icons have multiple names, so group them by glyph
  const glyphMap = GLYPH_MAPS[iconSet.name];
  iconSet.glyphs = _.values(_.groupBy(Object.keys(glyphMap), name => glyphMap[name]));
  return iconSet;
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    marginTop: (Platform.OS === 'android' ? 0 : 64),
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: (Platform.OS === 'android' ? 45 : 30),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  },
  icon: {
    textAlign: 'center',
    marginRight: 10,
    width: 20,
  },
  text: {
    flex: 1,
  },
});

export default class IconList extends PureComponent {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      filter: '',
      dataSource: ds.cloneWithRows(ICON_SETS[0].glyphs),
    };
  }

  componentDidMount() {
    if (Platform.OS === 'osx') {
      this._searchListner =  DeviceEventEmitter.addListener('onSearchIcons',
        (e) => this.searchIcons(e.query.toLowerCase())
      );
      console.log({_searchListner: this._searchListner})
    }
  }

  componentWillUnmount() {
    if (this._searchListner) {
      this._searchListner.remove();
    }
  }

  componentWillReceiveProps(nextProps) {
    const glyphs = this.getFilteredGlyphs(nextProps.iconSet, this.state.filter);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(glyphs),
    });
  }

  getFilteredGlyphs(iconSet, query) {
    return iconSet.glyphs.filter(glyph => {
      for (let i = 0; i < glyph.length; i++) {
        if (glyph[i].indexOf(query) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  searchIcons(query) {
    const glyphs = this.getFilteredGlyphs(ICON_SETS, query);

    this.setState({
      filter: query,
      dataSource: this.state.dataSource.cloneWithRows(glyphs),
    });
  }

  handleSearchChange(event) {
    const filter = event.nativeEvent.text.toLowerCase();
    this.searchIcons(filter);
  }

  render() {
    console.log('ICON_SETS 组件 this.state, this.props ：', ICON_SETS, GLYPH_MAPS, this.state, this.props, )
    return (
      <View style={styles.container}>
        {Platform.OS !== 'osx' && (
          <View style={styles.searchBar}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
              onChange={event => this.handleSearchChange(event)}
              placeholder="Search an icon..."
              style={styles.searchBarInput}
              onFocus={() =>
                this.refs.listview && this.refs.listview.getScrollResponder().scrollTo(0, 0)}
            />
          </View>
          )}
          
        <View style={styles.separator} />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          initialListSize={20}
        />
      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    const Icon = ICON_SETS[0].component;
    // console.log('ICON_SETS[0].component ：', rowData[0]);
    return (
      <View>
        <View style={styles.row}>
          <Icon name={rowData[0]} size={20} style={styles.icon} />
          <Text style={styles.text}>
            {rowData.join(', ')}
          </Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}


// import React from "react"
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Animated,
//   ScrollView,
//   Button,
// } from 'react-native'

// import {
//   FooterComponent,
//   HeaderComponent,
//   ItemComponent,
//   PlainInput,
//   SeparatorComponent,
//   genItemData,
//   getItemLayout,
//   pressItem,
//   renderSmallSwitchOption,
//   Spindicator,
// } from './ListExampleShared'

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// const VIEWABILITY_CONFIG = {
//   minimumViewTime: 3000,
//   viewAreaCoveragePercentThreshold: 100,
//   waitForInteraction: true,
// };

// export default class MultiColumnExample extends React.Component {
//   state = {
//     data: genItemData(1000),
//     filterText: '',
//     fixedHeight: true,
//     logViewable: false,
//     numColumns: '2',
//     virtualized: false,
//     horizontal: false,
//   };
//   _onChangeFilterText = (filterText) => {
//     console.log('_onChangeFilterText ：', filterText)
//     this.setState(() => ({filterText}));
//   };
//   _onChangeNumColumns = (numColumns) => {
//     console.log('_onChangeNumColumns ：', numColumns)
//     this.setState(() => ({numColumns: Number(numColumns)}));
//   };

//   _onChangeScrollToIndex = (text) => {
//     console.log('_onChangeScrollToIndex ：', text)
//     this._listRef.getNode().scrollToIndex({viewPosition: 0.5, index: Number(text)});
//   };

//   // 注意：传递的该值是个固定值，如果要写成函数 传递的时候要变成调用函数的形式
//   _scrollPos = new Animated.Value(0);
//   // 没看懂动画变化
//   _scrollSinkX = () => {
//     console.log('_scrollSinkX ：', )
//     return Animated.event(
//       [{nativeEvent: { contentOffset: { x: this._scrollPos } }}],
//       {useNativeDriver: true},
//     );
//   }
//   // 注意：传递的该值是个固定值，如果要写成函数 传递的时候要变成调用函数的形式
//   _scrollSinkY = () => {
//     console.log('_scrollSinkY ：', )
//     return Animated.event(
//       [{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
//       {useNativeDriver: true},
//     );
//   }
//   _onChangeScrollToIndex = (text) => {
//     console.log('_onChangeScrollToIndex ：', text)
//     this._listRef.getNode().scrollToIndex({viewPosition: 0.5, index: Number(text)});
//   };

//   render() {
//     const filterRegex = new RegExp(this.state.filterText, 'i');
//     const filter = (item) => (filterRegex.test(item.text) || filterRegex.test(item.title));
//     const filteredData = this.state.data.filter(filter);
//     console.log('MultiColumnExample 组件 this.state, this.props ：', genItemData(1000), this.state, this.props, )
//     return (
//       <View>
//         <View style={styles.searchRow}>
//           <Text style={styles.text}>在文本输入框输入对应数字可以过滤 显示相应布局</Text>
//           <View style={styles.row}>
//             <PlainInput
//               onChangeText={this._onChangeFilterText}
//               placeholder="搜索过滤"
//               value={this.state.filterText}
//             />
//             <Text>显示多少列numColumns: </Text>
//             <PlainInput
//               clearButtonMode="never"
//               onChangeText={this._onChangeNumColumns}
//               value={this.state.numColumns ? this.state.numColumns : ''}
//             />
//             <PlainInput
//               onChangeText={this._onChangeScrollToIndex}
//               placeholder="滚到"
//             />
//           </View>
//           <View style={styles.row}>
//             <Button
//               onPress={this.scrollToEnd}
//               title={'到底部'}
//               color="#841584"
//             />
//             <Button
//               onPress={this.flashScrollIndicators}
//               title={'短暂刷新'}
//               color="#841584"
//             />
//           </View>
//           <View style={styles.row}>
//             {renderSmallSwitchOption(this, 'virtualized')}
//             {renderSmallSwitchOption(this, 'fixedHeight')}
//             {renderSmallSwitchOption(this, 'logViewable')}

//             {renderSmallSwitchOption(this, 'horizontal')}
//             <Spindicator value={this._scrollPos} />
//           </View>
//         </View>
//         <SeparatorComponent />
//         <AnimatedFlatList
//           // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后
//           ItemSeparatorComponent={SeparatorComponent}
//           ListFooterComponent={FooterComponent}
//           ListHeaderComponent={HeaderComponent}
//           getItemLayout={this.state.fixedHeight ? this._getItemLayout : undefined}
//           data={filteredData}
//           // key={this.state.numColumns + (this.state.fixedHeight ? 'f' : 'v')}
//           key={this.state.numColumns + (this.state.horizontal ? 'h' : 'v') +
//             (this.state.fixedHeight ? 'f' : 'd')
//           }
            
//           // 多列布局只能在非水平模式下使用，即必须是horizontal={false}。此时组件内元素会从左到右从上到下按Z字形排列，类似启用了flexWrap的布局。组件内元素必须是等高的——暂时还无法支持瀑布流布局。
//           numColumns={this.state.numColumns || 1}

//           // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
//           onRefresh={this.onRefresh}
          
//           // 刷新加载器，如果设置为true，一开始就会显示 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
//           refreshing={false}

//           renderItem={this._renderItemComponent}
//           disableVirtualization={!this.state.virtualized}
//           onViewableItemsChanged={this._onViewableItemsChanged}
//           // 设置为true则使用旧的ListView的实现。
//           legacyImplementation={false}
//           // viewabilityConfig={VIEWABILITY_CONFIG}
//           // 注意：如果onScroll回调里要处理别的事情需要调用函数 或者直接返回一个固定值
//           onScroll={this.state.horizontal ? this._scrollSinkX() : this._scrollSinkY()}
//           horizontal={this.state.horizontal}
//           ref={this._captureRef}

//           onEndReached={200}
//           // 决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
//           onEndReachedThreshold={0.5}
//           // android 需要在指定的偏移内显示刷新加载指示器的时候，就可以设置这个值。距顶部的距离
//           // progressViewOffset={200}
//           // // 翻转滚动方向。实质是将scale变换设置为-1。
//           // inverted={true}
//           // 此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。
//           keyExtractor={this.keyExtractor}
//           extraData={[111, 222]}
//           // // 开始时屏幕顶端的元素是列表中的第 initialScrollIndex 个元素, 而不是第一个元素。设置这个属性会关闭对“滚动到顶端”这个动作的优化（参见VirtualizedList 的 initialNumToRender 属性)。位于 initialScrollIndex 位置的元素总是会被立刻渲染。需要先设置 getItemLayout 属性。
//           initialScrollIndex={4}

//           // 如果是多列布局就除以显示对应的数量
//           // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素。
//           initialNumToRender={40}

//           // 多列布局里每一行的样式
//           // 如果设置了多列布局（即将numColumns值设为大于1的整数），则可以额外指定此样式作用在每行容器上。
//           columnWrapperStyle={styles.columnWrapperStyle}
          
//           // 列表为空时渲染该组件。可以是React Component, 也可以是一个render函数， 或者渲染好的element。
//           ListEmptyComponent={<View style={styles.container}>
//             没有数据显示的组件 ListEmptyComponent
//           </View>}

//           scrollToEnd={this.scrollToEnd}
//         />
//       </View>
//     );
//   }

//   // scrollToItem 这个方法会顺序遍历元素。尽可能使用 scrollToIndex 。 如果不设置getItemLayout属性的话，可能会比较卡。
//   // scrollToOffset 滚动列表到指定的偏移（以像素为单位），等同于 ScrollView 的 scrollTo 方法。
//   // recordInteraction 主动通知列表发生了一个事件，以使列表重新计算可视区域。比如说当waitForInteractions 为 true 并且用户没有滚动列表时，就可以调用这个方法。不过一般来说，当用户点击了一个列表项，或发生了一个导航动作时，我们就可以调用这个方法。
//   // flashScrollIndicators 短暂地显示滚动指示器。
//   scrollToEnd = (e) => {
//     console.log('  scrollToEnd ：', e, )
//     this._listRef.getNode().scrollToEnd();
//   }

//   scrollToItem = (e) => {
//     console.log('  scrollToItem ：', e, )
//   }
//   flashScrollIndicators = (e) => {
//     console.log('  flashScrollIndicators ：', e, this._listRef.getNode())
//     this._listRef.getNode().flashScrollIndicators();
//   }


//   onRefresh = (e) => {
//     console.log('  onRefresh ：', e, )
//   }
//   // 接收数据源的每一项
//   keyExtractor = (item, index) => {
//     // console.log('  keyExtractor ：', item, index )
//     return index
//   }
//   onEndReachedThreshold = (e) => {
//     console.log('onEndReachedThreshold ：', e);
//   }
//   _captureRef = (ref) => { this._listRef = ref; };

//   // index会隔段时间增加
//   // (data: ?Array<ItemT>, index: number) =>
//   // {length: number, offset: number, index: number} #
//   // getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单，类似下面这样：
//   // getItemLayout={(data, index) => ( {length: 行高, offset: 行高 * index, index} )}
//   // 注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中。
//   _getItemLayout = (data, index) => {
//     // console.log('_getItemLayout ：', data, index)
//     return getItemLayout(data, index);
//   }
//   // 就一个参数：对象 item，包含：index：索引 item：数据 section：该区块总数据源 separators：（三个函数highlight unhighlight updateProps）
//   _renderItemComponent = ({item}) => {
//     // console.log('_renderItemComponent ：', item)
//     return (
//       <ItemComponent
//         item={item}
//         // 根据是否固定高度使用numberOfLines来限制文本
//         fixedHeight={this.state.fixedHeight}
//         onPress={this._pressItem}

//         horizontal={this.state.horizontal}
//       />
//     );
//   };
//   // {viewableItems: Array, changed: Array} 在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置viewabilityconfig属性
//   // This is called when items change viewability by scrolling into or out of the viewable area.
//   _onViewableItemsChanged = (info) => {
//     console.log('info this.state, this.props ：', this.state, this.props, info)
//     // Impressions can be logged here
//     if (this.state.logViewable) {
//       // infoLog('onViewableItemsChanged: ', info.changed.map((v) => ({...v, item: '...'})));
//     }
//   };
//   _pressItem = (key) => {
//     console.log('_pressItem ：', key)
//     pressItem(this, key);
//   };
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchRow: {
//     padding: 10,
//   },
  
//   columnWrapperStyle: {
//     backgroundColor: 'orange',
//     margin: 10,
//     padding: 10,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'orange',
//   },
// });