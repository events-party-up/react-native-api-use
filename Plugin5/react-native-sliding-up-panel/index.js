import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import { Tab, TabLayout } from 'react-native-android-tablayout';

export default class MyComponent extends Component {
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <TabLayout>
                    <Tab name="Tab 1"/>
                    <Tab name="Tab 2"/>
                    <Tab name="Tab 3"/>
                </TabLayout>

                <View>
                    <TabLayout>
                    <Tab style={{width: 110, height: 48}}>
                        <Text>Tab 1</Text>
                        <Text>Hey, multiline!</Text>
                    </Tab>
                    <Tab style={{width: 110, height: 48}}>
                        <Image source={require('./image/tabImage.png')}/>
                    </Tab>
                    <Tab style={{width: 110, height: 48}}>
                        <Icon name="user"/>
                    </Tab>
                    </TabLayout>
                </View>
            </View>
        );
    }
  }