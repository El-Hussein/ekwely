import {
  CURRENT_ORDER_PENDING,
  CURRENT_ORDER_SUCCESS,
  CURRENT_ORDER_FAILED,
  HISTORY_ORDER_PENDING,
  HISTORY_ORDER_SUCCESS,
  HISTORY_ORDER_FAILED,
} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get CURRENT_ORDER Action
export const getCurrentOrder = () => {
  return (dispatch) => {
    dispatch({type: CURRENT_ORDER_PENDING});
    try {
      makePostRequest({
        url: 'api/Order/auth_GetCurrentOrders',
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: CURRENT_ORDER_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: CURRENT_ORDER_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: CURRENT_ORDER_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};

// get HISTORY_ORDER Action
export const getHistoryOrder = () => {
  return (dispatch) => {
    dispatch({type: HISTORY_ORDER_PENDING});
    try {
      makePostRequest({
        url: 'api/Order/auth_GetHistoryOrders',
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: HISTORY_ORDER_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: HISTORY_ORDER_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: HISTORY_ORDER_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};
