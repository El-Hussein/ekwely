import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
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
    marginBottom: calcHeight(15),
  },
  newOrderText: {
    color: COLORS.mainText,
    fontSize: calcFont(20),
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  /////////////////////////////////////////////
  dropDown: {
    width: calcWidth(360),
    height: calcHeight(55),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: calcWidth(10),
    alignItems: 'center',
    // alignSelf: 'center',
    marginVertical: calcHeight(5),
  },
  dropImage: {
    width: calcWidth(15),
    height: calcWidth(9),
    resizeMode: 'contain',
    tintColor: COLORS.drop,
  },
  title: {
    color: COLORS.textGray,
    fontSize: calcFont(18),
    fontWeight: 'bold',
    paddingHorizontal: calcWidth(10),
  },
  text: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
    fontWeight: 'bold',
    lineHeight: calcHeight(24),
    paddingHorizontal: calcWidth(25),
    textAlign: 'right',
  },
});
