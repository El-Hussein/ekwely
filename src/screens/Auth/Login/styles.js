import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight ,calcWidth ,calcFont} from '../../../common/styles';

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
  loginButton:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: calcHeight(30),
  },
  button:{
    width: calcWidth(293),
    height: calcHeight(52),
    borderRadius: calcFont(30),
    backgroundColor: COLORS.yallow,
  },
  loginTitle: {
    color:COLORS.mainText,
    
  },
  
});
