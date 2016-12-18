import { Record, List } from 'immutable';

export const StateModel = new Record({
  users: List(),
  userInFocus: 0,
  loading: false
});

export default StateModel;
