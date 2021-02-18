import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import moment from 'moment';
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

export const pushNotification = async (): Promise<void> => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Drink Water Reminder! 💦',
      body: 'You need some drink water',
      data: {
        date: moment().add(2, 'h').format('DD MM YYYY, hh:mm:ss a'),
      },
    },
    trigger: { seconds: 7200 },
  });
};

export const getNotifications = async (): Promise<string[]> => {
  const reminders: string[] = [];
  await Notifications.getAllScheduledNotificationsAsync().then((response) => {
    if (response) {
      Promise.all(
        response.map((reminder) => {
          const date: string = reminder.content?.data?.date as string;
          reminders.push(date);
        }),
      );
    }
  });
  return reminders;
};
