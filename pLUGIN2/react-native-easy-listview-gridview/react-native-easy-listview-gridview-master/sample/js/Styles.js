import React from 'react-native'

module.exports = React.StyleSheet.create({
  rowContainer: {
    flex: 1,
    overflow: 'hidden',
    height: 60,
    flexDirection: 'column'
  },
  rowContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20
  },
  rowTitle: {
    color: '#333333',
    fontSize: 15
  },
  separate: {
    height: 0.5,
    backgroundColor: '#bbbbbb'
  }
})
