
const React = require('react-native');
const precomputeStyle = require('precomputeStyle');


const {
  Animated,
  StyleSheet,
  Text,
  Image,
  View,
  PanResponder,
  StyleSheet
  
} = React;

const Dimensions = require('Dimensions');
const SCREEN_HEIGHT = Dimensions.get('window').height;
const HIGHER_TENSION = 5000;
const FRICTION = 1200;
//maximum drawer size is 1 that means its use 100% of avalaible space on the screen
const DEFAULT_DRAWER_SIZE = 0.10;

import DraggableDrawer from 'react-native-draggable-drawer';



export default class Demo extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      scale: new Animated.Value(1)
    }
  }

  onDragDown( drawerPosition ) {   

    const diff = DEFAULT_DRAWER_SIZE - drawerPosition;
  
  
    if(diff>=0){
      const scaleTo = 1 - ( (1 * drawerPosition)/DEFAULT_DRAWER_SIZE );
      this.state.scale.setValue(1 + scaleTo); 
    }
  }


  onRelease( isGoingUp ){
    console.log(' onRelease drawer '+ isGoingUp);
    if(isGoingUp) return;
     Animated.spring(  // Base: spring, decay, timing
      this.state.scale,  // Animate `scale`
        { 
          toValue: 1,  // Animate to smaller size
          friction: 20,  // Bouncier spring
          tension: 20  // Controls speed

        } )
     .start(); 
  }

  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )

    const imageStyle = { flex:1, alignSelf:'center', width: 250, height: 250, transform: [{scaleX: this.state.scale}, {scaleY: this.state.scale}]};

    const bouncingView = (
       <Animated.Image 
       source={{uri: "https://facebook.github.io/react-native/img/ReboundExample.png"}} 
       style={imageStyle} />
    );
    const containerView = (
      <View >
         <Text>Container !! </Text> 
         {bouncingView}
      </View>
    );

    const drawerView = (
      <View style={styles.drawerviewStyle}>
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  
      <Text> Text !! </Text>  

      </View>
    );

    return (    
        <DraggableDrawer 
        onDragDown = {this.onDragDown}
        onRelease = {this.onRelease}
        initialDrawerSize  = {DEFAULT_DRAWER_SIZE}       
        renderContainerView = {() => containerView}
        renderDrawerView = {() => drawerView} />
    )
  }
}

const styles = StyleSheet.create({
  drawerviewStyle: {    
    backgroundColor: '#55cccc',
  }
});