import {StyleSheet, CheckBox} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {color} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
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
    color:'#121c2c',
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  /////////////////////////////////////////////

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
  mediaImage: {
    width: calcWidth(22),
    height: calcWidth(22),
    resizeMode: 'contain',
    tintColor: COLORS.textGray,
  },
});
