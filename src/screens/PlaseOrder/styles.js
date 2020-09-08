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
    // alignItems:'center',
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

  orderTime: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    paddingHorizontal: calcWidth(5),
    paddingVertical: calcHeight(10),
  },
  orderTimeText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  datePicker: {
    width: calcWidth(355),
    height: calcHeight(46),
    borderRadius: calcFont(5),
    borderColor: COLORS.lightGray,
    borderWidth: calcWidth(2),
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(10),
    alignItems: 'center',
    elevation: 1,
  },
  checkBoxContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: calcHeight(15),
    paddingHorizontal: calcWidth(10),
  },
  checkbox1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: calcWidth(5),
    // alignSelf: 'flex-end',
  },

  checkbox: {
    // alignContent: 'flex-start',
  },
  //////////////////////////////////////////
  changeAddress: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    // paddingHorizontal: calcWidth(5),
    // paddingVertical: calcHeight(10),
  },
  changeAddressText: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
    fontWeight: 'bold',
    paddingHorizontal: calcWidth(5),
  },

  pressText: {
    color: COLORS.main,
    fontSize: calcFont(16),
  },
  press: {
    backgroundColor: COLORS.white,
  },

  address: {
    alignSelf: 'flex-end',
    fontSize: calcFont(16),
    fontWeight: 'bold',
    color: COLORS.textGray,
    paddingHorizontal: calcWidth(5),
  },
  ///////////////////////////////
  desc: {
    width: calcWidth(390),
    height: calcHeight(82),
    alignItems: 'center',
    paddingHorizontal: calcWidth(20),
  },
  descText: {
    fontSize: calcFont(16),
    color: COLORS.lightTextGray,
  },
  promoCode: {
    width: calcWidth(355),
    height: calcHeight(46),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(10),
    alignItems: 'center',
    elevation: 1,
  },
  promoCodeInput: {
    width: calcWidth(300),
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
