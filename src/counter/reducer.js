import { reducerFunction } from 'common/utils';


export const increase = (payload, state) => state + 1;
export const decrease = (payload, state) => state - 1;

export default reducerFunction({
  increase, decrease,
}, 0);
