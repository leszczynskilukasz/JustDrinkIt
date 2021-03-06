import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/Home/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScheduleScreen from '../screens/Schedule/index';
import names from '../utils/names';

const Tab = createMaterialBottomTabNavigator();

const TabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home" shifting={true}>
      <Tab.Screen
        options={{
          tabBarLabel: names.TabsNavigator.Home,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: names.TabsNavigator.History,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
        name="History"
        component={ScheduleScreen}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
