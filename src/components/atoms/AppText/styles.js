import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  text: {
    fontSize: calcFont(14),
    color: COLORS.mainText,
    textAlign: 'right',
  },
});

export {styles};
