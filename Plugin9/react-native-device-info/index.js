import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import DeviceInfo from 'react-native-device-info';

const apiLevel = DeviceInfo.getAPILevel();
// iOS: ?
// Android: 25
// Windows: ?

const appName = DeviceInfo.getApplicationName(); 

DeviceInfo.getBatteryLevel().then(batteryLevel => {
  console.log('batteryLevel ：', batteryLevel);
  // 0.759999
});
// Returns -1 on the iOS Simulator


const brand = DeviceInfo.getBrand();

// iOS: "Apple"
// Android: "Xiaomi"
// Windows: ?

const buildNumber = DeviceInfo.getBuildNumber();

// iOS: "89"
// Android: 4
// Windows: ?

const bundleId = DeviceInfo.getBundleId(); // "com.learnium.mobile"

const carrier = DeviceInfo.getCarrier(); // "SOFTBANK"

const deviceCountry = DeviceInfo.getDeviceCountry(); // "US"

const deviceId = DeviceInfo.getDeviceId();instanceId

// iOS: "iPhone7,2"
// Android: "goldfish"
// Windows: ?
console.log('DeviceInfo1 ：', apiLevel, appName, brand, buildNumber, bundleId, carrier, deviceCountry, deviceId,   );

const deviceLocale = DeviceInfo.getDeviceLocale();

// iOS: "en"
// Android: "en-US"
// Windows: ?

const deviceName = DeviceInfo.getDeviceName();

// iOS: "Becca's iPhone 6"
// Android: ?
// Windows: ?

const firstInstallTime = DeviceInfo.getFirstInstallTime();

// Android: 1517681764528

const fontScale = DeviceInfo.getFontScale(); // 1.2

const freeDiskStorage = DeviceInfo.getFreeDiskStorage();

// Android: 17179869184
// iOS: 17179869184

DeviceInfo.getIPAddress().then(ip => {
  console.log('ip ：', ip);
  // "92.168.32.44"
});

const referrer = DeviceInfo.getInstallReferrer();

// If the app was installed from https://play.google.com/store/apps/details?id=com.myapp&referrer=my_install_referrer
// the result will be "my_install_referrer"

const instanceId = DeviceInfo.getInstanceID();

// Android: ?

console.log('DeviceInfo2 ：', deviceLocale, deviceName, firstInstallTime, fontScale, freeDiskStorage, referrer, instanceId,  );
const lastUpdateTime = DeviceInfo.getLastUpdateTime();

// Android: 1517681764992

DeviceInfo.getMACAddress().then(mac => {
  console.log('mac ：', mac);
  // "E5:12:D8:E5:69:97"
});

const manufacturer = DeviceInfo.getManufacturer();

// iOS: "Apple"
// Android: "Google"
// Windows: ?

const maxMemory = DeviceInfo.getMaxMemory(); // 402653183

const model = DeviceInfo.getModel();

// iOS: ?
// Android: ?
// Windows: ?

const phoneNumber = DeviceInfo.getPhoneNumber();

// Android: ?

const readableVersion = DeviceInfo.getReadableVersion();

// iOS: 1.0.1
// Android: 1.0.1
// Windows: ?

const serialNumber = DeviceInfo.getSerialNumber();

// iOS: undefined
// Android: ?
// Windows: ?

console.log('DeviceInfo3 ：', lastUpdateTime, manufacturer, maxMemory, model, readableVersion, serialNumber, systemName,  );
const systemName = DeviceInfo.getSystemName();

// iOS: "iOS"
// Android: "Android"
// Windows: ?

const systemVersion = DeviceInfo.getSystemVersion();

// iOS: "11.0"
// Android: "7.1.1"
// Windows: ?


const timezone = DeviceInfo.getTimezone(); // "Africa/Tunis"

const storageSize = DeviceInfo.getTotalDiskCapacity();

// Android: 17179869184
// iOS: 17179869184

const totalMemory = DeviceInfo.getTotalMemory(); // 1995018240

const uniqueId = DeviceInfo.getUniqueID();

// iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
// Android: "dd96dec43fb81c97"
// Windows: ?

const userAgent = DeviceInfo.getUserAgent();

// iOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143"
// Android: ?
// Windows: ?

const version = DeviceInfo.getVersion();

// iOS: "1.0"
// Android: "1.0
// Windows: ?

const is24Hour = DeviceInfo.is24Hour(); // true

const isEmulator = DeviceInfo.isEmulator(); // false

DeviceInfo.isPinOrFingerprintSet()(isPinOrFingerprintSet => {
  console.log('isPinOrFingerprintSet ：', isPinOrFingerprintSet);
  if (!isPinOrFingerprintSet) {
    // ...
  }
});

const isTablet = DeviceInfo.isTablet(); // true

console.log('DeviceInfo4 ：', systemVersion, timezone, storageSize, totalMemory, uniqueId, userAgent, version, is24Hour, isTablet );

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>






      </View>
    );
  }
}