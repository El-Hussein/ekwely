import {Platform, StyleSheet} from 'react-native';
import {calcWidth} from '../../../common/styles';

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcWidth(Platform.OS === 'ios' ? 38 : 19),
    width: calcWidth(38),
    height: calcWidth(38),
    marginHorizontal: calcWidth(10)
  },
});

export {styles};
