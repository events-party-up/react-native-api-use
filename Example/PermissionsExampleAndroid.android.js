import React from "react"
import {
  PermissionsAndroid,
  Picker,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
const Item = Picker.Item;

class PermissionsExample extends React.Component {
  state = {
    permission: PermissionsAndroid.PERMISSIONS.CAMERA,
    hasPermission: 'Not Checked',
  };

  render() {
    console.log('PermissionsExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={styles.text}>许可名字 Permission Name:</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.permission}
          onValueChange={this._onSelectPermission.bind(this)}>
          <Item label={PermissionsAndroid.PERMISSIONS.CAMERA} value={PermissionsAndroid.PERMISSIONS.CAMERA} />
          <Item label={PermissionsAndroid.PERMISSIONS.READ_CALENDAR} value={PermissionsAndroid.PERMISSIONS.READ_CALENDAR} />
          <Item label={PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION} value={PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION} />
        </Picker>
        <TouchableWithoutFeedback onPress={this._checkPermission}>
          <View>
            <Text style={[styles.touchable, styles.text]}>检查许可 Check Permission</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>许可状态 Permission Status: {this.state.hasPermission}</Text>
        <TouchableWithoutFeedback onPress={this._requestPermission}>
          <View>
            <Text style={[styles.touchable, styles.text]}>请求许可 Request Permission</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _onSelectPermission = (permission) => {
    console.log('_onSelectPermission ：', permission)
    this.setState({
      permission: permission,
    });
  };

  _checkPermission = async () => {
    let result = await PermissionsAndroid.check(this.state.permission);
    console.log('_checkPermission ：', result)
    this.setState({
      hasPermission: (result ? '假定 Granted' : '废弃 Revoked') + ' for ' +
        this.state.permission,
    });
  };

  _requestPermission = async () => {
    console.log('_requestPermission ：', )
    let result = await PermissionsAndroid.request(
      this.state.permission,
      {
        title: 'Permission Explanation 请求扩展',
        message:
          'The app needs the following permission ' + this.state.permission +
          ' because of reasons. Please approve.'
      },
    );

    this.setState({
      hasPermission: result + ' for ' +
        this.state.permission,
    });
  };
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <PermissionsExample />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
  },
  text: {
    margin: 10,
  },
  touchable: {
    color: '#007AFF',
  },
  picker: {
    flex: 1,
  }
});
