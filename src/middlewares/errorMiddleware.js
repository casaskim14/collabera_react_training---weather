const error = store => next => action => {
  // error occurs in project
  // base on action identify error occurs or not
  //   if error is there then make a server call and once the servercall complete call next action
  next(action);
};

export default error;
