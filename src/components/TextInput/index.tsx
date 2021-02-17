import React from 'react';
import { TextInput, KeyboardType } from 'react-native';

import styles from './styles';

interface Props {
  keyboardType: KeyboardType;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
}

const _TextInput: React.FC<Props> = (props) => {
  const { keyboardType, placeholder, value, onChangeText, secureTextEntry = false } = props;

  return (
    <TextInput
      keyboardType={keyboardType}
      style={styles.textInput}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor="#C7C7C7"
      value={value}
      onChangeText={(text) => onChangeText(text)}
    />
  );
};

export default _TextInput;
