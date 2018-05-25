import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import CarouselComponent, { CarouselCard } from 'react-native-carousel-component';

const cards = [
  <CarouselCard
    key={0}
    title="Title"
    description="Description"
  >
    // You can put your view here
  </CarouselCard>
];

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CarouselComponent
          ref={(carousel) => { this.carousel = carousel; }}
          cards={cards}
          title="Carousel Title"
          subTitle="Carousel Sub Title"
          showPageControl
          leftItem={{
            title: 'CLOSE',
            layout: 'title',
            onPress: this.dismiss,
          }}
        >
          {/* // You can put your view here */}
        </CarouselComponent>
      </View>
    );
  }
}