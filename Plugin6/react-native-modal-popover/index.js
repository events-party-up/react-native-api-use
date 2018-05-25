import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { Popover, PopoverController } from 'react-native-modal-popover';

const styles = StyleSheet.create({
  app: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2ffd2',
  },
  content: {
    padding: 16,
    backgroundColor: 'pink',
    borderRadius: 8,
  },
  arrow: {
    borderTopColor: 'pink',
  },
  background: {
    backgroundColor: 'rgba(0, 0, 255, 0.5)'
  },
});

export default class Demo extends Component {
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.app}>
        <PopoverController>
          {({ openPopover, closePopover, popoverVisible, setPopoverAnchor, popoverAnchorRect }) => (
            <React.Fragment>
              <Button title="Press me!" ref={setPopoverAnchor} onPress={openPopover} />
              <Popover 
                contentStyle={styles.content}
                arrowStyle={styles.arrow}
                backgroundStyle={styles.background}
                visible={popoverVisible}
                onClose={closePopover}
                fromRect={popoverAnchorRect}
                supportedOrientations={['portrait', 'landscape']}
              >
                <Text>Hello from inside popover!</Text>
              </Popover>
            </React.Fragment>
          )}
        </PopoverController>
      </View>
    );
  }
}