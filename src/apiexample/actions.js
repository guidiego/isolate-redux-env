import { FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from './constants';
import { reqresin } from 'common/apis';

export const getAllUsers = {
  type: [FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL],
  client: reqresin.User.list()
}

export default { getAllUsers }
