import { StyleSheet } from 'react-native';
import { calcHeight, calcFont, width, calcWidth } from '../../../common/styles';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';

export default StyleSheet.create({

  container: {
    width: '90%',
    flexDirection: 'row',
    height: calcHeight(50),
    paddingHorizontal: calcFont(10),
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
    alignSelf: 'center',
    marginHorizontal: calcFont(20),

  },
  textStyle: {
    ...FONTS.cairoMedium,
    color: COLORS.secondary,
    marginHorizontal: calcFont(16),
    fontSize: calcFont(16),
  },
});
