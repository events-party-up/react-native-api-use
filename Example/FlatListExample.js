import React from "react"
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
} from 'react-native'

const React = require('react');
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
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

  _scrollPos = () => {
    console.log('_scrollPos ：', )
    return new Animated.Value(0);
  }
  _scrollSinkX = () => {
    console.log('_scrollSinkX ：', )
    return Animated.event(
      [{nativeEvent: { contentOffset: { x: this._scrollPos } }}],
      {useNativeDriver: true},
    );
  }
  _scrollSinkY = () => {
    console.log('_scrollSinkY ：', )
    Animated.event(
      [{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
      {useNativeDriver: true},
    );
  }

  componentDidUpdate() {
    console.log(' 组件componentDidUpdate即将更新：', this.state, this.props, )
    this._listRef.getNode().recordInteraction(); // e.g. flipping logViewable switch
  }

  render() {
    const filterRegex = new RegExp(String(this.state.filterText), 'i');
    const filter = (item) => (
      filterRegex.test(item.text) || filterRegex.test(item.title)
    );
    const filteredData = this.state.data.filter(filter);
    console.log('FlatListExample 组件 this.state, this.props ：', this.state, this.props, filterRegex, filter, filteredData)
    return (
      <View
        noSpacer={true}
        noScroll={true}>
        <View style={styles.searchRow}>
          <View style={styles.options}>
            <Input
              onChangeText={this._onChangeFilterText}
              placeholder="Search..."
              value={this.state.filterText}
            />
            <Input
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
            <Spindicator value={this._scrollPos} />
          </View>
        </View>
        <SeparatorComponent />
        <AnimatedFlatList
          ItemSeparatorComponent={SeparatorComponent}
          ListHeaderComponent={HeaderComponent}
          ListFooterComponent={FooterComponent}
          data={filteredData}
          debug={this.state.debug}
          disableVirtualization={!this.state.virtualized}
          getItemLayout={this.state.fixedHeight ?
            this._getItemLayout :
            undefined
          }
          horizontal={this.state.horizontal}
          key={(this.state.horizontal ? 'h' : 'v') +
            (this.state.fixedHeight ? 'f' : 'd')
          }
          legacyImplementation={false}
          numColumns={1}
          onRefresh={this._onRefresh}
          onScroll={this.state.horizontal ? this._scrollSinkX : this._scrollSinkY}
          onViewableItemsChanged={this._onViewableItemsChanged}
          ref={this._captureRef}
          refreshing={false}
          renderItem={this._renderItemComponent}
          viewabilityConfig={VIEWABILITY_CONFIG}
        />
      </View>
    );
  }
  _captureRef = (ref) => { this._listRef = ref; };
  _getItemLayout = (data, index) => {
    console.log('_getItemLayout ：', data, index)
    return getItemLayout(data, index, this.state.horizontal);
  };
  _onRefresh = () => alert('onRefresh: nothing to refresh :P');
  _renderItemComponent = ({item}) => {
    return (
      <ItemComponent
        item={item}
        horizontal={this.state.horizontal}
        fixedHeight={this.state.fixedHeight}
        onPress={this._pressItem}
      />
    );
  };
  // This is called when items change viewability by scrolling into or out of
  // the viewable area.
  _onViewableItemsChanged = (info) => {
    console.log('_onViewableItemsChanged ：', info);
    // Impressions can be logged here
    if (this.state.logViewable) {
      infoLog(
        'onViewableItemsChanged: ',
        info.changed.map((v) => ({...v, item: '...'})),
      );
    }
  };
  _pressItem = (key) => {
    console.log('_pressItem ：', key)
    this._listRef.getNode().recordInteraction();
    pressItem(this, key);
  };
  // _listRef: FlatList<*>;
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
});
