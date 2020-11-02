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
export const getProducts = (hideLoading) => {
  return (dispatch) => {
    if (!hideLoading) dispatch({type: PRODUCTS_PENDING});
    try {
      makePostRequest({
        url: 'Item/auth_GetAllItems',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: PRODUCTS_SUCCESS,
              payload: response.data.data.filter(
                (item) => item.isProduct === true,
              ),
            });
            dispatch({
              type: DRY_CLEAN_SUCCESS,
              payload: response.data.data.filter(
                (item) => item.isProduct === false,
              ),
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















// get products Action
export const getProducts_old = (hideLoading) => {
  return (dispatch) => {
    if (!hideLoading) {
      dispatch({type: PRODUCTS_PENDING});
    }
    try {
      makePostRequest({
        url: 'Item/auth_GetAllItems',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: PRODUCTS_SUCCESS,
              payload: response.data.data.filter(
                (item) => item.isProduct === true,
              ),
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

export const getProductsNoUser = (hideLoading) => {
  return (dispatch) => {
    if (!hideLoading) {
      dispatch({type: PRODUCTS_PENDING});
    }
    try {
      makePostRequest({
        url: 'Item/auth_GetAllAnonymousProducts',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: PRODUCTS_SUCCESS,
              payload: response.data.data.filter(
                (item) => item.isProduct === true,
              ),
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

export const getServices = (hideLoading) => {
  return (dispatch) => {
    if (!hideLoading) {
      dispatch({type: PRODUCTS_PENDING});
    }
    try {
      makePostRequest({
        url: 'Item/auth_GetAllServices',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: DRY_CLEAN_SUCCESS,
              payload: response.data.data.filter(
                (item) => item.isProduct === false,
              ),
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

export const getServicesNoUser = (hideLoading) => {
  return (dispatch) => {
    // if (!hideLoading) {
    //   dispatch({type: PRODUCTS_PENDING});
    // }
    try {
      makePostRequest({
        url: 'Item/auth_GetAllAnonymousServices',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          } else if (response?.data?.data) {
            dispatch({
              type: DRY_CLEAN_SUCCESS_NO_USER,
              payload: response.data.data.filter(
                (item) => item.isProduct === false,
              ),
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
