import {
  FAQ_SUCCESS,
  FAQ_FAILED,
  FAQ_PENDING
 
} from '../actions/types';

const initialState = {
  faq: [],
  loading: false,
  error: '',
};

export default function FaqReducer(state = initialState, action) {
  switch (action.type) {
    case FAQ_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FAQ_SUCCESS:
      return {
        ...state,
        faq: action.payload,
        loading: false,
      };

    case FAQ_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    
    default:
      return state;
  }
}
