import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    paddingVertical: calcHeight(30),
  },
  userImage: {
    width: calcWidth(100),
    height: calcHeight(64),
    resizeMode: 'contain',
    // marginBottom: calcHeight(20),
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

  line: {
    width: calcWidth(140),
    height: calcHeight(52),
    backgroundColor: COLORS.mainText,
  },
  registerForm: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(30),
  },
  registerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: calcHeight(30),
    marginBottom: calcHeight(10),
    textAlign: 'center',
    fontSize: calcFont(24),
  },
  buttons: {
    // width: calcWidth(293),
    height: calcHeight(60),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },

  map: {
    height: calcHeight(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: calcWidth(27),
    height: calcHeight(40),
    resizeMode: 'contain',
  },

  done: {
    height: calcHeight(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  // doneImage: {
  //   width: calcWidth(100),
  //   height: calcHeight(64),
  //   resizeMode: 'contain',
  // },
});
