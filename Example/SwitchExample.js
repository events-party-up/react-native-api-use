import React from "react"
import {
  Platform,
  Switch,
  Text,
  View
} from 'react-native'

class BasicSwitchExample extends React.Component {
  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  render() {
    console.log('BasicSwitchExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
      </View>
    );
  }
}

class DisabledSwitchExample extends React.Component {
  render() {
    console.log('DisabledSwitchExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Switch
          disabled={true}
          style={{marginBottom: 10}}
          value={true} />
        <Switch
          disabled={true}
          value={false} />
      </View>
    );
  }
}

class ColorSwitchExample extends React.Component {
  state = {
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false,
  };

  render() {
    console.log('ColorSwitchExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
          onTintColor="#00ff00"
          style={{marginBottom: 10}}
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorFalseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorTrueSwitchIsOn} />
      </View>
    );
  }
}

class EventSwitchExample extends React.Component {
  state = {
    eventSwitchIsOn: false,
    eventSwitchRegressionIsOn: true,
  };

  render() {
    console.log('EventSwitchExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <Switch
            onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn} />
          <Switch
            onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn} />
          <Text>{this.state.eventSwitchIsOn ? 'On' : 'Off'}</Text>
        </View>
        <View>
          <Switch
            onValueChange={(value) => this.setState({eventSwitchRegressionIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn} />
          <Switch
            onValueChange={(value) => this.setState({eventSwitchRegressionIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn} />
          <Text>{this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'}</Text>
        </View>
      </View>
    );
  }
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
        <Text style={styles.text}>
          开关能被设置为true或者false 'Switches can be set to true or false',
        </Text>
        <BasicSwitchExample />

        <Text style={styles.text}>
          开关是禁用的 'Switches can be disabled',
        </Text>
        <DisabledSwitchExample />

        <Text style={styles.text}>
          可以监听改变 'Change events can be detected',
        </Text>
        <EventSwitchExample />

        <Text style={styles.text}>
          开关是可控的组件 'Switches are controlled components',
        </Text>
        <Switch />

        <Text style={styles.text}>
          可以提供自定义颜色 'Custom colors can be provided',
        </Text>
        <ColorSwitchExample />
      </ScrollView>
    );
  }
}

