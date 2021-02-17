import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard } from 'react-native';
import Button from '../../components/Button/index';
import TextInput from '../../components/TextInput/index';
import styles from './styles';
import { loginUser } from '../../api/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [textError, setTextError] = useState('');

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async () => {
    setLoading(true);
    Keyboard.dismiss();
    await loginUser(email, password, setTextError, setLoading);
  };

  return (
    <View style={styles.container}>
      <Text>Hello Login Screen! :D</Text>
      {!!textError && <Text style={styles.textError}>{textError}</Text>}
      <TextInput
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        value={email}
        placeholder="E-mail"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        keyboardType="default"
        secureTextEntry
        value={password}
        placeholder="Password"
      />
      <Button text="Login" loading={loading} onPress={login} />
    </View>
  );
};

export default Login;
