import {combineReducers} from 'redux';
import authReducer from './auth';
import Loading from './Loading';
import ProductsReducer from './ProductsReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({
  auth: authReducer,
  loading:Loading,
  products:ProductsReducer,
  favorite:FavoriteReducer,
  
});
