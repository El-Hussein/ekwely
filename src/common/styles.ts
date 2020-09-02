import {Dimensions, StyleSheet} from 'react-native';
import COLORS from './colors';

export const {width, height} = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
const defaultFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const calcWidth = (size: any) => (width / guidelineBaseWidth) * size;

export const calcHeight = (size: any) => (height / guidelineBaseHeight) * size;

// fontsize , margin , padding , iconsize , etc
export const calcFont = (size: any, factor = defaultFactor) => size + (calcWidth(size) - size) * factor;

export const STYLES = StyleSheet.create({
  whiteButtonStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.main,
  },
});
