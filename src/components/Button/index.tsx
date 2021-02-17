import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

interface Props {
  loading?: boolean;
  text: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ loading = false, text, onPress }) => (
  <TouchableOpacity style={styles.button} disabled={loading} onPress={onPress}>
    {loading ? (
      <ActivityIndicator size="large" color="#1E90FF" />
    ) : (
      <Text style={styles.text}>{text}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
