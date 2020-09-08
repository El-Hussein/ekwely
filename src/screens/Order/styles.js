import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
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
  tabViewStyle: {
    flex: 1,
  },
  tabBarStyle: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 0,
    borderWidth: calcWidth(1),
    borderColor: COLORS.main,
    width: '80%',
    borderRadius: calcWidth(5),
    alignSelf: 'center',
    height: calcHeight(60)
  },
  labelStyle: {
    fontSize: calcFont(16),
    textTransform: 'capitalize',
    fontWeight: 'bold',
    width: calcWidth((315 - 0.2 * 375) / 2),
    textAlign: 'center',
    height: calcHeight(25),
  },
  indicatorStyle: {
    borderRadius: calcWidth(5),
    backgroundColor: COLORS.main,
    height: calcHeight(58),
  },
  tabStyle: {
    width: '50%',
    alignSelf: 'center',
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  ////////////////////////////////////////
  orderTime: {
    width: calcWidth(150),
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    paddingVertical: calcHeight(15),
    paddingHorizontal: calcWidth(10),
  },
  orderTimeText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },

  /////////////////////////////////
  addToCart: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: calcHeight(30),
    marginHorizontal: calcWidth(10),
    flexDirection: 'row',
    width: calcWidth(344),
  },
  addToCartText: {
    width: '100%',
    color: COLORS.mainText,
    fontSize: calcFont(15),
  },
  addToCartButton: {
    width: calcWidth(124),
    height: calcHeight(42),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.yallow,
  },
  counter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    width: calcWidth(155),
    height: calcHeight(46),
    borderRadius: calcFont(3),
    borderColor: COLORS.lightGray,
    borderWidth: calcWidth(2),
    paddingHorizontal: calcWidth(3),
  },
  counterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: calcWidth(38),
    height: calcWidth(38),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.lightGray,
  },
  counterButtonText: {
    color: COLORS.main,
    fontSize: calcFont(10),
  },
  counterText: {
    fontSize: calcFont(20),
    color: COLORS.textGray,
  },
  /////////////////////////////////////////
  confirmOrderButton: {
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
  confirmOrder: {
    color: COLORS.white,
    fontSize: calcFont(20),
  },
});
