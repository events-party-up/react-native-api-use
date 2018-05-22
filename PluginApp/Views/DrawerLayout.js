import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  DrawerLayoutAndroid,
  Button,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons'

import {sideBarConfig} from '../index'

export default class DrawerLayout extends React.Component {
  constructor(props){
      super(props)
      const {Left} = DrawerLayoutAndroid.positions
      this.state = {
        pos: Left,
        width: 200,
        drawerLockMode: 'unlocked',
        keyboardDismissMode: 'none',
      }
  }
  navigate = (v) => {
    console.log('  navigate ：', v, this.props, )
    // this.props.navigation.navigate(v.route)
  }
  
  posLeft = () => {
    console.log('posRight ：', )
    const {Left} = DrawerLayoutAndroid.positions
    this.setState({
      pos: Left
    })
  }
  posRight = () => {
    console.log('posRight ：', )
    const {Right} = DrawerLayoutAndroid.positions
    this.setState({
      pos: Right
    })
  }
  width = () => {
    const {width} = this.state
    console.log('width ：', width)
    this.setState({
      width: width + 100,
    })
  }
  changeDrawerLockMode = (key) => {
    console.log('changeDrawerLockMode this.state, this.props ：', this.state, key, )
    this.setState({
      drawerLockMode: key
    })
  }
  changeKeyboardDismissMode = (key) => {
    console.log('changeKeyboardDismissMode this.state, this.props ：', this.state, key, )
    this.setState({
      keyboardDismissMode: key
    })
  }
  onDrawerClose = (e, k) => {
    console.log('onDrawerClose ：', e, k);
  }
  onDrawerOpen = (e, k) => {
    console.log('onDrawerOpen ：', e, k);
  }
  onDrawerSlide = (e, k) => {
    console.log('onDrawerSlide ：', e, k);
  }

  render() {
    const {pos, width, drawerLockMode, keyboardDismissMode, } = this.state
    const keyboardDismissModeArr = [
      {txt: '拖拽过程中不收起键盘', val: 'none'}, 
      {txt: '拖拽过程中收起键盘', val: "on-drag"}, 
    ]
    const drawerLockModeArr = [
      {txt: '抽屉可以响应打开和关闭的手势操作', val: 'unlocked'}, 
      {txt: '抽屉将保持关闭，不可用手势打开', val: 'locked-closed'}, 
      {txt: '抽屉将保持打开，不可用手势关闭', val: 'locked-open'}, 
    ]
    const isLocked = drawerLockModeArr.map(v => {
      return <Button
        key={v.val}
        onPress={this.changeDrawerLockMode.bind(this, v.val)}
        title={v.txt + v.val}
        color="#841584"
      />
    })
    const dissmiss = keyboardDismissModeArr.map(v => {
      return <Button
        key={v.val}
        onPress={this.changeKeyboardDismissMode.bind(this, v.val)}
        title={v.txt + v.val}
        color="#841584"
      />
    })


    const sideBarCom = sideBarConfig.map(v => {
      return <TouchableNativeFeedback
        onPress={this.navigate.bind(this, v)}
        key={v.route}
      >
        <View 
          style={[styles.item, styles.mb5]} 
        >
          <View style={styles.left}>
            <Icon name={v.icon} size={24} style={styles.icon} />
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{v.name}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    })

    const navigationView = (
      <View style={styles.container}>

        <View style={styles.sideTop}>
          <TouchableNativeFeedback>
            <Image 
              style={styles.avatar}
              resizeMode={'contain'}
              source={{uri: 'https://b-ssl.duitang.com/uploads/item/201605/28/20160528080456_Gh32H.jpeg'}}/>
          </TouchableNativeFeedback>
        </View>

        <ScrollView style={styles.sideCenter}>
          {sideBarCom}
        </ScrollView>
        
        <View style={styles.sideBottom}>
          <TouchableNativeFeedback>
            <View style={styles.settingWrapper}>
              <View style={styles.left}>
                <Icon name={'ios-settings-outline'} size={34} style={styles.icon} />
              </View>
              <View style={styles.right}>
                <Text style={styles.text}>设置</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>

        
      </View>
    );
    
    console.log('DrawerLayout 组件 this.state, this.props ：', DrawerLayoutAndroid.positions, this.state, this.props, )
    return (
      <DrawerLayoutAndroid
        drawerWidth={width}
        drawerPosition={pos}
        drawerLockMode={drawerLockMode}
        keyboardDismissMode={keyboardDismissMode}
        onDrawerClose={this.onDrawerClose}
        onDrawerOpen={this.onDrawerOpen}
        onDrawerSlide={this.onDrawerSlide}
        renderNavigationView={() => navigationView}>
        {/* 主体内容部分 */}
        <View style={styles.container}>
          <Button
            onPress={this.posLeft}
            title={'左边打开'}
            color="#841584"
            style={styles.btn}
          />
          <Button
            onPress={this.posRight}
            title={'右边打开'}
            color="#841584"
          />
          <Button
            onPress={this.width}
            title={'加宽'}
            color="#841584"
          />
          {isLocked}
          <Text style={styles.text}>当前的drawerLockMode：{drawerLockMode}</Text>
          <Text style={styles.text}>指定在拖拽的过程中是否要隐藏软键盘{keyboardDismissMode}</Text>
          {dissmiss}
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300,}}
            value={this.state.text}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
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
    height: 30,
    backgroundColor: 'red',
    
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
    flex: 1, 
    marginLeft: 5,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    
  },





  mb5:{
    marginBottom: 5,
  },
})