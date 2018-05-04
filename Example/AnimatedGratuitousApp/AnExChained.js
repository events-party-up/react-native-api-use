import React from "react"
import {
  Animated,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native'

export default class AnExChained extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickers: [new Animated.ValueXY()],                    // 1 leader
    };
    const stickerConfig = {tension: 2, friction: 3};           // soft spring
    for (const i = 0; i < 4; i++) {                            // 4 followers
      const sticker = new Animated.ValueXY();
      Animated.spring(sticker, {
        ...stickerConfig,
        toValue: this.state.stickers[i],               // Animated toValue's are tracked
      }).start();
      this.state.stickers.push(sticker);               // push on the followers
    }
    const releaseChain = (e, gestureState) => {
      this.state.stickers[0].flattenOffset();          // merges offset into value and resets
      Animated.sequence([                              // spring to start after decay finishes
        Animated.decay(this.state.stickers[0], {       // coast to a stop
          velocity: {x: gestureState.vx, y: gestureState.vy},
          deceleration: 0.997,
        }),
        Animated.spring(this.state.stickers[0], {
          toValue: {x: 0, y: 0}                        // return to start
        }),
      ]).start();
    };
    this.state.chainResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.stickers[0].stopAnimation((value) => {
          this.state.stickers[0].setOffset(value);           // start where sticker animated to
          this.state.stickers[0].setValue({x: 0, y: 0});     // avoid flicker before next event
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: this.state.stickers[0].x, dy: this.state.stickers[0].y}] // map gesture to leader
      ),
      onPanResponderRelease: releaseChain,
      onPanResponderTerminate: releaseChain,
    });
  }

  render() {
    console.log('AnExChained 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.chained}>
        {this.state.stickers.map((_, i) => {
          const j = this.state.stickers.length - i - 1; // reverse so leader is on top
          const handlers = (j === 0) ? this.state.chainResponder.panHandlers : {};
          return (
            <Animated.Image
              {...handlers}
              key={i}
              source={{uri: CHAIN_IMGS[j]}}
              style={[styles.sticker, {
                transform: this.state.stickers[j].getTranslateTransform(), // simple conversion
              }]}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chained: {
    alignSelf: 'flex-end',
    top: -160,
    right: 126
  },
  sticker: {
    position: 'absolute',
    height: 120,
    width: 120,
    backgroundColor: 'transparent',
  },
});

const CHAIN_IMGS = [
  'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpf1/t39.1997-6/p160x160/10574705_1529175770666007_724328156_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xfa1/t39.1997-6/p160x160/851575_392309884199657_1917957497_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xfa1/t39.1997-6/p160x160/851567_555288911225630_1628791128_n.png',
  'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xfa1/t39.1997-6/p160x160/851583_531111513625557_903469595_n.png',
  'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpa1/t39.1997-6/p160x160/851577_510515972354399_2147096990_n.png',
];