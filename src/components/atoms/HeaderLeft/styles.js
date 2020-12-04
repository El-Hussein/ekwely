import {StyleSheet} from 'react-native';
import {calcWidth} from '../../../common/styles';

const styles = StyleSheet.create({
  image: {
    width: calcWidth(35),
    height: calcWidth(35),
    resizeMode: 'contain',
    marginHorizontal: calcWidth(10),
  },
});

export {styles};
