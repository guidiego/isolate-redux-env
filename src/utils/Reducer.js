class Reducer {
  call(key, payload, state) {
    key = this.normalize(key);
    this[key](payload, state);
  }

  normalize(key) {

  }
}
