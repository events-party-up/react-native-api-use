import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  DrawerLayoutAndroid,
  Button,
} from 'react-native';

export default class DrawerLayoutAndroids extends React.Component {
  constructor(props){
      super(props)
      const {Left} = DrawerLayoutAndroid.positions
      this.state = {
        pos: Left,
        width: 100,
        drawerLockMode: 'unlocked',
        keyboardDismissMode: 'none',
      }
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
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        {btns}
      </View>
    );
    const keyboardDismissModeArr = [
      'none', "on-drag"
    ]
    const drawerLockModeArr = [
      'unlocked', 'locked-closed', 'locked-open'
    ]
    const btns = drawerLockModeArr.map(v => {
      return <Button
        k={v}
        onPress={this.changeDrawerLockMode.bind(this, v)}
        title={v}
        color="#841584"
      />
    })
    btns.push(keyboardDismissModeArr.map(v => {
      return <Button
        k={v}
        onPress={this.changeDrawerLockMode.bind(this, v)}
        title={v}
        color="#841584"
      />
    }))
    console.log('this.state ：', this.state)
    return (
      <DrawerLayoutAndroid
        drawerWidth={width}
        drawerPosition={pos}
        keyboardDismissMode={keyboardDismissMode}
        onDrawerClose={this.onDrawerClose}
        onDrawerOpen={this.onDrawerOpen}
        onDrawerSlide={this.onDrawerSlide}
        renderNavigationView={() => navigationView}>
        {/* 主体内容部分 */}
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'orange',}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
          <Text style={styles.btn} onPress={() => this.posLeft()}>左边打开</Text>
          <Text style={styles.btn} onPress={() => this.posRight()}>右边打开</Text>
          <Text style={styles.btn} onPress={() => this.width()}>加宽</Text>
          <Text style={styles.text}>当前的drawerLockMode：{drawerLockMode}</Text>
          <Text style={styles.text}>指定在拖拽的过程中是否要隐藏软键盘{keyboardDismissMode}</Text>
          {btns}
        </View>
        
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
