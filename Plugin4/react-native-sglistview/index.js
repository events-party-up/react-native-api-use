import React from 'react';
import { ListView } from 'react-native';
import SGListView from 'react-native-sglistview';

const LIST_VIEW = 'listview';

export default class CardListView extends React.Component {
  static renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <Text>{rowData.title}</Text>
      </View>
    );
  }

  render() {
    console.log('CardListView 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView>
        <SGListView
          ref={LIST_VIEW}
          dataSource={this.getDataSource()}
          renderRow={this.renderRow}
        />


        <SGListView
          dataSource={this.getDataSource() } //data source
          ref={'listview'}
          initialListSize={1}
          stickyHeaderIndices={[]}
          onEndReachedThreshold={1}
          scrollRenderAheadDistance={1}
          pageSize={1}
          renderRow={(item) =>
            <ListItem>
              <Text>{item}</Text>
            </ListItem>
          }
        />
      </ScrollView>
    );
  }

  getDataSource() {
    console.log('getDataSource ：', )
    const dataSource = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid });

    const deals = this.props.deals.length > 0;
    console.log('getDataSource ：', deals, this.props)
    return deals ? dataSource.cloneWithRows(this.props.deals) : dataSource;
  }
}