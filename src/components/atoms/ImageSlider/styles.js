import {StyleSheet} from 'react-native';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    height:calcHeight(320)
  },
  swiperSlideStyle: {
    borderRadius: calcWidth(11),
  },
  swiperImageStyle: {
    width: calcWidth(320),
    height: calcHeight(290),
    alignSelf: 'center',
    
  },
  /////////////////////////////
  swiperDotStyle: {
    width: calcWidth(7),
    height: calcWidth(7),
    borderRadius: calcWidth(6),
    margin: calcWidth(6),
    backgroundColor: COLORS.mainText,
  },
 
  swiperActiveDotStyle: {
    backgroundColor: COLORS.yellow,
  },
  
  swiperPaginationStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: calcWidth(2),
    borderRadius: calcWidth(11),
  },
});

export default styles;
