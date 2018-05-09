import React from "react"
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'


const alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
'catalysts for change. Dynamically revolutionize.';

class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  showAlert = () => {
    console.log('showAlert ：', )
    Alert.alert(
      'Alert Title 弹框标题',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  
  render() {
    console.log('Simple 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text onPress={this.showAlert.bind(this, )}>弹出弹框 showAlert</Text>
      </View>
    );
  }
}

class SimpleAlertExampleBlock  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('SimpleAlertExampleBlock 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title 弹框标题',
            alertMessage,
          )}>
          <View style={styles.button}>
            <Text>带有信息和默认按钮的弹框 Alert with message and default button</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title 弹框标题',
            alertMessage,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>带有一个按钮的弹框 Alert with one button</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title 弹框标题',
            alertMessage,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>带有连个按钮的弹框 Alert with two buttons</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title 弹框标题',
            null,
            [
              {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
              {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
              {text: 'Baz', onPress: () => console.log('Baz Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>带有三个按钮的弹框 Alert with three buttons</Text>
          </View>
        </TouchableHighlight>

        <Text style={styles.text}>最多显示3个按钮</Text>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Foo Title',
            alertMessage,
            '..............'.split('').map((dot, index) => {
              console.log('dot, index ：', dot, index);
              return ({
                text: 'Button ' + index,
                onPress: () => console.log('Pressed ' + index)
              })
            })
          )}>
          <View style={styles.button}>
            <Text>带有很多按钮的弹框 Alert with too many buttons</Text>
          </View>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title 弹框标题',
            null,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ],
            {
              cancelable: false
            }
          )}>
          <View style={styles.button}>
            <Text>不能被取消的弹框 Alert that cannot be dismissed</Text>
          </View>
        </TouchableHighlight>
        
      </View>
    );
  }
}

class AlertExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Simple></Simple>
        <SimpleAlertExampleBlock />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  container: {
    marginBottom: 20,
  }
})

export default AlertExample;