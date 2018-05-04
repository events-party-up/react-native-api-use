import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'
import Drawer from 'react-native-drawer'

export default class HoApplication extends React.Component {
  closeControlPanel = () => {
    console.log('closeControlPanel ：', )
    this._drawer.close()
  };
  openControlPanel = () => {
    console.log('openControlPanel ：', )
    this._drawer.open()
  };
  render () {
    console.log('HoApplication 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}
        >
        <MainView />
      </Drawer>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
export default class DrawerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Drawer
          type="static"
          content={<ControlPanel />}
          openDrawerOffset={100}
          styles={drawerStyles}
          tweenHandler={Drawer.tweenPresets.parallax}
          >
            <Main />
        </Drawer>

        //Material Design Style Drawer
        <Drawer
          type="overlay"
          content={<ControlPanel />}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          >
            <Main />
        </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});