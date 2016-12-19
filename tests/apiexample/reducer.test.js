import { fetchingUser, fetchUserSuccess, fetchUserFail } from 'apiexample/reducer';
import { List } from 'immutable'
import ApiExampleState from 'apiexample/stateModel';

const listMock = List([1,2,3]);

test('should return from "fetchingUser" the correct state', () => {
  const initialState = new ApiExampleState();
  expect(
    fetchingUser(null, initialState)
  ).toEqual(
    new ApiExampleState({loading: true})
  );
})

test('should return from "fetchUserSuccess" the correct state', () => {
  const initialState = new ApiExampleState();
  expect(
    fetchUserSuccess({ data : { data: listMock}}, initialState)
  ).toEqual(
    new ApiExampleState({users: listMock})
  );
})

test('should return from "fetchUserFail" the correct state' , () => {
  const initialState = new ApiExampleState({loading: true});
  expect(
    fetchUserFail(null, initialState)
  ).toEqual(
    new ApiExampleState()
  );
})

