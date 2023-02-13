const logger = store => next => action => {
  console.log(action.payload);
  console.log(action.meta);
  next(action);
};

export default logger;
