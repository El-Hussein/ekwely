import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: calcHeight(8),
    backgroundColor: COLORS.gray,
  },
  userImage: {
    width: calcWidth(75),
    height: calcHeight(75),
    resizeMode: 'contain',
    tintColor: COLORS.lightTextGray,
  },
  backImage: {
    width: calcWidth(35),
    height: calcHeight(35),
    resizeMode: 'contain',
    tintColor: COLORS.white,
    alignSelf: 'flex-end',
  },
  userOut: {
    width: calcWidth(134),
    height: calcWidth(134),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: calcWidth(Platform.OS === 'ios' ? 134 : 72),
    borderColor: '#525e70',
    borderWidth: calcHeight(6),
  },
  menu: {
    paddingTop: calcHeight(20),
  },
  text: {
    color: COLORS.white,
    fontSize: calcFont(18),
    paddingVertical: calcHeight(8),
    alignSelf: 'flex-end',
  },
  titleText: {
    color: COLORS.white,
    fontSize: calcFont(20),
    fontWeight: 'bold',
    paddingVertical: calcHeight(15),
    paddingBottom: calcHeight(20),
    textAlign:'center'
  },
  row: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
