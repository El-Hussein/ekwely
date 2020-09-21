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
    borderRadius: calcFont(5),
    backgroundColor: COLORS.main,
    paddingVertical: calcHeight(20),
  },
  orderTitle: {
    color: COLORS.white,
    fontSize: calcFont(32),
  },
  promoImage: {
    width: calcWidth(330),
    resizeMode: 'contain',
  },
  promoCode: {
    // paddingVertical: calcHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '25%',
    right: '15%',
  },
  promoCodeText: {
    fontSize: calcFont(22),
    fontWeight: 'bold',
    // marginRight: calcWidth(10),
  },
  promoCodeNum: {
    fontSize: calcFont(25),
    fontWeight: 'bold',
    marginTop: calcHeight(15),
    letterSpacing: calcWidth(9),
  },

  promoDiscount: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '25%',
    right: '70%',
  },
  promoDiscountText: {
    fontSize: calcFont(22),
    fontWeight: 'bold',
    color: COLORS.white,
  },
  promoDiscountNum: {
    fontSize: calcFont(25),
    marginTop: calcHeight(15),
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
