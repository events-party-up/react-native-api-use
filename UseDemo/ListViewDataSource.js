import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'


class ListViewDataSources extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      ds,
    }
    this._data = []; 
  }
  _onDataArrived = (newData) => {
    console.log('_onDataArrived ：', newData)
    this._data = this._data.concat(newData);
    this.setState({
      ds: this.state.ds.cloneWithRows(this._data)
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>ListViewDataSource</Text>
      </View>
    );
  }
}

export default ListViewDataSources;