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
    paddingVertical: calcHeight(15),
  },
  orderTitle: {
    color: COLORS.white,
    fontSize: calcFont(32),
    lineHeight: calcHeight(40),
  },
  promoImage: {
    width: calcWidth(330),
    resizeMode: 'contain',
  },
  promoCode: {
    position: 'absolute',
    top: '25%',
    right: '10%',
  },
  promoCodeText: {
    fontSize: calcFont(22),
    fontWeight: 'bold',
  },
  promoCodeNum: {
    fontSize: calcFont(38),
    fontWeight: 'bold',
    marginTop: calcHeight(10),
    letterSpacing: calcWidth(9),
  },

  promoDiscount: {
    position: 'absolute',
    top: '25%',
    right: '67%',
  },
  promoDiscountText: {
    fontSize: calcFont(22),
    fontWeight: 'bold',
    color: COLORS.white,
  },
  promoDiscountNum: {
    fontSize: calcFont(38),
    lineHeight: calcHeight(45),
    marginTop: calcHeight(15),
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
