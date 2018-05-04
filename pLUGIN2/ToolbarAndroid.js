import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ToolbarAndroid,
} from 'react-native'


class ToolbarAndroids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onActionSelected = (position) => {
    console.log('onActionSelected ：', position)
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          logo={require('./app_logo')}
          title="AwesomeApp"
          actions={[
            {title: 'Settings', icon: require('./icon_settings'), show: 'always', showWithText: 'showWithText'},
            {title: 'ifRoom', icon: require('./icon_settings'), show: 'ifRoom', showWithText: 'showWithText'},
            {title: 'never', icon: require('./icon_settings'), show: 'never', showWithText: 'showWithText'},
          ]}
          contentInsetEnd={40}
          contentInsetStart={40}
          onActionSelected={this.onActionSelected} />
      </View>
    );
  }
}

class ToolbarAndroidContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionText: 'Example app with toolbar component',
      toolbarSwitch: false,
      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    }
  }
  _onActionSelected = (position) => {
    console.log('_onActionSelected ：', position)
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  }
  render() {
    console.log('ToolbarAndroidContainer 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <View>
          <View>
            <ToolbarAndroid
              actions={toolbarActions}
              navIcon={require('image!ic_menu_black_24dp')}
              onActionSelected={this._onActionSelected}
              onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
              style={styles.toolbar}
              subtitle={this.state.actionText}
              title="Toolbar" />
            <Text>{this.state.actionText}</Text>
          </View>
          <View>
            <ToolbarAndroid
              logo={require('image!launcher_icon')}
              style={styles.toolbar}>
              <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                <SwitchAndroid
                  value={this.state.toolbarSwitch}
                  onValueChange={(value) => {
                    console.log('value ：', value);
                    this.setState({'toolbarSwitch': value})
                  }} />
                <Text>{'\'Tis but a switch'}</Text>
              </View>
            </ToolbarAndroid>
          </View>
          <View>
            <ToolbarAndroid
              actions={toolbarActions}
              style={styles.toolbar}
              subtitle="There be no icon here" />
          </View>
          <View>
            <ToolbarAndroid
              actions={toolbarActions}
              logo={require('image!launcher_icon')}
              navIcon={require('image!ic_menu_black_24dp')}
              style={styles.toolbar} />
          </View>
          <View>
            <ToolbarAndroid
              navIcon={require('image!ic_menu_black_24dp')}
              onIconClicked={(v) => {
                console.log('colorProps ：', v)
                this.setState({colorProps: {}})
              }}
              title="Wow, such toolbar"
              style={styles.toolbar}
              subtitle="Much native"
              {...this.state.colorProps} />
            <Text>
              Touch the icon to reset the custom colors to the default (theme-provided) ones.
            </Text>
          </View>
          <View>
            <ToolbarAndroid
              actions={[{title: 'Bunny', icon: require('./bunny.png'), show: 'always'}]}
              logo={require('./hawk.png')}
              navIcon={require('./bunny.png')}
              title="Bunny and Hawk"
              style={styles.toolbar} />
          </View>
          <View>
            <ToolbarAndroid
              actions={toolbarActions}
              overflowIcon={require('./bunny.png')}
              style={styles.toolbar} />
          </View>
        </View>
      </View>
    );
  }
}

const toolbarActions = [
  {title: 'Create', icon: require('image!ic_create_black_48dp'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('image!ic_settings_black_48dp'), show: 'always'},
];

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});


export default ToolbarAndroids;