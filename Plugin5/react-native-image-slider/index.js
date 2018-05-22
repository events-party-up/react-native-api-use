import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import ImageSlider from 'react-native-image-slider';

export default class MyComponent extends Component {
    render() {
        const images = [
          'https://placeimg.com/640/640/nature',
          'https://placeimg.com/640/640/people',
          'https://placeimg.com/640/640/animals',
          'https://placeimg.com/640/640/beer',
        ];
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <ImageSlider images={[
                    'http://placeimg.com/640/480/any',
                    'http://placeimg.com/640/480/any',
                    'http://placeimg.com/640/480/any'
                ]}/>

                <SafeAreaView style={styles.container}>
                    <View style={styles.content1}>
                    <Text style={styles.contentText}>Content 1</Text>
                    </View>
                    <ImageSlider
                    loopBothSides
                    autoPlayWithInterval={3000}
                    images={images}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View key={index} style={[style, styles.customSlide]}>
                        <Image source={{ uri: item }} style={styles.customImage} />
                        </View>
                    )}
                    customButtons={(position, move) => (
                        <View style={styles.buttons}>
                        {images.map((image, index) => {
                            return (
                            <TouchableHighlight
                                key={index}
                                underlayColor="#ccc"
                                onPress={() => move(index)}
                                style={styles.button}
                            >
                                <Text style={position === index && styles.buttonSelected}>
                                {index + 1}
                                </Text>
                            </TouchableHighlight>
                            );
                        })}
                        </View>
                    )}
                    />
                    <View style={styles.content2}>
                    <Text style={styles.contentText}>Content 2</Text>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
  }