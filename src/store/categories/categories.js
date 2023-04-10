

// https://api-js401.herokuapp.com/api/v1/categories

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setCategory } from "../actions";
// example object:
//     {
//       "_id": "5f0cdc15acac790017fc26ce",
//       "name": "food",
//       "description": "Products for consumption",
//       "__v": 0
//     }

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [], activeCategory: '' },
  reducers: {
    set(state, action){
      return {
        ...state,
        activeCategory: action.payload,
      };
    },
    getCategories(state, action){
      return { ...state, categories: action.payload };
    },
  }
});

export const getCategoriesDB = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
  dispatch(getCategories(response.data.results));
};

export const { set, getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;

// let initialState = {
//   categories: [],
//   activeCategory: ''
// };

// const categoriesReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SET':
//       return {
//         ...state,
//         activeCategory: payload,
//       };
//     case 'GET-CATEGORIES':
//       return { ...state, categories: payload }
//     case 'RESET':
//       return initialState;
//     default:
//       return state
//   }
// }




