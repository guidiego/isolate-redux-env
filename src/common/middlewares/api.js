const apiMiddleware = store => next => action => {
  const { type, client, ...otherArgs } = action;

  if (!client) {
      return next(action);
  }


  store.dispatch({ type: type[0], ...otherArgs })

  client
    .then(d => {
      next({type: type[1], payload: d, ...otherArgs})
    })
    .catch(e => {
      next({type: type[2], payload: e, ...otherArgs})
      throw e
    })
}

export default apiMiddleware;
