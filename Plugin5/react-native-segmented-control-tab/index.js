import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class ConsumerComponent extends Component {
    constructor(){
      super()
      this.state = {
        selectedIndex: 0,
      };
    }

    handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }

    render() {
        const styles = StyleSheet.create({
            tabsContainerStyle: {
              //custom styles
            },
            tabStyle: {
              //custom styles
              },
            tabTextStyle: {
              //custom styles
            },
            activeTabStyle: {
              //custom styles
              },
            activeTabTextStyle: {
              //custom styles
            },
            tabBadgeContainerStyle: {
              //custom styles
            },
            activeTabBadgeContainerStyle: {
              //custom styles
            },
            tabBadgeStyle: {
              //custom styles
            },
            activeTabBadgeStyle: {
              //custom styles
            }
    
        })
        console.log('ConsumerComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <SegmentedControlTab
                    values={['First', 'Second', 'Third']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                /> 

                
                <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    selectedIndex={1}
                    allowFontScaling={false}
                    values={['First', 'Second', 'Third']}
                    onPress= {index => this.setState({selected:index})}
                />
            </View>
        );
    }
}