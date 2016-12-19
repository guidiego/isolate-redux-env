import { reqresin } from 'common/apis';
import { FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from './constants';

export const getAllUsers = {
  type: [FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL],
  client: reqresin.User.list(),
};

export default { getAllUsers };
