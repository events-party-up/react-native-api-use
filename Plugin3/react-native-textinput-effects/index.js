import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import SlotMachine from 'react-native-slot-machine';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {duration: 4000, slot1: 1234, slot2: 'hello', slot3: '2351'};
  }

  componentDidMount() {
      setTimeout(() => this.setState({duration: 1000, slot1: '4321', slot2: 'world', slot3: '1234'}), 5000);
      setTimeout(() => this.setState({duration: 4000, slot1: '1234', slot2: 'hello', slot3: '2351'}), 7000);
      setTimeout(() => this.refs.slot.spinTo('prize'), 12000);
  }
  render() {
      const symbols = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌']; // can't use emojies in SlotMachine because some of them are comprised of 2 chars
      return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{height: 200, justifyContent: 'space-between', alignItems: 'center'}}>
                  <SlotMachine text={this.state.slot1} duration={this.state.duration} />
                  <SlotMachine
                      text={this.state.slot2}
                      range="abcdefghijklmnopqrstuvwxyz"
                      width={45} duration={this.state.duration}
                      ref="slot"
                  />
                  <SlotMachine text={this.state.slot3} range="012345" renderContent={c => <Text style={{fontSize: 25}}>{symbols[c]}</Text>} duration={this.state.duration} />
              </View>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});