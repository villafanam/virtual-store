import { legacy_createStore as createStore, combineReducers } from 'redux';
import categoriesReducer from './categories';
import { reset, setCategory, filterProduct } from './categories';

describe('Categories Reducer', () => {
  const reducers = combineReducers({
    categories: categoriesReducer,
  });

  const store = createStore(reducers);

  test('Initializes initial state', () => {
    let state = store.getState();

    expect(state.categories.activeCategory).toEqual('');

    expect(state.categories.categories.length).toEqual(3);
    expect(state.categories.categories[1].name).toEqual('food');
    expect(state.categories.categories[1].displayName).toEqual('Food');

    expect(state.categories.products.length).toEqual(7); 
    expect(state.categories.products[3].name).toEqual('Socks');
    expect(state.categories.products[3].category).toEqual('clothing'); 
    expect(state.categories.products[3].price).toEqual(12.00); 
    expect(state.categories.products[3].inStock).toEqual(10); 
  });

  test('selects category and updates activgeCategory', () => {
    let state = store.getState();

    let { categories } = state.categories;

    store.dispatch(setCategory(categories[1]));
    let newState = store.getState();
    //console.log('newState-----', newState);

    expect(newState.categories.activeCategory.name).toEqual('food')
  });

  test('filter products by category', () => {
    let state = store.getState();

    let { categories } = state.categories;

    store.dispatch(setCategory(categories[1]));
    store.dispatch(filterProduct(categories[1]));
    let newState = store.getState();
    //console.log('newState-----', newState);

    expect(newState.categories.activeCategory.name).toEqual('food');
    expect(newState.categories.products[0].name).toEqual('Apples');
    expect(newState.categories.products[0].category).toEqual('food');
  });
});