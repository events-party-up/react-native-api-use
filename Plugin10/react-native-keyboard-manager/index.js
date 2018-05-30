import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native' 

import KeyboardManager from 'react-native-keyboard-manager'

KeyboardManager.setEnable(true);
KeyboardManager.setEnableDebugging(true);
KeyboardManager.setKeyboardDistanceFromTextField(10);
KeyboardManager.setPreventShowingBottomBlankSpace(true);
KeyboardManager.setEnableAutoToolbar(true);
KeyboardManager.setToolbarDoneBarButtonItemText("Done");
KeyboardManager.setToolbarManageBehaviour(0);
KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
KeyboardManager.setToolbarPreviousNextButtonEnable(false);
KeyboardManager.setShouldShowTextFieldPlaceholder(true);
KeyboardManager.setOverrideKeyboardAppearance(false);
KeyboardManager.setShouldResignOnTouchOutside(true);
KeyboardManager.resignFirstResponder();
KeyboardManager.isKeyboardShowing().then((isShowing) => {
  console.log('isShowing ：', isShowing);
});

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CollapsingToolbar 
            leftItem={<Icon name="md-menu" size={30} color="#fff" />}
            rightItem={<Icon name="md-create" size={30}  color="#fff" />}   
            toolbarColor='#2196f3'  
            title='Demo Toolbar'
            src={require('../../../images/drawer6.png')}>
            <Text>
                Create             
            </Text>
        </CollapsingToolbar>
      </View>
    );
  }
}