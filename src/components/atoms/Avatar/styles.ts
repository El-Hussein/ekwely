import { StyleSheet } from 'react-native';
import { calcFont } from '../../../common/styles';
import COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  imageStyle: {
    width: calcFont(60),
    height: calcFont(60),
    borderRadius: calcFont(60),
    borderWidth: 1,
    borderColor: COLORS.main,
    // backgroundColor:'red'
  },
});

export default styles;
