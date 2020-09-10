import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors'; 
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: calcWidth(20),
    fontSize: calcFont(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: calcFont(20),
    color:COLORS.white,
    textAlign:'center',
    fontWeight:'bold'

  },
});

export {styles};
