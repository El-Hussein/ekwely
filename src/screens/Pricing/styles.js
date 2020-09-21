import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: calcHeight(10),
    paddingHorizontal: calcWidth(15),
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
  search: {
    width: calcWidth(360),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.lightGray,
    borderWidth: calcWidth(1),
    borderColor: COLORS.midLightGray,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(10),
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 0.5,
    marginBottom: calcHeight(5),
  },
  searchInput: {
    width: calcWidth(300),
    fontWeight: 'bold',
    fontSize: calcFont(18),
  },
  searchImage: {
    width: calcWidth(22),
    height: calcWidth(22),
    resizeMode: 'contain',
    tintColor: COLORS.textGray,
  },
  ///////////////////////////////////////////
  item: {
    width: calcWidth(160),
    height: calcWidth(160),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    marginVertical: calcHeight(10),
    marginHorizontal: calcWidth(10),
  },
  productImage: {
    borderRadius: calcFont(3),
    borderColor: COLORS.midLightGray,
    borderWidth: calcWidth(1),
    width: calcWidth(160),
    height: calcWidth(160),
    borderRadius: calcFont(3),
    position: 'absolute',
  },
  cartFav: {
    width: calcWidth(140),
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    marginVertical: calcHeight(8),
    zIndex: 5,
  },
  cartImage: {
    width: calcWidth(19),
    height: calcHeight(17),
    resizeMode: 'contain',
    tintColor: COLORS.mainText,
  },
  favoriteImage: {
    width: calcWidth(19),
    height: calcHeight(17),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  favoriteOut: {
    width: calcWidth(32),
    height: calcWidth(32),
    backgroundColor: COLORS.yallow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcWidth(Platform.OS === 'ios' ? 32 : 16),
    borderColor: COLORS.midLightGray,
  },
  namePrice: {
    width: calcWidth(160),
    height: calcWidth(42),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: COLORS.main,
    borderRadius: calcFont(3),
  },
  productName: {
    color: COLORS.white,
    fontSize: calcFont(13),
    fontWeight: 'bold',
    marginTop: calcHeight(15),
    maxWidth: '90%',
  },
  price: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: calcHeight(15),
    maxWidth: calcWidth(100),
    height: calcHeight(24),
    paddingHorizontal: calcWidth(10),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.yallow,
    position: 'absolute',
    top: calcHeight(-12),
  },
  priceText: {
    color: COLORS.mainText,
    fontSize: calcFont(14),
    fontWeight: 'bold',
  },
  /////////////////////////////////////////////////////////
  ////  wash and iron styles
  titles: {
    width: calcWidth(360),
    height: calcHeight(50),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.yallow,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(10),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: calcHeight(5),
  },

  col1Title: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    paddingRight: calcWidth(15),
  },
  col2Title: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    width: '20%',
    textAlign: 'center',
  },
  col3Title: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'center',
  },
  washItem: {
    width: calcWidth(360),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingVertical: calcHeight(10),
    marginHorizontal: calcWidth(10),
    paddingHorizontal: calcWidth(10),
  },
  pieces: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
  col1: {
    color: COLORS.mainText,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    paddingRight: calcWidth(15),
  },
  col2: {
    color: COLORS.main,
    fontSize: calcFont(22),
    fontWeight: 'bold',
    width: '20%',
    textAlign: 'center',
  },
  col3: {
    color: COLORS.main,
    fontSize: calcFont(22),
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'center',
  },
});
