import React from 'react';
import {Text} from 'react-native';
import {calcHeight} from '../../../common/styles';
import {styles} from './styles';
const AppText = ({children, style, ...props}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          lineHeight: calcHeight(30),
          ...style,
          fontWeight: 'normal',
          textAlignVertical: 'bottom',
          fontFamily: 'din-next-lt-w23-medium',
        },
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default React.memo(AppText);
