import {StyleSheet, CheckBox} from 'react-native';
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
  saveText: {
    width: '100%',
    color: COLORS.mainText,
    fontSize: calcFont(15),
  },
  saveButton: {
    width: calcWidth(75),
    height: calcHeight(30),
    borderRadius: calcFont(15),
    backgroundColor: COLORS.yellow,
  },
  userImage: {
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
  addToCartText: {
    width: '100%',
    color: COLORS.white,
    fontSize: calcFont(18),
  },
  addToCartButton: {
    width: calcWidth(124),
    height: calcHeight(42),
    borderRadius: calcFont(5),
    backgroundColor: '#00000088',
    position: 'absolute',
  },
  titleText: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    marginVertical: calcHeight(5),
  },
  promoCodeInput: {
    width: calcWidth(345),
    height: calcHeight(46),
    borderRadius: calcFont(3),
    backgroundColor: COLORS.white,
    borderColor: COLORS.midLightGray,
    borderWidth: calcHeight(2),
    paddingHorizontal: calcWidth(20),
    fontSize: calcFont(18),
    textAlign: 'right',
    lineHeight: calcHeight(30),
    fontWeight: 'normal',
    textAlignVertical: 'center',
    fontFamily: 'din-next-lt-w23-medium',
  },
  
  //////////////////////////////////////////
  data: {
    width: '100%',
    paddingHorizontal: calcWidth(15),
  },
});
