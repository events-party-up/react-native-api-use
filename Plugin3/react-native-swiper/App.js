import { AppRegistry } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';

import Basic from './components/Basic/'
import Dynamic from './components/Dynamic/'
import LoadMinimal from './components/LoadMinimal/'
import Phone from './components/Phone/'
import PhotoView from './components/PhotoView/' // not working
import Swiper from './components/Swiper/'  // working but no title displayed
import SwiperNumber from './components/SwiperNumber/' // working but no title displayed

const tabConfig = [
  {com: Basic, selectTab: 'Basic', txt: 'Basic', icon: require('../../../res/img/ic_trending.png'), },
  {com: Dynamic, selectTab: 'Dynamic', txt: 'Dynamic', icon: require('../../../res/img/ic_trending.png'), },
  {com: LoadMinimal, selectTab: 'LoadMinimal', txt: 'LoadMinimal', icon: require('../../../res/img/ic_trending.png'), },
  {com: Phone, selectTab: 'Phone', txt: 'Phone', icon: require('../../../res/img/ic_trending.png'), },
  {com: PhotoView, selectTab: 'PhotoView', txt: 'PhotoView', icon: require('../../../res/img/ic_trending.png'), },
  {com: Swiper, selectTab: 'Swiper', txt: 'Swiper', icon: require('../../../res/img/ic_trending.png'), },
  {com: SwiperNumber, selectTab: 'SwiperNumber', txt: 'SwiperNumber', icon: require('../../../res/img/ic_trending.png'), },
]

export default class HomePage extends Component {
  constructor(props){
    super(props)
    console.log('HomePage构造函数 ：', this.props);
    const selectedTab = 'Basic'
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