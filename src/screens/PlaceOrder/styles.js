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
    color:'#121c2c',
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },

  orderTime: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    paddingHorizontal: calcWidth(5),
    paddingVertical: calcHeight(10),
    marginTop:calcHeight(10),
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: calcWidth(200),
    paddingVertical: calcHeight(15),
    paddingHorizontal: calcWidth(10),
    alignSelf:'flex-end'
  },
  checkbox1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: calcWidth(5),
  },

  checkbox: {},
  //////////////////////////////////////////
  changeAddress: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:calcHeight(10)
    
  },
  changeAddressText: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(15),
    paddingHorizontal: calcWidth(5),
    width: calcWidth(263),
  },

  pressText: {
    color: COLORS.darkMain,
    fontSize: calcFont(18),
  },
  press: {
    backgroundColor: COLORS.white,
  },

  
  mapImage: {
    width: calcWidth(23),
    height: calcHeight(34),
    resizeMode: 'contain',
    tintColor: COLORS.lightTextGray,
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
    fontWeight:'bold'
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
    fontWeight:'bold',
    fontSize:calcFont(18)
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
