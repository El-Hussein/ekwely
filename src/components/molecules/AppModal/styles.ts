import {StyleSheet} from 'react-native';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';

export default StyleSheet.create({
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
  },
  innerContainer: {
    height: '40%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: calcFont(30),
    borderTopRightRadius: calcFont(30),
  },
  topBorder: {
    width: calcWidth(70),
    height: calcHeight(4),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.modalBorder,
    alignSelf: 'center',
    marginTop: calcFont(10),
  },
  buttonStyle: {
    position: 'absolute',
    bottom: calcFont(17),
  },
  headerTitle: {
    ...FONTS.cairoBold,
    color: COLORS.secondary,
    fontSize: calcFont(16),
    marginTop: calcFont(40),
    paddingHorizontal: calcFont(30),
  },
});
