import React, {Component} from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  WebView,
  Image
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator';

const HEADER = '#3b5998';
const BGWASH = 'rgba(255,255,255,0.8)';
const DISABLED_WASH = 'rgba(255,255,255,0.25)';

const TEXT_INPUT_REF = 'urlInput';
const WEBVIEW_REF = 'webview';
// const DEFAULT_URL = 'https://m.facebook.com';
const DEFAULT_URL = 'https://baidu.com';

// injectedJavaScript 未使用
// mediaPlaybackRequiresUserAction

// 自定义页面
class CustomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    }
  }
  onLoadStart = (e) => {
    console.log('onLoadStart ：', e)
  }
  onLoadEnd = (e) => {
    console.log('onLoadEnd ：', e)
  }
  onLoad = (e) => {
    console.log('onLoad ：', e)
  }
  onError = (e) => {
    console.log('onError ：', e)
    this.setState({
      isError: true,
    })
  }
  renderError = (e) => {
    console.log('renderError ：', e)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>renderError</Text>
      </View>
    )
  }
  renderLoading = (e) => {
    console.log('renderLoading ：', e)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>renderLoading</Text>
      </View>
    )
  }
  render() {
    console.log('CustomView 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <WebView
          style={{
            backgroundColor: 'orange',
            margin: 10,
          }}
          source={{uri: 'https://www.baidu.com/'}}
          // 设置页面中的HTML5音视频是否需要在用户点击后再开始播放。默认值为true.
          // mediaPlaybackRequiresUserAction={true}
          mediaPlaybackRequiresUserAction={false}
          scalesPageToFit={this.state.scalingEnabled}
          // 加载开始时调用
          onLoadStart={this.onLoadStart}
          // 加载结束时（无论成功或失败）调用
          onLoadEnd={this.onLoadEnd}
          // 加载成功时调用
          onLoad={this.onLoad}
          // 加载失败时调用
          onError={this.onError}
          // 设置一个函数，返回一个视图用于显示错误。
          renderError={this.renderError}
          // 设置一个函数，返回一个加载指示器
          renderLoading={this.renderLoading}
          // 强制WebView在第一次加载时先显示loading视图。默认为true
          startInLoadingState={false}
          // 指定混合内容模式。即WebView是否应该允许安全链接（https）页面中加载非安全链接（http）的内容。
          // 可选的mixedContentMode值如下：
          // 'never' (默认) - WebView不允许安全链接页面中加载非安全链接的内容。
          // 'always' - WebView允许安全链接页面中加载非安全链接的内容。
          // 'compatibility' - WebView会尽量和浏览器当前对待此情况的行为一致。
          mixedContentMode={'never'}
          mixedContentMode={'always'}
          mixedContentMode={'compatibility'}
          // 用于控制页面上的表单是否启用自动保存/自动补全功能。仅Android有效。
          saveFormDataDisabled={true}
          // saveFormDataDisabled={false}
          // 为WebView设置user-agent字符串标识。这一字符串也可以在原生端用WebViewConfig来设置，但js端的设置会覆盖原生端的设置。
          userAgent={'zyb'}
        />
        <View style={styles.buttons}>
        { this.state.scalingEnabled ?
          <Button
            text="Scaling:ON"
            enabled={true}
            onPress={() => this.setState({scalingEnabled: false})}
          /> :
          <Button
            text="Scaling:OFF"
            enabled={true}
            onPress={() => this.setState({scalingEnabled: true})}
          /> }
        </View>
      </View>
    );
  }
}



// 多功能页面
class WebViewExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: DEFAULT_URL,
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    }
    this.inputText = ''
  }
  handleTextInputChange = (event) => {
    let url = event.nativeEvent.text;
    if (!/^[a-zA-Z-_]+:/.test(url)) {
      url = 'http://' + url;
    }
    console.log('handleTextInputChange ：', event, event.nativeEvent, url)
    this.inputText = url;
  };
  
  goBack = () => {
    console.log('goBack ：', this.refs[WEBVIEW_REF])
    this.refs[WEBVIEW_REF].goBack();
  };

  goForward = () => {
    console.log('goForward ：', this.refs[WEBVIEW_REF])
    this.refs[WEBVIEW_REF].goForward();
  };

  reload = () => {
    console.log('reload ：', this.refs[WEBVIEW_REF])
    this.refs[WEBVIEW_REF].reload();
  };

  onShouldStartLoadWithRequest = (event) => {
    console.log('onShouldStartLoadWithRequest ：', event, )
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };

  onNavigationStateChange = (navState) => {
    console.log('onNavigationStateChange ：', navState)
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  };

  onSubmitEditing = (event) => {
    console.log('onSubmitEditing ：', event)
    this.pressGoButton();
  };

  pressGoButton = () => {
    console.log('pressGoButton ：', this.inputText, this.state, )
    const url = this.inputText.toLowerCase();
    if (url === this.state.url) {
      this.reload();
    } else {
      this.setState({
        url: url,
      });
    }
    // dismiss keyboard
    this.refs[TEXT_INPUT_REF].blur();
  };
  
  render() {
    this.inputText = this.state.url;
    // console.log('WebViewExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={[styles.container]}>
        <View style={[styles.addressBarRow]}>
          <TouchableOpacity
            onPress={this.goBack}
            style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}>
            <Text>
               {'<'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.goForward}
            style={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}>
            <Text>
              {'>'}
            </Text>
          </TouchableOpacity>
          <TextInput
            ref={TEXT_INPUT_REF}
            autoCapitalize="none"
            defaultValue={this.state.url}
            onSubmitEditing={this.onSubmitEditing}
            onChange={this.handleTextInputChange}
            clearButtonMode="while-editing"
            style={styles.addressBarTextInput}
          />
          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.goButton}>
              <Text>
                 Go!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          // 仅限Android平台。指定是否开启DOM本地存储。
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>页面信息：{this.state.status}</Text>
        </View>
      </View>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  _handlePress = () => {
    console.log('_handlePress ：', this.props, )
    if (this.props.enabled !== false && this.props.onPress) {
      this.props.onPress();
    }
  };
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={this._handlePress}>
        <View style={styles.button}>
          <Text>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// 可缩放页面
class ScaledWebView  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scalingEnabled: true,
    }
  }
  render() {
    console.log('ScaledWebView 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <WebView
          style={{
            backgroundColor: BGWASH,
            height: 200,
          }}
          source={{uri: 'https://facebook.github.io/react/'}}
          scalesPageToFit={this.state.scalingEnabled}
        />
        <View style={styles.buttons}>
        { this.state.scalingEnabled ?
          <Button
            text="Scaling:ON"
            enabled={true}
            onPress={() => this.setState({scalingEnabled: false})}
          /> :
          <Button
            text="Scaling:OFF"
            enabled={true}
            onPress={() => this.setState({scalingEnabled: true})}
          /> }
        </View>
      </View>
    );
  }
}

// web页面与原生app交互
class MessagingTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesReceivedFromWebView: 0,
      message: '',
    }
    this.webview = null
  }
  onMessage = e => {
    console.log('onMessage ：', e)
    this.setState({
      messagesReceivedFromWebView: this.state.messagesReceivedFromWebView + 1,
      message: e.nativeEvent.data,
    })
  }

  postMessage = () => {
    console.log('postMessage ：', )
    if (this.webview) {
      this.webview.postMessage('从RN发送的信息："Hello" from React Native!');
    }
  }
  
  render() {
    console.log('MessagingTest 组件 this.state, this.props ：', this.state, this.props, )
    const {messagesReceivedFromWebView, message} = this.state;
    return (
      <View style={[styles.container, { height: 200 }]}>
        <View style={styles.container}>
          <Text>RN从web页面接收到的信息Messages received from web view: {messagesReceivedFromWebView}</Text>
          <Text>是否接收到信息：{message || '(No message)'}</Text>
          <View style={styles.buttons}>
            <Button text="发送信息到web页面Send Message to Web View" enabled onPress={this.postMessage} />
          </View>
        </View>
        <View style={styles.container}>
          <WebView
            ref={webview => { this.webview = webview; }}
            style={{
              backgroundColor: BGWASH,
              height: 100,
            }}
            source={require('./messagingtest.html')}
            // 接收页面的事件 - 设置自身属性、文本
            onMessage={this.onMessage}
          />
        </View>
      </View>
    );
  }
}

class InjectJS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.webview = null
  }
  injectJS = () => {
    console.log('injectJS ：', )
    const script = 'document.write("Injected JS ")';  // eslint-disable-line quotes
    if (this.webview) {
      // 在网页加载完成之后，还可以主动调用此方法（以ref形式调用）继续给WebView注入JS代码。注入后会立即执行。
      this.webview.injectJavaScript(script);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={webview => { this.webview = webview; }}
          style={{
            backgroundColor: BGWASH,
            height: 300,
          }}
          source={{uri: 'https://www.baidu.com'}}
          scalesPageToFit={true}
        />
        <View style={styles.buttons}>
          <Button text="注入代码 Inject JS" enabled onPress={this.injectJS} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HEADER,
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8,
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350,
  },
  addressBarTextInput: {
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14,
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  disabledButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DISABLED_WASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  goButton: {
    height: 24,
    padding: 3,
    marginLeft: 8,
    alignItems: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    alignSelf: 'stretch',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22,
  },
  statusBarText: {
    color: 'white',
    fontSize: 13,
  },
  spinner: {
    width: 20,
    marginRight: 6,
  },
  buttons: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.5,
    width: 0,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray',
  },

  image: {
    width: 22,
    height: 22,
  },
});
const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>静态页面Hello Static World</h1>
  </body>
</html>
`;

// 打包好的页面
const BundleHtml = () => {
  console.log('BundleHtml ：', );
  return <WebView
    style={{
      backgroundColor: BGWASH,
      height: 100,
    }}
    source={require('./helloworld.html')}
    scalesPageToFit={true}
  />
}

// 页面失效
const StaicHtml = () => {
  console.log('StaicHtml ：', )
  return <WebView
    style={{
      backgroundColor: BGWASH,
      height: 100,
    }}
    source={{html: HTML}}
    scalesPageToFit={true}
  />
}

// 发生请求页面
const PostPage = () => {
  console.log('PostPage ：', )
  return <WebView
    style={{
      backgroundColor: BGWASH,
      height: 100,
    }}
    source={{
      uri: 'http://www.posttestserver.com/post.php',
      method: 'POST',
      body: 'foo=bar&bar=foo'
    }}
    scalesPageToFit={false}
  />
}


class WebViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Simple Browser */}
        <WebViewExample />

        {/* Scale Page to Fit */}
        <ScaledWebView/>

        {/* Bundled HTML */}
        <WebView
          style={{
            backgroundColor: BGWASH,
            height: 100,
          }}
          source={require('./helloworld.html')}
          scalesPageToFit={true}
        />

        {/* Static HTML */}
        <WebView
          style={{
            backgroundColor: BGWASH,
            height: 100,
          }}
          source={{
            uri: 'http://www.posttestserver.com/post.php',
            method: 'POST',
            body: 'foo=bar&bar=foo'
          }}
          scalesPageToFit={false}
        />

        {/* POST Test */}
        <MessagingTest />

        {/* Inject JavaScript */}
        <InjectJS />

      </View>
    );
  }
}


const tabConfig = [
  {com: CustomView, selectTab: 'CustomView', txt: 'CustomView', icon: require('../../res/img/ic_polular.png'), },
  {com: WebViewExample, selectTab: 'WebViewExample', txt: 'WebViewExample', icon: require('../../res/img/ic_polular.png'), },
  {com: ScaledWebView, selectTab: 'ScaledWebView', txt: 'ScaledWebView', icon: require('../../res/img/ic_polular.png'), },
  {com: BundleHtml, selectTab: 'BundleHtml', txt: 'BundleHtml', icon: require('../../res/img/ic_polular.png'), },
  {com: StaicHtml, selectTab: 'StaicHtml', txt: 'StaicHtml', icon: require('../../res/img/ic_polular.png'), },
  {com: PostPage, selectTab: 'PostPage', txt: 'PostPage', icon: require('../../res/img/ic_polular.png'), },
  {com: MessagingTest, selectTab: 'MessagingTest', txt: 'MessagingTest', icon: require('../../res/img/ic_polular.png'), },
  {com: InjectJS, selectTab: 'InjectJS', txt: 'InjectJS', icon: require('../../res/img/ic_polular.png'), },
]

export default class HomePage extends Component {
  constructor(props){
    super(props)
    console.log('HomePage构造函数 ：', this.props);
    this.state = {
      selectedTab: 'CustomView',
    }
  }
  navigate = (selectedTab) => {
    const {navigate} = this.props.navigation;
    console.log('selectedTab ：', selectedTab, this.props, );
    // navigate('AsyncStorageTest', {name: 'Brent'})
    this.setState({ selectedTab: 'tb_popular' })
  }
  _renderTab = (Component, selectTab, title, renderIcon, key) => {
    // console.log('Component, selectTab, title, renderIcon ：', Component, selectTab, title, renderIcon);
     return (
      <TabNavigator.Item
        key={selectTab}
        selected={this.state.selectedTab === selectTab}
        title={title}
        // selectedTitleStyle={'deepskyblue'}
        renderIcon={() => <Image style={styles.image} source={renderIcon} />}
        renderSelectedIcon={() => <Image style={[styles.image, ]} source={renderIcon} />}
        badgeText="1"
        onPress={() => this.setState({ selectedTab: selectTab })}>

        <Component {...this.props}></Component>
      </TabNavigator.Item>
     )
   }
  render() {
    console.log('HomePage组件 ：', this.state)
    return (
      <View style={styles.container}>
        <TabNavigator>
          { tabConfig.map((v, i) => this._renderTab(v.com, v.selectTab, v.txt, v.icon, i)) }
          {/* {this._renderTab(Toilet, 'Toilet', "厕所", require('../../res/img/ic_polular.png'))}
          {this._renderTab(Weather, 'Weather', "天气", require('../../res/img/ic_favorite.png'))}
          {this._renderTab(Read, 'Read', "阅读", require('../../res/img/ic_my.png'))}
          {this._renderTab(Setting, 'my', "设置", require('../../res/img/ic_my.png'))} */}
        </TabNavigator>
      </View>
    );
  }
}