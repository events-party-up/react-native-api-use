import React from "react"
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  FlatList,
} from 'react-native'

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <SomeOtherWidget
        {...this.props}
        onPress={this._onPress}
      />
    )
  }
}
class MyList extends React.PureComponent  {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }
  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    console.log('_onPressItem ：', id)
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => {
    console.log('_renderItem ：', item)
    return(
        <MyListItem
          id={item.id}
          onPressItem={this._onPressItem}
          selected={!!this.state.selected.get(item.id)}
          title={item.title}
        />
      )
  }  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

class FlatListsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (<View style={[style.separator, highlighted && {marginLeft: 0}]} /> )} 
          data={[{title: 'Title Text', key: 'item1'}]}
          renderItem={({item, separators}) => (
            <TouchableHighlight
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}> 
              <View style={{backgroundColor: 'white'}}>
                <Text>{item.title}}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

export default FlatLists;