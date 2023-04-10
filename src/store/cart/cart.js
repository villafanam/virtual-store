import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: [], qty: {} },
  reducers: {
    addProduct(state, action){
      let newCart = [...state.products];
      newCart = newCart.filter(item => item.name !== action.payload.name);
      let newQty = {...state.qty};
      
      if (newQty[action.payload.name]) {
        newQty[action.payload.name]++;
      }
      else {
        newQty[action.payload.name] = 1;
      }

      return { ...state, products: [...newCart, action.payload], qty: newQty };
    },
    removeProduct(state, action){
      let newQty2 = {...state.qty};
      let newCart2 = state.products.filter(item => item.name !== action.payload.name)
      delete newQty2[action.payload.name];
      return { ...state, products: newCart2, qty: newQty2 };
    }
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

// const initialState = { products: [], qty: {} };

// const cartReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'ADD_PRODUCT':
//       let newCart = state.products.filter(item => item.name !== payload.name)
//       let newQty = state.qty;
      
//       if (newQty[payload.name]) {
//         newQty[payload.name]++;
//       }
//       else {
//         newQty[payload.name] = 1;
//       }

//       return { ...state, products: [...newCart, payload], qty: newQty };
//     case 'REMOVE_PRODUCT':
//       let newQty2 = state.qty;
//       let newCart2 = state.products.filter(item => item.name !== payload.name)
//       delete newQty2[payload.name];

//       return { ...state, products: newCart2, qty: newQty2 };
//     default:
//       return state;
//   }
// };

