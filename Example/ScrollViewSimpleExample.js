import React from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

const NUM_ITEMS = 20;

class ScrollViewSimpleExample extends React.Component {
  makeItems = (nItems, styles) => {
    console.log('makeItems ：', nItems, styles)
    const items = [];
    for (const i = 0; i < nItems; i++) {
       items[i] = (
         <TouchableOpacity key={i} style={styles}>
           <Text>{'Item ' + i}</Text>
         </TouchableOpacity>
       );
    }
    return items;
  };

  render() {
    // One of the items is a horizontal scroll view
    const items = this.makeItems(NUM_ITEMS, styles.itemWrapper);
    console.log('ScrollViewSimpleExample 组件 this.state, this.props ：', items, this.state, this.props, )
    items[4] = (
      <ScrollView key={'scrollView'} horizontal={true}>
        {this.makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
      </ScrollView>
    );

    const verticalScrollView = (
      <ScrollView style={styles.verticalScrollView}>
        {items}
      </ScrollView>
    );

    return verticalScrollView;
  }
}

const styles = StyleSheet.create({
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#a52a2a',
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 50
  }
});
