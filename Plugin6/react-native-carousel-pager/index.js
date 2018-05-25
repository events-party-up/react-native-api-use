import {View} from 'react-native';
import React, {Component} from 'react';
import CarouselPager from 'react-native-carousel-pager';

export default class Pager extends Component {
  onClickSomething() {
    this.carousel.goToPage(2);
  }

  render() {
    console.log('Pager 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{flex: 1}}>
        <CarouselPager ref={ref => this.carousel = ref} initialPage={2} pageStyle={{backgroundColor: '#fff'}}>
          <View key={'page0'}></View>
          <View key={'page1'}></View>
          <View key={'page2'}></View>
          <View key={'page3'}></View>
        </CarouselPager>
      </View>
    );
  }
}