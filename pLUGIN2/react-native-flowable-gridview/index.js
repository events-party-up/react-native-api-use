import React, { Component } from 'react';
import { View, Image, Text, findNodeHandle, StyleSheet,  } from 'react-native';
import FlowableGridView from 'react-native-flowable-gridview';

export default class Expamle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      viewRef: null 
    };
  }

  render() {
    console.log('Expamle 组件 this.state, this.props ：', this.state, this.props, )
    const datas = Array(10).fill('').map((_,i) => ({key: i, text: `item #${i}`}));    
    return (
      <FlowableGridView
        style={{flex: 1}}
        dataSource={datas}
        itemWidth={60}
        columnSpace={20}
        rowSpace={10}
        keyExtractor={(data, index) =>  data.key}
        renderItem={(data, index)=>
          <View style={styles.item}>
            <Text>{data.text}</Text>
          </View>
        }
    />)
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});