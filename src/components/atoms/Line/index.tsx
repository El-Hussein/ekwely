import React, {FC, memo} from 'react';
import {View} from 'react-native';
import styles from './styles';

interface Props {
  width?: number | string;
  height?: number;
  color?: string;
}

const Line: FC<Props> = memo(({width, height, color}) => {
  return <View style={styles.line(width, height, color)} />;
});

export {Line};
