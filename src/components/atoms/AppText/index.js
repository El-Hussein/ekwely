import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
const AppText = ({children, style, ...props}) => {
  return (
    <Text style={[styles.text, {...style}]} {...props}>
      {children}
    </Text>
  );
};

export default React.memo(AppText);
