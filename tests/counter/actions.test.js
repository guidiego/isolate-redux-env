import { actions } from 'counter';
import { INCREASE, DECREASE } from 'counter/constants';

test('should increase the state', () => {
  expect(actions.increase).toEqual({
    type: INCREASE
  })
})

test('should decrease', () => {
  expect(actions.decrease).toEqual({
    type: DECREASE
  })
})
