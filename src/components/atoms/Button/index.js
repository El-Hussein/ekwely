import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
// import AppText from '../AppText';
import {styles} from './styles';
import COLORS from '../../../common/colors';
import AppText from '../AppText';
const Button = ({title, onPress, style, titleStyle, loading, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {...style}]}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={COLORS.main} />
      ) : (
        <AppText style={{...styles.title, ...titleStyle}}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
