import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../../common/colors';
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
    width: calcWidth(100),
    height: calcHeight(64),
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

  line: {
    width: calcWidth(140),
    height: calcHeight(52),
    backgroundColor: COLORS.mainText,
  },
  registerForm: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: calcHeight(30),
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
    width: calcWidth(293),
    height: calcHeight(60),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },


  map: {
    width: calcWidth(209),
    height: calcHeight(60),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:COLORS.yallow,
    flexDirection: 'row-reverse',
    borderRadius: calcFont(30),
    paddingHorizontal:calcWidth(10),
  },
  mapImage: {
    width: calcWidth(27),
    height: calcHeight(40),
    resizeMode: 'contain',
  },

  mapText: {
    fontSize: calcFont(20),
    fontWeight: 'bold'
  },

  done: {
    width: calcHeight(60),
    height: calcHeight(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.yallow,
    borderRadius: calcHeight(Platform.OS === 'ios' ? 60 : 30),
    borderColor: COLORS.border,
  },
  doneImage: {
    width: calcWidth(30),
    height: calcHeight(29),
    resizeMode: 'contain',
  },
});
