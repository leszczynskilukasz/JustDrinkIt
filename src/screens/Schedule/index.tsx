import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getNotifications } from '../../utils/notifications';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { notificationsSelector, updateListNotifications } from '../../redux/notificationsSlice';
import { Text, Card, CardItem, Body } from 'native-base';
import names from '../../utils/names';

const Schedule: React.FC = () => {
  const notificationsList = useSelector(notificationsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (notificationsList.length === 0) {
      getNotifications().then((reminders) => {
        dispatch(updateListNotifications(reminders));
      });
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>{names.ScheduleScreen['Schedule Notifications']}</Text>
      {notificationsList.map((notification, index) => (
        <Card key={index} style={styles.card}>
          <CardItem header>
            <Text>{names.ScheduleScreen['Drink Water Reminder!']} 💦</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{notification}</Text>
            </Body>
          </CardItem>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Schedule;
