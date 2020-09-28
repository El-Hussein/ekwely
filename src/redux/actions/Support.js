import {
  SUPPORT_PENDING,
  SUPPORT_SUCCESS,
  SUPPORT_FAILED,
} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get set Action    
export const setSupport = (title ,description) => {
  return (dispatch) => {
    dispatch({type: SUPPORT_PENDING});
    try {
      makePostRequest({
        url: 'Suggestion/auth_CreateSuggestion',
        data: {
          Data: {Id: 0 ,Description:description},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            Toast.show(response.data.message);
            dispatch({type: SUPPORT_SUCCESS, payload: response.data.message});
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: SUPPORT_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: SUPPORT_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};

// get delete Action    
export const deleteFavorite = (id) => {
  return (dispatch) => {
    try {
      makePostRequest({
        url: 'Item/auth_CancelFavourite',
        data: {
          Data: {Id: id},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({type: DELETE_SUCCESS, payload: response.data.message});
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: DELETE_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: DELETE_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};