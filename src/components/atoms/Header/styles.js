import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcWidth} from '../../../common/styles';

const styles = StyleSheet.create({
  header:{
    backgroundColor:COLORS.main,
    justifyContent: 'space-between',
    flexDirection:'row-reverse',
    alignItems: 'center',
    height:'8%',
    width:'100%'
  },
  menu: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcWidth(Platform.OS === 'ios' ? 38 : 19),
    width: calcWidth(38),
    height: calcWidth(38),
    marginHorizontal: calcWidth(10),
  },
  image: {
    width: calcWidth(35),
    height: calcWidth(35),
    resizeMode: 'contain',
    marginHorizontal: calcWidth(10),
  },
});

export {styles};
