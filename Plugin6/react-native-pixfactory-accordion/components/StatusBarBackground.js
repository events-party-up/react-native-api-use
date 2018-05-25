import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

const StatusBarBackground = (props) => {
  const { style } = props;
  console.log('StatusBarBackground ：', );
  return (
    <View style={[styles.statusBarBackground, style || {}]} />
  );
};

StatusBarBackground.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 20,
    backgroundColor: 'gray'
  }
});

export default StatusBarBackground;