import React from "react"
import {
  Animated,
  SectionList,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

import {
  HeaderComponent,
  FooterComponent,
  ItemComponent,
  PlainInput,
  SeparatorComponent,
  Spindicator,
  genItemData,
  pressItem,
  renderSmallSwitchOption,
  renderStackedItem,
} from './ListExampleShared'

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

// 只有section一个参数
// data: [{title: "Item In Header Section", text: "Section s1", key: "0"}]
// key: "s1"
// renderItem: ƒ renderStackedItem(_ref2)
const renderSectionHeader = ({section}) => {
  console.log('renderSectionHeader ：', section)
  return (
    <View>
      <Text style={styles.headerText}>区块头 SECTION HEADER: {section.key}</Text>
      <SeparatorComponent />
    </View>
  );
}

// 只有text一个参数
const CustomSeparatorComponent = ({text}) => {
  // console.log('CustomSeparatorComponent ：', text)
  return (
    <View>
      <SeparatorComponent />
      <Text style={styles.separatorText}>{text}</Text>
      <SeparatorComponent />
    </View>
  );
}

export default class SectionListExample extends React.PureComponent {
  state = {
    data: genItemData(1000),
    debug: false,
    filterText: '',
    logViewable: false,
    virtualized: true,
  };

  _scrollPos = new Animated.Value(0);
  _scrollSinkY = Animated.event(
    [{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
    {useNativeDriver: true},
  );

  render() {
    const filterRegex = new RegExp(String(this.state.filterText), 'i');
    const filter = (item) => (
      filterRegex.test(item.text) || filterRegex.test(item.title)
    );
    const filteredData = this.state.data.filter(filter);
    const filteredSectionData = [];
    let startIndex = 0;
    const endIndex = filteredData.length - 1;
    // 处理生成的数据 - 
    for (let ii = 10; ii <= endIndex + 10; ii += 10) {
      filteredSectionData.push({
        key: `${filteredData[startIndex].key} - ${filteredData[Math.min(ii - 1, endIndex)].key}`,
        data: filteredData.slice(startIndex, ii),
      });
      startIndex = ii;
    }
    console.log('SectionListExample 组件 this.state, this.props ：', this.state, this.props, filteredSectionData, startIndex, endIndex, filteredData, filterRegex)
    return (
      <View>
        <View style={styles.searchRow}>
          <TextInput
            onChangeText={filterText => {
              this.setState(() => ({filterText}));
            }}
            placeholder="Search..."
            value={this.state.filterText}
          />
          <View style={styles.optionSection}>
            {renderSmallSwitchOption(this, 'virtualized')}
            {renderSmallSwitchOption(this, 'logViewable')}
            {renderSmallSwitchOption(this, 'debug')}
            <Spindicator value={this._scrollPos} />
          </View>
        </View>
        <SeparatorComponent />
        <AnimatedSectionList
          ListHeaderComponent={HeaderComponent}
          ListFooterComponent={FooterComponent}

          // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。 
          // highlighted, section, and [leading/trailing][Item/Separator] 
          // 这三个属性是默认提供的. renderItem 提供了 separators.highlight/unhighlight 这两个方法来更新 highlighted 这个属性的状态, 
          // 但是你也可以利用separators.updateProps这个方法来添加自定义属性.
          SectionSeparatorComponent={() =>
            <CustomSeparatorComponent text="区块分离组件 SECTION SEPARATOR" />
          }
          ItemSeparatorComponent={() =>
            <CustomSeparatorComponent text="每一项分离组件 ITEM SEPARATOR" />
          }
          debug={this.state.debug}
          enableVirtualization={this.state.virtualized}
          // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
          onRefresh={() => alert('onRefresh: nothing to refresh :P')}
          onScroll={this._scrollSinkY}
          // 在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置viewabilityconfig属性
          onViewableItemsChanged={this._onViewableItemsChanged}
          // 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
          refreshing={false}
          // 用来渲染每一个section中的每一个列表项的默认渲染器。可以在section级别上进行覆盖重写
          renderItem={this._renderItemComponent}
          // 在每个section的头部渲染。在iOS上，这些headers是默认粘接在ScrollView的顶部的. 参见stickySectionHeadersEnabled.
          renderSectionHeader={renderSectionHeader}
          // 用来渲染的数据，类似于<FlatList>中的data属性
          sections={[
            {renderItem: renderStackedItem, key: 's1', data: [
              {title: '第一个数据源 Item In Header Section', text: 'Section s1', key: '0'},
            ]},
            {key: 's2', data: [
              {noImage: true, title: '第二个数据源数据 1st item', text: 'Section s2', key: '0'},
              {noImage: true, title: '第二个数据源数据 2nd item', text: 'Section s2', key: '1'},
            ]},
            ...filteredSectionData,
          ]}
          viewabilityConfig={VIEWABILITY_CONFIG}

          
          // 当列表为空时渲染。可以是一个React组件类，一个渲染函数，或一个已经渲染的元素。
          ListEmptyComponent={
            <View style={styles.container}>
              <Text style={styles.text}>没有数据显示的组件</Text>
            </View>
          }
          
          // 如果有除data以外的数据用在列表中（不论是用在renderItem还是Header或者Footer中），请在此属性中指定。同时此数据在修改时也需要先修改其引用地址（比如先复制到一个新的Object或者数组中），然后再修改其值，否则界面很可能不会刷新。
          extraData={[1, 2, 3, 4]}

          // 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素。
          initialNumToRender={10}

          // 翻转滚动方向。实质是将scale变换设置为-1。
          inverted={-1}

          // 此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。
          keyExtractor={[1, 2, 3, 4]}

          // 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
          onEndReached={this.onEndReached}

          // 决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
          onEndReachedThreshold={0.5}

          // 当下一个section把它的前一个section的可视区推离屏幕的时候，让这个section的header粘连在屏幕的顶端。这个属性在iOS上是默认可用的，因为这是iOS的平台规范。
          stickySectionHeadersEnabled={true}
          // stickySectionHeadersEnabled={false}

          ref={section => this.section = section}
        />
      </View>
    );
  }

  onEndReached = (e, v) => {
    console.log('  onEndReached ：', e, v,  )
  }
  // 将可视区内位于特定sectionIndex 或 itemIndex (section内)位置的列表项，滚动到可视区的制定位置。比如说，viewPosition 为0时将这个列表项滚动到可视区顶部 (可能会被顶部粘接的header覆盖), 为1时将它滚动到可视区底部, 为0.5时将它滚动到可视区中央。viewOffset是一个以像素为单位，到最终位置偏移距离的固定值，比如为了弥补粘接的header所占据的空间
  // 注意: 如果没有设置getItemLayout，就不能滚动到位于外部渲染区的位置。
  scrollToLocation = (e, v) => {
    console.log('  onEndReached ：', e, v,  )
    // this.section
  }
  // 主动通知列表发生了一个事件，以使列表重新计算可视区域。比如说当waitForInteractions 为 true 并且用户没有滚动列表时，就可以调用这个方法。不过一般来说，当用户点击了一个列表项，或发生了一个导航动作时，我们就可以调用这个方法。
  recordInteraction = (e, v) => {
    console.log('  recordInteraction ：', e, v,  )
    // this.section
  }
  // 短暂地显示滚动指示器。
  flashScrollIndicators = (e, v) => {
    console.log('  flashScrollIndicators ：', e, v,  )
    // this.section
  }

  // 就一个参数：对象 item，包含：index：索引 item：数据 section：该区块总数据源 separators：（三个函数highlight unhighlight updateProps）
  // section：该区块总数据源 例如：{key: 's2', data: [
  //   {noImage: true, title: '第二个数据源数据 1st item', text: 'Section s2', key: '0'},
  //   {noImage: true, title: '第二个数据源数据 2nd item', text: 'Section s2', key: '1'},
  // ]},
  _renderItemComponent = (item, k) => {
    // console.log('_renderItemComponent ：', item, k)
    return (
      <ItemComponent item={item.item} onPress={this._pressItem} />
    );
  }
  // This is called when items change viewability by scrolling into our out of
  // the viewable area.
  // 包含一个参数：对象{changed：当前的数组数据源(每一个数据源对象里还包含可见性isViewable属性)，viewableItems }
  _onViewableItemsChanged = (info, k) => {
    console.log('_onViewableItemsChanged ：', info, k)
    // Impressions can be logged here
    if (this.state.logViewable) {
      // infoLog('onViewableItemsChanged: ', info.changed.map((v) => (
      //   {...v, item: '...', section: v.section.key}
      // )));
    }
  };
  _pressItem = (index) => {
    console.log('_pressItem ：', index)
    pressItem(this, index);
  };
}

const styles = StyleSheet.create({
  headerText: {
    padding: 4,
  },
  optionSection: {
    flexDirection: 'row',
  },
  searchRow: {
    paddingHorizontal: 10,
  },
  separatorText: {
    color: 'gray',
    alignSelf: 'center',
    padding: 4,
    fontSize: 9,
  },
});
