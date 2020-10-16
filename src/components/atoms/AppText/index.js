import React from 'react';
import { Text } from 'react-native';
import FONTS from '../../../common/fonts';
import { calcFont, calcHeight } from '../../../common/styles';
import { styles } from './styles';
const AppText = ({ children, style, ...props }) => {
  return (
    <Text
      style={[
        styles.text,
        {
          lineHeight: calcHeight(30),
          ...style,
          fontWeight: 'normal',
          textAlignVertical: 'bottom',
          ...FONTS.dinMedium,
          marginTop:calcFont(-5)
        },
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default React.memo(AppText);
