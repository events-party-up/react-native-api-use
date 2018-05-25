import React from 'react';
import { Image } from 'react-native';

const SubMenu = () => {
  console.log('SubMenu ：', )
  /* Cheating here :) using images as placeholders for demo purpose */
  return <Image source={require('../fake_tweets/tweetbot-submenu.png')} />
}

export default SubMenu;