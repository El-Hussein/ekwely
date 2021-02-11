import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // alignItems: 'center',
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

  orderTime: {
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
  },
  orderTimeText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    paddingHorizontal: calcWidth(5),
  },
  datePicker: {
    width: calcWidth(345),
    borderRadius: calcFont(5),
    borderColor: COLORS.lightGray,
    borderWidth: calcWidth(2),
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 1,
  },
  checkBoxContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: calcWidth(200),
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(15),
    alignSelf: 'flex-end',
  },
  checkbox1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },



  checkBox: {
    width: '100%',
    paddingVertical: calcHeight(10),
    paddingHorizontal: calcWidth(15),
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: calcWidth(5),
    justifyContent: 'flex-end',
  },

  checkboxText: {
    color: COLORS.textGray,
    fontSize: calcFont(16),
    paddingHorizontal: calcWidth(10),
    fontWeight: 'bold',
  },
//////////////////////////////////////////

  totalPromoCode: {
    color: COLORS.error,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    width: calcWidth(250),
  },
  PromoCode: {
    color: COLORS.error,
    fontSize: calcFont(22),
    fontWeight: 'bold',
  },
  totalPriceText: {
    color: COLORS.gray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    width: calcWidth(250),
  },
  priceText: {
    color: COLORS.gray,
    fontSize: calcFont(22),
    fontWeight: 'bold',
  },
  total: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: calcHeight(10),
    paddingHorizontal: calcWidth(15),
    justifyContent: 'flex-start',
  },
  //////////////////////////////////////////
  changeAddress: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: calcHeight(10),
  },
  changeAddressText: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(15),
    paddingHorizontal: calcWidth(5),
    width: calcWidth(255),
  },

  pressText: {
    color: COLORS.main,
    fontSize: calcFont(18),
  },
  press: {
    backgroundColor: COLORS.white,
  },

  promoImage: {
    width: calcWidth(13),
    height: calcHeight(22),
    resizeMode: 'contain',
    tintColor: COLORS.drop,
  },
  mapImage: {
    width: calcWidth(23),
    height: calcHeight(34),
    resizeMode: 'contain',
    tintColor: COLORS.lightTextGray,
  },
  inOutImage: {
    width: calcWidth(24),
    height: calcHeight(23),
    resizeMode: 'contain',
    tintColor: COLORS.main,
  },
  ///////////////////////////////
  desc: {
    paddingHorizontal: calcWidth(20),
  },
  descText: {
    fontSize: calcFont(16),
    color: COLORS.lightTextGray,
    lineHeight: calcHeight(27),
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
    borderRadius: calcFont(5),
    backgroundColor: COLORS.main,
    paddingVertical: calcHeight(15),
  },
  completeOrder: {
    color: COLORS.white,
    fontSize: calcFont(20),
  },
});
