import React from 'react';
import auth from '@react-native-firebase/auth';
import { Text, View } from 'react-native';

const Home: React.FC = () => {
  return (
    <View>
      <Text onPress={() => auth().signOut()}>Hello Home Screen! :D</Text>
    </View>
  );
};

export default Home;
