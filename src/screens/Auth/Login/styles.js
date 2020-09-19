import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
    alignItems: 'center',
    paddingTop: calcHeight(100),
  },
  loginForm: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(10),
  },
  button: {
    width: calcWidth(293),
    height: calcHeight(60),
    borderRadius: calcFont(30),
    backgroundColor: COLORS.yallow,
  },
  loginTitle: {
    color: COLORS.mainText,
    fontWeight: 'bold',
    fontSize: calcFont(22),
  },
  loginBg: {
    width: calcWidth(160),
    height: calcHeight(220),
    resizeMode: 'contain',
    marginBottom: calcHeight(60),
  },
  rTitle: {
    paddingVertical: calcHeight(20),
  },
});
