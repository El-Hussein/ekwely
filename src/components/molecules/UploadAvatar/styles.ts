import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';

export default StyleSheet.create({
  imageBacground: {
    width: 71,
    height: 71,
    borderRadius: 35,
    borderBottomWidth: 1,
    backgroundColor: 'green',
  },
  buttom: {
    backgroundColor: COLORS.main,
    width: 20.4,
    height: 20.4,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  text: {
    ...FONTS.cairoLight,
    color: COLORS.white,
  },
});
