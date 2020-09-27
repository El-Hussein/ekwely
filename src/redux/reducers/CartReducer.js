import {
  ADD_SUCCESS,
  ADD_FAILED,
  DELETE_SUCCESS,
  DELETE_FAILED,
} from '../actions/types';

const initialState = {
  message: '',
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case ADD_FAILED:
      return {
        ...state,
        message: action.payload,
      };

    case DELETE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case DELETE_FAILED:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
}
