import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native'

class TextInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

class UselessTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
          editable = {true}
          maxLength = {40}
        />
      </View>
    );
  }
}

class UselessTextInputMultiline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          backgroundColor: this.state.text,
          borderBottomColor: '#000000',
          borderBottomWidth: 1 }}
        >
          <UselessTextInput
            multiline = {true}
            numberOfLines = {4}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
         </View>
      </View>
    );
  }
}

class WithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <View style={styles.label}>
            <Text>{this.props.label}</Text>
          </View>
          {this.props.children}
        </View>
      </View>
    );
  }
}

class TextEventsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curText: '<No Event>',
      prevText: '<No Event>',
      prev2Text: '<No Event>',
      prev3Text: '<No Event>',
    }
  }
  updateText = (text) => {
    console.log('updateText ：', text, )
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
        prev3Text: state.prev2Text,
      };
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter text to see events"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          onSelectionChange={(event) => this.updateText(
            'onSelectionChange range: ' +
              event.nativeEvent.selection.start + ',' +
              event.nativeEvent.selection.end
          )}
          onKeyPress={(event) => {
            this.updateText('onKeyPress key: ' + event.nativeEvent.key);
          }}
          style={styles.default}
        />
        <Text style={styles.eventLabel}>
          {this.state.curText}{'\n'}
          (prev: {this.state.prevText}){'\n'}
          (prev2: {this.state.prev2Text}){'\n'}
          (prev3: {this.state.prev3Text})
        </Text>
      </View>
    );
  }
}

class AutoExpandingTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',
      height: 0,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          multiline={true}
          onChangeText={(text) => {
            this.setState({text});
          }}
          onContentSizeChange={(event) => {
            this.setState({height: event.nativeEvent.contentSize.height});
          }}
          style={[styles.default, {height: Math.max(35, this.state.height)}]}
          value={this.state.text}
        />
      </View>
    );
  }
}

class RewriteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    const limit = 20;
    const remainder = limit - this.state.text.length;
    const remainderColor = remainder > 5 ? 'blue' : 'red';
    console.log('RewriteExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.rewriteContainer}>
        <TextInput
          multiline={false}
          maxLength={limit}
          onChangeText={(text) => {
            text = text.replace(/ /g, '_');
            this.setState({text});
          }}
          style={styles.default}
          value={this.state.text}
        />
        <Text style={[styles.remainder, {color: remainderColor}]}>
          {remainder}
        </Text>
      </View>
    );
  }
}

class RewriteExampleInvalidCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={styles.rewriteContainer}>
        <TextInput
          multiline={false}
          onChangeText={(text) => {
            this.setState({text: text.replace(/\s/g, '')});
          }}
          style={styles.default}
          value={this.state.text}
        />
      </View>
    );
  }
}

class TokenizedTextExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Hello #World'};
  }
  render() {
    console.log('TokenizedTextExample 组件 this.state, this.props ：', this.state, this.props, )
    //define delimiter
    let delimiter = /\s+/;

    //split string
    let _text = this.state.text;
    let token, index, parts = [];
    while (_text) {
      delimiter.lastIndex = 0;
      token = delimiter.exec(_text);
      if (token === null) {
        break;
      }
      index = token.index;
      if (token[0].length === 0) {
        index = 1;
      }
      parts.push(_text.substr(0, index));
      parts.push(token[0]);
      index = index + token[0].length;
      _text = _text.slice(index);
    }
    parts.push(_text);

    //highlight hashtags
    parts = parts.map((text) => {
      if (/^#/.test(text)) {
        return <Text key={text} style={styles.hashtag}>{text}</Text>;
      } else {
        return text;
      }
    });
    return (
      <View style={styles.container}>
        <TextInput
          multiline={true}
          style={styles.multiline}
          onChangeText={(text) => {
            this.setState({text});
          }}>
          <Text>{parts}</Text>
        </TextInput>
      </View>
    );
  }
}

class  BlurOnSubmitExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  focusNextField = (nextField) => {
    console.log('focusNextField ：', nextField, )
    this.refs[nextField].focus();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="1"
          style={styles.default}
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('2')}
        />
        <TextInput
          ref="2"
          style={styles.default}
          keyboardType="email-address"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('3')}
        />
        <TextInput
          ref="3"
          style={styles.default}
          keyboardType="url"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('4')}
        />
        <TextInput
          ref="4"
          style={styles.default}
          keyboardType="numeric"
          placeholder="blurOnSubmit = false"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('5')}
        />
        <TextInput
          ref="5"
          style={styles.default}
          keyboardType="numbers-and-punctuation"
          placeholder="blurOnSubmit = true"
          returnKeyType="done"
        />
      </View>
    );
  }
}

class SelectionExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: {start: 0, end: 0},
      value: props.value
    }
  }
  onSelectionChange = (selection) => {
    console.log('onSelectionChange ：', selection)
    this.setState({selection});
  }

  getRandomPosition = () => {
    console.log('getRandomPosition ：', this.state, )
    const length = this.state.value.length;
    return Math.round(Math.random() * length);
  }
  select = (start, end) => {
    console.log('select start, end ：', start, end)
    this._textInput.focus();
    this.setState({selection: {start, end}});
  }
  selectRandom = () => {
    console.log('selectRandom ：', this.state)
    const positions = [this.getRandomPosition(), this.getRandomPosition()].sort();
    this.select(...positions);
  }
  placeAt = (position) => {
    console.log('placeAt ：', position)
    this.select(position, position);
  }
  placeAtRandom = () => {
    console.log('placeAtRandom ：', )
    this.placeAt(this.getRandomPosition());
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline={this.props.multiline}
          onChangeText={(value) => this.setState({value})}
          onSelectionChange={this.onSelectionChange.bind(this)}
          ref={textInput => (this._textInput = textInput)}
          selection={this.state.selection}
          style={this.props.style}
          value={this.state.value}
        />
        <View>
          <Text>
            selection = {JSON.stringify(this.state.selection)}
          </Text>
          <Text onPress={this.placeAt.bind(this, 0)}>
            Place at Start (0, 0)
          </Text>
          <Text onPress={this.placeAt.bind(this, length)}>
            Place at End ({length}, {length})
          </Text>
          <Text onPress={this.placeAtRandom.bind(this)}>
            Place at Random
          </Text>
          <Text onPress={this.select.bind(this, 0, length)}>
            Select All
          </Text>
          <Text onPress={this.selectRandom.bind(this)}>
            Select Random
          </Text>
        </View>
      </View>
    );
  }
}


// IOS
class TextInputContainerIOS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const keyboardTypes = [
      'default',
      'ascii-capable',
      'numbers-and-punctuation',
      'url',
      'number-pad',
      'phone-pad',
      'name-phone-pad',
      'email-address',
      'decimal-pad',
      'twitter',
      'web-search',
      'numeric',
    ];
    const keyboardAppearance = [
      'default',
      'light',
      'dark',
    ];
    const returnKeyTypes = [
      'default',
      'go',
      'google',
      'join',
      'next',
      'route',
      'search',
      'send',
      'yahoo',
      'done',
      'emergency-call',
    ];
    return (
      <View style={styles.container}>
        {/* Auto-focus */}
        <TextInput
          autoFocus={true}
          style={styles.default}
          accessibilityLabel="I am the accessibility label for text input"
        />

        {/* Live Re-Write (<sp>  ->  '_') + maxLength */}
        <RewriteExample />

        {/* Live Re-Write (no spaces allowed) */}
        <RewriteExampleInvalidCharacters />

        {/* Auto-capitalize */}
        <View>
          <WithLabel label="none">
            <TextInput
              autoCapitalize="none"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="sentences">
            <TextInput
              autoCapitalize="sentences"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="words">
            <TextInput
              autoCapitalize="words"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="characters">
            <TextInput
              autoCapitalize="characters"
              style={styles.default}
            />
          </WithLabel>
        </View>

        {/* 自动矫正 */}
        <View>
          <WithLabel label="true">
            <TextInput autoCorrect={true} style={styles.default} />
          </WithLabel>
          <WithLabel label="false">
            <TextInput autoCorrect={false} style={styles.default} />
          </WithLabel>
        </View>

        {/* Keyboard types */}
        <View style={styles.container}>
          {keyboardTypes.map((type) => {
            return (
              <WithLabel key={type} label={type}>
                <TextInput
                  keyboardType={type}
                  style={styles.default}
                />
              </WithLabel>
            );
          })}
        </View>

        {/* Keyboard appearance */}
        <View style={styles.container}>
          {
            keyboardAppearance.map((type) => {
              return (
                <WithLabel key={type} label={type}>
                  <TextInput
                    keyboardAppearance={type}
                    style={styles.default}
                  />
                </WithLabel>
              );
            })
          }
        </View>
        
        {/* Return key types */}
        <View style={styles.container}>
          {
            returnKeyTypes.map((type) => {
              return (
                <WithLabel key={type} label={type}>
                  <TextInput
                    returnKeyType={type}
                    style={styles.default}
                  />
                </WithLabel>
              );
            })
          }
        </View>

        {/* Enable return key automatically */}
        <View>
          <WithLabel label="true">
            <TextInput enablesReturnKeyAutomatically={true} style={styles.default} />
          </WithLabel>
        </View>

        {/* Secure text entry */}
        <View>
          <WithLabel label="true">
            <TextInput secureTextEntry={true} style={styles.default} defaultValue="abc" />
          </WithLabel>
        </View>

        {/* Event handling */}
        <TextEventsExample />

        {/* Colored input text */}
        <View>
          <TextInput
            style={[styles.default, {color: 'blue'}]}
            defaultValue="Blue"
          />
          <TextInput
            style={[styles.default, {color: 'green'}]}
            defaultValue="Green"
          />
        </View>

        {/* Colored highlight/cursor for text input */}
        <View>
          <TextInput
            style={styles.default}
            selectionColor={"green"}
            defaultValue="Highlight me"
          />
          <TextInput
            style={styles.default}
            selectionColor={"rgba(86, 76, 205, 1)"}
            defaultValue="Highlight me"
          />
        </View>

        {/* Clear button mode */}
        <View>
          <WithLabel label="never">
            <TextInput
              style={styles.default}
              clearButtonMode="never"
            />
          </WithLabel>
          <WithLabel label="while editing">
            <TextInput
              style={styles.default}
              clearButtonMode="while-editing"
            />
          </WithLabel>
          <WithLabel label="unless editing">
            <TextInput
              style={styles.default}
              clearButtonMode="unless-editing"
            />
          </WithLabel>
          <WithLabel label="always">
            <TextInput
              style={styles.default}
              clearButtonMode="always"
            />
          </WithLabel>
        </View>

        {/* Clear and select */}
        <View>
          <WithLabel label="clearTextOnFocus">
            <TextInput
              placeholder="text is cleared on focus"
              defaultValue="text is cleared on focus"
              style={styles.default}
              clearTextOnFocus={true}
            />
          </WithLabel>
          <WithLabel label="selectTextOnFocus">
            <TextInput
              placeholder="text is selected on focus"
              defaultValue="text is selected on focus"
              style={styles.default}
              selectTextOnFocus={true}
            />
          </WithLabel>
        </View>

        {/* 提交后失焦 */}
        <BlurOnSubmitExample />

        {/* Multiline blur on submit */}
        <View>
          <TextInput
            style={styles.multiline}
            placeholder="blurOnSubmit = true"
            returnKeyType="next"
            blurOnSubmit={true}
            multiline={true}
            onSubmitEditing={event => alert(event.nativeEvent.text)}
          />
        </View>

        {/* Multiline */}
        <View>
          <TextInput
            placeholder="multiline text input"
            multiline={true}
            style={styles.multiline}
          />
          <TextInput
            placeholder="multiline text input with font styles and placeholder"
            multiline={true}
            clearTextOnFocus={true}
            autoCorrect={true}
            autoCapitalize="words"
            placeholderTextColor="red"
            keyboardType="url"
            style={[styles.multiline, styles.multilineWithFontStyles]}
          />
          <TextInput
            placeholder="multiline text input with max length"
            maxLength={5}
            multiline={true}
            style={styles.multiline}
          />
          <TextInput
            placeholder="uneditable multiline text input"
            editable={false}
            multiline={true}
            style={styles.multiline}
          />
          <TextInput
            defaultValue="uneditable multiline text input with phone number detection: 88888888."
            editable={false}
            multiline={true}
            style={styles.multiline}
            dataDetectorTypes="phoneNumber"
          />
          <TextInput
            placeholder="multiline with children"
            multiline={true}
            enablesReturnKeyAutomatically={true}
            returnKeyType="go"
            style={styles.multiline}>
            <View style={styles.multilineChild}/>
          </TextInput>
        </View>

        {/* Auto-expanding */}
        <View>
          <AutoExpandingTextInput
            placeholder="height increases with content"
            enablesReturnKeyAutomatically={true}
            returnKeyType="default"
          />
        </View>

        {/* Attributed text */}
        <TokenizedTextExample />

        {/* Text selection & cursor placement */}
        <View>
          <SelectionExample
            style={styles.default}
            value="text selection can be changed"
          />
          <SelectionExample
            multiline
            style={styles.multiline}
            value={"multiline text selection\ncan also be changed"}
          />
        </View>

        {/* TextInput maxLength */}
        <View>
          <WithLabel label="maxLength: 5">
            <TextInput
              maxLength={5}
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="maxLength: 5 with placeholder">
            <TextInput
              maxLength={5}
              placeholder="ZIP code entry"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="maxLength: 5 with default value already set">
            <TextInput
              maxLength={5}
              defaultValue="94025"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="maxLength: 5 with very long default value already set">
            <TextInput
              maxLength={5}
              defaultValue="9402512345"
              style={styles.default}
            />
          </WithLabel>
        </View>
      </View>
    );
  }
}
// android
class TextEventsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curText: '<No Event>',
      prevText: '<No Event>',
      prev2Text: '<No Event>',
    }
  }
  updateText = (text) => {
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
      };
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter text to see events"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          style={styles.singleLine}
        />
        <Text style={styles.eventLabel}>
          {this.state.curText}{'\n'}
          (prev: {this.state.prevText}){'\n'}
          (prev2: {this.state.prev2Text})
        </Text>
      </View>
    );
  }
}
 
class AutoExpandingTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',
      height: 0,
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          multiline={true}
          onContentSizeChange={(event) => {
            this.setState({height: event.nativeEvent.contentSize.height});
          }}
          onChangeText={(text) => {
            this.setState({text});
          }}
          style={[styles.default, {height: Math.max(35, this.state.height)}]}
          value={this.state.text}
        />
      </View>
    );
  }
}

class RewriteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    const limit = 20;
    const remainder = limit - this.state.text.length;
    const remainderColor = remainder > 5 ? 'blue' : 'red';
    console.log('RewriteExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.rewriteContainer}>
        <TextInput
          multiline={false}
          maxLength={limit}
          onChangeText={(text) => {
            text = text.replace(/ /g, '_');
            this.setState({text});
          }}
          style={styles.default}
          value={this.state.text}
        />
        <Text style={[styles.remainder, {color: remainderColor}]}>
          {remainder}
        </Text>
      </View>
    );
  }
}

class TokenizedTextExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Hello #World'};
  }
  render() {
    //define delimiter
    let delimiter = /\s+/;

    //split string
    let _text = this.state.text;
    let token, index, parts = [];
    while (_text) {
      delimiter.lastIndex = 0;
      token = delimiter.exec(_text);
      if (token === null) {
        break;
      }
      index = token.index;
      if (token[0].length === 0) {
        index = 1;
      }
      parts.push(_text.substr(0, index));
      parts.push(token[0]);
      index = index + token[0].length;
      _text = _text.slice(index);
    }
    parts.push(_text);

    //highlight hashtags
    parts = parts.map((text) => {
      if (/^#/.test(text)) {
        return <Text key={text} style={styles.hashtag}>{text}</Text>;
      } else {
        return text;
      }
    });
    console.log('TokenizedTextExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <TextInput
          multiline={true}
          style={styles.multiline}
          onChangeText={(text) => {
            this.setState({text});
          }}>
          <Text>{parts}</Text>
        </TextInput>
      </View>
    );
  }
}

class BlurOnSubmitExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  focusNextField = (nextField) => {
    console.log('focusNextField ：', nextField, )
    this.refs[nextField].focus();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="1"
          style={styles.singleLine}
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('2')}
        />
        <TextInput
          ref="2"
          style={styles.singleLine}
          keyboardType="email-address"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('3')}
        />
        <TextInput
          ref="3"
          style={styles.singleLine}
          keyboardType="url"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('4')}
        />
        <TextInput
          ref="4"
          style={styles.singleLine}
          keyboardType="numeric"
          placeholder="blurOnSubmit = false"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('5')}
        />
        <TextInput
          ref="5"
          style={styles.singleLine}
          keyboardType="numbers-and-punctuation"
          placeholder="blurOnSubmit = true"
          returnKeyType="done"
        />
      </View>
    );
  }
}

class ToggleDefaultPaddingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasPadding: false};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={this.state.hasPadding ? { padding: 0 } : null}/>
        <Text onPress={() => this.setState({hasPadding: !this.state.hasPadding})}>
          Toggle padding
        </Text>
      </View>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: {start: 0, end: 0},
      value: props.value
    }
  }
  onSelectionChange(selection) {
    console.log('onSelectionChange ：', selection)
    this.setState({selection});
  }
  getRandomPosition() {
    console.log('getRandomPosition ：', this.state)
    const length = this.state.value.length;
    return Math.round(Math.random() * length);
  }
  select(start, end) {
    console.log('select ：', start, end)
    this._textInput.focus();
    this.setState({selection: {start, end}});
  }
  selectRandom() {
    console.log('selectRandom ：', )
    const positions = [this.getRandomPosition(), this.getRandomPosition()].sort();
    this.select(...positions);
  }
  placeAt(position) {
    console.log('placeAt  position ：', position)
    this.select(position, position);
  }
  placeAtRandom() {
    console.log('placeAtRandom ：', )
    this.placeAt(this.getRandomPosition());
  }
  render() {
    const length = this.state.value.length;
    return (
      <View style={styles.container}>
        <TextInput
          multiline={this.props.multiline}
          onChangeText={(value) => this.setState({value})}
          onSelectionChange={this.onSelectionChange.bind(this)}
          ref={textInput => (this._textInput = textInput)}
          selection={this.state.selection}
          style={this.props.style}
          value={this.state.value}
        />
        <View>
          <Text>
            selection = {JSON.stringify(this.state.selection)}
          </Text>
          <Text onPress={this.placeAt.bind(this, 0)}>
            Place at Start (0, 0)
          </Text>
          <Text onPress={this.placeAt.bind(this, length)}>
            Place at End ({length}, {length})
          </Text>
          <Text onPress={this.placeAtRandom.bind(this)}>
            Place at Random
          </Text>
          <Text onPress={this.select.bind(this, 0, length)}>
            Select All
          </Text>
          <Text onPress={this.selectRandom.bind(this)}>
            Select Random
          </Text>
        </View>
      </View>
    );
  }
}

class TextInputContainerAndroid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const autoCapitalizeTypes = [
      'none',
      'sentences',
      'words',
      'characters',
    ];
    const keyboardTypes = [
      'default',
      'email-address',
      'numeric',
      'phone-pad',
    ];
    const returnKeyTypes = [
      'none',
      'go',
      'search',
      'send',
      'done',
      'previous',
      'next',
    ];
    const returnKeyLabels = [
      'Compile',
      'React Native',
    ];
    return (
      <View style={styles.container}>
        {/* Auto-focus */}
        <TextInput
          autoFocus={true}
          style={styles.singleLine}
          accessibilityLabel="I am the accessibility label for text input"
        />
        
        {/* Live Re-Write (<sp>  ->  '_') */}
        <RewriteExample />


        {/* Auto-capitalize */}
        <View style={styles.container}>
          {
            autoCapitalizeTypes.map((type) => {
              return (
                <TextInput
                  key={type}
                  autoCapitalize={type}
                  placeholder={'autoCapitalize: ' + type}
                  style={styles.singleLine}
                />
              );
            })
          }
        </View>

        {/* Auto-correct */}
        <View>
          <TextInput
            autoCorrect={true}
            placeholder="This has autoCorrect"
            style={styles.singleLine}
          />
          <TextInput
            autoCorrect={false}
            placeholder="This does not have autoCorrect"
            style={styles.singleLine}
          />
        </View>

        {/* Keyboard types */}
        <View style={styles.container}>
          {
            keyboardTypes.map((type) => {
              return (
                <TextInput
                  key={type}
                  keyboardType={type}
                  placeholder={'keyboardType: ' + type}
                  style={styles.singleLine}
                />
              );
            })
          }
        </View>

        {/* Blur on submit */}
        <BlurOnSubmitExample />

        {/* Event handling */}
        <TextEventsExample />

        {/* Colors and text inputs */}
        <View>
          <TextInput
            style={[styles.singleLine]}
            defaultValue="Default color text"
          />
          <TextInput
            style={[styles.singleLine, {color: 'green'}]}
            defaultValue="Green Text"
          />
          <TextInput
            placeholder="Default placeholder text color"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="Red placeholder text color"
            placeholderTextColor="red"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="Default underline color"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="Blue underline color"
            style={styles.singleLine}
            underlineColorAndroid="blue"
          />
          <TextInput
            defaultValue="Same BackgroundColor as View "
            style={[styles.singleLine, {backgroundColor: 'rgba(100, 100, 100, 0.3)'}]}>
            <Text style={{backgroundColor: 'rgba(100, 100, 100, 0.3)'}}>
              Darker backgroundColor
            </Text>
          </TextInput>
          <TextInput
            defaultValue="Highlight Color is red"
            selectionColor={'red'}
            style={styles.singleLine}>
          </TextInput>
        </View>

        {/* Text input, themes and heights */}
        <TextInput
          placeholder="If you set height, beware of padding set from themes"
          style={[styles.singleLineWithHeightTextInput]}
        />

        {/* fontFamily, fontWeight and fontStyle' */}
        <View>
          <TextInput
            style={[styles.singleLine, {fontFamily: 'sans-serif'}]}
            placeholder="Custom fonts like Sans-Serif are supported"
          />
          <TextInput
            style={[styles.singleLine, {fontFamily: 'sans-serif', fontWeight: 'bold'}]}
            placeholder="Sans-Serif bold"
          />
          <TextInput
            style={[styles.singleLine, {fontFamily: 'sans-serif', fontStyle: 'italic'}]}
            placeholder="Sans-Serif italic"
          />
          <TextInput
            style={[styles.singleLine, {fontFamily: 'serif'}]}
            placeholder="Serif"
          />
        </View>

        {/* Passwords */}
        <View>
          <TextInput
            defaultValue="iloveturtles"
            secureTextEntry={true}
            style={styles.singleLine}
          />
          <TextInput
            secureTextEntry={true}
            style={[styles.singleLine, {color: 'red'}]}
            placeholder="color is supported too"
            placeholderTextColor="red"
          />
        </View>

        {/* Editable */}
        <TextInput
           defaultValue="Can't touch this! (>'-')> ^(' - ')^ <('-'<) (>'-')> ^(' - ')^"
           editable={false}
           style={styles.singleLine}
         />

         {/* Multiline */}
        <View>
          <TextInput
            autoCorrect={true}
            placeholder="multiline, aligned top-left"
            placeholderTextColor="red"
            multiline={true}
            style={[styles.multiline, {textAlign: 'left', textAlignVertical: 'top'}]}
          />
          <TextInput
            autoCorrect={true}
            placeholder="multiline, aligned center"
            placeholderTextColor="green"
            multiline={true}
            style={[styles.multiline, {textAlign: 'center', textAlignVertical: 'center'}]}
          />
          <TextInput
            autoCorrect={true}
            multiline={true}
            style={[styles.multiline, {color: 'blue'}, {textAlign: 'right', textAlignVertical: 'bottom'}]}>
            <Text style={styles.multiline}>multiline with children, aligned bottom-right</Text>
          </TextInput>
        </View>

        {/* Fixed number of lines */}
        <View>
          <TextInput numberOfLines={2}
            multiline={true}
            placeholder="Two line input"
          />
          <TextInput numberOfLines={5}
            multiline={true}
            placeholder="Five line input"
          />
        </View>

        {/* Auto-expanding */}
        <View>
          <AutoExpandingTextInput
            placeholder="height increases with content"
            enablesReturnKeyAutomatically={true}
            returnKeyType="done"
          />
        </View>

        {/* Attributed text */}
        <TokenizedTextExample />

        {/* Return key */}
        <TokenizedTextExample />

        {/* Return key */}
          <View style={styles.container}>
            {
              returnKeyTypes.map((type) => {
              return (
                <TextInput
                  key={type}
                  returnKeyType={type}
                  placeholder={'returnKeyType: ' + type}
                  style={styles.singleLine}
                />
              );
            })
          }

          {
            returnKeyLabels.map((type) => {
              return (
                <TextInput
                  key={type}
                  returnKeyLabel={type}
                  placeholder={'returnKeyLabel: ' + type}
                  style={styles.singleLine}
                />
              );
            })
          }
        </View>

        {/* Inline Images */}
        <View>
          <TextInput
            inlineImageLeft="ic_menu_black_24dp"
            placeholder="This has drawableLeft set"
            style={styles.singleLine}
          />
          <TextInput
            inlineImageLeft="ic_menu_black_24dp"
            inlineImagePadding={30}
            placeholder="This has drawableLeft and drawablePadding set"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="This does not have drawable props set"
            style={styles.singleLine}
          />
        </View>

        {/* Toggle Default Padding */}
        <ToggleDefaultPaddingExample />

        {/* Text selection & cursor placement */}
        <View>
          <SelectionExample
            style={styles.default}
            value="text selection can be changed"
          />
          <SelectionExample
            multiline
            style={styles.multiline}
            value={"multiline text selection\ncan also be changed"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    paddingBottom: 300,
  },
  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
  multiline: {
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    height: 50,
    padding: 4,
    marginBottom: 4,
  },
  multilineWithFontStyles: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Cochin',
    height: 60,
  },
  multilineChild: {
    width: 50,
    height: 40,
    position: 'absolute',
    right: 5,
    backgroundColor: 'red',
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    flex: 1,
  },
  label: {
    width: 115,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
  },
  rewriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remainder: {
    textAlign: 'right',
    width: 24,
  },
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
// androidStyle
const styles = StyleSheet.create({
  multiline: {
    height: 60,
    fontSize: 16,
    padding: 4,
    marginBottom: 10,
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
  },
  singleLineWithHeightTextInput: {
    height: 30,
  },
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
export default TextInputs;