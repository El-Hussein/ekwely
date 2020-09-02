import {StyleSheet, I18nManager} from 'react-native';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';

export default StyleSheet.create({
  inputContainer: {
    marginBottom: calcHeight(15),
    width: calcWidth(298),
    alignSelf: 'center',
  },
  inputHeader: {
    ...FONTS.cairoLight,
    width: calcWidth(298),
    alignSelf: 'center',
    paddingHorizontal: calcWidth(5),
    color: COLORS.white,
    marginBottom: calcHeight(9.6),
  },

  textInput: {
    ...FONTS.cairoMedium,
    textAlignVertical: 'center',
    width: calcWidth(290),
    fontSize: calcHeight(16),
    color: COLORS.white,
    textAlign: I18nManager.isRTL ? 'right' : null,
    borderRadius: calcHeight(10),
    alignSelf: 'center',
    padding: 0,
  },
  error: {
    color: COLORS.error,
    width: calcWidth(291),
    alignSelf: 'center',
    paddingTop: calcFont(5),
  },
  eyeIcon: {
    position: 'absolute',
    right: calcFont(2.5),
    top: calcFont(-2.5),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
});
