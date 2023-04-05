//actions
export const setCategory = (category) => {
  return {
    type: 'SET',
    payload: category,
  };
}

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  };
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
}