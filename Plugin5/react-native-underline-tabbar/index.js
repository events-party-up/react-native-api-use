import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";

const Page = ({label}) => (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        {label}
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
);

class example extends Component {
  render() {
    return (
        <View style={[styles.container, {paddingTop: 20}]}>
          <ScrollableTabView
              tabBarActiveTextColor="#53ac49"
              renderTabBar={() => <TabBar underlineColor="#53ac49" />}>
            <Page tabLabel={{label: "Page #1"}} label="Page #1"/>
            <Page tabLabel={{label: "Page #2 aka Long!", badge: 3}} label="Page #2 aka Long!"/>
            <Page tabLabel={{label: "Page #3"}} label="Page #3"/>
            <Page tabLabel={{label: "Page #4 aka Page"}} label="Page #4 aka Page"/>
            <Page tabLabel={{label: "Page #5"}} label="Page #5"/>
          </ScrollableTabView>

        </View>
    );
  }