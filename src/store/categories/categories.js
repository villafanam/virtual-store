import axios from 'axios';
import { setCategory } from '../actions';

// https://api-js401.herokuapp.com/api/v1/categories

// example object:
//     {
//       "_id": "5f0cdc15acac790017fc26ce",
//       "name": "food",
//       "description": "Products for consumption",
//       "__v": 0
//     }

let initialState = {
  categories: [],
  activeCategory: ''
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET':
      return {
        ...state,
        activeCategory: payload,
      };
    case 'GET-CATEGORIES':
      return { ...state, categories: payload }
    case 'RESET':
      return initialState;
    default:
      return state
  }
}




export default categoriesReducer;