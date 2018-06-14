import React from "react"
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

const {
  FooterComponent,
  HeaderComponent,
  ItemComponent,
  PlainInput,
  SeparatorComponent,
  Spindicator,
  genItemData,
  getItemLayout,
  pressItem,
  renderSmallSwitchOption,
} = require('./ListExampleShared');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

export default class FlatListExample extends React.PureComponent {
  state = {
    data: genItemData(1000),
    debug: false,
    horizontal: false,
    filterText: '',
    fixedHeight: true,
    logViewable: false,
    virtualized: true,
  };

  _onChangeFilterText = (filterText) => {
    console.log('_onChangeFilterText ：', filterText)
    this.setState({filterText});
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

  // 什么方法
  componentDidUpdate() {
    console.log(' 组件componentDidUpdate即将更新：', this.state, this.props, )
    this._listRef.getNode().recordInteraction(); // e.g. flipping logViewable switch
  }

  render() {
    const filterRegex = new RegExp(this.state.filterText, 'i');
    const filter = (item) => (
      filterRegex.test(item.text) || filterRegex.test(item.title)
    );
    const filteredData = this.state.data.filter(filter);
    console.log('FlatListExample 组件 this.state, this.props ：', this.state, this.props, filterRegex, filter, filteredData)
    return (
      <View style={styles.container}>
        <View style={styles.searchRow}>
          <View style={styles.options}>
            <PlainInput
              onChangeText={this._onChangeFilterText}
              placeholder="Search..."
              value={this.state.filterText}
            />
            <PlainInput
              onChangeText={this._onChangeScrollToIndex}
              placeholder="scrollToIndex..."
            />
          </View>
          <View style={styles.options}>
            {renderSmallSwitchOption(this, 'virtualized')}
            {renderSmallSwitchOption(this, 'horizontal')}
            {renderSmallSwitchOption(this, 'fixedHeight')}
            {renderSmallSwitchOption(this, 'logViewable')}
            {renderSmallSwitchOption(this, 'debug')}
            {/* 注意：如果onScroll回调里要处理别的事情需要调用函数 或者直接返回一个固定值 */}
            <Spindicator value={this._scrollPos} />
          </View>
        </View>

        <SeparatorComponent />

        <ScrollView style={styles.row}>
          <Button
            onPress={this.scrollToLocation}
            title={'无动画滚动到位置'}
            color="#841584"
          />
          <Button
            onPress={this.scrollToLocationNoAnimate}
            title={'有动画滚动到位置'}
            color="#841584"
          />
          <Button
            onPress={this.scrollToItem}
            title={'有动画滚动到某一项'}
            color="#841584"
          />
          <Button
            onPress={this.scrollToItemNoAnimate}
            title={'无动画滚动到某一项'}
            color="#841584"
          />
          <Button
            onPress={this.scrollToEnd}
            title={'无动画滚动到底部'}
            color="#841584"
          />
          <Button
            onPress={this.scrollToEndNoAnimate}
            title={'有动画滚动到底部'}
            color="#841584"
          />
          <Button
            onPress={this.recordInteraction}
            title={'重新计算'}
            color="#841584"
          />
          <Button
            onPress={this.flashScrollIndicators}
            title={'显示滚动条'}
            color="#841584"
          />
        </ScrollView>

        <View style={styles.container}>
          <AnimatedFlatList
            ItemSeparatorComponent={SeparatorComponent}
            ListHeaderComponent={HeaderComponent}
            ListFooterComponent={FooterComponent}
            // 渲染的数据-可以是根据条件过滤过的数据
            data={filteredData}
            debug={this.state.debug}
            disableVirtualization={!this.state.virtualized}
            // ？？？？？
            getItemLayout={this.state.fixedHeight ?
              this._getItemLayout :
              undefined
            }
            horizontal={this.state.horizontal}
            // ？？？？？
            key={(this.state.horizontal ? 'h' : 'v') +
              (this.state.fixedHeight ? 'f' : 'd')
            }
            legacyImplementation={false}
            numColumns={1}
            onRefresh={this._onRefresh}
            // ？？？？？
            // 注意：如果onScroll回调里要处理别的事情需要调用函数 或者直接返回一个固定值
            onScroll={this.state.horizontal ? this._scrollSinkX() : this._scrollSinkY()}
            onViewableItemsChanged={this._onViewableItemsChanged}
            ref={this._captureRef}
            refreshing={false}
            renderItem={this._renderItemComponent}
            viewabilityConfig={VIEWABILITY_CONFIG}

            // 当需要偏置以使加载指示器正确显示时进行设置。
            progressViewOffset={200}
            // progressViewOffset={100}

            // 清单ViewabilityConfig/ onViewableItemsChanged对。
            // onViewableItemsChanged当相应ViewabilityConfig的条件得到满足时，将会调用一个具体的东西
            viewabilityConfigCallbackPairs={[1, 2, 3]}
          />
        </View>
      </View>
    );
  }
  _captureRef = (ref) => { this._listRef = ref; };
  _getItemLayout = (data, index) => {
    // console.log('_getItemLayout ：', data, index)
    return getItemLayout(data, index, this.state.horizontal);
  };
  _onRefresh = () => alert('onRefresh: nothing to refresh :P');
  // 就一个参数：对象 item，包含：index：索引 item：数据 section：该区块总数据源 separators：（三个函数highlight unhighlight updateProps）
  _renderItemComponent = (item, k) => {
    // console.log('_renderItemComponent ：', item, k);
    return (
      <ItemComponent
        item={item.item}
        horizontal={this.state.horizontal}
        fixedHeight={this.state.fixedHeight}
        onPress={this._pressItem}
      />
    );
  };
  // This is called when items change viewability by scrolling into or out of
  // the viewable area.
  _onViewableItemsChanged = (info) => {
    // Impressions can be logged here
    console.log('_onViewableItemsChanged ：', info)
    if (this.state.logViewable) {
      // infoLog(
      //   'onViewableItemsChanged: ',
      //   info.changed.map((v) => ({...v, item: '...'})),
      // );
    }
  };
  
  scrollToEnd = () => {
    console.log('  scrollToEnd ：',  )
    this._listRef.getNode().scrollToEnd({aniamte: true})
  }
  scrollToEndNoAnimate = () => {
    console.log('  scrollToEnd ：',  )
    this._listRef.getNode().scrollToEnd({aniamte: false})
  }
  scrollToIndex = () => {
    console.log('  scrollToIndex ：',  )
    this._listRef.getNode().scrollToIndex()
  }
  scrollToIndexNoAnimate = () => {
    console.log('  scrollToIndex ：',  )
    this._listRef.getNode().scrollToIndex()
  }
  scrollToItem = () => {
    console.log('  scrollToItem ：',  )
    this._listRef.getNode().scrollToItem({aniamte: true, viewPosition: 0.5, item: 10})
  }
  scrollToItemNoAnimate = () => {
    console.log('  scrollToItemNoAnimate ：',  )
    this._listRef.getNode().scrollToItem({aniamte: false, viewPosition: 0.5, item: 10})
  }
  scrollToOffset = () => {
    console.log('  scrollToOffset ：',  )
    this._listRef.getNode().scrollToOffset({aniamte: true, offset: 20})
  }
  scrollToOffsetNoOffset = () => {
    console.log('  scrollToOffsetNoOffset ：',  )
    this._listRef.getNode().scrollToOffset({aniamte: false, offset: 20})
  }
  recordInteraction = () => {
    console.log('  recordInteraction ：',  )
    this._listRef.getNode().recordInteraction()
  }
  flashScrollIndicators = () => {
    console.log('  flashScrollIndicators ：',  )
    this._listRef.getNode().flashScrollIndicators()
  }

  _pressItem = (key) => {
    console.log('_pressItem ：', key)
    this._listRef.getNode().recordInteraction();
    pressItem(this, key);
  };
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  searchRow: {
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: 'orange',
    flex: 1,
  },
});
