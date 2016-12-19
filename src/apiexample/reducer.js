import { reducerFunction } from 'common/utils';
import { List } from 'immutable';

import ApiExampleState from './stateModel';

export const fetchingUser = (payload, state) => state.set('loading', true);

export const fetchUserSuccess = (payload, state) => state.withMutations((ctx) => {
  ctx.set('loading', false);
  ctx.set('users', List(payload.data.data));
});

export const fetchUserFail = (payload, state) => state.set('loading', false);

export default reducerFunction({
  fetchingUser,
  fetchUserSuccess,
  fetchUserFail,
}, new ApiExampleState());
