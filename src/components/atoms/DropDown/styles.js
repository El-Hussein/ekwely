import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  container: {
    // marginBottom: calcHeight(20),
  },
  dropDown: {
    width: calcWidth(344),
    height: calcHeight(46),
    borderRadius: calcFont(5),
    borderColor: COLORS.lightGray,
    borderWidth: calcWidth(2),
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(10),
    marginHorizontal: calcWidth(10),
    alignItems: 'center',
    elevation: 1,
  },
});

export {styles};
