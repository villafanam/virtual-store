const logger = (store) => (next) => (action) => {
  // here I can do a thing!
  console.log('__action__', action);
  next(action);
};

export default logger;
