import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const registerForPushNotificationsAsync = async (): Promise<string | undefined> => {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({ experienceId: 'l_leszczynski/project' }))
      .data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      lightColor: '#FF231F7C',
    });
  }

  return token;
};

export const schedulePushNotification = async (): Promise<void> => {
  await Notifications.scheduleNotificationAsync({
    identifier: 'default',
    content: {
      title: 'Drink Water Reminder! 💦',
      body: 'You need some drink water',
    },
    trigger: { seconds: 5 },
  });
};
