import {APPLY_LANGUAGE} from './types';
import {I18nManager} from 'react-native';

export const login = (lang) => async (dispatch) => {
  await dispatch({type: APPLY_LANGUAGE, payload: lang});
  I18nManager.forceRTL(lang === 'ar');
};
