import {
  FAQ_SUCCESS,
  FAQ_FAILED,
  FAQ_PENDING
} from './types';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';

// get faq Action
export const getFaq = () => {
  console.log('jiii');
  return (dispatch) => {
    dispatch({type: FAQ_PENDING});
    try {
      makePostRequest({
        url: 'Faqs/auth_GetAllFaqs',
        data: {
          Data: {UserType: 1},
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
            
          } else if (response?.data?.data) {
            dispatch({
              type: FAQ_SUCCESS,
              payload: response.data.data
            });
          }
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          dispatch({
            type: FAQ_FAILED,
            payload: 'حدث خطأ ما من فضلك حاول مره أخري',
          });
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      dispatch({
        type: FAQ_FAILED,
        payload: 'حدث خطأ ما من فضلك حاول مره أخري',
      });
    }
  };
};
