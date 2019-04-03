const { expect } = require('chai');
const sinon = require('sinon');

describe('cache', () => {
  let sandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.resetHistory();
  });

  after(() => {
    sandbox.restore();
  });

  it("has tests to prove that the cache doesn't have bugs and is testable");
});
