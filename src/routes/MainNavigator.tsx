import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import TabsNavigator from './TabsNavigator';
import LoginScreen from '../screens/Login/index';

const Navigator: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged((userState) => {
      setUser(userState);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (!user) {
    return <LoginScreen />;
  }
  return <TabsNavigator />;
};

export default Navigator;
