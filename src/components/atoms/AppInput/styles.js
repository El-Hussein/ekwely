import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  container: {
    marginBottom: calcHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 0,
    textAlignVertical: 'center',
  },
  error: {
    fontSize: calcFont(16),
    color: COLORS.error,
    marginTop: calcHeight(10),
  },
});

export {styles};
