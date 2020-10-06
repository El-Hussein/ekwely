import {
  ADD_SUCCESS,
  ADD_FAILED,
  DELETE_SUCCESS,
  DELETE_FAILED,
  DRY_CLEAN_FAVORITE_PENDING,
  DRY_CLEAN_FAVORITE_SUCCESS,
  DRY_CLEAN_FAVORITE_FAILED,
  PRODUCTS_FAVORITE_PENDING,
  PRODUCTS_FAVORITE_SUCCESS,
  PRODUCTS_FAVORITE_FAILED,
} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get set Action
export const setFavorite = (id) => {
  return (dispatch) => {
    try {
      makePostRequest({
        url: 'Item/auth_AddUserFavourite',
        data: {
          Data: {Id: id},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            console.log('add', response);
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
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: ADD_FAILED,
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

// get products Action
export const getProductsFavorite = () => {
  return (dispatch) => {
    dispatch({type: PRODUCTS_FAVORITE_PENDING});
    try {
      makePostRequest({
        url: 'Item/auth_GetUserFavouriteProducts',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: PRODUCTS_FAVORITE_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: PRODUCTS_FAVORITE_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: PRODUCTS_FAVORITE_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};

export const getWashFavorite = () => {
  return (dispatch) => {
    dispatch({type: DRY_CLEAN_FAVORITE_PENDING});
    try {
      makePostRequest({
        url: 'Item/auth_GetUserFavouriteServices',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: DRY_CLEAN_FAVORITE_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: DRY_CLEAN_FAVORITE_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: DRY_CLEAN_FAVORITE_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};
