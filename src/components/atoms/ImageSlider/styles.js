import {StyleSheet} from 'react-native';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
  },
  swiperSlideStyle: {
    borderRadius: calcWidth(11),
    backgroundColor: COLORS.white,
  },
  swiperDotStyle: {
    width: calcWidth(12),
    height: calcWidth(12),
    borderRadius: calcWidth(6),
    margin: calcWidth(5),
    backgroundColor: COLORS.mainText,
  },
  swiperActiveDotStyle: {
    backgroundColor: COLORS.yallow,
  },
  swiperImageStyle: {
    width: calcWidth(343),
    height: calcHeight(220),
    alignSelf: 'center',
    
  },
  textImageStyle:{
    width: calcWidth(288),
    height: calcWidth(78),
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  textslider:{
    width: calcWidth(140),
    height: calcWidth(50),
    fontSize:calcFont(20),
    color:COLORS.white,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    alignSelf:'center',
    backgroundColor:COLORS.yallow
  },
  swiperPaginationStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: COLORS.main,
    paddingHorizontal: calcWidth(2),
    borderRadius: calcWidth(11),
  },
});

export default styles;
