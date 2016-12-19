import apiMiddleware, { responseCreator } from 'common/middlewares/api';


describe('apiMiddleware test', () => {
  let storeMock, nextMock, clientMock;

  beforeEach(() => {
    storeMock = { dispatch: jest.fn() }
    nextMock = jest.fn();
    clientMock = (condition) => new Promise((resolve, reject) => {
      process.nextTick(() => {
        if (condition) {
         return resolve()
        }

        reject()
      })
    })
  });

  test('should return a simple action', () => {
    const simpleAction = { type: 'someMethod' };
    apiMiddleware(storeMock)(nextMock)(simpleAction);

    expect(storeMock.dispatch.mock.calls.length).toBe(0);
    expect(nextMock.mock.calls.length).toBe(1);
  });

  test('should return a client action', () => {
    const clientAction = { type: ['DOING', 'DONE', 'FAIL'], client: clientMock(true)};
    apiMiddleware(storeMock)(nextMock)(clientAction)
    expect(storeMock.dispatch.mock.calls.length).toBe(1);
  });

  test("should call next with correct data", () => {
    const simpleAction = { type: 'someMethod' };
    const payload = "payload"
    responseCreator(nextMock, simpleAction)(payload);

    const actionAfterThen = Object.assign({}, simpleAction, {payload});
    expect(nextMock.mock.calls[0][0]).toEqual(actionAfterThen)
  })
})
