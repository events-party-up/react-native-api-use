import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { LargeList } from "react-native-largelist";

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
          <LargeList
            style={{ flex: 1 }}
            bounces={true}
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.setState({ refreshing: true });
              setTimeout(() => this.setState({ refreshing: false }), 2000);
            }}
            safeMargin={600}
            numberOfRowsInSection={section => this.props.numberOfEachSection}
            numberOfSections={()=>this.props.numberOfSections}
            heightForCell={(section, row) => row % 2 ? this.minCellHeight : this.maxCellHeight}
            renderCell={this.renderItem.bind(this)}
            heightForSection={section =>section % 2 ? this.minSectionHeight : this.maxSectionHeight}
            renderHeader={this.renderHeader.bind(this)}
            renderFooter={this.renderFooter.bind(this)}
            renderSection={section => {
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: section % 2 ? "grey" : "yellow",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>
                    I am section {section}
                  </Text>
                </View>
              )
            }
            />
      </View>
    );
  }
}