import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories/categories';
import productReducer from './products/products';
import cartReducer from './cart/cart';
// import thunk from './middleware/thunk';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

// let reducers = combineReducers({
//   categories: categoriesReducer,
//   products: productReducer,
//   cart: cartReducer,
// });

// const store = () => {
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

const store = () => configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
    cart: cartReducer,
  }
});


export default store();