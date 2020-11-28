import {combineReducers} from 'redux';
import authReducer from './auth';
import Loading from './Loading';
import ProductsReducer from './ProductsReducer';
import FavoriteReducer from './FavoriteReducer';
import FaqReducer from './FaqReducer';
import CartReducer from './CartReducer';
import OrderReducer from './OrderReducer';
import SupportReducer from './SupportReducer';

export default combineReducers({
  auth: authReducer,
  loading:Loading,
  products:ProductsReducer,
  cart:CartReducer,
  order:OrderReducer,
  faq:FaqReducer,
  support:SupportReducer,
  favorite:FavoriteReducer,
  
});
