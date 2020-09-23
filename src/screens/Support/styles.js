import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'flex-end',
  },
  newOrder: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
  },
  newOrderText: {
    color: '#121c2c',
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  /////////////////////////////////////////////
  comment: {
    width: calcWidth(345),
    minHeight: calcHeight(50),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.white,
    borderColor: COLORS.midLightGray,
    borderWidth: calcHeight(2),
    elevation: 0.5,
    paddingHorizontal: calcWidth(15),
    color: COLORS.error,
    fontWeight: 'bold',
    fontSize: calcFont(16),
    textAlign: 'right',
    lineHeight: calcHeight(27),
    textAlignVertical: 'top',
  },

  title: {
    color: COLORS.textGray,
    fontWeight: 'bold',
    fontSize: calcFont(20),
    textAlign: 'right',
    paddingVertical: calcHeight(5),
    lineHeight: calcHeight(27),
    marginTop: calcHeight(20),
  },

  addToCartText: {
    width: '100%',
    color: '#121c2c',
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  addToCartButton: {
    width: calcWidth(124),
    paddingVertical: calcHeight(5),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.yallow,
    alignSelf: 'flex-start',
  },
});
