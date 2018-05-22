import React, { Component } from 'react';
import {
        View,
        Text,
} from 'react-native';
import MultipleTags from 'react-native-multiple-tags';


const tags = [
  'cherry',
  'mango',
  'cashew',
  'almond',
  'guava',
  'pineapple',
  'orange',
  'pear',
  'date',
  'strawberry',
  'pawpaw',
  'banana',
  'apple',
  'grape',
  'lemon',
];

const objectTags = [
  {
    key: 'id_01',
    value: 'cherry',
  },
  {
    key: 'id_02',
    value: 'mango',
  },
  {
    key: 'id_03',
    value: 'cashew',
  },
  {
    key: 'id_04',
    value: 'almond'
  },
  {
    key: 'id_05',
    value: 'guava'
  },
  {
    key: 'id_06',
    value: 'pineapple'
  },
  {
    key: 'id_07',
    value: 'orange'
  },
  {
    key: 'id_08',
    value: 'pear'
  },
  {
    key: 'id_09',
    value: 'date'
  }
]


class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      contentx: [],
    };
  }

  render() {
    console.log('WelcomeComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <MultipleTags
            tags={objectTags}
            search
            onChangeItem={(content) => { this.setState({ content }); }}
            title="Fruits"
          />
          {
          (() => this.state.content.map(item => <Text key={item.key}> {item.key}: {item.value} </Text>))()
          }
        <MultipleTags
          tags={tags}
          search
          onChangeItem={(contentx) => { this.setState({ contentx }); }}
          title="Fruits"
        />
        {
        (() => this.state.contentx.map(item => <Text key={item}> {item} </Text>) )()
        }
      </View>
    );
  }
}

export default WelcomeComponent; 