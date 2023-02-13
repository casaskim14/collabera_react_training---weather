import { combineReducers } from 'redux';
import user from './userReducer';
import loading from './loadingReducer';
import errors from './errorReducer';
import cart from './cartReducer';
import products from './productReducer';

export default combineReducers({
  user,
  loading,
  errors,
  cart,
  products,
});
