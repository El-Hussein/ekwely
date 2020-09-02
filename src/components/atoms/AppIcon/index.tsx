import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {ViewStyle, TouchableOpacity} from 'react-native';
import icoMoonConfig from '../../../assets/fonts/icomoon/selection.json';
import {calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';

interface Props {
  size?: number;
  name: string;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
}

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const AppIcon: FC<Props> = ({size, name, color, onPress, style, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon
        {...props}
        size={size || calcFont(20)}
        name={name}
        color={color || COLORS.white}
      />
    </TouchableOpacity>
  );
};

export default React.memo(AppIcon);
