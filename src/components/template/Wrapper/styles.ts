import {StyleSheet} from 'react-native';
import {calcHeight, calcFont, calcWidth} from '../../../common/styles';
import COLORS from '../../../common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradientView: {
    height: calcHeight(294),
  },
  innerContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: calcWidth(338),
    borderRadius: calcFont(30),
    top: calcFont(-121),
    alignSelf: 'center',
    paddingBottom: calcFont(50),
  },
  topView: {
    height: calcHeight(96),
    backgroundColor: COLORS.grayBackgroud,
    borderRadius: calcFont(30),
    justifyContent: 'center',
    padding: calcFont(10),
  },
});
