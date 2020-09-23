import {
  START_LOADING,
  STOP_LOADING,
  PRODUCTS_PENDING,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
} from './types';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get products Action
export function getProducts(id) {
  console.log('id');
  console.log(id);
  return (dispatch) => {
    dispatch({type: START_LOADING});
    dispatch({type: PRODUCTS_PENDING});

    try {
      makePostRequest({
        url: 'Item/auth_GetAllProducts',
        data: {
          Data: {
            UserId: id,
            UserType: 1,
          },
        },
      })
        .then((response) => {
          console.log('*************** response ***************');
          console.log(response);
          console.log('*************** response ***************');
          if (response?.data?.status !== '200') {
            dispatch({
              type: PRODUCTS_FAILED,
              payload: {msg: response.data.message, errors: true},
            });
            console.log('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            Toast.show(response.data.message);
            dispatch({type: PRODUCTS_SUCCESS, payload: response.data.data});
          }
        })
        .catch((error) => {
          console.log('*************** serverError ***************');
          console.log(error.response.data.message);
          Toast.show(error.response.data.message);
          console.log('*************** serverError ***************');
        });
    } catch (error) {
      console.log('*************** error ***************');
      console.log(error);
      Toast.show(error);
      console.log('*************** error ***************');
    }
    dispatch({type: STOP_LOADING});
  };
}
