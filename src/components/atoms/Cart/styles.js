import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';

export default StyleSheet.create({
  cartImage: {
    width: calcWidth(19),
    height: calcHeight(17),
    resizeMode: 'contain',
    tintColor: COLORS.mainText,
  },
  favoriteImage: {
    width: calcWidth(19),
    height: calcHeight(17),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  favoriteOut: {
    width: calcWidth(32),
    height: calcWidth(32),
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcWidth(Platform.OS === 'ios' ? 32 : 16),
    borderColor: COLORS.midLightGray,
  },
});
