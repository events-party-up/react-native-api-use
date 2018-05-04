
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import ViewPager from 'react-native-viewpager'
//const ViewPager = require('./ViewPager');
const deviceWidth = Dimensions.get('window').width;

const PAGES = [
  'Page 0',
  'Page 1',
  'Page 2',
  'Page 3',
  'Page 4',
];

function notifyMessage(msg) {
  console.log('notifyMessage ：', msg)
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    AlertIOS.alert(msg);
  }
}

export default class ImagesScreen extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(IMGS),
      page: 0
    }
  }
  render() {
    console.log('ImagesScreen 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ViewPager
      style={this.props.style}
      dataSource={this.state.dataSource}
      renderPage={this._renderPage}
      onChangePage={this._onChangePage}
      isLoop={false}
      autoPlay={false}/>
    );
  }
  _renderPage = (data, pageID) => {
    console.log('_renderPage ：', data, pageID)
    return (
      <View style={styles.page}>
        <Text style={styles.text}>{data}</Text>
      </View>
    );
  }
  _onChangePage = (page) => {
    console.log('_onChangePage ：', page)
    notifyMessage('Current page: ' + page);
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});