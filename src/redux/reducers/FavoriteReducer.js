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
  productsLength: 0,
  currentPageProducts: 0,
  servicesLength: 0,
  currentPageServices: 0,
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
        // wash: action.payload,
        wash:
          state.currentPageDry === 0
            ? action.payload.data
            : [...state.wash, ...action.payload.data],
        servicesLength: action.payload.length,
        currentPageServices: state.currentPageServices + 1,
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
        // products: action.payload,
        products:
          state.currentPageProducts === 0
            ? action.payload.data
            : [...state.products, ...action.payload.data],
        productsLength: action.payload.length,
        currentPageProducts: state.currentPageProducts + 1,
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
