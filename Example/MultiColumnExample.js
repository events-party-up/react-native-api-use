import React from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View,
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
} from './ListExampleShared'

export default class MultiColumnExample extends React.Component {
  state = {
    data: genItemData(1000),
    filterText: '',
    fixedHeight: true,
    logViewable: false,
    numColumns: 2,
    virtualized: true,
  };
  _onChangeFilterText = (filterText) => {
    console.log('_onChangeFilterText ：', filterText)
    this.setState(() => ({filterText}));
  };
  _onChangeNumColumns = (numColumns) => {
    console.log('_onChangeNumColumns ：', numColumns)
    this.setState(() => ({numColumns: Number(numColumns)}));
  };
  render() {
    const filterRegex = new RegExp(String(this.state.filterText), 'i');
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
              value={this.state.numColumns ? String(this.state.numColumns) : ''}
            />
          </View>
          <View style={styles.row}>
            {renderSmallSwitchOption(this, 'virtualized')}
            {renderSmallSwitchOption(this, 'fixedHeight')}
            {renderSmallSwitchOption(this, 'logViewable')}
          </View>
        </View>
        <SeparatorComponent />
        <FlatList
          ItemSeparatorComponent={SeparatorComponent}
          ListFooterComponent={FooterComponent}
          ListHeaderComponent={HeaderComponent}
          getItemLayout={this.state.fixedHeight ? this._getItemLayout : undefined}
          data={filteredData}
          key={this.state.numColumns + (this.state.fixedHeight ? 'f' : 'v')}
          numColumns={this.state.numColumns || 1}
          onRefresh={() => alert('onRefresh: nothing to refresh :P')}
          refreshing={false}
          renderItem={this._renderItemComponent}
          disableVirtualization={!this.state.virtualized}
          onViewableItemsChanged={this._onViewableItemsChanged}
          legacyImplementation={false}
        />
      </View>
    );
  }
  _getItemLayout = (data, index) => {
    console.log('_getItemLayout ：', data, index)
    return getItemLayout(data, index);
  }
  _renderItemComponent = ({item}) => {
    console.log('_renderItemComponent ：', item)
    return (
      <ItemComponent
        item={item}
        fixedHeight={this.state.fixedHeight}
        onPress={this._pressItem}
      />
    );
  };
  // This is called when items change viewability by scrolling into or out of the viewable area.
  _onViewableItemsChanged = (info) => {
    console.log('info this.state, this.props ：', this.state, this.props, info)
    // Impressions can be logged here
    if (this.state.logViewable) {
      infoLog('onViewableItemsChanged: ', info.changed.map((v) => ({...v, item: '...'})));
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
