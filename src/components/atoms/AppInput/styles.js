import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  container: {
    marginBottom: calcHeight(20),
  },
  input: {
    width: calcWidth(293),
    height: calcHeight(60),
    borderRadius: calcFont(30),
    borderColor: COLORS.border,
    borderWidth: calcHeight(2),
    paddingHorizontal: calcWidth(20),
    fontSize: calcFont(18),
    color: COLORS.white,
    textAlign: 'right',
    lineHeight: calcHeight(30),
    fontWeight: 'normal',
    textAlignVertical: 'bottom',
    fontFamily: 'din-next-lt-w23-medium',
  },
  error: {
    fontSize: calcFont(16),
    color: COLORS.error,
    marginTop: calcHeight(10),
  },
});

export {styles};
