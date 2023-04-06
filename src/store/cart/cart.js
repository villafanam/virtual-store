import axios from "axios";

// const initialState = [];
const initialState = { products: [], qty: {} };

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCT':
      let newCart = state.products.filter(item => item.name !== payload.name)
      let newQty = state.qty;
      
      if (newQty[payload.name]) {
        newQty[payload.name]++;
      }
      else {
        newQty[payload.name] = 1;
      }

      return { ...state, products: [...newCart, payload], qty: newQty };
    case 'REMOVE_PRODUCT':
      let newQty2 = state.qty;
      let newCart2 = state.products.filter(item => item.name !== payload.name)
      delete newQty2[payload.name];

      return { ...state, products: newCart2, qty: newQty2 };
    default:
      return state;
  }
};


export default cartReducer;