import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight} from '../../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  loginForm: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(30),
  },
});
