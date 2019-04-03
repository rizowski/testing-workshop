const { expect } = require('chai');
const server = require('../../../server');

describe('/api/health', () => {
  let instance;

  before(() => {
    instance = server.createServer();
  });

  // https://hapijs.com/api#-await-serverinjectoptions
  // it('does its strutting as an example', () => {
  //   const { statusCode, headers, result } = await instance.inject({ method: 'GET', url: '', payload: {} });
  // });
});
