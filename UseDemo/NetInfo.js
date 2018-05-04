import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  NetInfo,
  TouchableOpacity,
} from 'react-native'


class NetInfos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  linkAction = () => {
    console.log('linkAction ：', )
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    });
    handleFirstConnectivityChange = (connectionInfo) => {
      console.log('handleFirstConnectivityChange    First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
      NetInfo.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
    }
    NetInfo.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );
  }
  isConnectionExpensive = () => {
    console.log('isConnectionExpensive ：', )
    NetInfo.isConnectionExpensive((isConnectionExpensive) => {
      console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));
    });
  }

  isConnected = () => {
    console.log('isConnected ：', )
    NetInfo.isConnected.fetch().done((isConnected) => {
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
    });
    handleFirstConnectivityChange = (isConnected) => {
      console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
      NetInfo.isConnected.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
    }
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.linkAction.bind(this, )}>linkAction</Text>

        <Text onPress={this.isConnectionExpensive.bind(this, )}>isConnectionExpensive</Text>

        <Text onPress={this.isConnected.bind(this, )}>isConnected</Text>
      </View>
    );
  }
}


class ConnectionInfoSubscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionInfoHistory: [],
    }
  }
  componentDidMount() {
    NetInfo.addEventListener(
        'change',
        this._handleConnectionInfoChange
    );
  }
  componentWillUnmount() {
    NetInfo.removeEventListener(
        'change',
        this._handleConnectionInfoChange
    );
  }
  _handleConnectionInfoChange = (connectionInfo) => {
    console.log('_handleConnectionInfoChange  connectionInfo ：', connectionInfo)
    const connectionInfoHistory = this.state.connectionInfoHistory.slice();
    console.log('connectionInfoHistory ：', connectionInfoHistory)
    connectionInfoHistory.push(connectionInfo);
    this.setState({
      connectionInfoHistory,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.connectionInfoHistory)}</Text>
      </View>
    );
  }
}

class HomConnectionInfoCurrente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionInfo: null,
    }
  }
  myClaimBar = () => {
    
  }
  componentDidMount() {
    console.log('HomConnectionInfoCurrente 即将挂载 ：', )
    NetInfo.addEventListener(
        'change',
        this._handleConnectionInfoChange
    );
    NetInfo.fetch().done(
        (connectionInfo) => { this.setState({connectionInfo}); }
    );
  }
  componentWillUnmount() {
    console.log('HomConnectionInfoCurrente  即将卸载 ：', )
    NetInfo.removeEventListener(
        'change',
        this._handleConnectionInfoChange
    );
  }
  _handleConnectionInfoChange = (connectionInfo) => {
    console.log('_handleConnectionInfoChange  connectionInfo ：', connectionInfo)
    this.setState({
      connectionInfo,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.connectionInfo}</Text>
      </View>
    );
  }
}

class IsConnected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
    }
  }
  componentDidMount(){
    console.log('IsConnected 即将挂载 ：', )
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );
  }
  componentWillUnmount(){
    console.log('IsConnected 即将卸载 ：', )
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = (isConnected) => {
    console.log('_handleConnectionInfoChange  connectionInfo ：', connectionInfo)
    this.setState({
      isConnected,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
      </View>
    );
  }
}

class IsConnectionExpensive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnectionExpensive: false,
    }
  }
  _checkIfExpensive = () => {
    console.log('_checkIfExpensive ：', )
    NetInfo.isConnectionExpensive().then(
        isConnectionExpensive => { this.setState({isConnectionExpensive}); }
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this._checkIfExpensive}>
            <View>
              <Text>Click to see if connection is expensive:
                {this.state.isConnectionExpensive === true ? 'Expensive' :
                this.state.isConnectionExpensive === false ? 'Not expensive'
                : 'Unknown'}
              </Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}
class NetInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* NetInfo.isConnected */}
        <IsConnected />

        {/* NetInfo.update */}
        <ConnectionInfoCurrent />

        {/* NetInfo.updateHistory */}
        <ConnectionInfoSubscription />

        {/* NetInfo.isConnectionExpensive (Android) */}
        <IsConnectionExpensive />
      </View>
    );
  }
}
export default NetInfos;