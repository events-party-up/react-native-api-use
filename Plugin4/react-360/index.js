import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

const tabConfig = [
    {com: Controller, selectTab: 'Controller', txt: 'Controller', icon: require('../../../res/img/ic_trending.png'), },
    {com: CustomTexture, selectTab: 'CustomTexture', txt: 'CustomTexture', icon: require('../../../res/img/ic_trending.png'), },
    {com: CylindricalPanel, selectTab: 'CylindricalPanel', txt: 'CylindricalPanel', icon: require('../../../res/img/ic_trending.png'), },
    {com: DashSample, selectTab: 'DashSample', txt: 'DashSample', icon: require('../../../res/img/ic_trending.png'), },
    {com: DomOverlaySample, selectTab: 'DomOverlaySample', txt: 'DomOverlaySample', icon: require('../../../res/img/ic_trending.png'), },
    {com: ModelSample, selectTab: 'ModelSample', txt: 'ModelSample', icon: require('../../../res/img/ic_trending.png'), },
    {com: MultiRoot, selectTab: 'MultiRoot', txt: 'MultiRoot', icon: require('../../../res/img/ic_trending.png'), },
    {com: NativeModules, selectTab: 'NativeModules', txt: 'NativeModules', icon: require('../../../res/img/ic_trending.png'), },
    {com: Pairs, selectTab: 'Pairs', txt: 'Pairs', icon: require('../../../res/img/ic_trending.png'), },
    {com: TourSample, selectTab: 'TourSample', txt: 'TourSample', icon: require('../../../res/img/ic_trending.png'), },
    {com: VideoSample, selectTab: 'VideoSample', txt: 'VideoSample', icon: require('../../../res/img/ic_trending.png'), },
    {com: VideoSample360, selectTab: 'VideoSample360', txt: 'VideoSample360', icon: require('../../../res/img/ic_trending.png'), },
]
  
export default class HomePage extends Component {
    constructor(props){
      super(props)
      console.log('HomePage构造函数 ：', this.props);
      const selectedTab = 'Controller'
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