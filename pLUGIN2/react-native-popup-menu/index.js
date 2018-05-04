import React from "react"
import {
  Text,
  View,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
// your entry point
import { MenuProvider } from 'react-native-popup-menu';

// somewhere in your app
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
export const App = () => (
  <MenuProvider>
    <YourApp />
  </MenuProvider>
);


class Popovers extends Component {
  render() {
    console.log('Popovers 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Text>Hello world!</Text>
        <Menu>
          <MenuTrigger text='Select action' />
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
            <MenuOption onSelect={() => alert(`Delete`)} >
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
          </MenuOptions>
        </Menu>
      </View>
    )
  }
}
// 还有很多demo例子
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});