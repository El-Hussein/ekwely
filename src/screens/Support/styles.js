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
    height: calcHeight(54),
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: calcWidth(10),
  },
  newOrderText: {
    color: COLORS.mainText,
    fontSize: calcFont(20),
    fontWeight: 'bold',
    color: COLORS.gray,
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
    textAlignVertical:'top'
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
    height: calcHeight(42),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.yallow,
    alignSelf: 'flex-start',
  },
});
