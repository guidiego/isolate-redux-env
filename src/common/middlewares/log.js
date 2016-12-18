const logMiddleware = store => next => action => {
  console.log("LOG MIDDLEWARE")
  next(action)
}

export default logMiddleware;
