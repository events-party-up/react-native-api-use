import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#527FE4',
    borderColor: '#000033',
    borderWidth: 1,
  },
  zIndex: {
    justifyContent: 'space-around',
    width: 100,
    height: 50,
    marginTop: -10,
  },
});

class ViewBorderStyleExample extends React.Component {
  state = {
    showBorder: true
  };

  render() {
    console.log('ViewBorderStyleExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableOpacity onPress={this._handlePress}>
        <Text style={styles.text}>视图边框样式</Text>
        <View>
          <View style={{
            borderWidth: 1,
            borderStyle: this.state.showBorder ? 'dashed' : null,
            padding: 5
          }}>
            <Text style={{fontSize: 11}}>
              虚线的边框 Dashed border style
            </Text>
          </View>
          <View style={{
            marginTop: 5,
            borderWidth: 1,
            borderRadius: 5,
            borderStyle: this.state.showBorder ? 'dotted' : null,
            padding: 5
          }}>
            <Text style={{fontSize: 11}}>
              点状边框样式 Dotted border style
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _handlePress = () => {
    console.log('_handlePress ：', )
    this.setState({showBorder: !this.state.showBorder});
  };
}

class ZIndexExample extends React.Component {
  state = {
    flipped: false
  };

  render() {
    const indices = this.state.flipped ? [-1, 0, 1, 2] : [2, 1, 0, -1];
    console.log('ZIndexExample 组件 this.state, this.props ：', indices, this.state, this.props, )
    return (
      <TouchableOpacity onPress={this._handlePress}>
        <View>
          <Text style={{paddingBottom: 10}}>层级例子 点击改变顺序 Tap to flip sorting order</Text>
          <View style={[
            styles.zIndex,
            {marginTop: 0, backgroundColor: '#E57373', zIndex: indices[0]}
          ]}>
            <Text>ZIndex {indices[0]}</Text>
          </View>
          <View style={[
            styles.zIndex,
            {marginLeft: 50, backgroundColor: '#FFF176', zIndex: indices[1]}
          ]}>
            <Text>ZIndex {indices[1]}</Text>
          </View>
          <View style={[
            styles.zIndex,
            {marginLeft: 100, backgroundColor: '#81C784', zIndex: indices[2]}
          ]}>
            <Text>ZIndex {indices[2]}</Text>
          </View>
          <View style={[
            styles.zIndex,
            {marginLeft: 150, backgroundColor: '#64B5F6', zIndex: indices[3]}
          ]}>
            <Text>ZIndex {indices[3]}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _handlePress = () => {
    console.log('_handlePress ：', )
    this.setState({flipped: !this.state.flipped});
  };
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>背景色 'Background Color',</Text>
        <View style={{backgroundColor: '#527FE4', padding: 5}}>
          <Text style={{fontSize: 11}}>
            Blue background
          </Text>
        </View>

        <Text style={styles.text}>边框 'Border',</Text>
        <View style={{borderColor: '#527FE4', borderWidth: 5, padding: 10}}>
          <Text style={{fontSize: 11}}>5px blue border</Text>
        </View>

        <Text style={styles.text}>内衬 边距'Padding/Margin',</Text>
        <View style={{borderColor: '#bb0000', borderWidth: 0.5}}>
          <View style={[styles.box, {padding: 5}]}>
            <Text style={{fontSize: 11}}>5px padding</Text>
          </View>
          <View style={[styles.box, {margin: 5}]}>
            <Text style={{fontSize: 11}}>5px margin</Text>
          </View>
          <View style={[styles.box, {margin: 5, padding: 5, alignSelf: 'flex-start'}]}>
            <Text style={{fontSize: 11}}>
              5px margin and padding,
            </Text>
            <Text style={{fontSize: 11}}>
              widthAutonomous=true
            </Text>
          </View>
        </View>

        <Text style={styles.text}>圆角 'Border Radius',</Text>
        <View style={{borderWidth: 0.5, borderRadius: 5, padding: 5}}>
          <Text style={{fontSize: 11}}>
            Too much use of `borderRadius` (especially large radii) on
            anything which is scrolling may result in dropped frames.
            Use sparingly.
          </Text>
        </View>

        <Text style={styles.text}>边框样式 'Border Style',</Text>
        <ViewBorderStyleExample />

        <Text style={styles.text}>带有圆角的圆圈 'Circle with Border Radius',</Text>
        <View style={{borderRadius: 10, borderWidth: 1, width: 20, height: 20}} />

        <Text style={styles.text}>溢出 'Overflow',</Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 95,
              height: 10,
              marginRight: 10,
              marginBottom: 5,
              overflow: 'hidden',
              borderWidth: 0.5,
            }}>
            <View style={{width: 200, height: 20}}>
              <Text>溢出隐藏 Overflow hidden</Text>
            </View>
          </View>
          <View style={{width: 95, height: 10, marginBottom: 5, borderWidth: 0.5}}>
            <View style={{width: 200, height: 20}}>
              <Text>溢出可见 Overflow visible</Text>
            </View>
          </View>
        </View>

        <Text style={styles.text}>透明度 'Opacity',</Text>
        <View>
          <View style={{opacity: 0}}><Text>Opacity 0</Text></View>
          <View style={{opacity: 0.1}}><Text>Opacity 0.1</Text></View>
          <View style={{opacity: 0.3}}><Text>Opacity 0.3</Text></View>
          <View style={{opacity: 0.5}}><Text>Opacity 0.5</Text></View>
          <View style={{opacity: 0.7}}><Text>Opacity 0.7</Text></View>
          <View style={{opacity: 0.9}}><Text>Opacity 0.9</Text></View>
          <View style={{opacity: 1}}><Text>Opacity 1</Text></View>
        </View>

        <Text style={styles.text}>层级 'ZIndex',</Text>
        <ZIndexExample />
 
      </ScrollView>
    );
  }
}