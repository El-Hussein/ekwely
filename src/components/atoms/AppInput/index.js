import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './styles';
import AppText from '../AppText';
import COLORS from '../../../common/colors';
const AppInput = ({
  placeholder,
  value,
  onChangeText,
  onEndEditing,
  keyboardType,
  returnKeyType,
  error,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.white}
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
      />
      {!!error && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

export default React.memo(AppInput);
