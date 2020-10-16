import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  newOrder: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
  },
  newOrderText: {
    fontSize: calcFont(20),
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  header1Text: {
    color: COLORS.blackText,
    fontWeight: 'bold',
    fontSize: calcFont(20),
    textAlign: 'left',
    paddingVertical: calcWidth(10),
  },
  header2Text: {
    color: COLORS.blackText,
    fontWeight: 'bold',
    fontSize: calcFont(18),
    textAlign: 'left',
    paddingVertical: calcWidth(10),
  },
  header3Text: {
    color: COLORS.blackText,
    fontWeight: 'bold',
    fontSize: calcFont(16),
    textAlign: 'left',
    paddingVertical: calcWidth(10),
  },
  simple: {
    color: COLORS.lightTextGray,
    fontWeight: 'bold',
    fontSize: calcFont(14),
    textAlign: 'left',
  },
});
