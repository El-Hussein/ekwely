import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  myOrder: {
    width: '100%',
    height: calcHeight(54),
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: calcWidth(10),
  },
  myOrderText: {
    fontSize: calcFont(20),
    fontWeight: 'bold',
    color: COLORS.gray,
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
    fontWeight: 'bold',
    width: calcWidth(160),
    textAlign: 'center',
    margin: 0,
  },
  indicatorStyle: {
    borderRadius: calcWidth(5),
    backgroundColor: COLORS.main,
    height: calcHeight(48),
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
  ////////////////////////////////////////
  order: {
    backgroundColor: COLORS.midGray,
    width: '95%',
    borderRadius: calcWidth(5),
    alignSelf: 'center',
    height: calcHeight(140),
    marginVertical: calcHeight(5),
  },
  title: {
    marginVertical: calcHeight(10),
    marginTop: calcHeight(7),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: calcWidth(10),
  },
  orderNumber: {
    width: '45%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  orderNumText: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  NumText: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  sent: {
    color: COLORS.mainText,
    fontSize: calcFont(16),
    fontWeight: 'bold',
    backgroundColor: COLORS.yallow,
    borderRadius: calcWidth(5),
    alignSelf: 'center',
    width: calcWidth(91),
    height: calcHeight(32),
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  desc: {
    backgroundColor: COLORS.white,
    width: '96%',
    borderRadius: calcWidth(5),
    alignSelf: 'center',
    height: calcHeight(84),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  totalPriceText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    width: calcWidth(135),
  },
  priceText: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
  },
  dateTitleText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    width: calcWidth(135),
  },
  dateText: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
  },
  EmptyComponent: {
    fontSize: calcFont(20),
    color: '#a3a3a3',
    textAlignVertical: 'center',
    alignSelf: 'center',
    height: calcHeight(32),
  },
});