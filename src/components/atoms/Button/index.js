import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../AppText';
import {styles} from './styles';
const Button = ({title, onPress, style, titleStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {...style}]}
      activeOpacity={0.7}
      onPress={onPress}>
      <AppText style={[styles.title, {...titleStyle}]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
