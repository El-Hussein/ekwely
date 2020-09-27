import {ADD_SUCCESS, ADD_FAILED, DELETE_SUCCESS, DELETE_FAILED} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get set Action
export const setCart = (id, quantity = 1) => {
  return (dispatch) => {
    console.log('start');
    try {
      makePostRequest({
        url: 'ItemBasket/auth_SetItemBasket',
        data: {
          Data: {Id: 0, Quantity: quantity ,ItemId:id},
        },
      })
        .then((response) => {
          console.log('jiii');
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


// export const setCart = (id, quantity = 1)
//  => {
//   console.log('jiii');
//   return (dispatch) => {
//     dispatch({type: FAQ_PENDING});
//     try {
//       makePostRequest({
//         url: 'Faqs/auth_GetAllFaqs',
//         data: {
//           Data: {UserType: 1},
//         },
//       })
//         .then((response) => {
//           if (response?.data?.status !== '200') {
//             Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
            
//           } else if (response?.data?.data) {
//             dispatch({
//               type: FAQ_SUCCESS,
//               payload: response.data.data
//             });
//           }
//         })
//         .catch((error) => {
//           Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
//           dispatch({
//             type: FAQ_FAILED,
//             payload: 'حدث خطأ ما من فضلك حاول مره أخري',
//           });
//         });
//     } catch (error) {
//       Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
//       dispatch({
//         type: FAQ_FAILED,
//         payload: 'حدث خطأ ما من فضلك حاول مره أخري',
//       });
//     }
//   };
// };
// get delete Action
export const deleteCart = (id) => {
  return (dispatch) => {
    try {
      makePostRequest({
        url: ' ItemBasket/auth_DeleteItemBasket',
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
