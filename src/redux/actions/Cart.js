import {
  ADD_SUCCESS,
  ADD_FAILED,
  DELETE_SUCCESS,
  DELETE_FAILED,
  CART_PENDING,
  CART_SUCCESS,
  CART_FAILED,
} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get set Action
export const setCart = (
  id,
  quantity,
  serviceType = 5,
  isProduct,
  cartId = 0,
) => {
  return (dispatch) => {
    try {
      if (isProduct) {
        makePostRequest({
          url: 'ItemBasket/auth_SetItemBasket',
          data: {
            Data: {
              Id: cartId,
              Quantity: quantity,
              ItemId: id,
              IsProduct: isProduct,
              IsFastClean: false,
            },
          },
        })
          .then((response) => {
            if (response?.data?.status !== '200') {
              Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
            } else if (response?.data?.data) {
              dispatch({type: ADD_SUCCESS, payload: response.data.message});
            }
          })
          .catch((error) => {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
            dispatch({
              type: ADD_FAILED,
              payload: 'حدث خطأ ما من فضلك حاول مره أخري',
            });
          });
      } else {
        makePostRequest({
          url: 'ItemBasket/auth_SetItemBasket',
          data: {
            Data: {
              Id: cartId,
              Quantity: quantity,
              ItemId: id,
              ServiceType: serviceType === 5 ? [] : serviceType,
              IsProduct: isProduct,
              IsFastClean: false,
            },
          },
        })
          .then((response) => {
            if (response?.data?.status !== '200') {
              Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
            } else if (response?.data?.data) {
              dispatch({type: ADD_SUCCESS, payload: response.data.message});
            }
          })
          .catch((error) => {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
            dispatch({
              type: ADD_FAILED,
              payload: 'حدث خطأ ما من فضلك حاول مره أخري',
            });
          });
      }
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: ADD_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};

export const deleteCart = (id, isItem) => {
  return (dispatch) => {
    try {
      makePostRequest({
        url: !isItem
          ? 'ItemBasket/auth_DeleteItemBasket'
          : 'ItemBasket/auth_DeleteItemBasketByItemId',
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

// get cart Action
export const getCart = (hideLoading) => {
  return (dispatch) => {
    if (!hideLoading) {
      dispatch({type: CART_PENDING});
    }
    try {
      makePostRequest({
        url: 'ItemBasket/auth_GetBasket',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            const c = [
              ...response.data.data.services,
              ...response.data.data.products,
            ];
            dispatch({
              type: CART_SUCCESS,
              payload: {
                cart: c,
                totalPrice: response.data.data.totalPrice,
                totalPromoCodeDiscount:
                  response.data.data.totalPromoCodeDiscount,
              },
            });
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: CART_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: CART_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};
