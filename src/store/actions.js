import axios from "axios";


// export const set = (category) => {
//   return {
//     type: 'SET',
//     payload: category,
//   };
// }

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  };
}


export const setCategory = (data) => {
  return {
    type: 'GET-CATEGORIES',
    payload: data,
  };
}

export const setProducts = (data) => {
  return {
    type: 'GET-PRODUCTS',
    payload: data,
  };
}

//CART ACTIONS
// export const addProduct = (product) => {
//   return {
//     type: 'ADD_PRODUCT',
//     payload: product,
//   };
// }

export const removeProduct = (product) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product,
  };
}

export const updateProduct = (product) => {
  return {
    type: 'UPDATE-PRODUCT',
    payload: product,
  };
}


// export const getCategories = () => async (dispatch, getState) => {
//   let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
//   dispatch(setCategory(response.data.results));
// };

// export const getProducts = () => async (dispatch, getState) => {
//   let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
//   dispatch(setProducts(response.data.results));
// };

// export const updateInventory = (product) => async (dispatch, getState) => {
//   console.log('BEFORE inStock: ---', product.inStock);
//   product.inStock--;
//   console.log('AFTER inStock: ---', product.inStock);
//   let config = {
//     url: `/${product._id}`,
//     method: 'put',
//     baseURL: 'https://api-js401.herokuapp.com/api/v1/products',
//     data: product,
//   };
//   let response = await axios(config);
//   console.log('resopnse:----', response.data);
//   dispatch(updateProduct(response.data));
// };