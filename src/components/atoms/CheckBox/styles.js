import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../../common/colors';
import {calcFont, calcWidth} from '../../../common/styles';
const styles = StyleSheet.create({
  mainView: {
    width: calcWidth(20),
    height: calcWidth(20),
    borderRadius: calcWidth(Platform.OS === 'ios' ? 20 : 10),
    borderWidth: calcWidth(2),
    borderColor: COLORS.lightGray,
    justifyContent:'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: COLORS.main,
    width: calcWidth(12),
    height: calcWidth(12),
    borderRadius: calcWidth(Platform.OS === 'ios' ? 12 : 6),
  },
});

export {styles};
