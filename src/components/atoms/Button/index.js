import React from 'react';
import {TouchableOpacity ,Text} from 'react-native';
// import AppText from '../AppText';
import {styles} from './styles';
const Button = ({title, onPress, style, titleStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {...style}]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={[styles.title, {...titleStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
