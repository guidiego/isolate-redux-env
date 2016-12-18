import { GET_PROD } from 'constants';

export const getProds = (id) => ({
  type: GET_PROD,
  payload: {id}
})
