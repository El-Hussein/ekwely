import React, {FC} from 'react';
import {Image, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: ViewStyle;
}

const Avatar: FC<Props> = ({style, ...props}) => {
  return (
    <>
      <Image style={styles.imageStyle} />
    </>
  );
};

export default React.memo(Avatar);
