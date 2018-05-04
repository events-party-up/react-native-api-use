import React from "react"
import {
  Animated,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

const renderSectionHeader = ({section}) => {
  console.log('renderSectionHeader ：', section)
  return (
    <View>
      <Text style={styles.headerText}>SECTION HEADER: {section.key}</Text>
      <SeparatorComponent />
    </View>
  );
}

const CustomSeparatorComponent = ({text}) => {
  console.log('CustomSeparatorComponent ：', text)
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
    for (let ii = 10; ii <= endIndex + 10; ii += 10) {
      filteredSectionData.push({
        key: `${filteredData[startIndex].key} - ${filteredData[Math.min(ii - 1, endIndex)].key}`,
        data: filteredData.slice(startIndex, ii),
      });
      startIndex = ii;
    }
    console.log('SectionListExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View
        noSpacer={true}
        noScroll={true}>
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
          SectionSeparatorComponent={() =>
            <CustomSeparatorComponent text="SECTION SEPARATOR" />
          }
          ItemSeparatorComponent={() =>
            <CustomSeparatorComponent text="ITEM SEPARATOR" />
          }
          debug={this.state.debug}
          enableVirtualization={this.state.virtualized}
          onRefresh={() => alert('onRefresh: nothing to refresh :P')}
          onScroll={this._scrollSinkY}
          onViewableItemsChanged={this._onViewableItemsChanged}
          refreshing={false}
          renderItem={this._renderItemComponent}
          renderSectionHeader={renderSectionHeader}
          sections={[
            {renderItem: renderStackedItem, key: 's1', data: [
              {title: 'Item In Header Section', text: 'Section s1', key: '0'},
            ]},
            {key: 's2', data: [
              {noImage: true, title: '1st item', text: 'Section s2', key: '0'},
              {noImage: true, title: '2nd item', text: 'Section s2', key: '1'},
            ]},
            ...filteredSectionData,
          ]}
          viewabilityConfig={VIEWABILITY_CONFIG}
        />
      </View>
    );
  }
  _renderItemComponent = ({item}) => {
    console.log('_renderItemComponent ：', item)
    return (
      <ItemComponent item={item} onPress={this._pressItem} />
    );
  }
  // This is called when items change viewability by scrolling into our out of
  // the viewable area.
  _onViewableItemsChanged = (info) => {
    console.log('_onViewableItemsChanged ：', info)
    // Impressions can be logged here
    if (this.state.logViewable) {
      infoLog('onViewableItemsChanged: ', info.changed.map((v) => (
        {...v, item: '...', section: v.section.key}
      )));
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
