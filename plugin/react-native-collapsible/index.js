// import React, {
//   Component
// } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Accordion from 'react-native-collapsible/Accordion';

// const SECTIONS = [
//   {
//     title: 'First',
//     content: 'Lorem ipsum...'
//   },
//   {
//     title: 'Second',
//     content: 'Lorem ipsum...'
//   }
// ];

// export default class AccordionView extends Component {
//   _renderSectionTitle(section) {
//     return (
//       <View style={styles.content}>
//         <Text>{section.content}</Text>
//       </View>
//     );
//   }

//   _renderHeader(section) {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{section.title}</Text>
//       </View>
//     );
//   }

//   _renderContent(section) {
//     return (
//       <View style={styles.content}>
//         <Text>{section.content}</Text>
//       </View>
//     );
//   }

//   render() {
//     return (
//       <Accordion
//         sections={SECTIONS}
//         renderSectionTitle={this._renderSectionTitle}
//         renderHeader={this._renderHeader}
//         renderContent={this._renderContent}
//       />
//     );
//   }
// }

// export default class AccordionView extends Component {
//   _renderHeader(section, index, isActive, sections) {
//     return (
//       <Animatable.View
//         duration={300}
//         transition="backgroundColor"
//         style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
//         <Text style={styles.headerText}>{section.title}</Text>
//       </Animatable.View>
//     );
//   }

//   _renderContent(section, i, isActive, sections) {
//     return (
//       <Animatable.View
//         duration={300}
//         transition="backgroundColor"
//         style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
//         <Animatable.Text
//           duration={300}
//           easing="ease-out"
//           animation={isActive ? 'zoomIn' : false}>
//           {section.content}
//         </Animatable.Text>
//       </Animatable.View>
//     );
//   }

//   render() {
//     return (
//       <Accordion
//         sections={SECTIONS}
//         renderSectionTitle={this._renderSectionTitle}
//         renderHeader={this._renderHeader}
//         renderContent={this._renderContent}
//       />
//     );
//   }
// }


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const BACON_IPSUM = 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
    value: false,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default class ExampleView extends Component {
  state = {
    activeSection: false,
    collapsed: true,
  };

  _toggleExpanded = () => {
    console.log('_toggleExpanded ：', )
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    console.log('_setSection ：', section)
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    console.log('_renderHeader ：', section, i, isActive)
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    console.log('_renderContent ：', section, i, isActive)
    return (
      <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    console.log('ExampleView 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Accordion Example</Text>

        <View style={styles.selectors}>
          <Text style={styles.selectTitle}>Select:</Text>
          {SELECTORS.map(selector => (
            <TouchableHighlight key={selector.title} onPress={this._setSection.bind(this, selector.value)}>
              <View style={styles.selector}>
                <Text style={selector.value === this.state.activeSection && styles.activeSelector}>
                  {selector.title}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>

        <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible>
        <Accordion
          activeSection={this.state.activeSection}
          sections={CONTENT}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />

      </View>
    );
  }
}