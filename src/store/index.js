import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productReducer from './products';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}


export default store();