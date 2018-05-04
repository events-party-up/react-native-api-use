
import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ListView
} from 'react-native'

import ActionSheet from 'react-native-actionsheet'

export default class Demo extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Which one do you like ?'}
          options={['Apple', 'Banana', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    )
  }
}

import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'

const options = [
  'Cancel', 
  'Apple', 
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon', 
  <Text style={{color: 'red'}}>Durian</Text>
]

class Demo extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show()
	}
	
	
  render() {
		const styles = {
			titleBox: {
				background: 'pink'
			},
			titleText: {
				fontSize: 16,
				color: '#000'
			}
		}
		
		
    return (
      <View>
        <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
          options={options}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
          onPress={(index) => { /* do something */ }}
        />
				
				<ActionSheet
					styles={styles}
				/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});