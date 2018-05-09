
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  DeviceEventEmitter,
  AsyncStorage,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Basic from './Basic'
import CustomElements from './CustomElements'
import Routing from './Routing'


const tabConfig = [
  {com: Basic, selectTab: 'Basic', txt: 'Basic', icon: require('../../../res/img/ic_trending.png'), },
  {com: CustomElements, selectTab: 'CustomElements', txt: 'CustomElements', icon: require('../../../res/img/ic_trending.png'), },
  {com: Routing, selectTab: 'Routing', txt: 'Routing', icon: require('../../../res/img/ic_trending.png'), },
]

export default class HomePage extends Component {
  constructor(props){
    super(props)
    console.log('HomePage构造函数 ：', this.props);
    const selectedTab = 'CustomElements'
    this.state = {
      selectedTab,
    }
  }
  navigate = (selectedTab) => {
    console.log('selectedTab ：', selectedTab, this.props, );
    this.setState({ selectedTab: 'tb_popular' })
  }
  _renderTab = (Component, selectTab, title, renderIcon, key) => {
    // console.log('Component, selectTab, title, renderIcon ：', Component, selectTab, title, renderIcon);
     return (
      <TabNavigator.Item
        key={selectTab}
        selected={this.state.selectedTab === selectTab}
        title={title}
        // selectedTitleStyle={'deepskyblue'}
        renderIcon={() => <Image style={styles.image} source={renderIcon} />}
        renderSelectedIcon={() => <Image style={[styles.image, ]} source={renderIcon} />}
        badgeText="1"
        onPress={() => this.setState({ selectedTab: selectTab })}>

        <Component {...this.props}></Component>
      </TabNavigator.Item>
     )
   }
  render() {
    console.log('HomePage 组件 ：', this.state, this.props)
    return (
      <View style={styles.container}>
        <TabNavigator>
          { tabConfig.map((v, i) => this._renderTab(v.com, v.selectTab, v.txt, v.icon, i)) }
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  image: {
    width: 22,
    height: 22,
  },
});