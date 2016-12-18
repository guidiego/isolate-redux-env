export const reducerFunction = (Reducer, initialState) => {
  const r = new Reducer();
  return (state = initialState, action) => r.call(action.type, action.payload, state)
}

export default reducerFunction;
