import {
  ADD_SUCCESS,
  ADD_FAILED,
  DELETE_SUCCESS,
  DELETE_FAILED,
  CART_PENDING,
  CART_SUCCESS,
  CART_FAILED,
} from '../actions/types';

const initialState = {
  message: '',
  cart:[],
  totalPrice:'',
  totalPromoCodeDiscount:'',
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

      case CART_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CART_SUCCESS:
      return {
        ...state,
        cart: action.payload.cart,
        totalPrice: action.payload.totalPrice,
        totalPromoCodeDiscount:action.payload.totalPromoCodeDiscount,
        loading: false,
        error: '',
      };

    case CART_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
