import React from "react"
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import DraggableList from 'react-native-draggablelist'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('Home 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <DraggableList
          dataSource={this.state.dataSource}
          component={Cell}
          cellProps={/*your cell props*/}
          onMove={this._onMove}
          keys={this.state.keys}
          shouldUpdateId={'2'}
          onPressCell={this.onPressCell}
          //scrollStyle: {/*styles*/}, //scroll view style
          //contentInset: {}, //scroll view contentInset
          
          //isScrollView: PropTypes.bool, //default true, 
          //toggleScroll: PropTypes.func,
          //shouldUpdate: PropTypes.bool, //update all cell
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});