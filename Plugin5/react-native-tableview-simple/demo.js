
import React, {
    Component
  } from 'react';
  import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import {
    Cell,
    Section,
    TableView
  } from 'react-native-tableview-simple';
  
  export default class App extends Component<{}> {
    render() {
        console.log('App 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <ScrollView contentContainerStyle={styles.stage}>
                <View style={{
                backgroundColor: '#37474F',
                height: 500,
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <View style={{
                    backgroundColor: '#ffc107',
                    width: 80,
                    height: 80,
                    borderRadius: 10
                }}></View>
                </View>
                <TableView>
                <Section footer="All rights reserved.">
                    <Cell title="Help / FAQ" titleTextColor="#007AFF" onPress={() => console.log('open Help/FAQ')}/>
                    <Cell title="Contact Us" titleTextColor="#007AFF" onPress={() => console.log('open Contact Us')}/>
                </Section>
                </TableView>
            </ScrollView>
        );
    }
};
  
  const styles = StyleSheet.create({
    stage: {
      backgroundColor: '#EFEFF4',
      paddingBottom: 20,
      flex: 1
    },
  });