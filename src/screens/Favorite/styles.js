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
  ////////////////////////////////////////
  item: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingVertical: calcHeight(15),
    paddingHorizontal: calcWidth(15),
    alignItems: 'center',
  },
  product: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    // fontWeight: 'bold',
    lineHeight: calcHeight(27),
  },
  close: {
    width: calcWidth(22),
    height: calcWidth(22),
    resizeMode: 'contain',
    tintColor: COLORS.mainText,
  },

  EmptyComponent: {
    fontSize: calcFont(20),
    color: '#a3a3a3',
    textAlignVertical: 'center',
    alignSelf: 'center',
    height: calcHeight(32),
  },
});
