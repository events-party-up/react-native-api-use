import React from "react"
import {
  Animated,
  Image,
  Platform,
  TouchableHighlight,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native'

function genItemData(count) {
  const dataBlob = [];
  for (let ii = 0; ii < count; ii++) {
    const itemHash = Math.abs(hashCode('Item ' + ii));
    dataBlob.push({
      title: 'Item ' + ii,
      text: LOREM_IPSUM.substr(0, itemHash % 301 + 20),
      key: ii,
      pressed: false,
    });
  }
  console.log(' dataBlob ：', count, dataBlob);
  return dataBlob;
}

const HORIZ_WIDTH = 200;

export default class ItemComponent extends React.PureComponent {
  // props: {
  //   fixedHeight?: ?boolean,
  //   horizontal?: ?boolean,
  //   item,
  //   onPress: (key) => void,
  // };
  _onPress = () => {
    console.log('_onPress ：', )
    this.props.onPress(this.props.item.key);
  };
  render() {
    const {fixedHeight, horizontal, item} = this.props;
    const itemHash = Math.abs(hashCode(item.title));
    const imgSource = THUMB_URLS[itemHash % THUMB_URLS.length];
    console.log('ItemComponent 组件 this.state, this.props ：', itemHash, imgSource, this.state, this.props, )
    return (
      <TouchableHighlight
        onPress={this._onPress}
        style={horizontal ? styles.horizItem : styles.item}>
        <View style={[
          styles.row, horizontal && {width: HORIZ_WIDTH}]}>
          {!item.noImage && <Image style={styles.thumb} source={imgSource} />}
          <Text
            style={styles.text}
            numberOfLines={(horizontal || fixedHeight) ? 3 : undefined}>
            {item.title} - {item.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const renderStackedItem = ({item}) => {
  const itemHash = Math.abs(hashCode(item.title));
  const imgSource = THUMB_URLS[itemHash % THUMB_URLS.length];
  console.log('renderStackedItem this.state, this.props ：', itemHash, imgSource, this.state, this.props, )
  return (
    <View style={styles.stacked}>
      <Text style={styles.stackedText}>{item.title} - {item.text}</Text>
      <Image style={styles.thumb} source={imgSource} />
    </View>
  );
};

export default class FooterComponent extends React.PureComponent {
  render() {
    console.log('FooterComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <SeparatorComponent />
        <View style={styles.headerFooter}>
          <Text>LIST FOOTER</Text>
        </View>
      </View>
    );
  }
}

export default class HeaderComponent extends React.PureComponent {
  render() {
    console.log('HeaderComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <View style={styles.headerFooter}>
          <Text>LIST HEADER</Text>
        </View>
        <SeparatorComponent />
      </View>
    );
  }
}

export default class SeparatorComponent extends React.PureComponent {
  render() {
    return <View style={styles.separator} />;
  }
}

export default class Spindicator extends React.PureComponent {
  render() {
    console.log('Spindicator 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <Animated.View style={[styles.spindicator, {
        transform: [
          {rotate: this.props.value.interpolate({
            inputRange: [0, 5000],
            outputRange: ['0deg', '360deg'],
            extrapolate: 'extend',
          })}
        ]
      }]} />
    );
  }
}

const THUMB_URLS = [
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
];

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix \
civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id \
integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem \
vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud \
modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
function hashCode(str) {
  let hash = 15;
  for (let ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
}

const HEADER = {height: 30, width: 100};
const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;

function getItemLayout(data, index, horizontal) {
  const [length, separator, header] = horizontal ?
    [HORIZ_WIDTH, 0, HEADER.width] : [84, SEPARATOR_HEIGHT, HEADER.height];
  console.log('getItemLayout ：', data, index, horizontal);
  return {length, offset: (length + separator) * index + header, index};
}

function pressItem(context, key) {
  const pressed = !context.state.data[key].pressed;
  console.log('pressItem ：', pressed, context, key);
  context.setState((state) => {
    const newData = [...state.data];
    newData[key] = {
      ...state.data[key],
      pressed,
      title: 'Item ' + key + (pressed ? ' (pressed)' : ''),
    };
    return {data: newData};
  });
}

function renderSmallSwitchOption(context, key) {
  console.log('renderSmallSwitchOption ：', context, key);
  return (
    <View style={styles.option}>
      <Text>{key}:</Text>
      <Switch
        style={styles.smallSwitch}
        value={context.state[key]}
        onValueChange={(value) => context.setState({[key]: value})}
      />
    </View>
  );
}

function PlainInput(props) {
  console.log('PlainInput ：', props);
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      clearButtonMode="always"
      underlineColorAndroid="transparent"
      style={styles.searchTextInput}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  headerFooter: {
    ...HEADER,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizItem: {
    alignSelf: 'flex-start', // Necessary for touch highlight
  },
  item: {
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    padding: 8,
    paddingRight: 0,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  searchTextInput: {
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 8,
    paddingVertical: 0,
    height: 26,
    fontSize: 14,
    flexGrow: 1,
  },
  separator: {
    height: SEPARATOR_HEIGHT,
    backgroundColor: 'gray',
  },
  smallSwitch: Platform.select({
    android: {
      top: 1,
      margin: -6,
      transform: [{scale: 0.7}],
    },
    ios: {
      top: 4,
      margin: -10,
      transform: [{scale: 0.5}],
    },
  }),
  stacked: {
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 10,
  },
  thumb: {
    width: 64,
    height: 64,
  },
  spindicator: {
    marginLeft: 'auto',
    marginTop: 8,
    width: 2,
    height: 16,
    backgroundColor: 'darkgray',
  },
  stackedText: {
    padding: 4,
    fontSize: 18,
  },
  text: {
    flex: 1,
  },
});

module.exports = {
  FooterComponent,
  HeaderComponent,
  ItemComponent,
  PlainInput,
  SeparatorComponent,
  Spindicator,
  genItemData,
  getItemLayout,
  pressItem,
  renderSmallSwitchOption,
  renderStackedItem,
};
