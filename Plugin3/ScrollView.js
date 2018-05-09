import React from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'

class ScrollViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('ScrollViewContainer 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={[styles.scrollView,]}

          contentContainerStyle ={styles.contentContainerStyle}
        >
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView.scrollTo({y: 0}); }}>
          <Text>Scroll to top</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView.scrollToEnd({animated: true}); }}>
          <Text>Scroll to bottom</Text>
        </TouchableOpacity>

        <ScrollView
          ref={(scrollView) => { _scrollView2 = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.horizontalScrollView]}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView2.scrollTo({x: 0}); }}>
          <Text>Scroll to start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView2.scrollToEnd({animated: true}); }}>
          <Text>Scroll to end</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class Thumb extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('Thumb  shouldComponentUpdate ：', nextProps, nextState )
    return false;
  }
  render() {
    console.log('Thumb 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={this.props.uri} />
      </View>
    );
  }
}

const THUMBS = [
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
  require('../../res/img/ic_star.png'), 
];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
const createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  // horizontalScrollView: {
  //   height: 120,
  // },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
});
export default ScrollViewContainer;