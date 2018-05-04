import React, { Component } from 'react'
import {
  AsyncStorage,
} from 'react-native'


export const JP = (o) => JSON.parse(o)
export const JS = (o) => JSON.stringify(o)
export const backup = (o) => JSON.parse(JSON.stringify(o))


// 保存操作
// AsyncSave - 异步设置本地存储
export const AsyncSave = (key, value, cb) => {
  console.log('AsyncSave 异步设置本地存储', key, value, cb )
  AsyncStorage.setItem(key, value, (err) => {
    console.log('AsyncSave 是否保存失败：', err, !err ? '保存成功' : '保存失败', )
  })
}
//  AsyncMutilSet-异步多个设置本地存储
export const AsyncMutilSet = (keyArr, cb) => {
  console.log('AsyncMutilSet  异步获取本地所有存储数据的keyArr key, cb ：', keyArr, cb)
  AsyncStorage.multiSet(keyArr, (err, result) => {
    console.log('AsyncMutilSet 异步获取本地所有存储数据的keyArr  keyArr, err, result ：', keyArr, err, !err ? '获取成功' : '获取失败',)
    try {
      console.log('multiSet 异步获取本地所有存储数据的keys结果 ：', JSON.parse(result))
      resolve(JSON.parse(result))
    } catch (e) {
      reject(e)
    }
  })
}

// 获取操作
// AsyncGet-异步获取本地数据
export const AsyncGet = (key, cb) => {
  console.log('AsyncGet 异步获取本地数据 key, cb ：', key, cb)
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key, (err, result) => {
      console.log('AsyncGet 异步获取本地数据 ：', key, err, result, !err ? '保存成功' : '保存失败',)
      if (!err) {
        try {
          console.log('getItem 异步获取数据结果 ：', JSON.parse(result))
          resolve(JSON.parse(result))
        } catch (e) {
          reject(e)
        }
      } else {
        reject(err)
      }
    })
  })
}
//  AsyncMutilGet-异步获取多个本地存储数据
export const AsyncMutilGet = (keyArr, cb) => {
  console.log('AsyncMutilGet  异步获取多个本地存储数据 keyArr, cb ：', key, cb)
  AsyncStorage.multiGet(keyArr, (err, result) => {
    console.log('multiGet 异步获取多个本地存储数据  keyArr, err, result ：', keyArr, err, !err ? '获取成功' : '获取失败',)
    try {
      console.log('multiGet 异步获取多个本地存储数据结果 ：', JSON.parse(result))
      resolve(JSON.parse(result))
    } catch (e) {
      reject(e)
    }
  })
}
//  AsyncGetAllKeys-异步获取本地所有存储数据的keys
export const AsyncGetAllKeys = (keyArr, cb) => {
  console.log('AsyncGetAllKeys  异步获取本地所有存储数据的keyArr key, cb ：', keyArr, cb)
  AsyncStorage.getAllKeys(keyArr, (err, result) => {
    console.log('AsyncGetAllKeys 异步获取本地所有存储数据的keyArr  keyArr, err, result ：', keyArr, err, !err ? '获取成功' : '获取失败',)
    try {
      console.log('getAllKeys 异步获取本地所有存储数据的keyArr结果 ：', JSON.parse(result))
      resolve(JSON.parse(result))
    } catch (e) {
      reject(e)
    }
  })
}

// 删除操作
// AsyncRemove - 异步删除本地存储
export const AsyncRemove = (key, cb) => {
  console.log('AsyncRemove 异步删除本地存储', key, cb )
  AsyncStorage.removeItem(key, (err) => {
    console.log('AsyncRemove 是否删除失败：', err, !err ? '删除成功' : '删除失败', )
    cb(!err)
  })
}
// AsyncClear - 异步删除全部本地存储
export const AsyncClear = (key, cb) => {
  console.log('AsyncClear 异步删除本地存储', key, cb )
  AsyncStorage.clear(key, (err) => {
    console.log('AsyncClear 是否删除失败：', err, !err ? '删除成功' : '删除失败', )
    cb(!err)
  })
}
