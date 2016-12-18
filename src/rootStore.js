import rootReducer from './rootReducer';

import { Map } from 'immutable'
import { createStore } from 'redux';
import middlewares from 'common/middlewares';

export default createStore(rootReducer, new Map(), middlewares);
