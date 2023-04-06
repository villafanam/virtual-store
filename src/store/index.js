import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories/categories';
import productReducer from './products/products';
import cartReducer from './cart/cart';
// import thunk from './middleware/thunk';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}


export default store();