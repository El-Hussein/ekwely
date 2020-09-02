import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcFont, calcHeight} from '../../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitleStyle: {
    color: COLORS.main,
  },
  inputsView: {
    alignSelf: 'center',
    marginVertical: calcFont(30),
  },
  loginHeaaderText: {
    ...FONTS.cairoBold,
    fontSize: calcFont(34),
    alignSelf: 'center',
    color: COLORS.white,
  },
  forgotPasswordBt: {
    height: calcHeight(50),
  },
  forgotPasswordText: {
    ...FONTS.cairoBold,
    color: COLORS.white,
    fontSize: calcFont(20),
  },
});
