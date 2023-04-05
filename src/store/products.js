const initialState = [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
  { name: 'Apples', category: 'food', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return initialState.filter((item) => item.category === action.payload.name);
    case 'DECREASE_INSTOCK':
      return state.map((item) => item.name === action.payload.name ? { ...item, inStock: action.payload.inStock } : item);
    case 'INCREASE_INSTOCK':
      return state.map((item) => item.name === action.payload.name ? { ...item, inStock: action.payload.inStock } : item);
    default:
      return state;
  }
};


export default productReducer;