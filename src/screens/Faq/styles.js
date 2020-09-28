import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  newOrder: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(10),
    marginBottom:calcHeight(10)
  },
  newOrderText: {
    color: '#121c2c',
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  /////////////////////////////////////////////
  text: {
    width: calcWidth(330),
    alignSelf: 'center',
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
    fontWeight: 'bold',
    textAlign: 'right',
    lineHeight: calcHeight(24),
  },
});
