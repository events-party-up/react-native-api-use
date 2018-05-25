import ReactNativeParallaxHeader from 'react-native-parallax-header';

const viewImages = {
  background: require('../../../img/test.jpg'),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  titleStyle: {
    fontSize: 16,
  },
});

export default class Demo extends Component {

  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={120}
          headerMaxHeight={170}
          extraScrollHeight={20}
          navbarColor={Colors.primary}
          title={'Parallax Header :p'}
          titleStyle={styles.titleStyle}
          backgroundImage={viewImages.background}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
        />
      </View>
    );
  }
}