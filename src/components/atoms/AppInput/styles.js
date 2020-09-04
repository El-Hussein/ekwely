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
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'right',
  },
  error: {
    fontSize: calcFont(16),
    color: COLORS.error,
    marginVertical: calcHeight(10),
  },
});

export {styles};
