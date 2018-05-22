import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'
import { copilot, walkthroughable, CopilotStep } from 'react-native-copilot';

const CopilotText = walkthroughable(Text);

class HomeScreen {
  render() {
    console.log('HomeScreen ：', );
    return (
      <View>
        <CopilotStep text="This is a hello world example!" order={1} name="hello">
          <CopilotText>Hello world!</CopilotText>
        </CopilotStep>

        <CopilotStep text="This is a hello world example!" order={1} name="hello">
          <CustomComponent />
        </CopilotStep>
      </View>
    );
  }
}             