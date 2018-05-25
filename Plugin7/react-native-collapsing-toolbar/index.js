import {
  AppBarLayout,
  CoordinatorLayout,
  CollapsingToolbarLayout,
  CollapsingParallax,
} from 'react-native-collapsing-toolbar'

import NestedScrollView from 'react-native-nested-scroll-view'


export default class HomeScreen extends NavigationPage {
  render() {
    const HEADER_HEIGHT = 300
    console.log('HomeScreen 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <CoordinatorLayout>
        <AppBarLayout style={{height: HEADER_HEIGHT, backgroundColor: '#000'}}>
          <CollapsingToolbarLayout
            title='Collapsing Toolbar'
            contentScrimColor='#673AB7'
            expandedTitleColor='#ffffff'
            expandedTitleGravity='BOTTOM'
            scrimAnimationDuration={500}
            expandedTitleMarginStart={22}
            expandedTitleMarginBottom={22}
            scrollFlags={
                AppBarLayout.SCROLL_FLAG_SCROLL
              | AppBarLayout.SCROLL_FLAG_EXIT_UNTIL_COLLAPSED
              | AppBarLayout.SCROLL_FLAG_SNAP
            }>
            <CollapsingParallax parallaxMultiplier={0.6}>
              <View collapsable={false} style={{height: HEADER_HEIGHT, justifyContent: 'center' }}>
                <Text>Some Custom Text Inside the Parallax</Text>
              </View>
            </CollapsingParallax>
            <ToolbarAndroid actions={[{title: 'Settings'}]} />
          </CollapsingToolbarLayout>
        </AppBarLayout>
        <NestedScrollView>
        // Main Content
        </NestedScrollView>
      </CoordinatorLayout>
    )
  }
}