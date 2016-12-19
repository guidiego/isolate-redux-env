const manifest = {
  host: 'http://reqres.in/api',
  resources: {
    User: {
      path: '/user',
      list: { METHOD: 'GET' },
      byId: { METHOD: 'GET', path: '/{id}', params: { id: 0 } },
    },
  },
};

export default manifest;
