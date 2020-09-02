import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: TextStyle;
  children: any;
}

const AppText: FC<Props> = ({style, children, ...props}) => {
  return (
    <Text {...props} style={[styles.default, style]}>
      {children}
    </Text>
  );
};

export default React.memo(AppText);
