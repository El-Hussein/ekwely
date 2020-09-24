import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'flex-end',
    paddingTop: calcHeight(10),
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
  /////////////////////////////////////////////
  tabViewStyle: {
    flex: 1,
    paddingTop: calcHeight(15),
  },
  tabBarStyle: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 0,
    borderWidth: calcWidth(1),
    borderColor: COLORS.main,
    width: calcWidth(360),
    borderRadius: calcWidth(5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: calcHeight(50),
    padding: 0,
  },
  labelStyle: {
    fontSize: calcFont(18),
    fontWeight: 'normal',
    textAlignVertical: 'top',
    lineHeight: calcHeight(28),
    fontFamily: 'din-next-lt-w23-medium',
    width: calcWidth(160),
    textAlign: 'center',
    margin: 0,
  },
  indicatorStyle: {
    borderRadius: calcWidth(5),
    backgroundColor: COLORS.main,
    height: calcHeight(49),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabStyle: {
    width: '50%',
    alignSelf: 'center',
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  /////////////////////////////////
  orderTime: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
  },
  orderTimeText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    marginHorizontal: calcWidth(10),
  },
  chooseService: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignContent: 'flex-start',
    paddingHorizontal: calcWidth(30),
    paddingVertical: calcHeight(10),
  },
  chooseServiceText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  option: {
    width: calcWidth(320),
    borderRadius: calcFont(5),
    borderColor: COLORS.lightGray,
    borderWidth: calcWidth(2),
    paddingHorizontal: calcWidth(10),
    marginHorizontal: calcWidth(30),
    alignItems: 'flex-end',
    elevation: 1,
    position: 'absolute',
    backgroundColor: COLORS.white,
  },
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
    paddingVertical: calcHeight(10),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.yellow,
  },

  counter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: calcWidth(150),
    paddingVertical: calcHeight(5),
    elevation: 1.3,
    borderRadius: calcFont(3),
    borderColor: COLORS.lightGray,
    borderWidth: calcWidth(2),
    paddingHorizontal: calcWidth(3),
  },
  counterButton: {
    width: calcWidth(38),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(5),
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
  /////////////////////////////////////////
  confirmOrderButton: {
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
  confirmOrder: {
    color: COLORS.white,
    fontSize: calcFont(20),
  },
});
