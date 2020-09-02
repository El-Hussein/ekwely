import React, {FC} from 'react';
import {TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../AppText';
import AppIcon from '../AppIcon';

interface Props {
  title: string;
  onPress: (event?: TouchEvent) => void;
  disabled?: boolean;
  iconName?: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
}
const AppButton: FC<Props> = ({
  title,
  onPress,
  iconName,
  disabled,
  buttonStyle,
  titleStyle,
}) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={COLORS.gradintColor}
    style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.6}
      style={[styles.appButtonStyle, buttonStyle]}>
      <AppIcon name={iconName} />
      <AppText style={[styles.textStyle, titleStyle]}>{title}</AppText>
    </TouchableOpacity>
  </LinearGradient>
);

export default React.memo(AppButton);
