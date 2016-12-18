import { Reducer, reducerFunction } from 'common/utils';

class CounterReducer extends Reducer{
  constructor() {
    super()
  }

  increase(payload, state) {
    return state + 1
  }

  decrease(payload, state) {
    return state - 1
  }
}

export default reducerFunction(CounterReducer, 0);
