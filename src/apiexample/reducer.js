import { Reducer, reducerFunction } from 'common/utils';
import { List } from 'immutable'

import ApiExampleState from './stateModel';

class ApiExampleReducer extends Reducer{
  constructor() {
    super()
  }

  fetchingUser(payload, state) {
    return state.set('loading', true);
  }

  fetchUserSuccess(payload, state) {
    return state.withMutations(ctx => {
      ctx.set('loading', false);
      ctx.set('users', List(payload.data.data));
    })
  }

  fetchUserFail(payload, state) {
    return state.set('loading', false);
  }
}

export default reducerFunction(ApiExampleReducer, new ApiExampleState())
