import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import {width} from '../Config'

export default class GridRow extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    console.log('GridRow 组件 this.state, this.props ：', this.state, this.props, )
    const {
      // 事件
      onPress, 

      // 属性
      data,
      row,
      hideTitle, 

      // 样式
      gridWrapper, 
      rowStyle, 
      itemStyle,
      imgStyle,
      titleStyle,

      // 组件
      imgCom,
      titleCom,
    } = this.props

    const Views1 = []
    const Views2 = []
    for (let i in data) {
      const item = <View style={[styles.itemStyle, gridWrapper, {width: width / row - 10}]} key={i}>
        <TouchableOpacity onPress={onPress}>
          {
            // imgCom != undefined ? imgCom : <Image 
             //  style={[styles.imgStyle, imgStyle]} 
             //  resizeMode='contain'
           //    source={{uri: data[i].uri}}
            // ></Image>
            <Icon name={'ios-finger-print'} size={34} style={styles.icon} />
          }
          {
            <Text style={styles.text}>11111</Text>
            // titleCom != undefined ? titleCom :
           //  hideTitle ? null : <Text style={styles.titleStyle}>{data[i].title}</Text>
          }
        </TouchableOpacity>
      </View>

      if (i < row) {
        Views1.push(item)
      } else {
        Views2.push(item)
      }
    }

    return (
      <View style={[styles.gridWrapper, gridWrapper]}>
        <View style={[styles.rowStyle, rowStyle]}>
          {Views1}
        </View>
        <View style={[styles.rowStyle, rowStyle]}>
          {Views2}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gridWrapper: {
    flex: 1,
    height: 157,
  },
  itemStyle: {
  },
  imgStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: (Util.size.width - 40) / 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})