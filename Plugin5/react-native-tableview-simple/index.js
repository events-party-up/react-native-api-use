import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import {
    Cell,
    Section,
    TableView,
  } from 'react-native-tableview-simple';


const CellVariant = (props) => (
    <Cell
      {...props}
      cellContentView={
        <View
          style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
        >
          <Text
            allowFontScaling
            numberOfLines={1}
            style={{ flex: 1, fontSize: 20 }}
          >
            {props.title}
          </Text>
        </View>
      }
    />
  );

export default class MyComponent extends Component {
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <TableView>
                    <Section>
                        <CellVariant title="Element 1" />
                        <CellVariant title="Element 2" />
                        <CellVariant title="Element 3" />
                        <CellVariant title="Element 4" />
                    </Section>
                </TableView>

                <Cell
                    title="Switch"
                    cellAccessoryView={<Switch />}
                />

                <Cell
                    title="ActivityIndicator"
                    cellAccessoryView={<ActivityIndicator />}
                />

                <Cell
                    cellContentView={<TextInput style={{fontSize: 16, flex: 1}} placeholder="TextInput"/>}
                />

                <Cell
                    title="Image"
                    image={
                    <Image
                        style={{ borderRadius: 5 }}
                        source={{
                        uri: 'https://facebook.github.io/react/img/logo_og.png',
                        }}
                    />
                    }
                />
            </View>
        );
    }
  }