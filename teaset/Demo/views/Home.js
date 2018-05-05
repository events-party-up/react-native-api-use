// HomeScreen.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Theme, NavigationPage, NavigationBar, ListRow} from 'teaset';
import ThemeExample from './ThemeExample';
import LabelExample from './LabelExample';
import ButtonExample from './ButtonExample';
import CheckboxExample from './CheckboxExample';
import InputExample from './InputExample';
import SelectExample from './SelectExample';
import StepperExample from './StepperExample';
import SearchInputExample from './SearchInputExample';
import BadgeExample from './BadgeExample';
import PopoverExample from './PopoverExample';
import NavigationBarExample from './NavigationBarExample';
import ListRowExample from './ListRowExample';
import CarouselExample from './CarouselExample';
import ProjectorExample from './ProjectorExample';
import SegmentedBarExample from './SegmentedBarExample';
import SegmentedViewExample from './SegmentedViewExample';
import TabViewExample from './TabViewExample';
import TransformViewExample from './TransformViewExample';
import AlbumViewExample from './AlbumViewExample';
import WheelExample from './WheelExample';
import OverlayExample from './OverlayExample';
import ToastExample from './ToastExample';
import ActionSheetExample from './ActionSheetExample';
import ActionPopoverExample from './ActionPopoverExample';
import PullPickerExample from './PullPickerExample';
import PopoverPickerExample from './PopoverPickerExample';
import MenuExample from './MenuExample';
import DrawerExample from './DrawerExample';
import ModalIndicatorExample from './ModalIndicatorExample';

class HomeScreen extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Teaset Example',
  };

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Theme' detail='主题' onPress={() => this.navigation.navigate('ThemeExample')} topSeparator='full' />
        <ListRow title='Label' detail='标签' onPress={() => this.navigation.navigate('LabelExample')} />
        <ListRow title='Button' detail='按钮' onPress={() => this.navigation.navigate('ButtonExample')} />
        <ListRow title='Checkbox' detail='复选框' onPress={() => this.navigation.navigate('CheckboxExample')} />
        <ListRow title='Input' detail='输入框' onPress={() => this.navigation.navigate('InputExample')} />
        <ListRow title='Select' detail='选择框' onPress={() => this.navigation.navigate('SelectExample')} />
        <ListRow title='Stepper' detail='步进器' onPress={() => this.navigation.navigate('StepperExample')} />
        <ListRow title='SearchInput' detail='搜索输入框' onPress={() => this.navigation.navigate('SearchInputExample')} />
        <ListRow title='Badge' detail='徽章' onPress={() => this.navigation.navigate('BadgeExample')} />
        <ListRow title='Popover' detail='气泡' onPress={() => this.navigation.navigate('PopoverExample')} />
        <ListRow title='NavigationBar' detail='导航栏' onPress={() => this.navigation.navigate('NavigationBarExample')} />
        <ListRow title='ListRow' detail='列表行' onPress={() => this.navigation.navigate('ListRowExample')} />
        <ListRow title='Carousel' detail='走马灯' onPress={() => this.navigation.navigate('CarouselExample')} />
        <ListRow title='Projector' detail='幻灯机' onPress={() => this.navigation.navigate('ProjectorExample')} />
        <ListRow title='SegmentedBar' detail='分段工具条' onPress={() => this.navigation.navigate('SegmentedBarExample')} />
        <ListRow title='SegmentedView' detail='分段器' onPress={() => this.navigation.navigate('SegmentedViewExample')} />
        <ListRow title='TabView' detail='标签页' onPress={() => this.navigation.navigate('TabViewExample')} />
        <ListRow title='TransformView' detail='可变视图' onPress={() => this.navigation.navigate('TransformViewExample')} />
        <ListRow title='AlbumView' detail='相册视图' onPress={() => this.navigation.navigate('AlbumViewExample')} />
        <ListRow title='Wheel' detail='滚轮' onPress={() => this.navigation.navigate('WheelExample')} />
        <ListRow title='Overlay' detail='浮层' onPress={() => this.navigation.navigate('OverlayExample')} />
        <ListRow title='Toast' detail='轻提示' onPress={() => this.navigation.navigate('ToastExample')} />
        <ListRow title='ActionSheet' detail='操作选单' onPress={() => this.navigation.navigate('ActionSheetExample')} />
        <ListRow title='ActionPopover' detail='操作气泡' onPress={() => this.navigation.navigate('ActionPopoverExample')} />
        <ListRow title='PullPicker' detail='上拉选择器' onPress={() => this.navigation.navigate('PullPickerExample')} />
        <ListRow title='PopoverPicker' detail='气泡选择器' onPress={() => this.navigation.navigate('PopoverPickerExample')} />
        <ListRow title='Menu' detail='菜单' onPress={() => this.navigation.navigate('MenuExample')} />
        <ListRow title='Drawer' detail='抽屉' onPress={() => this.navigation.navigate('DrawerExample')} />
        <ListRow title='ModalIndicator' detail='模态指示器' onPress={() => this.navigation.navigate('ModalIndicatorExample')} bottomSeparator='full' />
        <View style={{height: Theme.screenInset.bottom}} />
      </ScrollView>
    );
  }

}

const App = StackNavigator({
  ThemeExample: {
    screen: ThemeExample,
    navigationOptions: {header: null,},
  },
  LabelExample: {
    screen: LabelExample,
    navigationOptions: {header: null,},
  },
  ButtonExample: {
    screen: ButtonExample,
    navigationOptions: {header: null,},
  },
  CheckboxExample: {
    screen: CheckboxExample,
    navigationOptions: {header: null,},
  },
  InputExample: {
    screen: InputExample,
    navigationOptions: {header: null,},
  },
  SelectExample: {
    screen: SelectExample,
    navigationOptions: {header: null,},
  },
  StepperExample: {
    screen: StepperExample,
    navigationOptions: {header: null,},
  },
  SearchInputExample: {
    screen: SearchInputExample,
    navigationOptions: {header: null,},
  },
  BadgeExample: {
    screen: BadgeExample,
    navigationOptions: {header: null,},
  },
  PopoverExample: {
    screen: PopoverExample,
    navigationOptions: {header: null,},
  },
  NavigationBarExample: {
    screen: NavigationBarExample,
    navigationOptions: {header: null,},
  },
  ListRowExample: {
    screen: ListRowExample,
    navigationOptions: {header: null,},
  },
  CarouselExample: {
    screen: CarouselExample,
    navigationOptions: {header: null,},
  },
  ProjectorExample: {
    screen: ProjectorExample,
    navigationOptions: {header: null,},
  },
  SegmentedBarExample: {
    screen: SegmentedBarExample,
    navigationOptions: {header: null,},
  },
  SegmentedViewExample: {
    screen: SegmentedViewExample,
    navigationOptions: {header: null,},
  },
  TabViewExample: {
    screen: TabViewExample,
    navigationOptions: {header: null,},
  },
  TransformViewExample: {
    screen: TransformViewExample,
    navigationOptions: {header: null,},
  },
  AlbumViewExample: {
    screen: AlbumViewExample,
    navigationOptions: {header: null,},
  },
  WheelExample: {
    screen: WheelExample,
    navigationOptions: {header: null,},
  },
  OverlayExample: {
    screen: OverlayExample,
    navigationOptions: {header: null,},
  },
  ToastExample: {
    screen: ToastExample,
    navigationOptions: {header: null,},
  },
  ActionSheetExample: {
    screen: ActionSheetExample,
    navigationOptions: {header: null,},
  },
  ActionPopoverExample: {
    screen: ActionPopoverExample,
    navigationOptions: {header: null,},
  },
  PullPickerExample: {
    screen: PullPickerExample,
    navigationOptions: {header: null,},
  },
  PopoverPickerExample: {
    screen: PopoverPickerExample,
    navigationOptions: {header: null,},
  },
  MenuExample: {
    screen: MenuExample,
    navigationOptions: {header: null,},
  },
  DrawerExample: {
    screen: DrawerExample,
    navigationOptions: {header: null,},
  },
  ModalIndicatorExample: {
    screen: ModalIndicatorExample,
    navigationOptions: {header: null,},
  },
},
  // config
);
export default App