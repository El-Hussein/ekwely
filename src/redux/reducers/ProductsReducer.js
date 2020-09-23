import {
  PRODUCTS_PENDING,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
} from '../actions/types';

const initialState = {
  products: [],
  error: false,
  errorMsg: '',
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
        errorMsg: '',
      };
    case PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload.errors,
        errorMsg: action.payload.msg,
      };

    default:
      return state;
  }
}
