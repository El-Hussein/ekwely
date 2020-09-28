import {
  CURRENT_ORDER_PENDING,
  CURRENT_ORDER_SUCCESS,
  CURRENT_ORDER_FAILED,
  HISTORY_ORDER_PENDING,
  HISTORY_ORDER_SUCCESS,
  HISTORY_ORDER_FAILED,
} from '../actions/types';

const initialState = {
  currentOrder: [],
  historyOrder: [],
  loading: false,
  error: '',
};

export default function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_ORDER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CURRENT_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: action.payload,
        loading: false,
        error: '',
      };

    case CURRENT_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case HISTORY_ORDER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case HISTORY_ORDER_SUCCESS:
      return {
        ...state,
        historyOrder: action.payload,
        loading: false,
        error: '',
      };

    case HISTORY_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
