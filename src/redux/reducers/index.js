import {combineReducers} from 'redux';
import authReducer from './auth';
import Loading from './Loading';
import ProductsReducer from './ProductsReducer';
import FavoriteReducer from './FavoriteReducer';
import FaqReducer from './FaqReducer';
import CartReducer from './CartReducer';

export default combineReducers({
  auth: authReducer,
  loading:Loading,
  products:ProductsReducer,
  cart:CartReducer,
  faq:FaqReducer,
  
});
