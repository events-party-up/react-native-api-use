import React from "react"
import {
  Text,
  View,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import SortableList from 'react-native-SortableList'

export default class SortableListDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('SortableListDemo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <SortableList items={data}>
          {/* {(key) => } */}
          <View style={styles.container}>
              <Text style={styles.text}>ssssssss</Text>
          </View>
        </SortableList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});