

// https://api-js401.herokuapp.com/api/v1/products

// example object:
//     {
//       "_id": "620333730913520018fa1d2a",
//       "name": "Stickies",
//       "category": "office",
//       "inStock": 43,
//       "price": 1000,
//       "__v": 0
//     },

const initialState = [];
let temp = [];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET':
      return temp.filter((item) => item.category === payload.name);
    // case 'ADD_PRODUCT':
    //   temp = temp.map((item) => item.name === payload.name ? { ...item, inStock: item.inStock - 1 } : item);
    //   let result = temp.filter((item) => item.category === payload.category);
    //   //console.log('result:----', result);
    //   return result;
    case 'GET-PRODUCTS':
      temp = [...payload];
      return payload
    case 'UPDATE-PRODUCT':
      temp = temp.map(product => product.name === payload.name ? payload : product)
      return temp.filter((item) => item.category === payload.category);
    default:
      return state;
  }
};


export default productReducer;