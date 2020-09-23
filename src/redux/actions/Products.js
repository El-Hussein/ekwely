import {PRODUCTS_PENDING, PRODUCTS_SUCCESS, PRODUCTS_FAILED} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get products Action
export const getProducts = (id) => {
  return (dispatch) => {
    dispatch({type: PRODUCTS_PENDING});
    try {
      makePostRequest({
        url: 'Item/auth_GetAllProducts',
        data: {
          Data: {UserId: id, UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({type: PRODUCTS_SUCCESS, payload: response.data.data});
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: PRODUCTS_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: PRODUCTS_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};
