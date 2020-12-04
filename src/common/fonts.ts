import { Platform } from 'react-native';

const FONTS = {
  cairoLight: {
    fontFamily: 'Cairo-Light',
  },
  cairoMedium: {
    fontFamily: 'Cairo-SemiBold',
  },
  cairoBold: {
    fontFamily: 'Cairo-Bold',
  },
  dinMedium: {
    fontFamily: Platform.OS === "android" ? 'din-next-lt-w23-medium' : 'DIN Next LT W23'
  }

};
export default FONTS;
