import React from "react"
import {
  AccessibilityInfo,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'
const importantForAccessibilityValues = ['auto', 'yes', 'no', 'no-hide-descendants'];

export default class AccessibilityAndroidExample extends React.Component {
  state = {
    count: 0,
    backgroundImportantForAcc: 0,
    forgroundImportantForAcc: 0,
    screenReaderEnabled: false,
  };

  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    AccessibilityInfo.addEventListener(
      'change',
      this._handleScreenReaderToggled
    );
    AccessibilityInfo.fetch().done((isEnabled) => {
      this.setState({
        screenReaderEnabled: isEnabled
      });
    });
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'change',
      this._handleScreenReaderToggled
    );
  }

  _handleScreenReaderToggled = (isEnabled) => {
    console.log('_handleScreenReaderToggled ：', isEnabled)
    this.setState({
      screenReaderEnabled: isEnabled,
    });
  }

  _addOne = () => {
    console.log('_addOne ：', )
    this.setState({
      count: ++this.state.count,
    });
  };

  _changeBackgroundImportantForAcc = () => {
    console.log('_changeBackgroundImportantForAcc ：', )
    this.setState({
      backgroundImportantForAcc: (this.state.backgroundImportantForAcc + 1) % 4,
    });
  };

  _changeForgroundImportantForAcc = () => {
    console.log('_changeForgroundImportantForAcc ：', )
    this.setState({
      forgroundImportantForAcc: (this.state.forgroundImportantForAcc + 1) % 4,
    });
  };

  render() {
    console.log('AccessibilityAndroidExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View title={'Accessibility'}>

        <View title="Nonaccessible view with TextViews">
          <View>
            <Text style={{color: 'green',}}>
              This is
            </Text>
            <Text style={{color: 'blue'}}>
              nontouchable normal view.
            </Text>
          </View>
        </View>

        <View title="Accessible view with TextViews wihout label">
          <View accessible={true}>
            <Text style={{color: 'green',}}>
              This is
            </Text>
            <Text style={{color: 'blue'}}>
              nontouchable accessible view without label.
            </Text>
          </View>
        </View>

        <View title="Accessible view with TextViews with label">
          <View accessible={true}
            accessibilityLabel="I have label, so I read it instead of embedded text.">
            <Text style={{color: 'green',}}>
              This is
            </Text>
            <Text style={{color: 'blue'}}>
              nontouchable accessible view with label.
            </Text>
          </View>
        </View>

        <View title="Touchable with component type = button">
          <TouchableOpacity
            onPress={() => ToastAndroid.show('Toasts work by default', ToastAndroid.SHORT)}
            accessibilityComponentType="button">
            <View style={styles.embedded}>
              <Text>Click me</Text>
              <Text>Or not</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View title="LiveRegion">
          <TouchableOpacity onPress={this._addOne}>
            <View style={styles.embedded}>
              <Text>Click me</Text>
            </View>
          </TouchableOpacity>
          <Text accessibilityLiveRegion="polite">
            Clicked {this.state.count} times
          </Text>
        </View>

        <View title="Check if the screen reader is enabled">
          <Text>
            The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
          </Text>
        </View>

        <View title="Overlapping views and importantForAccessibility property">
          <View style={styles.container}>
            <View
              style={{
                position: 'absolute',
                left: 10,
                top: 10,
                right: 10,
                height: 100,
                backgroundColor: 'green'}}
              accessible={true}
              accessibilityLabel="First layout"
              importantForAccessibility={
                importantForAccessibilityValues[this.state.backgroundImportantForAcc]}>
              <View accessible={true}>
                <Text style={{fontSize: 25}}>
                  Hello
                </Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                left: 10,
                top: 25,
                right: 10,
                height: 110,
                backgroundColor: 'yellow', opacity: 0.5}}
              accessible={true}
              accessibilityLabel="Second layout"
              importantForAccessibility={
                importantForAccessibilityValues[this.state.forgroundImportantForAcc]}>
              <View accessible={true}>
                <Text style={{fontSize: 20}}>
                  world
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={this._changeBackgroundImportantForAcc}>
            <View style={styles.embedded}>
              <Text>
                Change importantForAccessibility for background layout.
              </Text>
            </View>
          </TouchableOpacity>
          <View accessible={true}>
            <Text>
              Background layout importantForAccessibility
            </Text>
            <Text>
              {importantForAccessibilityValues[this.state.backgroundImportantForAcc]}
            </Text>
          </View>
          <TouchableOpacity onPress={this._changeForgroundImportantForAcc}>
            <View style={styles.embedded}>
              <Text>
                Change importantForAccessibility for forground layout.
              </Text>
            </View>
          </TouchableOpacity>
          <View accessible={true}>
            <Text>
              Forground layout importantForAccessibility
            </Text>
            <Text>
              {importantForAccessibilityValues[this.state.forgroundImportantForAcc]}
            </Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
   embedded: {
    backgroundColor: 'yellow',
    padding:10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    height:150,
  },
});