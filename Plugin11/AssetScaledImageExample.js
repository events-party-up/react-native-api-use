import React, { PureComponent, Component } from "react"
import {
  Image,
  StyleSheet,
  View,
  ScrollView
} from 'react-native'

export default class AssetScaledImageExample extends React.Component {
  state = {
    asset: this.props.asset
  };

  render() {
    const image = this.state.asset.node.image;
    console.log('AssetScaledImageExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView>
        <View style={styles.row}>
          <Image source={image} style={styles.imageWide}/>
        </View>
        <View style={styles.row}>
          <Image source={image} style={styles.imageThumb}/>
          <Image source={image} style={styles.imageThumb}/>
          <Image source={image} style={styles.imageThumb}/>
        </View>
        <View style={styles.row}>
          <Image source={image} style={styles.imageT1}/>
          <Image source={image} style={styles.imageT2}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  imageWide: {
    borderWidth: 1,
    borderColor: 'black',
    width: 320,
    height: 240,
    margin: 5,
  },
  imageThumb: {
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 100,
    margin: 5,
  },
  imageT1: {
    borderWidth: 1,
    borderColor: 'black',
    width: 212,
    height: 320,
    margin: 5,
  },
  imageT2: {
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 320,
    margin: 5,
  },
});
