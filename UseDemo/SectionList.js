import React from "react"
import {
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

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
  )
}
const CustomSeparatorComponent = ({text}) => {
  console.log('CustomSeparatorComponent ：', text)
  return  (
    <View>
      <SeparatorComponent />
      <Text style={styles.separatorText}>{text}</Text>
      <SeparatorComponent />
    </View>
  )
}

class SectionListExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: genItemData(1000),
      filterText: '',
      logViewable: false,
      virtualized: true,
    }
  }
  _renderItemComponent = ({item}) => <ItemComponent item={item} onPress={this._pressItem} />
  // This is called when items change viewability by scrolling into our out of the viewable area.
  _onViewableItemsChanged = (info) => {
    console.log('_onViewableItemsChanged ：', info)
    // Impressions can be logged here
    if (this.state.logViewable) {
      infoLog('onViewableItemsChanged: ', info.changed.map((v, ) => (
        {...v, item: '...', section: v.section.key}
      )));
    }
  }
  _pressItem = (index) => {
    console.log('_pressItem ：', idnex)
    pressItem(this, index);
  }
  render() {
    const filterRegex = new RegExp(String(this.state.filterText), 'i');
    const filter = (item) => (filterRegex.test(item.text) || filterRegex.test(item.title));
    const filteredData = this.state.data.filter(filter);
    console.log('SectionListExample 组件 this.state, this.props ：', this.state, this.props, filterRegex, filter, filteredData)
    return (
      <View style={styles.container}>
        <View style={styles.searchRow}>
          <PlainInput
            onChangeText={filterText => {
              this.setState(() => ({filterText}));
            }}
            placeholder="Search..."
            value={this.state.filterText}
          />
          <View style={styles.optionSection}>
            {renderSmallSwitchOption(this, 'virtualized')}
            {renderSmallSwitchOption(this, 'logViewable')}
          </View>
        </View>
        <SeparatorComponent />
        <SectionList
          ListHeaderComponent={HeaderComponent}
          ListFooterComponent={FooterComponent}
          SectionSeparatorComponent={() => <CustomSeparatorComponent text="SECTION SEPARATOR" />}
          ItemSeparatorComponent={() => <CustomSeparatorComponent text="ITEM SEPARATOR" />}
          enableVirtualization={this.state.virtualized}
          onRefresh={() => alert('onRefresh: nothing to refresh :P')}
          onViewableItemsChanged={this._onViewableItemsChanged}
          refreshing={false}
          renderItem={this._renderItemComponent}
          renderSectionHeader={renderSectionHeader}
          sections={[
            {renderItem: renderStackedItem, key: 's1', data: [
              {title: 'Item In Header Section', text: 'Section s1', key: '0'},
            ]},
            {key: 's2', data: [
              {noImage: true, title: 'First item', text: 'Section s2', key: '0'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1'},
            ]},
            {key: 'Filtered Items', data: filteredData},
          ]}
          viewabilityConfig={VIEWABILITY_CONFIG}
        />
      </View>
    );
  }
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

export default SectionLists;