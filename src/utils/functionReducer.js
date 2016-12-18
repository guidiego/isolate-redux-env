export const baseReducer = (Reducer, state) => {
  const r = new Reducer();

  return (action, state) => r[action.key](action.payload, state);
}
