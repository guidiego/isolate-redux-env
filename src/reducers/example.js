import { Reducer, reducerFunction } from 'utils';
import { Map } from 'immutable';

class TwitterReducer extends Reducer {
  constructor() {
    super()
  }

  reloadTweets(payload, state) {

    return state
  }
}

const initialState = Map({

})

export default reducerFunction(TwitterReducer, initialState);
