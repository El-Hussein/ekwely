import {StyleSheet, CheckBox, Platform} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },

  newOrder: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
  },
  newOrderText: {
    color: '#121c2c',
    fontSize: calcFont(20),
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  addToCartText: {
    width: '100%',
    color: COLORS.mainText,
    fontSize: calcFont(15),
    maxHeight: calcHeight(30),
  },
  addToCartButton: {
    paddingHorizontal: calcWidth(15),
    borderRadius: calcFont(15),
    backgroundColor: COLORS.yellow,
  },
  userImage: {
    width: calcWidth(134),
    height: calcWidth(134),
    borderRadius: calcWidth(Platform.OS === 'ios' ? 134 : 72),
    resizeMode: 'cover',
  },
  defaultImage: {
    width: calcWidth(75),
    height: calcHeight(75),
    resizeMode: 'contain',
  },
  userOut: {
    width: calcWidth(134),
    height: calcWidth(134),
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: calcWidth(Platform.OS === 'ios' ? 134 : 72),
    borderColor: COLORS.midLightGray,
    borderWidth: calcHeight(6),
    marginVertical: calcHeight(15),
  },
  titleText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    marginVertical: calcHeight(5),
  },
  text: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
    marginBottom: calcHeight(10),
  },
  //////////////////////////////////////////
  data: {
    paddingBottom: calcHeight(10),
    width: '100%',
    paddingHorizontal: calcWidth(15),
  },
  changeAddress: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    paddingBottom: calcHeight(10),
    width: '100%',
    paddingHorizontal: calcWidth(15),
  },
  changeAddressText: {
    color: COLORS.darkMain,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },

  mapImage: {
    width: calcWidth(20),
    height: calcHeight(30),
    resizeMode: 'contain',
    tintColor: COLORS.darkMain,
  },
  addressVeiw: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    width: calcWidth(283),
    alignSelf: 'center',
  },
  error: {
    fontSize: calcFont(16),
    color: COLORS.error,
  },
});
