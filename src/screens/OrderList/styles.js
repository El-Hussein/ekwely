import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },

  newOrder: {
    width: '100%',
    height: calcHeight(54),
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(5),
    alignItems: 'center',
  },
  newOrderText: {
    color: COLORS.mainText,
    fontSize: calcFont(20),
    fontWeight: 'bold',
    color: COLORS.gray,
  },

  checkBoxContainer: {
    width: '100%',
    paddingVertical: calcHeight(15),
    paddingHorizontal: calcWidth(15),
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: calcWidth(5),
    justifyContent: 'flex-end',
  },

  checkboxText: {
    color: COLORS.mainText,
    fontSize: calcFont(16),
    paddingHorizontal: calcWidth(10),
    fontWeight: 'bold',

  },
  //////////////////////////////////////////

  totalPromoCode: {
    color: COLORS.error,
    fontSize: calcFont(19),
    fontWeight: 'bold',
    width: calcWidth(250),
  },
  PromoCode: {
    color: COLORS.error,
    fontSize: calcFont(24),
  },
  totalPriceText: {
    color: COLORS.mainText,
    fontSize: calcFont(19),
    fontWeight: 'bold',
    width: calcWidth(250),
  },
  priceText: {
    color: COLORS.mainText,
    fontSize: calcFont(24),
  },
  total: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: calcHeight(5),
    paddingHorizontal: calcWidth(10),
    justifyContent: 'flex-start',
  },
  /////////////////////////////////
  orderButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(30),
  },
  button: {
    width: calcWidth(204),
    height: calcHeight(50),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.main,
  },
  completeOrder: {
    color: COLORS.white,
    fontSize: calcFont(20),
  },
});
