import React, { Component } from 'react';
import {
  FlatList,
  Text,
  ScrollView
} from 'react-native';

import { Row, Column as Col, Grid} from 'react-native-responsive-grid'
import { MaterialIcons } from '@expo/vector-icons';
import faker from 'faker';

let j = 0
const randomUsers = (count = 10) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      key: faker.random.uuid(),
      date: faker.date.weekday(),
      name: faker.name.firstName(),
      job: faker.name.jobTitle(),
      index: j++
    })
  }
  console.log('randomUsers ：', arr)
  return arr
}

export default class Home extends Component {
  state = {
    refreshing: false,
    data: randomUsers(10),
  };

  onEndReached = () => {
    console.log('onEndReached ：', )
    const data = [
      ...this.state.data,
      ...randomUsers(10),
    ]

    this.setState(state => ({
      data
    }));
  };

  onRefresh = () => {
    console.log('onRefresh ：', )
    this.setState({
      data: randomUsers(10),
    });
  }

  render() {
    console.log('Home 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <FlatList
        data={this.state.data}
        initialNumToRender={10}
        onEndReachedThreshold={1}
        onEndReached={this.onEndReached}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        renderItem={
          ({ item }) => {
            return (
              <Row key={item.key} style={{paddingTop: '6%', paddingBottom: '6%', backgroundColor: 'white', borderBottomColor: 'lightgray', borderBottomWidth: 1}}>
                <Col size={80} offset={6} >
                  <Row>
                    <Col size={60} smSize={100}>
                      <Text style={{fontSize: 15, color: '#BD1206', fontWeight:'bold'}}>{String(item.date)}</Text>
                      <Row>
                        <Col size={10}>
                          <MaterialIcons name='person' size={17} color='gray'/>
                        </Col>
                        <Col smSize={60} size={87.5} offset={2.5}>
                          <Text style={{fontSize: 12, color: 'gray', lineHeight: 20}}>{item.job}</Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col size={40} smSize={100}>
                      <Text style={{fontSize: 16, color: '#0a0a0a'}}>{item.name}</Text>
                    </Col> 
                  </Row>    
                </Col>
                <Col size={8} offset={-6} hAlign='right'>
                      <Text>{item.index}</Text>
                </Col>
              </Row>
            )
          }}
      />
    )
  }
}