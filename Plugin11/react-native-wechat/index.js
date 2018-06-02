import * as WeChat from 'react-native-wechat';
import fs from 'react-native-fs';
let resolveAssetSource = require('resolveAssetSource');

// Code example to share text message:
try {
  let result = await WeChat.shareToTimeline({
    type: 'text', 
    description: 'hello, wechat'
  });
  console.log('share text message to time line successful:', result);
} catch (e) {
  if (e instanceof WeChat.WechatError) {
    console.error(e.stack);
  } else {
    throw e;
  }
}

// Code example to share image url:
// Share raw http(s) image from web will always fail with unknown reason, please use image file or image resource instead
try {
  let result = await WeChat.shareToTimeline({
    type: 'imageUrl',
    title: 'web image',
    description: 'share web image to time line',
    mediaTagName: 'email signature',
    messageAction: undefined,
    messageExt: undefined,
    imageUrl: 'http://www.ncloud.hk/email-signature-262x100.png'
  });
  console.log('share image url to time line successful:', result);
} catch (e) {
  if (e instanceof WeChat.WechatError) {
    console.error(e.stack);
  } else {
    throw e;
  }
}

// Code example to share image file:
try {
  let rootPath = fs.DocumentDirectoryPath;
  let savePath = rootPath + '/email-signature-262x100.png';
  console.log(savePath);
  
  /*
   * savePath on iOS may be:
   *  /var/mobile/Containers/Data/Application/B1308E13-35F1-41AB-A20D-3117BE8EE8FE/Documents/email-signature-262x100.png
   *
   * savePath on Android may be:
   *  /data/data/com.wechatsample/files/email-signature-262x100.png
   **/
  await fs.downloadFile('http://www.ncloud.hk/email-signature-262x100.png', savePath);
  let result = await WeChat.shareToTimeline({
    type: 'imageFile',
    title: 'image file download from network',
    description: 'share image file to time line',
    mediaTagName: 'email signature',
    messageAction: undefined,
    messageExt: undefined,
    imageUrl: "file://" + savePath // require the prefix on both iOS and Android platform
  });
  console.log('share image file to time line successful:', result);
} catch (e) {
  if (e instanceof WeChat.WechatError) {
    console.error(e.stack);
  } else {
    throw e;
  }
}

// Code example to share image resource:
try {
  let imageResource = require('./email-signature-262x100.png');
  let result = await WeChat.shareToTimeline({
    type: 'imageResource',
    title: 'resource image',
    description: 'share resource image to time line',
    mediaTagName: 'email signature',
    messageAction: undefined,
    messageExt: undefined,
    imageUrl: resolveAssetSource(imageResource).uri
  });
  console.log('share resource image to time line successful', result);
}
catch (e) {
  if (e instanceof WeChat.WechatError) {
    console.error(e.stack);
  } else {
    throw e;
  }
}

// Code example to download an word file from web, then share it to WeChat session
// only support to share to session but time line
// iOS code use DocumentDirectoryPath
try {
  let rootPath = fs.DocumentDirectoryPath;
  let fileName = 'signature_method.doc';
  /*
   * savePath on iOS may be:
   *  /var/mobile/Containers/Data/Application/B1308E13-35F1-41AB-A20D-3117BE8EE8FE/Documents/signature_method.doc
   **/ 
  let savePath = rootPath + '/' + fileName;

  await fs.downloadFile('https://open.weixin.qq.com/zh_CN/htmledition/res/assets/signature_method.doc', savePath);
  let result = await WeChat.shareToSession({
    type: 'file',
    title: fileName, // WeChat app treat title as file name
    description: 'share word file to chat session',
    mediaTagName: 'word file',
    messageAction: undefined,
    messageExt: undefined,
    filePath: savePath,
    fileExtension: '.doc'
  });
  console.log('share word file to chat session successful', result);
} catch (e) {
  if (e instanceof WeChat.WechatError) {
    console.error(e.stack);
  } else {
    throw e;
  }
}

//android code use ExternalDirectoryPath
try {
  let rootPath = fs.ExternalDirectoryPath;
  let fileName = 'signature_method.doc';
  /*
   * savePath on Android may be:
   *  /storage/emulated/0/Android/data/com.wechatsample/files/signature_method.doc
   **/
  let savePath = rootPath + '/' + fileName;
  await fs.downloadFile('https://open.weixin.qq.com/zh_CN/htmledition/res/assets/signature_method.doc', savePath);
  let result = await WeChat.shareToSession({
    type: 'file',
    title: fileName, // WeChat app treat title as file name
    description: 'share word file to chat session',
    mediaTagName: 'word file',
    messageAction: undefined,
    messageExt: undefined,
    filePath: savePath,
    fileExtension: '.doc'
  });
  console.log('share word file to chat session successful', result);
}
catch (e) {
  if (e instanceof WeChat.WechatError) {
    console.error(e.stack);
  } else {
    throw e;
  }
}