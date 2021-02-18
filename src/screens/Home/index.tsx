import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import * as Notifications from 'expo-notifications';
import { Text, View, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/index';
import {
  registerForPushNotificationsAsync,
  pushNotification,
  getNotifications,
} from '../../utils/notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { updateListNotifications } from '../../redux/notificationsSlice';
import styles from './styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import names from '../../utils/names';

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

  const dispatch = useDispatch();

  const scheduleNotification = async () => {
    pushNotification();
    getNotifications().then((reminders) => {
      dispatch(updateListNotifications(reminders));
    });
  };

  return (
    <View>
      <Text style={styles.headerText}>{names.HomeScreen['Drink Water Reminder']}</Text>
      <Text style={styles.infoText}>
        {names.HomeScreen['Click on the glass to set a reminder - 2h']}
      </Text>
      <TouchableOpacity onPress={scheduleNotification} style={styles.btn_setNotification}>
        <MaterialCommunityIcons color="#67B4FC" name="cup" size={wp('90%')} />
      </TouchableOpacity>
      <Button text={names.HomeScreen.SignOut} onPress={() => auth().signOut()} />
    </View>
  );
};

export default Home;
