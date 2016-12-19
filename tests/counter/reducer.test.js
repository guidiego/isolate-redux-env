import { increase, decrease } from 'counter/reducer';

test('should increase the state', () => {
  expect(increase(null, 1)).toBe(2)
})

test('should decrease', () => {
  expect(decrease(null, 1)).toBe(0)
})
