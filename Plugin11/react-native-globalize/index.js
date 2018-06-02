import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { 
  FormattedProvider, 
  FormattedCurrency,  
  FormattedDate, 
  FormattedMessage, 
  FormattedNumber,   
  FormattedPlural, 
  FormattedRelativeTime,   
  withGlobalize,
} from 'react-native-globalize';

const Messages = {
  en: {
    hello: 'Hey {first} {middle} {last},',
    test: {
      select: '{gender, select, female {{host} invites {guest} to her party} male {{host} invites {guest} to his party} other {{host} invites {guest} to their party}}',
      plural: 'You have {count, plural, one {one task} other {{count} tasks}} remaining',
      component: 'Hey {name}, you asked me to remind you about {item} at {time}!',
    },
  },
};

const Messages = {
  en: {
    hello: 'Hello',
  },
  es: {
    hello: 'Hola',
  },
};

export default class MyApp extends PureComponent {
  myFunction() {
    const dateFormatter = this.props.globalize.getDateFormatter({skeleton: 'yMd'});
    const formattedDate = dateFormatter(new Date());

    const currencyFormatter = this.props.globalize.getCurrencyFormatter('USD', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const formattedCurrency = currencyFormatter(9.99);
  }
  // export default withGlobalize(MyComponent);

  render() {
    console.log('MyApp 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <FormattedProvider locale="en" currency="USD" messages={Messages}>
          <App />
        </FormattedProvider>

        <FormattedCurrency
        value={9.99}
        currency="USD"
        style={{ color: 'red' }} />

        <FormattedDate
          value={new Date()}
          style={{ color: 'red' }}
          skeleton="yMd" />


        <FormattedMessage
          message="hello"
          first="John"
          middle="William"
          last="Smith"
          style={{ color: 'red' }} />

        <FormattedMessage
          message="test/select"
          values={{ gender: 'male', host: 'Josh', guest: 'Andrea' }}
          style={{ color: 'red' }} />


        <FormattedMessage
          message={['test', 'select']}
          gender="female"
          host="Jennifer"
          guest="Michael"
          style={{ color: 'red' }} />


        <FormattedMessage
          message="test/plural"
          values={{ count: 4 }}
          style={{ color: 'red' }} />

        <FormattedMessage
          message="test/component"
          name="Josh"
          item="buying groceries"
          time={<FormattedDate value={new Date()} time="short" />} />


        <FormattedNumber
          value={1.5}
          minimumFractionDigits={2}
          style={{ color: 'red' }} />

        <FormattedNumber
          value={3.141592}
          style={{ color: 'red' }} />

        <FormattedPlural
          value={0}
          zero={<Text>:(</Text>}
          other={<Text>:)</Text>} />

        <FormattedRelativeTime
          value={myDateObject}
          unit="best"
          style={{ color: 'red' }} />


      </View>
    )
  }
}