import React, { PureComponent, Component } from "react"
import {
  ActivityIndicator,
  Alert,
  CameraRoll,
  Image,
  ListView,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

// const groupByEveryN = require('groupByEveryN');

const propTypes = {
  groupTypes: PropTypes.oneOf([
    'Album',
    'All',
    'Event',
    'Faces',
    'Library',
    'PhotoStream',
    'SavedPhotos',
  ]),
  batchSize: PropTypes.number,
  renderImage: PropTypes.func,
  imagesPerRow: PropTypes.number,
  assetType: PropTypes.oneOf([
    'Photos',
    'Videos',
    'All',
  ]),
};

export default class CameraRollView extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
    this.state = {
      assets: ([]),
      groupTypes: this.props.groupTypes,
      lastCursor: null,
      assetType: this.props.assetType,
      noMore: false,
      loadingMore: false,
      dataSource: ds,
    }

    this.propTypes = propTypes
  }
  static defaultProps = {
    groupTypes: 'SavedPhotos',
    batchSize: 5,
    imagesPerRow: 1,
    assetType: 'Photos',
    renderImage(asset) {
      const imageSize = 150;
      const imageStyle = [styles.image, {width: imageSize, height: imageSize}];
      return (
        <Image
          source={asset.node.image}
          style={imageStyle}
        />
      );
    },
  }

  getInitialState() {
    const ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});

    return {
      assets: ([]),
      groupTypes: this.props.groupTypes,
      lastCursor: null,
      assetType: this.props.assetType,
      noMore: false,
      loadingMore: false,
      dataSource: ds,
    };
  }

  rendererChanged() {
    console.log('rendererChanged ：', )
    const ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
    this.state.dataSource = ds.cloneWithRows(
      // $FlowFixMe(>=0.41.0)
      // groupByEveryN(this.state.assets, this.props.imagesPerRow)
    );
  }

  componentDidMount() {
    this.fetch();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.groupTypes !== nextProps.groupTypes) {
      this.fetch(true);
    }
  }

  _fetch = async(clear) => {
    console.log('_fetch ：', )
    if (clear) {
      this.setState(this.getInitialState(), this.fetch);
      return;
    }

    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'UIExplorer would like to access your pictures.',
        },
      );
      if (result !== 'granted') {
        Alert.alert('Access to pictures was denied.');
        return;
      }
    }

    const fetchParams = {
      first: this.props.batchSize,
      groupTypes: this.props.groupTypes,
      assetType: this.props.assetType,
    };
    if (Platform.OS === 'android') {
      // not supported in android
      delete fetchParams.groupTypes;
    }
    if (this.state.lastCursor) {
      fetchParams.after = this.state.lastCursor;
    }
    console.log('fetchParams ：', fetchParams);

    try {
      const data = await CameraRoll.getPhotos(fetchParams);
      console.log('data ：', data);
      this._appendAssets(data);
    } catch (e) {
      console.log('e ：', e);
    }
  }

  /**
   * Fetches more images from the camera roll. If clear is set to true, it will
   * set the component to its initial state and re-fetch the images.
   */
  fetch(clear) {
    console.log('fetch ：', clear)
    if (!this.state.loadingMore) {
      this.setState({loadingMore: true}, () => { this._fetch(clear); });
    }
  }

  render() {
    console.log('CameraRollView 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ListView
        renderRow={this._renderRow}
        renderFooter={this._renderFooterSpinner}
        onEndReached={this._onEndReached}
        style={styles.container}
        dataSource={this.state.dataSource}
        enableEmptySections
      />
    );
  }

  _rowHasChanged(r1, r2) {
    if (r1.length !== r2.length) {
      return true;
    }
    for (let i = 0; i < r1.length; i++) {
      if (r1[i] !== r2[i]) {
        return true;
      }
    }
    return false;
  }

  _renderFooterSpinner() {
    console.log('_renderFooterSpinner ：', this.state)
    if (!this.state.noMore) {
      return <ActivityIndicator />;
    }
    return null;
  }

  // rowData is an array of images
  _renderRow(rowData, sectionID, rowID)  {
    console.log('_renderRow ：', rowData, sectionID, rowID)
    const images = rowData.map((image) => {
      if (image === null) {
        return null;
      }
      // $FlowFixMe(>=0.41.0)
      return this.props.renderImage(image);
    });
    return (
      <View style={styles.row}>
        {images}
      </View>
    );
  }

  _appendAssets(data) {
    const assets = data.edges;
    const newState = { loadingMore: false };
    console.log('_appendAssets this.state, this.props ：', assets, this.state, this.props, )
    if (!data.page_info.has_next_page) {
      newState.noMore = true;
    }
    if (assets.length > 0) {
      newState.lastCursor = data.page_info.end_cursor;
      newState.assets = this.state.assets.concat(assets);
      newState.dataSource = this.state.dataSource.cloneWithRows(
        // $FlowFixMe(>=0.41.0)
        // groupByEveryN(newState.assets, this.props.imagesPerRow)
      );
    }
    console.log('newState ：', newState);
    this.setState(newState);
  }

  _onEndReached() {
    console.log('_onEndReached ：', )
    if (!this.state.noMore) {
      this.fetch();
    }
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  url: {
    fontSize: 9,
    marginBottom: 14,
  },
  image: {
    margin: 4,
  },
  info: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
