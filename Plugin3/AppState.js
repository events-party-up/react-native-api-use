import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  AppState,
} from 'react-native'

class AppStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAppState: AppState.currentState,
    }
  }
  componentDidMount() {
    console.log('AppStates  componentDidMount 组件 this.state, this.props ：', this.state, this.props, )
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  componentWillUnmount() {
    console.log('AppStates  组件即将卸载 ：', )
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange = (nextAppState) => {
    console.log('AppStates  _handleAppStateChange ：',  nextAppState )
    if (this.state.currentAppState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }
    this.setState({currentAppState: nextAppState});
  }
  render() {
    return (
      <View>
        <Text>当前状态： Current state is: {this.state.currentAppState}</Text>
      </View>
    );
  }
}

class AppStateSubscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      previousAppStates: [],
      memoryWarnings: 0,
    }
  }
  
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
  }
  _handleMemoryWarning() {
    console.log('_handleMemoryWarning ：', )
    this.setState({memoryWarnings: this.state.memoryWarnings + 1});
  }
  _handleAppStateChange = (appState) => {
    console.log('_handleAppStateChange ：', appState)
    const previousAppStates = this.state.previousAppStates.slice();
    previousAppStates.push(this.state.appState);
    this.setState({
      appState,
      previousAppStates,
    });
  }
  render() {
    console.log('AppStateSubscription 组件 this.state, this.props ：', this.state, this.props, )
    if (this.props.showMemoryWarnings) {
      return (
        <View>
          <Text>历史警告记录: {this.state.memoryWarnings}</Text>
        </View>
      );
    }
    if (this.props.showCurrentOnly) {
      return (
        <View>
          <Text>当前状态： {this.state.appState}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>历史状态记录： {JSON.stringify(this.state.previousAppStates)}</Text>
      </View>
    );
  }
}
class AppStatesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View>
        <AppStates></AppStates>
        {/* AppState.currentState */}
        <Text>{AppState.currentState}</Text>

        {/* Subscribed AppState */}
        <AppStateSubscription showCurrentOnly={true} />

        {/* Previous states */}
        <AppStateSubscription showCurrentOnly={false} />

        {/* Memory Warnings */}
        <AppStateSubscription showMemoryWarnings={true} />
      </View>
    );
  }
}
export default AppStatesContainer;