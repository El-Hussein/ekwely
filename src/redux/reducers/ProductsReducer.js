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
      console.log('action.payload.page');
      console.log(action.payload.page);
      console.log('action.payload.page');
      return {
        ...state,
        products:
          action.payload.page === 0
            ? action.payload.data
            : [...state.products, ...action.payload.data],
        productsLength: action.payload.length,
        currentPageProducts: action.payload.page + 1,
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
          action.payload.page === 0
            ? action.payload.data
            : [...state.dryClean, ...action.payload.data],
        servicesLength: action.payload.length,
        currentPageDry: action.payload.page + 1,
        loading: false,
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
