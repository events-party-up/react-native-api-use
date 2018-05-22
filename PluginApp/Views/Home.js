import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'


const tabConfig = [
  // {com: Page1, tab: 'Page1', title: 'Page1', icon: require('../../res/img/ic_polular.png'), selectIcon: '' },
  // {com: Page2, tab: 'Page2', title: 'Page2', icon: require('../../res/img/ic_polular.png'), selectIcon: '' },
  // {com: Page3, tab: 'Page3', title: 'Page3', icon: require('../../res/img/ic_polular.png'), selectIcon: '' },
  // {com: Page4, tab: 'Page4', title: 'Page4', icon: require('../../res/img/ic_polular.png'), selectIcon: '' },
  {com: Page1, tab: 'Page1', title: 'Page1', icon: 'ios-heart-outline', selectIcon: 'ios-heart', isBadge: 1, },
  {com: Page2, tab: 'Page2', title: 'Page2', icon: 'ios-heart-outline', selectIcon: 'ios-heart' },
  {com: Page3, tab: 'Page3', title: 'Page3', icon: 'ios-heart-outline', selectIcon: 'ios-heart' },
  {com: Page4, tab: 'Page4', title: 'Page4', icon: 'ios-heart-outline', selectIcon: 'ios-heart' },
]

export default class Home extends Component {
  constructor(props){
    super(props)
    console.log('Home构造函数 ：', this.props)
    this.state = {
      selectedTab: 'Page1',
    }
  }
  _renderTab = (Component, tab, title, icon, selectIcon, isBadge, key) => {
    // console.log('Component, tab, title, icon, selectIcon ：', Component, tab, title, icon, selectIcon)
    const {selectedTab, } = this.state
     return (
      <TabNavigator.Item
        key={tab}
        selected={selectedTab === tab}
        title={title}
        selectedTitleStyle={styles.selectedTitleStyle}
        // size={size != undefined ? size : 24}
        renderIcon={() => <Icon name={icon} size={24} style={styles.icon} /> }
        renderSelectedIcon={() => <Icon name={selectIcon} size={24} style={styles.selectIcon} /> }
        badgeText={isBadge != undefined ? isBadge : 2}
        onPress={() => this.setState({ selectedTab: tab })}
      >
        <Component {...this.props}></Component>
      </TabNavigator.Item>
     )
  }

  render() {
    console.log('HomePage组件 ：', this.state)
    return (
      <View style={styles.container}>
        <TabNavigator>
          { tabConfig.map((v, i) => this._renderTab(v.com, v.tab, v.title, v.icon, v.selectIcon, v.isBadge, i)) }
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 22,
    height: 22,
  },
  icon: {
    
  },
  selectIcon: {
    color: 'red',
  },
  selectedTitleStyle: {
    color: 'cyan',
    
  },
})