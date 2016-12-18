export class Reducer {
  call(type, payload, state) {
    if (this[type])
      return this[type](payload, state);

    return state
  }
}

export default Reducer
