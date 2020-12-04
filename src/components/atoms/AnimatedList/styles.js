import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';
const styles = StyleSheet.create({
  animatedContainer: {
    minHeight: calcHeight(20),
  },
  animatedHeader: {
    paddingHorizontal: calcWidth(16),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: calcWidth(350),
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.lightGray,
    marginVertical: calcHeight(5),
  },

  animatedTitle: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    paddingHorizontal: calcWidth(10),
  },
});

export default styles;
