import React from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'

class ScrollViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onContentSizeChange = (e, v) => {
    console.log(' onContentSizeChange ：', e, v, )
  }
  onMomentumScrollStart = (e, v) => {
    console.log(' onMomentumScrollStart ：', e, v, )
  }
  onMomentumScrollEnd = (e, v) => {
    console.log(' onMomentumScrollEnd ：', e, v, )
  }
  onScroll = (e, v) => {
    console.log(' onScroll ：', e, v, )
  }
  render() {
    console.log('ScrollViewContainer 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={[styles.scrollView,]}
          // 会覆盖style样式
          contentContainerStyle ={styles.contentContainerStyle}

          // 用户拖拽滚动视图的时候，是否要隐藏软键盘。
          // none（默认值），拖拽时不隐藏软键盘。
          // on-drag 当拖拽开始的时候隐藏软键盘。
          // interactive 软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘。安卓设备上不支持这个选项，会表现的和none一样。
          keyboardDismissMode={true}

          // 如果当前界面有软键盘，那么点击scrollview后是否收起键盘，取决于本属性的设置。（译注：很多人反应TextInput无法自动失去焦点/需要点击多次切换到其他组件等等问题，其关键都是需要将TextInput放到ScrollView中再设置本属性）
          // 'never'（默认值），点击TextInput以外的子组件会使当前的软键盘收起。此时子元素不会收到点击事件。
          // 'always'，键盘不会自动收起，ScrollView也不会捕捉点击事件，但子组件可以捕获。
          // 'handled'，当点击事件被子组件捕获时，键盘不会自动收起。这样切换TextInput时键盘可以保持状态。多数带有TextInput的情况下你应该选择此项。
          // false，已过期，请使用'never'代替。
          // true，已过期，请使用'always'代替。
          keyboardShouldPersistTaps={true} 

          // 此函数会在ScrollView内部可滚动内容的视图发生变化时调用。
          // 调用参数为内容视图的宽和高: (contentWidth, contentHeight)
          // 此方法是通过绑定在内容容器上的onLayout来实现的。
          onContentSizeChange={this.onContentSizeChange}

          // 滚动动画开始时调用此函数。
          onMomentumScrollStart={this.onMomentumScrollStart}
          
          // 滚动动画结束时调用此函数。
          onMomentumScrollEnd={this.onMomentumScrollEnd}

          // 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
          onScroll={this.onScroll}

          // 指定RefreshControl组件，用于为ScrollView提供下拉刷新功能。
          refreshControl={true}

          // （实验特性）：当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。默认值为true。
          removeClippedSubviews={true}

          showsHorizontalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}

          showsVerticalScrollIndicator={true}
          showsVerticalScrollIndicator={false}

          // 


          // 


          // 


          // 


          // 

        >
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView.scrollTo({y: 0}); }}>
          <Text>Scroll to top</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView.scrollToEnd({animated: true}); }}>
          <Text>Scroll to bottom</Text>
        </TouchableOpacity>

        <ScrollView
          ref={(scrollView) => { _scrollView2 = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.horizontalScrollView]}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView2.scrollTo({x: 0}); }}>
          <Text>Scroll to start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView2.scrollToEnd({animated: true}); }}>
          <Text>Scroll to end</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Thumb extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('Thumb  shouldComponentUpdate ：', nextProps, nextState )
    return false;
  }
  render() {
    // console.log('Thumb 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={this.props.uri} />
      </View>
    );
  }
}

const THUMBS = [
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
const createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#6A85B1',
    backgroundColor: 'skyblue',
    height: 300,
  },
  // horizontalScrollView: {
  //   height: 120,
  // },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  },

  contentContainerStyle: {
    padding: 10,
    backgroundColor: 'orange',
  },
});
export default ScrollViewContainer;