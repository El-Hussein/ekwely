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
  text: {
    width: calcWidth(330),
    alignSelf:'center',
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
    fontWeight: 'bold',
    paddingRight: calcWidth(15),
    textAlign: 'right',
    paddingVertical: calcHeight(15),
    lineHeight:calcHeight(24)
  },
});
