import {
  SUPPORT_PENDING,
  SUPPORT_SUCCESS,
  SUPPORT_FAILED,
} from '../actions/types';

const initialState = {
  loading: false,
  message: '',
};

export default function SupportReducer(state = initialState, action) {
  switch (action.type) {
    case SUPPORT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,

      };
    case SUPPORT_FAILED:
      return {
        ...state,
        message: action.payload,
        loading: false,

      };
      case SUPPORT_PENDING:
        return {
          ...state,
          loading: true,
        };
    

    default:
      return state;
  }
}
