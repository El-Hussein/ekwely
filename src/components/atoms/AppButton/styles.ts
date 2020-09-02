import {StyleSheet} from 'react-native';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';

export default StyleSheet.create({
  container: {
    borderRadius: calcFont(6),
    width: calcWidth(298),
    alignSelf: 'center',
  },
  appButtonStyle: {
    flexDirection: 'row',
    height: calcHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: calcFont(6),
  },
  textStyle: {
    ...FONTS.cairoBold,
    color: COLORS.white,
    marginHorizontal: calcFont(10),
    fontSize: calcFont(18),
  },
});
