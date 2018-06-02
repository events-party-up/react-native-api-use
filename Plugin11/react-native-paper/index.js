import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import createReactContext from 'create-react-context';
import { createDrawerNavigator } from 'react-navigation';
import RootNavigator from './src/RootNavigator';
import DrawerItems from './DrawerItems';

const ThemeToggleContext = createReactContext();

const App = createDrawerNavigator(
  { Home: { screen: RootNavigator } },
  {
    contentComponent: () => (
      <ThemeToggleContext.Consumer>
        {toggleTheme => <DrawerItems toggleTheme={toggleTheme} />}
      </ThemeToggleContext.Consumer>
    ),
  }
);

export default class PaperExample extends React.Component {
  state = {
    theme: DefaultTheme,
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  _toggleTheme = () =>
    this.setState(state => ({
      theme: state.theme === DarkTheme ? DefaultTheme : DarkTheme,
    }));

  render() {
    console.log('PaperExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <PaperProvider theme={this.state.theme}>
        <ThemeToggleContext.Provider value={this._toggleTheme}>
          <App />
        </ThemeToggleContext.Provider>
        <KeepAwake />
      </PaperProvider>
    );
  }
}
