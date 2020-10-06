import {
  ADD_SUCCESS,
  ADD_FAILED,
  DELETE_SUCCESS,
  DELETE_FAILED,
  DRY_CLEAN_FAVORITE_PENDING,
  DRY_CLEAN_FAVORITE_SUCCESS,
  DRY_CLEAN_FAVORITE_FAILED,
  PRODUCTS_FAVORITE_PENDING,
  PRODUCTS_FAVORITE_SUCCESS,
  PRODUCTS_FAVORITE_FAILED,
} from '../actions/types';

const initialState = {
  products: [],
  wash: [],
  message: '',
  loading: false,
};

export default function FavoriteReducer(state = initialState, action) {
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

    case DRY_CLEAN_FAVORITE_PENDING:
      return {
        ...state,
        loading: true,
      };

    case DRY_CLEAN_FAVORITE_SUCCESS:
      return {
        ...state,
        wash: action.payload,
        loading: false,
      };

    case DRY_CLEAN_FAVORITE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case PRODUCTS_FAVORITE_PENDING:
      return {
        ...state,
        loading: true,
      };

    case PRODUCTS_FAVORITE_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case PRODUCTS_FAVORITE_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
