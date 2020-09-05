import { StyleSheet } from 'react-native';
import COLORS from '../../../common/colors';
import { calcWidth, calcHeight } from '../../../common/styles';

const styles = StyleSheet.create({
  line: (width: number, height: number, color: string) => {
    return {
      backgroundColor: color || COLORS.line,
      width: width || calcWidth(343),
      height: height || calcHeight(2),
      alignSelf: 'center',
    };
  },
});

export default styles;