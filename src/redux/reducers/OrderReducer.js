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
  historyOrderLength: 0,
  currentPageHistory: 0,
  currentOrderLength: 0,
  currentPageCurrent: 0,
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
        currentOrder:
          state.currentPageCurrent === 0
            ? action.payload.data
            : [...state.currentOrder, ...action.payload.data],
        currentOrderLength: action.payload.length,
        currentPageCurrent: state.currentPageCurrent + 1,
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
        historyOrder:
          state.currentPageHistory === 0
            ? action.payload.data
            : [...state.historyOrder, ...action.payload.data],
        historyOrderLength: action.payload.length,
        currentPageHistory: state.currentPageHistory + 1,
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
