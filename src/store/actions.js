//actions
export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    payload: category,
  };
}

export const filterProduct = () => {
  return {
    type: 'FILTER_PRODUCTS',
    payload: {},
  };
}

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  };
}