import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories/categories';
import productReducer from './products/products';
import cartReducer from './cart/cart';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}


export default store();