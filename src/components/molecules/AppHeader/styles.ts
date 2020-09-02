import {StyleSheet} from 'react-native';
import {calcHeight, calcFont} from '../../../common/styles';
import FONTS from '../../../common/fonts';
import COLORS from '../../../common/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: calcHeight(50),
    paddingHorizontal: calcFont(20),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: calcFont(45),
  },
  titleText: {
    ...FONTS.cairoMedium,
    fontSize: calcFont(18),
    color: COLORS.white,
    alignSelf: 'center',
  },
});
