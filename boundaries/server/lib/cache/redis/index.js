const { stringify } = require('../../stringify');
const client = require('./client');

module.exports = {
  async get(key) {
    if (!key) {
      return;
    }

    const result = await client.get(key);

    if (!result) {
      return result;
    }

    return JSON.parse(result);
  },
  async set(key, value) {
    if (!key || !value) {
      return;
    }

    const string = stringify(value);

    await client.set(key, string);

    return value;
  },
};
