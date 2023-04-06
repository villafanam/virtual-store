//actions
export const set = (category) => {
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
export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
}

export const removeProduct = (product) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product,
  };
}

