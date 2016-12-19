import { FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from 'apiexample/constants';
import { actions } from 'apiexample';
import { reqresin } from 'common/apis';

test('should return correct "getAllUser" action', () => {
  expect(actions.getAllUsers).toEqual({
    type: [FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL],
    client: reqresin.User.list(),
  })
})
