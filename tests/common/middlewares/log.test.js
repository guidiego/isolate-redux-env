import logMiddleware from 'common/middlewares/log';

describe('logMiddleware test', () => {
  let storeMock, nextMock;

  beforeEach(() => {
    storeMock = { dispatch: jest.fn() }
    nextMock = jest.fn();
  });

  test('should return a simple action', () => {
    const simpleAction = { type: 'someMethod' };
    logMiddleware(storeMock)(nextMock)(simpleAction);

    expect(storeMock.dispatch.mock.calls.length).toBe(0);
    expect(nextMock.mock.calls.length).toBe(1);
  });
})
