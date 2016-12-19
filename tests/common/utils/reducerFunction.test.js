import reducerFunction from 'common/utils/reducerFunction'

const mockReducerMap = {
  "test": jest.fn()
};

const mockReducer = reducerFunction(mockReducerMap, 0);

describe('reducerFunction test', () => {
  let mockReducerMap, mockReducer;

  beforeEach(() => {
    mockReducerMap = {
      "test": jest.fn()
    };

    mockReducer = reducerFunction(mockReducerMap, 0);
  })

  test('should run the reducer', () => {
    let state = mockReducer(1, { type: 'test'});
    expect(mockReducerMap.test.mock.calls.length).toBe(1);
  })

  test('should not run the reducer', () => {
    let state = mockReducer(1, { type: 'othercall'});
    expect(mockReducerMap.test.mock.calls.length).toBe(0);
    expect(state).toBe(1);
  })

  test('should init reducer with initial state', () => {
    let state = mockReducer(undefined, { type: 'othercall'});
    expect(state).toBe(0);
  })
})

