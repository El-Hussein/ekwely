import {
  PRODUCTS_PENDING,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
} from '../actions/types';

const initialState = {
  products: [],
  loading: false,
  error: '',
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: '',
      };
    case PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.msg,
      };

    default:
      return state;
  }
}
