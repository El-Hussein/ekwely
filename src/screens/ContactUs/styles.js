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
    color: '#121c2c',
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  /////////////////////////////////////////////

  title: {
    color: COLORS.textGray,
    fontWeight: 'bold',
    fontSize: calcFont(20),
    textAlign: 'right',
    paddingVertical: calcHeight(3),
    lineHeight: calcHeight(27),
  },
  text: {
    color: COLORS.lightTextGray,
    fontSize: calcFont(16),
    textAlign: 'right',
    paddingVertical: calcHeight(3),
    lineHeight: calcHeight(23),
  },
  branch: {
    color: COLORS.main,
    fontSize: calcFont(20),
    fontWeight: 'bold',
    textAlign: 'right',
    paddingVertical: calcHeight(15),
    lineHeight: calcHeight(27),
  },
  mediaImage: {
    width: calcWidth(33),
    height: calcWidth(33),
    resizeMode: 'contain',
  },
  media: {
    width: calcWidth(75),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    marginHorizontal: calcWidth(10),
  },
  row: {
    width: calcWidth(345),
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: calcHeight(5),
  },
});
