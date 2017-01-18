import { Map } from 'immutable';
import { createStore, compose } from 'redux';

import middlewares from 'common/middlewares';
import rootReducer from './rootReducer';

export default (enhancers = []) => {
    const enhancer = compose(
        middlewares,
        ...enhancers
    )

    return createStore(
        rootReducer,
        new Map(),
        enhancer
    )
}
