

// https://api-js401.herokuapp.com/api/v1/products

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// example object:
//     {
//       "_id": "620333730913520018fa1d2a",
//       "name": "Stickies",
//       "category": "office",
//       "inStock": 43,
//       "price": 1000,
//       "__v": 0
//     },

let temp = [];

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    set(state, action){
      return temp.filter((item) => item.category === action.payload.name);
    },
    getProducts(state, action){
      temp = [...action.payload];
      return action.payload;
    },
    updateProduct(state, action){
      temp = temp.map(product => product.name === action.payload.name ? action.payload : product);
      return temp.filter((item) => item.category === action.payload.category);
    }
  }
});

export const getProductsDB = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
  dispatch(getProducts(response.data.results));
};

export const updateInventory = (product) => async (dispatch, getState) => {
  console.log('BEFORE inStock: ---', product.inStock);
  // product.inStock--;
  let tempProduct = {...product};
  tempProduct.inStock--;
  console.log('AFTER inStock: ---', product.inStock);
  let config = {
    url: `/${product._id}`,
    method: 'put',
    baseURL: 'https://api-js401.herokuapp.com/api/v1/products',
    data: tempProduct,
  };
  let response = await axios(config);
  console.log('resopnse:----', response.data);
  dispatch(updateProduct(response.data));
};

export const { set, getProducts, updateProduct } = productSlice.actions;

export default productSlice.reducer;

// const initialState = [];

// const productReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SET':
//       return temp.filter((item) => item.category === payload.name);
//     // case 'ADD_PRODUCT':
//     //   temp = temp.map((item) => item.name === payload.name ? { ...item, inStock: item.inStock - 1 } : item);
//     //   let result = temp.filter((item) => item.category === payload.category);
//     //   //console.log('result:----', result);
//     //   return result;
//     case 'GET-PRODUCTS':
//       temp = [...payload];
//       return payload
//     case 'UPDATE-PRODUCT':
//       temp = temp.map(product => product.name === payload.name ? payload : product)
//       return temp.filter((item) => item.category === payload.category);
//     default:
//       return state;
//   }
// };


