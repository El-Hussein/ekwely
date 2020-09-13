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
  item: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingVertical: calcHeight(10),
    paddingHorizontal: calcWidth(15),
    alignItems: 'center',
  },
  name: {
    width: calcWidth(130),
  },
  product: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  type: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
    fontWeight: 'bold',
  },
  counter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    width: calcWidth(119),
    paddingVertical: calcHeight(5),
    elevation: 1.3,
    borderRadius: calcFont(3),
    borderColor: COLORS.lightGray,
    borderWidth: calcWidth(2),
    paddingHorizontal: calcWidth(3),
  },
  counterButton: {
    width: calcWidth(38),
    height: calcWidth(38),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.lightGray,
  },
  counterButtonText: {
    color: COLORS.textGray,
    width: calcWidth(38),
    fontSize: calcFont(18),
  },
  counterText: {
    fontSize: calcFont(20),
    color: COLORS.textGray,
  },
  price: {
    color: COLORS.mainText,
    fontSize: calcFont(22),
    fontWeight: 'bold',
  },
  close: {
    width: calcWidth(20),
    height: calcHeight(30),
    resizeMode: 'contain',
    tintColor: COLORS.mainText,
  },
  checkBoxContainer: {
    width: '100%',
    paddingVertical: calcHeight(7),
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  total: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: calcHeight(2),
    paddingHorizontal: calcWidth(10),
    justifyContent: 'flex-start',
  },
  /////////////////////////////////
  orderButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(5),
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
