import BGABadgeViewAndroid from './app/Components/BGABadge/BGABadgeViewAndroid';
import DemoItem from './app/Components/demo/DemoItem';

class BGABadgeViewRN extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badgeText: "20",
    };
  }

  render() {
    console.log('BGABadgeViewRN 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={{paddingBottom: 30, fontSize: 22, color: '#50a3fc'}}>React Native - BGABadgeView</Text>

        <DemoItem title="显示第一个徽章" handleClick={this.showFistBadge.bind(this)} />
        <DemoItem title="隐藏第一个徽章" handleClick={this.hiddenFistBadge.bind(this)} />
        <BGABadgeViewAndroid dragable={false} textBadge={this.state.badgeText} style={styles.badge} onDismiss={() => this.onDismiss("第1个")} />

        <BGABadgeViewAndroid badgeBgColor="#00ff00" badgeTextColor="#ff0000" badgePaddingDp={10} badgeTextSizeSp={14} textBadge="9" style={styles.badge} onDismiss={() => this.onDismiss("第2个")} />

        <BGABadgeViewAndroid textBadge="99" style={styles.badge} onDismiss={() => this.onDismiss("第3个")} />

        <BGABadgeViewAndroid circlePointBadge={true} badgePaddingDp={6} style={styles.badge} onDismiss={() => this.onDismiss("第4个")} />

        <Image source={{uri: 'https://avatars2.githubusercontent.com/u/8949716'}}
       style={styles.backgroundImage} resizeMode={Image.resizeMode.contain} >
        <BGABadgeViewAndroid drawableBadge="avatar_vip" style={{
          width: 30,
          height: 20,
        }} onDismiss={() => this.onDismiss("第5个")} />
        </Image>
      </View>
    );
  }

  onDismiss(tip) {
    ToastAndroid.show('消失 ' + tip, ToastAndroid.SHORT)
  }

  hiddenFistBadge() {
    this.setState({
          badgeText: ""
        });
  }

  showFistBadge() {
    this.setState({
          badgeText: "20"
        });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  badge: {
    width: 60,
    height: 60,
  },
  backgroundImage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    width: 100,
    height: 100,
  }
});