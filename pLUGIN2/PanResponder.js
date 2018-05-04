import React from "react"
import {
  PanResponder,
  StyleSheet,
  View,
  processColor,
} from 'react-native'


class PanResponders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log('onStartShouldSetPanResponder ：', evt, gestureState)
        return true
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        console.log('onStartShouldSetPanResponderCapture ：', evt, gestureState)
        return true
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        console.log('onMoveShouldSetPanResponder ：', evt, gestureState)
        return true
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        console.log('onMoveShouldSetPanResponderCapture ：', evt, gestureState)
        return true
      },

      onPanResponderGrant: (evt, gestureState) => {
        console.log('onPanResponderGrant ：', evt, gestureState)
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

        // gestureState.{x,y} 现在会被设置为0
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('onPanResponderGrant ：', evt, gestureState)
        // 最近一次的移动距离为gestureState.move{X,Y}

        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => {
        console.log('onPanResponderTerminationRequest ：', evt, gestureState)
        return true
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('onPanResponderRelease ：', evt, gestureState)
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
      },
      onPanResponderTerminate: (evt, gestureState) => {
        console.log('onPanResponderTerminate ：', evt, gestureState)
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        console.log('onShouldBlockNativeResponder ：', evt, gestureState)
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  }
  render() {
    console.log('PanResponders 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View {...this._panResponder.panHandlers} />
    );
  }
}

const CIRCLE_SIZE = 80;

class PanResponderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this._panResponder = {}
    this._previousLeft = 0
    this._previousTop = 0
    this._circleStyles = {}
    // this.circle = (null : ?{ setNativeProps(props: Object): void })setNativeProps(props)
    this.circle = setNativeProps(props)
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    };
    console.log('PanResponderExample 即将挂载 组件 this.state, this.props ：', this._panResponder, this.state, this.props, )
  }

  componentDidMount() {
    this._updateNativeStyles();
  }
  _highlight = () => {
    console.log('_highlight ：', )
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }
  _unHighlight = () => {
    console.log('_unHighlight ：', )
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  }
  _updateNativeStyles = () => {
    console.log('_updateNativeStyles ：', )
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }
  _handleStartShouldSetPanResponder = (e, gestureState) => {
    console.log('_handleStartShouldSetPanResponder ：', e, gestureState)
    // Should we become active when the user presses down on the circle?
    return true;
  }
  _handleMoveShouldSetPanResponder = (e, gestureState) => {
    console.log('_handleMoveShouldSetPanResponder ：', e, gestureState)
    // Should we become active when the user moves a touch over the circle?
    return true;
  }
  _handlePanResponderGrant = (e, gestureState) => {
    console.log('_handlePanResponderGrant ：', e, gestureState)
    this._highlight();
  }
  _handlePanResponderMove = (e, gestureState) => {
    console.log('_handlePanResponderMove ：', e, gestureState, this._previousLeft, this._previousTop, this._circleStyles.style)
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  }
  _handlePanResponderEnd = (e, gestureState) => {
    console.log('_handlePanResponderEnd ：', e, gestureState, this._previousLeft, this._previousTop)
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }
  render() {
    console.log('PanResponderExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <View
          ref={(circle) => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});

export default PanResponders;