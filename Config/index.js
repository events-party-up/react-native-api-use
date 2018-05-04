
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  PixelRatio,
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default {
  baseUrl = 'http://',
  pixelOne: 1 / PixelRatio.get(),
  size: {
    height,
    width,
  },
  getFetch(url, succ, fail) {
    fetch(url).then(res => res.json()).then(res => {
      console.log('请求结果 res ：', res)
      succ(res)
    })
    .catch(err => {
      console.log('请求失败 err ：', err)
      fail(err)
    })
  },
  Loading: (size = 'large', style = {}) => <ActivityIndicator size={size} style={style}></ActivityIndicator>
}

// export const  
