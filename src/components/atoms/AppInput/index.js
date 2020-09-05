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
  error,
  ...props
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
        {...props}
      />
      {!!error && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

export default React.memo(AppInput);
