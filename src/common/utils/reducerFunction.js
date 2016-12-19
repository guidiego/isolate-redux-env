export const reducerFunction = (reducer, initialState) => (state = initialState, action) => {
  const { type, payload, ...others } = action;

  if (!reducer[type]) {
    return state;
  }

  return reducer[action.type](payload, state, others);
};

export default reducerFunction;
