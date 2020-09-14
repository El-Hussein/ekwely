import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  animatedContainer: {
    minHeight: calcHeight(40),
    marginVertical: calcHeight(16),
    paddingRight: calcWidth(16),
    marginLeft: calcWidth(16),
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: calcHeight(1),
  },
  animatedHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animatedTitle: {
    fontSize: calcFont(16),
    color: COLORS.mainText,
  },
});

export {styles};
