import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import CollapsibleList from './dist'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      collapseButtonText: 'Show More'
    }
  }

  onCollapseListToggle (collapsed) {
    if (collapsed) {
      this.setState({ collapseButtonText: 'Show Less' })
    } else {
      this.setState({ collapseButtonText: 'Show More' })
    }
  }

  render () {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1, padding: 10}}>
          <CollapsibleList
            numberOfVisibleItems={2}
            animationConfig={{ duration: 300 }}
            wrapperStyle={styles.wrapperCollapsibleList}
            onToggle={(collapsed) => this.onCollapseListToggle(collapsed)}
            buttonContent={
              <View style={styles.button}>
                <Text style={styles.buttonText}>{this.state.collapseButtonText}</Text>
              </View>
            }
            items={[
              <View style={styles.collapsibleItem}>
                <Text>Hello Collapsable List :)</Text>
              </View>,
              <View style={styles.collapsibleItem}>
                <Text>Collapsable List Item</Text>
              </View>,
              <View style={styles.collapsibleItem}>
                <Text>
                  Collapsable List Item Multi line is also supported:

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </Text>
              </View>,
              <View style={styles.collapsibleItem}>
                <Text>Collapsable List Item</Text>
              </View>,
              <View style={styles.collapsibleItem}>
                <Text>Collapsable List Item</Text>
              </View>,
              <View style={styles.collapsibleItem}>
                <Text>Collapsable List Item</Text>
              </View>,
              <View style={styles.collapsibleItem}>
                <Text>Collapsable List Item</Text>
              </View>,
              <View style={styles.collapsibleItem}>
                <Text>Collapsable List Item</Text>
              </View>
            ]}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    borderRadius: 5
  },
  button: {
    padding: 10,
    backgroundColor: '#c2185b'
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CCC',
    padding: 10
  },
  buttonText: {
    color: '#FFF'
  }
})