import React from 'react';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
const App = () => {
  const showNotification = () => {
    PushNotification.localNotification({
      title: '🌹Sevgililer Günü İndirimi',
      message: '💎Sevdikleriniz için en anlamlı hediyeler artık %30 indirimli',
    });
  };
  if (Platform.OS === 'ios') {
    PushNotificationIOS.requestPermissions().then(showNotification);
  } else {
    showNotification();
  }
  return <></>;
};
export default App;
