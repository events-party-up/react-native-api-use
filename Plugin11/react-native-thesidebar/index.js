
import React from 'react-native'
import SideMenu from 'react-native-thesidebar'

const {
  Component,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React

const window = Dimensions.get('window')
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    backfaceVisibility: 'visible'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5
  }
})

class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e)
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Your name</Text>
        </View>

        <Text style={styles.item}>
          About
        </Text>

        <Text style={styles.item}>
          Contacts
        </Text>
      </ScrollView>
    );
  }
}

export default class Basic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />
    console.log('Basic 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <SideMenu.AirBnbStyle
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text>
        </View>
        <Button style={styles.button} onPress={() => this.toggle()}>
          <Image
            source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 32, height: 32 }} />
        </Button>
      </SideMenu.AirBnbStyle>
    )
  }
}