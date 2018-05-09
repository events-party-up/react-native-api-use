import React from "react"
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

// animated bool 
// 指定状态栏的变化是否应以动画形式呈现。
// 目前支持这几种样式：backgroundColor, barStyle和hidden。

// hidden bool 
// 是否隐藏状态栏。

// android backgroundColor color 
// 状态栏的背景色。

// android translucent bool 
// 指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制
// （即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。

// barStyle  enum('default', 'light-content', 'dark-content') 
// 设置状态栏文本的颜色。

// ios showHideTransition 通过hidden属性来显示或隐藏状态栏时所使用的动画效果。默认值为'fade'。

class StatusBarsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('StatusBarsDemo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{marginTop: 50, backgroundColor: 'yellow',}}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />

        <View style={styles.container}>
          <Text style={styles.text}>=====================</Text>
        </View>
        <View>
          <StatusBar 
            // hidden={route.statusBarHidden}
            backgroundColor="orange"
           />
        </View>
        <StatusBar 
          // hidden={route.statusBarHidden}
          backgroundColor="red"
          barStyle="light-content"
          />
      </View>
    );
  }
}

const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
];

const barStyles = [
  'default',
  'light-content',
];

const showHideTransitions = [
  'fade',
  'slide',
];

function getValue(values, index) {
  console.log('getValue函数 ：', values, index, index % values.length)
  return values[index % values.length];
}

class StatusBarHiddenExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      hidden: false,
      showHideTransition: getValue(showHideTransitions, 0),
    }
    this._showHideTransitionIndex = 0
  }
  _onChangeAnimated = () => {
    console.log('_onChangeAnimated ：', this.state);
    this.setState({animated: !this.state.animated});
  }

  _onChangeHidden = () => {
    console.log('_onChangeHidden ：', this.state);
    this.setState({hidden: !this.state.hidden});
  }

  _onChangeTransition = () => {
    console.log('_onChangeTransition ：', this._showHideTransitionIndex);
    this._showHideTransitionIndex++;
    this.setState({
      showHideTransition: getValue(showHideTransitions, this._showHideTransitionIndex),
    });
  }
  
  render() {
    console.log('StatusBars 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <StatusBar
          hidden={this.state.hidden}
          showHideTransition={this.state.showHideTransition}
          animated={this.state.animated}
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeHidden}>
          <View style={styles.button}>
            <Text>按压切换是否隐藏 hidden: {this.state.hidden ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeAnimated}>
          <View style={styles.button}>
            <Text>按压是否使用切换动画 animated (ios only): {this.state.animated ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeTransition}>
          <View style={styles.button}>
            <Text>
              按压切换是否显示使用过渡 
              showHideTransition (ios only):
              '{getValue(showHideTransitions, this._showHideTransitionIndex)}'
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class StatusBarStyleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      barStyle: getValue(barStyles, this._barStyleIndex),
    }
    this._barStyleIndex = 0
  }
  _onChangeBarStyle = () => {
    console.log('_onChangeBarStyle ：', this._barStyleIndex)
    this._barStyleIndex++;
    this.setState({barStyle: getValue(barStyles, this._barStyleIndex)});
  }
  _onChangeAnimated = () => {
    console.log('_onChangeAnimated this.state, this.props ：', this.state, this.props, )
    this.setState({animated: !this.state.animated});
  }
  
  render() {
    console.log('StatusBarStyleExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <StatusBar
          animated={this.state.animated}
          // 只有设置了这个才会显示一个灰色
          // showHideTransition={'fade'}
          showHideTransition={'slide'}
          // barStyle={this.state.barStyle}
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeBarStyle}>
          <View style={styles.button}>
            <Text>按压切换改变样式 style: '{getValue(barStyles, this._barStyleIndex)}'</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeAnimated}>
          <View style={styles.button}>
            <Text>按压切换动画 animated: {this.state.animated ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

// ios  networkActivityIndicatorVisible 是否显示网络活动提示符
class StatusBarNetworkActivityExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      networkActivityIndicatorVisible: false,
    }
  }
  _onChangeNetworkIndicatorVisible = () => {
    console.log('_onChangeNetworkIndicatorVisible ：', this.state)
    this.setState({
      networkActivityIndicatorVisible: !this.state.networkActivityIndicatorVisible,
    });
  }
  
  render() {
    console.log('StatusBarNetworkActivityExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <StatusBar
          networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeNetworkIndicatorVisible}>
          <View style={styles.button}>
            <Text>
              按压切换网络状态是否可见
              networkActivityIndicatorVisible:
              {this.state.networkActivityIndicatorVisible ? 'true' : 'false'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class StatusBarBackgroundColorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      backgroundColor: getValue(colors, 0),
    }
    this._colorIndex = 0
  }
  _onChangeBackgroundColor = () => {
    console.log('StatusBarBackgroundColorExample ：', this._colorIndex)
    this._colorIndex++;
    this.setState({backgroundColor: getValue(colors, this._colorIndex)});
  }

  _onChangeAnimated = () => {
    console.log('_onChangeAnimated this.state, this.props ：', this.state, this.props, )
    this.setState({animated: !this.state.animated});
  }
  
  render() {
    console.log('StatusBarBackgroundColorExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <StatusBar
          backgroundColor={this.state.backgroundColor}
          animated={this.state.animated}
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeBackgroundColor}>
          <View style={styles.button}>
            <Text>按压切换设置状态栏背景色 backgroundColor: '{getValue(colors, this._colorIndex)}'</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeAnimated}>
          <View style={styles.button}>
            <Text>动画切换 animated: {this.state.animated ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class StatusBarTranslucentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translucent: false,
    }
  }
  _onChangeTranslucent = () => {
    console.log('_onChangeTranslucent this.state, this.props ：', this.state, this.props, )
    this.setState({
      translucent: !this.state.translucent,
    });
  }
  
  render() {
    console.log('StatusBarTranslucentExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <StatusBar
          backgroundColor={'#4e86ff'}
          translucent={this.state.translucent}
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this._onChangeTranslucent}>
          <View style={styles.button}>
            <Text>按压切换是否显示沉浸式状态栏 translucent: {this.state.translucent ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class StatusBarStaticIOSExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('StatusBarStaticIOSExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setHidden(true, 'slide');
          }}>
          <View style={styles.button}>
            <Text>设置状态栏为可见 - 使用slide setHidden(true, 'slide')</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setHidden(false, 'fade');
          }}>
          <View style={styles.button}>
            <Text>设置状态栏为不可见 - 使用fade setHidden(false, 'fade')</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setBarStyle('default', true);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏bar样式 - 默认 setBarStyle('default', true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setBarStyle('light-content', true);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏bar样式 - 光亮模式 setBarStyle('light-content', true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setNetworkActivityIndicatorVisible(true);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏网络状态可见 setNetworkActivityIndicatorVisible(true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setNetworkActivityIndicatorVisible(false);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏网络状态不可见 setNetworkActivityIndicatorVisible(false)</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
class StatusBarStaticAndroidExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('StatusBarStaticAndroidExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setHidden(true);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏为隐藏状态 setHidden(true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setHidden(false);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏为显示状态 setHidden(false)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setBackgroundColor('#ff00ff', true);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏背景色 setBackgroundColor('#ff00ff', true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setBackgroundColor('#00ff00', true);
          }}>
          <View style={styles.button}>
            <Text>设置状态栏背景色 setBackgroundColor('#00ff00', true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.4)', true);
          }}>
          <View style={styles.button}>
            <Text>关闭状态栏为沉浸式背景色 setTranslucent(true) and setBackgroundColor('rgba(0, 0, 0, 0.4)', true)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => {
            StatusBar.setTranslucent(false);
            StatusBar.setBackgroundColor('black', true);
          }}>
          <View style={styles.button}>
            <Text>关闭设置状态栏背景色为黑色 setTranslucent(false) and setBackgroundColor('black', true)</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
// export default StatusBarsDemo
// export default StatusBarHiddenExample 
// export default StatusBarStyleExample
// export default StatusBarNetworkActivityExample
// export default StatusBarBackgroundColorExample
// export default StatusBarTranslucentExample
// export default StatusBarStaticIOSExample
export default StatusBarStaticAndroidExample

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  }
});