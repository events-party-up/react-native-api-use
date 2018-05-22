import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
} from 'react-native';


const numArr = [5, 10, 15, 20, ]

const numeArr = [5, 10, 15, 20, ]

import {createStyle, } from './utils'
createStyle(styleArr, suffixArr, numeArr, )
createStyle('margin', suffixArr, numeArr, )
createStyle('padding', suffixArr, numeArr, )
createStyle('margin', 'Vertical', numeArr, )
createStyle('padding', 'Vertical', numeArr, )
createStyle('margin', 'Horizontal', numeArr, )
createStyle('padding', 'Horizontal', numeArr, )

import {createStyle, } from './utils'

const commonStyle = {
  mv5:{
    marginVertical: 5,
  },
  mv10:{
    marginVertical: 10,
  },
  mv15:{
    marginVertical: 15,
  },
  mv20:{
    marginVertical: 20,
  },



  m5:{
    margin: 5,
  },
  m10:{
    margin: 10,
  },
  m15:{
    margin: 15,
  },
  m20:{
    margin: 20,
  },

  mb5:{
    marginBottom: 5,
  },
  mb10:{
    marginBottom: 10,
  },
  mb15:{
    marginBottom: 15,
  },
  mb20:{
    marginBottom: 20,
  },

  mt5:{
    marginTop: 5,
  },
  mt10:{
    marginTop: 10,
  },
  mt15:{
    marginTop: 15,
  },
  mt20:{
    marginTop: 20,
  },

  lt5:{
    marginLeft: 5,
  },
  ml10:{
    marginLeft: 10,
  },
  ml15:{
    marginLeft: 15,
  },
  ml20:{
    marginLeft: 20,
  },

  rt5:{
    marginRight: 5,
  },
  mr10:{
    marginRight: 10,
  },
  mr15:{
    marginRight: 15,
  },
  mr20:{
    marginRight: 20,
  },
}


const styles = StyleSheet.create({
  fc: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    
  },
  sideTop: {
    // flex: 1,
    height: 100,
  },
  sideCenter: {
    flex: 8,
  },
  sideBottom: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: 40,
    backgroundColor: '#ccc',
    
  },

  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  right: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    marginLeft: 10,
    // backgroundColor: 'gray',
    
  },
  text: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    
  },

  avatar: {
    borderWidth: 2, 
    flex: 1, 
    borderColor: 'black', 
    // width: 500,
    // height: 100,
  },

  settingWrapper: {
    marginLeft: 5,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    
  },




})

export default styles 



// const createStyle = (keyArr, prefixArr, suffixArr, numArr) => {
//   console.log('prefix, suffix ：', keyArr, prefixArr, suffixArr, numArr, );
//   //  if (prefixArr.isArray) {
//     const obj = {}
//     keyArr.forEach(key => {
//       prefixArr.forEach(prefix => {
//         suffixArr.forEach(suffix => {
//           numArr.forEach(num => {
//              console.log(' `${prefix}${suffix}${num}` ：', `${key}${num}`, `${prefix}${suffix}${num}`);
//             obj[`${key}${num}`] = {
//               [`${prefix}${suffix}`]: num,
//             }
//           })
//         })
//       })
//     })
//     return obj
//   // }
// }

// const suffixArr = [
//   'Bottom', 'Right', 'Left', 'Top',
// ]

// const styleArr = [
//   'm', 'p', 'mv', 'pv', 'mh', 'ph', 'ml', 'pl', 'mr', 'pr', 'mt', 'pt', 'mb', 'pb', 
// ]

// const styleArr = [
//   ['m', 'p', ], 
//   ['mv', 'pv', ], 
//   ['mh', 'ph', ], 
//   ['ml', 'pl', ],
//   ['mr', 'pr', ],
//   ['mt', 'pt', ],
//   [' mb', 'pb', ],
// ] 

// const prefixArr = [
//   'margin', 'padding',
// ]

// const suffixArr1 = [
//   'Vertical', 'Horizontal',
// ]

// const suffixArr2 = [
//   'Vertical', 'Horizontal',
// ]

// const styleArr = [
//   'm', 'p', 'mv', 'pv', 'mh', 'ph', 'ml', 'pl', 'mr', 'pr', 'mt', 'pt', 'mb', 'pb', 
// ]

// const styleArr = [
//   {key: 'm', prefix: 'margin', },
//   {key: 'p', prefix: 'padding', suffix: ,  }, 
//   {key: 'mv', prefix: 'margin', suffix: 'Vertical',  }, 
//   {key: 'pv', prefix: 'padding', suffix: 'Vertical',  }, 
//   {key: 'mh', prefix: 'margin', suffix: 'Horizontal',  }, 
//   {key: 'ph', prefix: 'padding', suffix: 'Horizontal',  }, 
//   {key: 'ml', prefix: 'margin', suffix: ,  }, 
//   {key: 'pl', prefix: 'padding', suffix: ,  }, 
//   {key: 'mr', prefix: 'margin', suffix: ,  }, 
//   {key: 'pr', prefix: 'padding', suffix: ,  }, 
//   {key: 'mt', prefix: 'margin', suffix: ,  }, 
//   {key: 'pt', prefix: 'padding', suffix: ,  }, 
//   {key: 'mb', prefix: 'margin', suffix: ,  }, 
//   {key: 'pb', prefix: 'padding', suffix: ,  }, 
// ]