import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import * as Notifications from 'expo-notifications';
import { Text, View, Button } from 'react-native';
import {
  registerForPushNotificationsAsync,
  schedulePushNotification,
} from '../../utils/Notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Home: React.FC = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <View>
      <Text onPress={() => auth().signOut()}>Hello Home Screen! :D</Text>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
};

export default Home;
