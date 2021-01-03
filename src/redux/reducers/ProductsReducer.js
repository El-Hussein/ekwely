import {
  PRODUCTS_PENDING,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
  DRY_CLEAN_SUCCESS,
  DRY_CLEAN_SUCCESS_NO_USER,
} from '../actions/types';

const initialState = {
  products: [],
  dryClean: [],
  dryCleanNoUser: [],
  loading: false,
  error: '',
  currentPageProducts: 0,
  currentPageDry: 0,
  productsLength: 0,
  servicesLength: 0,
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
        products:
          state.currentPageProducts === 0
            ? action.payload.data
            : [...state.products, ...action.payload.data],
        productsLength: action.payload.length,
        currentPageProducts: state.currentPageProducts + 1,
        loading: false,
        error: '',
      };

    case PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DRY_CLEAN_SUCCESS:
      return {
        ...state,
        dryClean:
          state.currentPageDry === 0
            ? action.payload.data
            : [...state.dryClean, ...action.payload.data],
        servicesLength: action.payload.length,
        currentPageDry: state.currentPageDry + 1,
      };

    case DRY_CLEAN_SUCCESS_NO_USER:
      return {
        ...state,
        dryCleanNoUser: action.payload,
      };
    default:
      return state;
  }
}
