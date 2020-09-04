import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  button: {
    marginBottom: calcHeight(20),
  },
  title: {
    fontSize: calcFont(16),
  },
});

export {styles};
