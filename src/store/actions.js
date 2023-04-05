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