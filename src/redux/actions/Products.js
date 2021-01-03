import {
  PRODUCTS_PENDING,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
  DRY_CLEAN_SUCCESS,
  DRY_CLEAN_SUCCESS_NO_USER,
} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get products Action
export const getProducts = (hideLoading, page) => {
  console.log('whaaaaaaaaaaaat');
  return (dispatch) => {
    if (!hideLoading) dispatch({type: PRODUCTS_PENDING});
    try {
      makePostRequest({
        url: 'Item/auth_GetAllProducts',
        data: {
          Paging: {
            PageIndex: page,
            PageSize: 10,
          },
          IsActive: true,
        },
      })
        .then((response) => {
          console.log('response auth_GetAllProducts');
          console.log(response);
          console.log('response auth_GetAllProducts');
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: PRODUCTS_SUCCESS,
              payload: {
                data: response.data.data,
                length: response.data.paging.length,
              },
            });
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

export const getServices = (hideLoading, page) => {
  console.log('whaaaaaaaaaaaat');
  return (dispatch) => {
    if (!hideLoading) dispatch({type: PRODUCTS_PENDING});
    try {
      makePostRequest({
        url: 'Item/auth_GetAllServices',
        data: {
          Paging: {
            PageIndex: page,
            PageSize: 10,
          },
          IsActive: true,
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: DRY_CLEAN_SUCCESS,
              payload: {
                data: response.data.data,
                length: response.data.paging.length,
              },
            });
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

export const getProductsNoUser = (hideLoading, page) => {
  return (dispatch) => {
    if (!hideLoading) {
      dispatch({type: PRODUCTS_PENDING});
    }
    try {
      makePostRequest({
        url: 'Item/auth_GetAllAnonymousProducts',
        data: {
          Paging: {
            PageIndex: 0,
            PageSize: 10,
          },
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: PRODUCTS_SUCCESS,
              // payload: response.data.data.filter(
              //   (item) => item.isProduct === true,
              // ),
              payload: {
                data: response.data.data,
                length: response.data.paging.length,
              },
            });
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

export const getServicesNoUser = (hideLoading, page) => {
  return (dispatch) => {
    if (!hideLoading) {
      dispatch({type: PRODUCTS_PENDING});
    }
    try {
      makePostRequest({
        url: 'Item/auth_GetAllAnonymousServices',
        data: {
          Paging: {
            PageIndex: 0,
            PageSize: 10,
          },
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: DRY_CLEAN_SUCCESS,
              payload: {
                data: response.data.data,
                length: response.data.paging.length,
              },
            });
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
    }
  };
};
