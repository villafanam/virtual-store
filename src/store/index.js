import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}


export default store();