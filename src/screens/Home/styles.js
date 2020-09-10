import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.white,

  },
  orderButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(30),
  },
  button: {
    width: calcWidth(276),
    height: calcHeight(65),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.main,
  },
  orderTitle: {
    color: COLORS.white,
    fontSize: calcFont(32),
  },
  promoImage: {
    width: calcWidth(330),
    height: calcHeight(98),
    resizeMode: 'contain',
    marginVertical: calcHeight(30),
  },
  promoCode: {
    width: calcWidth(182),
    height: calcHeight(85),
    position: 'absolute',
    top: calcHeight(38),
    right: calcWidth(40),
    
  },
  promoCodeText: {
    fontSize:calcFont(22),
    fontWeight:'bold',
    marginRight: calcWidth(10),
  },
  promoCodeNum: {
    fontSize:calcFont(35),
    letterSpacing: calcWidth(7),

  },
  
  promoDiscount: {
    width: calcWidth(61),
    height: calcHeight(85),
    position: 'absolute',
    top: calcHeight(38),
    left: calcWidth(35),
    
  },
  promoDiscountText: {
    fontSize:calcFont(20),
    fontWeight:'bold',
    color:COLORS.white
  },
  promoDiscountNum: {
    fontSize:calcFont(28),
    color:COLORS.white,
    fontWeight:'bold',
  },
});
