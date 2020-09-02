import React, {FC} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import AppIcon from '../../atoms/AppIcon';
import styles from './styles';
import AppText from '../../atoms/AppText';
import COLORS from '../../../common/colors';

interface Props {
  title?: string;
  iconName: string;
  style?: ViewStyle;
  onPress: (event?: TouchEvent) => void;
}
const DrawerCard: FC<Props> = ({title, iconName, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AppIcon name={iconName} color={COLORS.secondary} />
      <AppText style={styles.textStyle}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default React.memo(DrawerCard);
