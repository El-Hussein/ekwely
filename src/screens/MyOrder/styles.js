import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';
import FONTS from '../../common/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  myOrder: {
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
  },
  myOrderText: {
    fontSize: calcFont(20),
    fontWeight: 'bold',
    color: '#121c2c',
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
    ...FONTS.dinMedium,
    fontSize: calcFont(18),
    fontWeight: 'normal',
    textAlignVertical: 'top',
    lineHeight: calcHeight(28),
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

  ////////////////////////////////////////
  order: {
    backgroundColor: COLORS.midGray,
    borderRadius: calcWidth(5),
    alignSelf: 'center',
    marginVertical: calcHeight(5),
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
  },
  title: {
    marginBottom: calcHeight(10),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  orderNumber: {
    width: '45%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: calcHeight(5),
    paddingHorizontal: calcWidth(5),
  },
  arrowDown: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: calcWidth(150),
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
    backgroundColor: COLORS.yellow,
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
    // height: calcHeight(84),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: calcHeight(5),
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
