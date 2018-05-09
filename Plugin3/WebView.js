import React from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  WebView
} from 'react-native'

const HEADER = '#3b5998';
const BGWASH = 'rgba(255,255,255,0.8)';
const DISABLED_WASH = 'rgba(255,255,255,0.25)';

const TEXT_INPUT_REF = 'urlInput';
const WEBVIEW_REF = 'webview';
const DEFAULT_URL = 'https://m.facebook.com';


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
    console.log('handleTextInputChange ：', event, event.nativeEvent, )
    let url = event.nativeEvent.text;
    if (!/^[a-zA-Z-_]+:/.test(url)) {
      url = 'http://' + url;
    }
    this.inputText = url;
  };
  
  goBack = () => {
    console.log('goBack ：', )
    this.refs[WEBVIEW_REF].goBack();
  };

  goForward = () => {
    console.log('goForward ：', )
    this.refs[WEBVIEW_REF].goForward();
  };

  reload = () => {
    console.log('reload ：', )
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
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.status}</Text>
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
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._handlePress}>
          <View style={styles.button}>
            <Text>{this.props.text}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


class ScaledWebView  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scalingEnabled: true,
    }
  }
  render() {
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
      this.webview.postMessage('"Hello" from React Native!');
    }
  }
  
  render() {
    console.log('MessagingTest 组件 this.state, this.props ：', this.state, this.props, )
    const {messagesReceivedFromWebView, message} = this.state;
    return (
      <View style={[styles.container, { height: 200 }]}>
        <View style={styles.container}>
          <Text>Messages received from web view: {messagesReceivedFromWebView}</Text>
          <Text>{message || '(No message)'}</Text>
          <View style={styles.buttons}>
            <Button text="Send Message to Web View" enabled onPress={this.postMessage} />
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
          source={{uri: 'https://www.facebook.com'}}
          scalesPageToFit={true}
        />
        <View style={styles.buttons}>
          <Button text="Inject JS" enabled onPress={this.injectJS} />
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
    height: 30,
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
        font: 62.5% arial, sans-serif;
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
    <h1>Hello Static World</h1>
  </body>
</html>
`;

const BundleHtml = () => {
  return <WebView
    style={{
      backgroundColor: BGWASH,
      height: 100,
    }}
    source={require('./helloworld.html')}
    scalesPageToFit={true}
  />
}

const StaicHtml = () => {
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
  {com: WebViewExample, selectTab: 'WebViewExample', txt: 'WebViewExample', icon: require('../../res/img/ic_polular.png'), },
  {com: ScaledWebView, selectTab: 'ScaledWebView', txt: 'ScaledWebView', icon: require('../../res/img/ic_polular.png'), },
  {com: BundleHtml, selectTab: 'BundleHtml', txt: 'BundleHtml', icon: require('../../res/img/ic_polular.png'), },
  {com: StaicHtml, selectTab: 'StaicHtml', txt: 'StaicHtml', icon: require('../../res/img/ic_polular.png'), },
  {com: MessagingTest, selectTab: 'MessagingTest', txt: 'MessagingTest', icon: require('../../res/img/ic_polular.png'), },
  {com: InjectJS, selectTab: 'InjectJS', txt: 'InjectJS', icon: require('../../res/img/ic_polular.png'), },
]

export default class HomePage extends Component {
  constructor(props){
    super(props)
    console.log('HomePage构造函数 ：', this.props);
    const {params, tab} = this.props.navigation.state
    const selectedTab = this.props.selectedTab ? this.props.selectTab : 'Read'
    this.state = {
      selectedTab,
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