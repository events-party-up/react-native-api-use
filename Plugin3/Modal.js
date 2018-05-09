import React from "react"
import { 
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
  Picker,
} from 'react-native'

const Item = Picker.Item;

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }
  
  setModalVisible(visible) {
    console.log('setModalVisible ：', visible)
    this.setState({modalVisible: visible});
  }

  render() {
    console.log('Modals 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                关闭模态框 Hide Modal
              </Button>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Button
            onPress={this._setModalVisible.bind(this, false)}
            style={styles.modalButton}>
            显示模态框 Show Modal
          </Button>
        </TouchableHighlight>
      </View>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }
  _onHighlight = () => {
    console.log('_onHighlight ：', )
    this.setState({active: true});
  }

  _onUnhighlight = () => {
    console.log('_onUnhighlight ：', )
    this.setState({active: false});
  }
  
  render() {
    const colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    console.log('Button 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

const supportedOrientationsPickerValues = [
  ['portrait'],
  ['landscape'],
  ['landscape-left'],
  ['portrait', 'landscape-right'],
  ['portrait', 'landscape'],
  [],
];

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationType: 'none',
      modalVisible: false,
      transparent: false,
      selectedSupportedOrientation: 0,
      currentOrientation: 'unknown',
    }
  }
  
  _setModalVisible = (visible) => {
    console.log('_setModalVisible ：', visible)
    this.setState({modalVisible: visible});
  }
  
  _setAnimationType = (type) => {
    console.log('_setAnimationType ：', type)
    this.setState({animationType: type});
  }
  
  _toggleTransparent = () => {
    console.log('_toggleTransparent ：', )
    this.setState({transparent: !this.state.transparent});
  }
  
  render() {
    const modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    const innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
    const activeButtonStyle = {
      backgroundColor: '#ddd'
    };
    console.log('ModalExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('onRequestClose ：', )
            this._setModalVisible(false)
          }}
          supportedOrientations={supportedOrientationsPickerValues[this.state.selectedSupportedOrientation]}
          onOrientationChange={evt => this.setState({currentOrientation: evt.nativeEvent.orientation})}
        >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text>模态框当前的状态是否 This modal was presented {this.state.animationType === 'none' ? 'without' : 'with'} animation带有动画.</Text>
              <Text>当前处于 It is currently displayed in {this.state.currentOrientation} mode模式.</Text>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                关闭模态框 Close 
              </Button>
            </View>
          </View>
        </Modal>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>动画类型 Animation Type</Text>
          <Button onPress={this._setAnimationType.bind(this, 'none')} style={this.state.animationType === 'none' ? activeButtonStyle : {}}>
            无动画 none
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'slide')} style={this.state.animationType === 'slide' ? activeButtonStyle : {}}>
            划入动画 slide
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'fade')} style={this.state.animationType === 'fade' ? activeButtonStyle : {}}>
            淡入动画 fade
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>透明度 Transparent</Text>
          <Switch value={this.state.transparent} onValueChange={this._toggleTransparent} />
        </View>

        <View>
          <Text style={styles.rowTitle}>支持的横竖屏属性 Supported orientations</Text>
          <Picker
            selectedValue={this.state.selectedSupportedOrientation}
            onValueChange={(_, i) => this.setState({selectedSupportedOrientation: i})}
            itemStyle={styles.pickerItem}
            >
            <Item label="Portrait" value={0} />
            <Item label="Landscape" value={1} />
            <Item label="Landscape left" value={2} />
            <Item label="Portrait and landscape right" value={3} />
            <Item label="Portrait and landscape" value={4} />
            <Item label="Default supportedOrientations" value={5} />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'gray',
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flexGrow: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
  pickerItem: {
    fontSize: 16,
  },
});

export default ModalExample;