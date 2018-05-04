import React from "react"
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

export default class AddRemoveExample extends React.Component {
  state = {
    views: [],
  };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  _onPressAddView = () => {
    console.log('_onPressAddView ：', );
    this.setState((state) => ({views: [...state.views, {}]}));
  };

  _onPressRemoveView = () => {
    console.log('_onPressRemoveView ：', );
    this.setState((state) => ({views: state.views.slice(0, -1)}));
  };

  render() {
    console.log('AddRemoveExample 组件 this.state, this.props ：', this.state, this.props, )
    const views = this.state.views.map((view, i) =>
      <View key={i} style={styles.view}>
        <Text>{i}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressAddView}>
          <View style={styles.button}>
            <Text>Add view</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressRemoveView}>
          <View style={styles.button}>
            <Text>Remove view</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {views}
        </View>
      </View>
    );
  }
}

const GreenSquare = () => {
  console.log('GreenSquare ：', )
  return (
    <View style={styles.greenSquare}>
      <Text>Green square</Text>
    </View>
  )
}
const BlueSquare = () =>{
  console.log('BlueSquare ：', )
  return (
    <View style={styles.blueSquare}>
      <Text>Blue square</Text>
    </View>
  )
}

export default class CrossFadeExample extends React.Component {
  state = {
    toggled: false,
  };

  _onPressToggle = () => {
    console.log('_onPressToggle 组件 this.state, this.props ：', this.state, this.props, )
    LayoutAnimation.easeInEaseOut();
    this.setState((state) => ({toggled: !state.toggled}));
  };

  render() {
    console.log('CrossFadeExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressToggle}>
          <View style={styles.button}>
            <Text>Toggle</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {
            this.state.toggled ?
            <GreenSquare /> :
            <BlueSquare />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    height: 54,
    width: 54,
    backgroundColor: 'red',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
