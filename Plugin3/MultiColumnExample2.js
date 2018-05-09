import React from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

import {
  FooterComponent,
  HeaderComponent,
  ItemComponent,
  PlainInput,
  SeparatorComponent,
  genItemData,
  getItemLayout,
  pressItem,
  renderSmallSwitchOption,
  Spindicator,
} from './ListExampleShared'

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

export default class MultiColumnExample extends React.Component {
  state = {
    data: genItemData(1000),
    filterText: '',
    fixedHeight: true,
    logViewable: false,
    numColumns: 2,
    virtualized: true,
    horizontal: false,
  };
  _onChangeFilterText = (filterText) => {
    console.log('_onChangeFilterText ：', filterText)
    this.setState(() => ({filterText}));
  };
  _onChangeNumColumns = (numColumns) => {
    console.log('_onChangeNumColumns ：', numColumns)
    this.setState(() => ({numColumns: Number(numColumns)}));
  };

  _onChangeScrollToIndex = (text) => {
    console.log('_onChangeScrollToIndex ：', text)
    this._listRef.getNode().scrollToIndex({viewPosition: 0.5, index: Number(text)});
  };

  // 注意：传递的该值是个固定值，如果要写成函数 传递的时候要变成调用函数的形式
  _scrollPos = new Animated.Value(0);
  // 没看懂动画变化
  _scrollSinkX = () => {
    console.log('_scrollSinkX ：', )
    return Animated.event(
      [{nativeEvent: { contentOffset: { x: this._scrollPos } }}],
      {useNativeDriver: true},
    );
  }
  // 注意：传递的该值是个固定值，如果要写成函数 传递的时候要变成调用函数的形式
  _scrollSinkY = () => {
    console.log('_scrollSinkY ：', )
    return Animated.event(
      [{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
      {useNativeDriver: true},
    );
  }
  _onChangeScrollToIndex = (text) => {
    console.log('_onChangeScrollToIndex ：', text)
    this._listRef.getNode().scrollToIndex({viewPosition: 0.5, index: Number(text)});
  };

  render() {
    const filterRegex = new RegExp(this.state.filterText, 'i');
    const filter = (item) => (filterRegex.test(item.text) || filterRegex.test(item.title));
    const filteredData = this.state.data.filter(filter);
    console.log('MultiColumnExample 组件 this.state, this.props ：', genItemData(1000), this.state, this.props, )
    return (
      <View>
        <View style={styles.searchRow}>
          <View style={styles.row}>
            <TextInput
              onChangeText={this._onChangeFilterText}
              placeholder="Search..."
              value={this.state.filterText}
            />
            <Text>   numColumns: </Text>
            <TextInput
              clearButtonMode="never"
              onChangeText={this._onChangeNumColumns}
              value={this.state.numColumns ? this.state.numColumns : ''}
            />
            <PlainInput
              onChangeText={this._onChangeScrollToIndex}
              placeholder="scrollToIndex..."
            />
          </View>
          <View style={styles.row}>
            {renderSmallSwitchOption(this, 'virtualized')}
            {renderSmallSwitchOption(this, 'fixedHeight')}
            {renderSmallSwitchOption(this, 'logViewable')}

            {renderSmallSwitchOption(this, 'horizontal')}
            <Spindicator value={this._scrollPos} />
          </View>
        </View>
        <SeparatorComponent />
        <FlatList
          // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后
          ItemSeparatorComponent={SeparatorComponent}
          ListFooterComponent={FooterComponent}
          ListHeaderComponent={HeaderComponent}
          getItemLayout={this.state.fixedHeight ? this._getItemLayout : undefined}
          data={filteredData}
          // key={this.state.numColumns + (this.state.fixedHeight ? 'f' : 'v')}
          key={this.state.numColumns + (this.state.horizontal ? 'h' : 'v') +
            (this.state.fixedHeight ? 'f' : 'd')
          }
            
          // 多列布局只能在非水平模式下使用，即必须是horizontal={false}。此时组件内元素会从左到右从上到下按Z字形排列，类似启用了flexWrap的布局。组件内元素必须是等高的——暂时还无法支持瀑布流布局。
          numColumns={this.state.numColumns || 1}
          // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
          onRefresh={this.onRefresh}
          // 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
          refreshing={false}
          renderItem={this._renderItemComponent}
          disableVirtualization={!this.state.virtualized}
          onViewableItemsChanged={this._onViewableItemsChanged}
          // 设置为true则使用旧的ListView的实现。
          legacyImplementation={false}
          //  viewabilityConfig={VIEWABILITY_CONFIG}
          // 注意：如果onScroll回调里要处理别的事情需要调用函数 或者直接返回一个固定值
          onScroll={this.state.horizontal ? this._scrollSinkX() : this._scrollSinkY()}
          horizontal={this.state.horizontal}
          ref={this._captureRef}

          onEndReached={200}
          // 决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
          onEndReachedThreshold={0.5}
          // android 需要在指定的偏移内显示加载指示器的时候，就可以设置这个值。
          progressViewOffset={200}
          // 翻转滚动方向。实质是将scale变换设置为-1。
          inverted={true}
          // 此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。
          keyExtractor={this.keyExtractor}
          extraData={[111, 222]}
          // 开始时屏幕顶端的元素是列表中的第 initialScrollIndex 个元素, 而不是第一个元素。设置这个属性会关闭对“滚动到顶端”这个动作的优化（参见VirtualizedList 的 initialNumToRender 属性)。位于 initialScrollIndex 位置的元素总是会被立刻渲染。需要先设置 getItemLayout 属性。
          initialScrollIndex={20}
          // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素。
          initialNumToRender={20}
          // 如果设置了多列布局（即将numColumns值设为大于1的整数），则可以额外指定此样式作用在每行容器上。
          columnWrapperStyle={styles.columnWrapperStyle}
          // 列表为空时渲染该组件。可以是React Component, 也可以是一个render函数， 或者渲染好的element。
          ListEmptyComponent={<View style={styles.container}>
            没有数据显示的组件 ListEmptyComponent
          </View>}

          scrollToEnd={this.scrollToEnd}
          scrollToIndex={this.scrollToIndex}
          scrollToItem={this.scrollToItem}
          scrollToOffset={this.scrollToOffset}
          recordInteraction={this.recordInteraction}
          flashScrollIndicators={this.flashScrollIndicators}
        />
      </View>
    );
  }

  scrollToEnd = (e) => {
    console.log('  scrollToEnd ：', e, )
  }
  scrollToIndex = (e) => {
    console.log('  scrollToIndex ：', e, )
  }
  scrollToItem = (e) => {
    console.log('  scrollToItem ：', e, )
  }
  scrollToOffset = (e) => {
    console.log('  scrollToOffset ：', e, )
  }
  recordInteraction = (e) => {
    console.log('  recordInteraction ：', e, )
  }
  flashScrollIndicators = (e) => {
    console.log('  flashScrollIndicators ：', e, )
  }


  onRefresh = (e) => {
    console.log('  onRefresh ：', e, )
  }
  keyExtractor = (item, index) => {
    console.log('  keyExtractor ：', item, index )
    return index
  }
  onEndReachedThreshold = (e) => {
    console.log('onEndReachedThreshold ：', e);
  }
  _captureRef = (ref) => { this._listRef = ref; };
  // (data: ?Array<ItemT>, index: number) =>
  // {length: number, offset: number, index: number} #
  // getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单，类似下面这样：
  // getItemLayout={(data, index) => ( {length: 行高, offset: 行高 * index, index} )}
  // 注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中。
  _getItemLayout = (data, index) => {
    console.log('_getItemLayout ：', data, index)
    return getItemLayout(data, index);
  }
  // 就一个参数：对象 item，包含：index：索引 item：数据 section：该区块总数据源 separators：（三个函数highlight unhighlight updateProps）
  _renderItemComponent = ({item}) => {
    console.log('_renderItemComponent ：', item)
    return (
      <ItemComponent
        item={item}
        fixedHeight={this.state.fixedHeight}
        onPress={this._pressItem}

        horizontal={this.state.horizontal}
      />
    );
  };
  // {viewableItems: Array, changed: Array} 在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置viewabilityconfig属性
  // This is called when items change viewability by scrolling into or out of the viewable area.
  _onViewableItemsChanged = (info) => {
    console.log('info this.state, this.props ：', this.state, this.props, info)
    // Impressions can be logged here
    if (this.state.logViewable) {
      // infoLog('onViewableItemsChanged: ', info.changed.map((v) => ({...v, item: '...'})));
    }
  };
  _pressItem = (key) => {
    console.log('_pressItem ：', key)
    pressItem(this, key);
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchRow: {
    padding: 10,
  },
});
