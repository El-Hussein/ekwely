import {StyleSheet} from 'react-native';
import {calcWidth, calcHeight} from '../../../common/styles';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    height: calcHeight(818),
    width: calcWidth(375),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

export {styles};
