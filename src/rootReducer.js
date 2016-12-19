import { reducer as counter } from 'counter';
import { reducer as apiexample } from 'apiexample';

import { combineReducers } from 'redux-immutable';

export default combineReducers({
  counter, apiexample,
});
