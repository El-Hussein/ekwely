import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: calcHeight(30),
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  userImage: {
    width: calcWidth(75),
    height: calcHeight(75),
    resizeMode: 'contain',
  },
  userOut: {
    width: calcWidth(134),
    height: calcWidth(134),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: calcWidth(Platform.OS === 'ios' ? 134 : 72),
    borderColor: COLORS.border,
    borderWidth: calcHeight(6),
  },

  registerForm: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: calcHeight(5),
  },
  registerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(15),
    textAlign: 'center',
    fontSize: calcFont(24),
  },
  buttons: {
    width: calcWidth(293),
    height: calcHeight(60),
    justifyContent: 'space-between', 
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  input: {
    ...FONTS.dinMedium,
    width: calcWidth(293),
    height: calcHeight(60),
    borderRadius: calcFont(30),
    borderColor: COLORS.border,
    borderWidth: calcHeight(2),
    paddingHorizontal: calcWidth(20),
    fontSize: calcFont(18),
    color: COLORS.white,
    textAlign: 'right',
    lineHeight: calcHeight(30),
    fontWeight: 'normal',
    textAlignVertical: 'bottom',
  },

  addressVeiw: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    width: calcWidth(283),
    alignSelf: 'center',
  },
  mapImage: {
    width: calcWidth(23),
    height: calcHeight(34),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },

  mapText: {
    fontSize: calcFont(18),
    color: COLORS.white,
    fontWeight: 'bold',
    maxWidth: calcWidth(215),
    marginHorizontal: calcWidth(5),
  },

  pressTitle: {
    fontSize: calcFont(18),
    color: COLORS.white,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(15),
  },
  button: {
    width: calcWidth(293),
    height: calcHeight(60),
    borderRadius: calcFont(30),
    backgroundColor: COLORS.yellow,
  },
  error: {
    fontSize: calcFont(16),
    color: COLORS.error,
  },
  loginTitle: {
    color: COLORS.mainText,
    fontSize: calcWidth(25),
    fontWeight: 'bold',
  },
});
