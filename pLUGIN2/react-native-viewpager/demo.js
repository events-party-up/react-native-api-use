
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

const TopScreen = require('./TopScreen');
const BottomScreen = require('./BottomScreen');

export default class MainScreen extends React.Component {
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
    console.log('MainScreen 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <TopScreen style={styles.viewpager}/>
        <BottomScreen style={styles.viewpager}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewpager: {
    flex: 1,
  },
});