
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

import ViewPager from 'react-native-viewpager';
//const ViewPager = require('./ViewPager');
const deviceWidth = Dimensions.get('window').width;

const IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

export default class TopScreen extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(IMGS),
    }
  }
  render() {
    console.log('TopScreen 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true}/>
    ) ;
  }

  _renderPage = (data, pageID) => {
    console.log('_renderPage ：', data, pageID)
    return (
      <Image
        source={{uri: data}}
        style={styles.page} />
    );
  }
}

const styles = StyleSheet.create({
  page: {
    width: deviceWidth,
  },
});